import { Message, User } from '../../db/models';

const activeConnections = new Map(); // хранит все текущие соединения по WS

const connectionCb = (socket, request) => {
  const userId = request.session.user.id;

  activeConnections.set(userId, { ws: socket, user: request.session.user });

  socket.on('error', console.error);

  socket.on('message', async (message) => {
    const { type, payload } = JSON.parse(message);
    switch (type) {
      case 'first-case': {
        console.log('first-case');
        break;
      }

      default:
        break;
    }
    console.log(`Received message ${message} from user ${userId}`);
  });

  socket.on('close', () => {
    activeConnections.delete(userId);
  });
};

export default connectionCb;
