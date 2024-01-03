import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './contactsSlice';
import { authReducer } from '../auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
  filter: filtersReducer,
};
