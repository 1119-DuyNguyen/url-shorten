"use client";
import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
interface StringListProps {
    words: string[];
}
export default function HeroTextChange({ words }: StringListProps) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [text, setText] = useState("");

    // Typing effect
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            // Delay before starting to delete
            const timeoutId = setTimeout(
                () => setSubIndex((prev) => prev - 1),
                250
            );
            return () => clearTimeout(timeoutId);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const typingSpeed = reverse ? 50 : 150;
        const timeout = setTimeout(
            () => {
                setSubIndex((prev) => prev + (reverse ? -1 : 1));
            },
            reverse
                ? typingSpeed
                : Math.max(
                      typingSpeed,
                      subIndex === words[index].length ? 1000 : 150
                  )
        );

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // Update text
    useEffect(() => {
        setText(words[index].substring(0, subIndex));
    }, [subIndex, index]);

    return <span className="font-bold underline blinking-cursor">{text}|</span>;
}
