import axios from 'axios';
import { useState } from 'react';
import { App } from '../../../entities/app';
import { useUser } from '../../../hooks/useUser';

export const useUploadFile = ({
  onUploadError,
  onCompleted,
}: {
  onUploadError: (error: Error) => void;
  onCompleted: (app: App) => void;
}): [number, (file: File) => void] => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [user] = useUser();
  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append('app', file);
    formData.append('user', user.id);
    axios
      .post('http://localhost:3030/apps', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total / 2
          );
          setUploadProgress(progress);
        },
      })
      .then(response => {
        onCompleted(response.data);
      })
      .catch(error => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error &&
          error.response.data.error.message
        ) {
          onUploadError(new Error(error.response.data.error.message));
        } else if (error.request) {
          onUploadError(
            new Error(
              `No response from our servers 😠. Either they are angry, or your connection isn't great.`
            )
          );
        } else {
          onUploadError(
            new Error(`Errorception 🤯. I failed to even identify the error.`)
          );
        }
      });
  };

  return [uploadProgress, uploadFile];
};
