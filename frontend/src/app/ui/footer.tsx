import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
export function Footer({}) {
    return (
        <Grid container className="h-[100px] min-w-full" padding={2}>
            <Grid item sm={12} md={6}>
                <div>
                    © 2024 |{" "}
                    <a target="_blank" href="#">
                        Duy Nguyen
                    </a>
                </div>
            </Grid>
            <Grid item sm={12} md={6}>
                <Link href="/privacy">Privacy Policy</Link>
            </Grid>
        </Grid>
    );
}
