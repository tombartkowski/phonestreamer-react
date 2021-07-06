import { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import { useUser } from '../../../hooks/useUser';
const SocketUrl = process.env.REACT_APP_UPLOAD_PROGRESS_SOCKET_URL!;

export const useUploadProgressSocket = (): [number] => {
  const [user] = useUser();

  const { lastJsonMessage, sendJsonMessage } = useWebSocket(SocketUrl, {
    shouldReconnect: () => true,
  });
  useEffect(() => {
    if (user) {
      sendJsonMessage({ user: user.id, type: 'subscribe' });
    }
  }, [user, sendJsonMessage]);

  return [(lastJsonMessage && lastJsonMessage.progress) || 0];
};
