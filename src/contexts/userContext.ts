import { createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export type User = firebase.User | null | undefined;
export type UserContextValue =
  | [User, React.Dispatch<React.SetStateAction<User>>]
  | undefined;

export const userContext = createContext<User>(undefined);
