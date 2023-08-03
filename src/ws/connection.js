import { Message, User } from '../../db/models';
import {
  SET_USERS_FROM_SERVER,
  ADD_MESSAGE_FROM_SERVER,
  ADD_MESSAGE_FROM_CLIENT,
  TYPING_MESSAGE_FROM_CLIENT,
  TYPING_MESSAGE_FROM_SERVER,
  STOP_TYPING_MESSAGE_FROM_CLIENT,
  STOP_TYPING_MESSAGE_FROM_SERVER,
} from './actions';

const map = new Map(); // хранит все текущие соединения по WS

const connectionCb = (socket, request) => {
  const userId = request.session.user.id;

  map.set(userId, { ws: socket, user: request.session.user });

  socket.on('error', console.error);

  map.forEach(({ ws }) => {
    ws.send(
      JSON.stringify({
        type: SET_USERS_FROM_SERVER,
        payload: [...map.values()].map(({ user }) => user),
      }),
    );
  });

  socket.on('message', async (message) => {
    const { type, payload } = JSON.parse(message); // получили сообщение с клиента
    switch (type) {
      case ADD_MESSAGE_FROM_CLIENT: {
        Message.create({ text: payload, authorId: userId }).then(async (newMessage) => {
          const includedMessage = await Message.findOne({
            where: { id: newMessage.id },
            include: User,
          });
          map.forEach(({ ws, user }) => {
            ws.send(
              JSON.stringify({
                type: ADD_MESSAGE_FROM_SERVER,
                payload: includedMessage,
              }),
            );
          });
        });
        break;
      }

      case TYPING_MESSAGE_FROM_CLIENT: {
        map.forEach(({ ws, user }) => {
          ws.send(
            JSON.stringify({
              type: TYPING_MESSAGE_FROM_SERVER,
            }),
          );
        });
        break;
      }

      case STOP_TYPING_MESSAGE_FROM_CLIENT: {
        map.forEach(({ ws, user }) => {
          ws.send(
            JSON.stringify({
              type: STOP_TYPING_MESSAGE_FROM_SERVER,
            }),
          );
        });
        break;
      }

      default:
        break;
    }
    console.log(`Received message ${message} from user ${userId}`);
  });

  socket.on('close', () => {
    map.delete(userId);
    map.forEach(({ ws }) => {
      ws.send(
        JSON.stringify({
          type: SET_USERS_FROM_SERVER,
          payload: [...map.values()].map(({ user }) => user),
        }),
      );
    });
  });
};

export default connectionCb;
