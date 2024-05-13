import { PropsWithChildren, createContext, useState } from 'react';

type HeaderColorType = { top: string; bottom: string };

type ContextValueType = {
  headerColor: HeaderColorType;
  setHeaderColor: (color: Partial<HeaderColorType>) => void;
};

const defaultHeaderColor = {
  top: '#1d1d1b',
  bottom: '#1d1d1b',
};

export const ColorContext = createContext<ContextValueType>({
  headerColor: defaultHeaderColor,
  setHeaderColor: () => {},
});

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(defaultHeaderColor);

  const setHeaderColor = (newColor: Partial<HeaderColorType>) => {
    setState((prev) => {
      return {
        top: newColor.top ?? prev.top,
        bottom: newColor.bottom ?? prev.bottom,
      };
    });
  };

  return (
    <ColorContext.Provider value={{ headerColor: state, setHeaderColor }}>
      {children}
    </ColorContext.Provider>
  );
};
