import { createContext } from 'react';
import { ApiResponse } from 'types';

const context = createContext<{ response: ApiResponse | null, setResponse: Function }>({
  response: null,
  setResponse: () => {},
});

export default context;
