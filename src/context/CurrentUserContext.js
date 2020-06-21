import { createContext } from 'react';
import {user} from './../constants'

export const CurrentUserContext = createContext(user);
