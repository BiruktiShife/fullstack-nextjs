"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/context/ThemeContext";
const Provider = ({ children }) => {
  return (
    <div>
      <ThemeProvider>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </div>
  );
};

export default Provider;
