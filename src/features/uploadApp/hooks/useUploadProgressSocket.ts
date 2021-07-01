import useWebSocket from 'react-use-websocket';
const SocketUrl = 'ws://localhost:3005';

export const useUploadProgressSocket = (): [number] => {
  const { lastJsonMessage, sendJsonMessage } = useWebSocket(SocketUrl, {
    onOpen: () => sendJsonMessage({ testerId: 'jp2137', type: 'subscribe' }),
    shouldReconnect: () => true,
  });

  return [(lastJsonMessage && lastJsonMessage.progress) || 0];
};
