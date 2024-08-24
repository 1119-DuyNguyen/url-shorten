import React from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
export function Footer({}) {
    return (
        <Grid container className="h-[100px] " padding={2}>
            <Grid item sm={12}>
                <Box display="flex" justifyContent="center">
                    © 2024 |{" "}
                    <a target="_blank" href="https://github.com/1119-DuyNguyen">
                        Duy Nguyen
                    </a>
                </Box>
            </Grid>
            {/* <Grid item sm={12} md={6}>
                <Link href="/privacy">Privacy Policy</Link>
            </Grid> */}
        </Grid>
    );
}
