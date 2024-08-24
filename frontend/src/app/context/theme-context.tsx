"use client";

import { ThemeFactory } from "@/theme";
import React, { createContext, useState, useEffect, useContext } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import HeaderNav from "../ui/nav-links";
import { Footer } from "../ui/footer";
import { Container, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
const PrimaryContainer = styled(Container)(({ theme }) => ({
    // backgroundColor: theme.palette.grey[400],
    padding: theme.spacing(2),
}));
const ThemeContext = createContext({
    mode: "",
    setMode: (mode: string) => {},
});
export default function ThemeContextProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [mode, setMode] = useState("");

    useEffect(() => {
        const savedMode: string = localStorage.getItem("theme") ?? "";

        setMode(savedMode);
    }, []);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            <ThemeProvider theme={ThemeFactory(mode)}>
                <CssBaseline enableColorScheme />
                <HeaderNav />
                <PrimaryContainer className=" min-h-screen">
                    {children}
                </PrimaryContainer>
                <Footer></Footer>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
export function useThemeContext() {
    return useContext(ThemeContext);
}
