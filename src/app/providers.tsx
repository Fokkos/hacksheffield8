// app/providers.jsx

"use client";

import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {useTheme} from "@mui/material";

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