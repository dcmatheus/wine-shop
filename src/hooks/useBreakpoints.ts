import { useState, useEffect } from 'react';

function useBreakpoints() {
  const defaultScreens = {
    smScreen: false,
    mdScreen: false,
    lgScreen: false,
    xlScreen: false,
    xxlScreen: false,
  };

  const [screens, setScreen] = useState(defaultScreens);

  useEffect(() => {
    const updatedMediasQuery = () => ({
      smScreen: window.innerWidth >= 640,
      mdScreen: window.innerWidth >= 768,
      lgScreen: window.innerWidth >= 1024,
      xlScreen: window.innerWidth >= 1280,
      xxlScreen: window.innerWidth >= 1536,
    });

    setScreen(updatedMediasQuery());

    const listener = () => setScreen(updatedMediasQuery());

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);
  return screens;
}

export default useBreakpoints;
