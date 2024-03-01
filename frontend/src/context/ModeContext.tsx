import React, { createContext, useContext, useState } from 'react';

function GetTime() {
    let d = new Date();
    let time = d.getHours();
    console.log(time);
    if (time < 9 || time > 16) {
        return(false);
    }
    else {
        return(true);
    }
}

interface ModeContextType {
    mode: boolean;
    toggleMode: () => void;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function useMode() {
    const context = useContext(ModeContext);
    if (context === undefined) {
      throw new Error('useMode must be used within a ModeProvider');
    }
    return context;
}

export function ModeProvider({ children }: { children: React.ReactNode}) {
  const [mode, setMode] = useState(!GetTime());
  console.log("Hlelloo?");
  console.log(GetTime());

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === true ? false : true));
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}
