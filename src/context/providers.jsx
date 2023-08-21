"use client";

import { ThemeProvider } from "next-themes";

// export function Providers() {
//   return <ThemeProvider>{children}</ThemeProvider>;
// }

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
