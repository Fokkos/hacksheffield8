// app/providers.jsx

"use client";

import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const ScoreContext: React.Context<number> = React.createContext(0);
export function Providers({
                            children,
                          }: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <ThemeProvider theme={createTheme({palette:{mode: 'light'}})}>
      {children}
    </ThemeProvider>
  );
}