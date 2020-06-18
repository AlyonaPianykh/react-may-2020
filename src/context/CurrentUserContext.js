import { createContext } from 'react';

import { user } from "../constants";

export let CurrentUserContext = createContext(user);