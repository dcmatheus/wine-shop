import { useMemo, useState } from 'react';
import { ApiResponse } from 'types';
import context from './context';

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const contextValue = useMemo(() => ({
    response,
    setResponse,
  }), [response]);
  console.log(response);
  return (
    <context.Provider value={contextValue}>
      {children}
    </context.Provider>
  );
}

export default ContextProvider;
