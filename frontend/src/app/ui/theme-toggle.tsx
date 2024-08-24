"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeFactory } from "@/theme";
import { useThemeContext } from "../context/theme-context";

export default function ThemeToggle() {
    const { setMode, mode } = useThemeContext();

    useEffect(() => {
        if (mode) localStorage.setItem("theme", mode);
    }, [mode]);

    return (
        <IconButton
            sx={{ ml: 1 }}
            onClick={() =>
                setMode(mode === "light" || mode == "" ? "dark" : "light")
            }
        >
            {mode === "light" ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
    );
}
