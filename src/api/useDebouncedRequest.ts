import axios from 'axios';
import { useCallback } from 'react';
import debounce from 'lodash.debounce';
import { Request } from './request';
import { CentralUrl } from './consts';

export const useDebouncedRequest = <T>(): ((
  request: Request<T>
) => Promise<T> | undefined) => {
  const fetch = async (request: Request<T>): Promise<T> => {
    const response = await axios.request({
      url: CentralUrl + request.path,
      method: request.method,
      params: request.query,
      data: request.body,
    });
    return response.data;
  };
  return useCallback(debounce(fetch, 400), []); // eslint-disable-line react-hooks/exhaustive-deps
};
