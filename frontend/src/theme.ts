"use client";
import { Roboto } from "next/font/google";
import { createTheme, Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const themeDark = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});
const themeLight = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});
export function ThemeFactory(mode: string): Theme {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    switch (mode) {
        case "light":
            return themeLight;
        case "dark":
            return themeDark;
        default:
            return themeLight;
    }
}
export default themeLight;
