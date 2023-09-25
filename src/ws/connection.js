import { Message, User } from '../../db/models';
import {
  ADD_MESSAGE,
  NEW_MESSAGE,
  SET_USERS,
  SET_WRITER,
  STARTED_TYPING,
  STOPPED_TYPING,
} from './wsActionTypes';

const activeConnections = new Map(); // хранит все текущие соединения по WS

const connectionCb = (socket, request) => {
  const userId = request.session.user.id;

  activeConnections.set(userId, { ws: socket, user: request.session.user });

  activeConnections.forEach(({ ws }) => {
    const activeUsers = Array.from(activeConnections.values()).map((connection) => connection.user);
    const action = { type: SET_USERS, payload: activeUsers };
    ws.send(JSON.stringify(action));
  });

  socket.on('error', console.error);

  socket.on('message', async (message) => {
    const actionFromClient = JSON.parse(message);
    const { type, payload } = actionFromClient;
    switch (type) {
      case NEW_MESSAGE: {
        const newMessage = await Message.create({ text: payload, authorId: userId });
        const messageWithAuthor = await Message.findOne({
          where: { id: newMessage.id },
          include: User,
        });
        const action = { type: ADD_MESSAGE, payload: messageWithAuthor };
        activeConnections.forEach(({ ws }) => {
          ws.send(JSON.stringify(action));
        });
        break;
      }
      case STARTED_TYPING: {
        const action = { type: SET_WRITER, payload: activeConnections.get(userId).user.name };
        activeConnections.forEach(({ ws }) => {
          ws.send(JSON.stringify(action));
        });
        break;
      }
      case STOPPED_TYPING: {
        const action = { type: SET_WRITER, payload: null };
        activeConnections.forEach(({ ws }) => {
          ws.send(JSON.stringify(action));
        });
        break;
      }

      default:
        break;
    }
  });

  socket.on('close', () => {
    activeConnections.delete(userId);
    activeConnections.forEach(({ ws }) => {
      const activeUsers = Array.from(activeConnections.values()).map(
        (connection) => connection.user,
      );
      const action = { type: SET_USERS, payload: activeUsers };
      ws.send(JSON.stringify(action));
    });
  });
};

export default connectionCb;
