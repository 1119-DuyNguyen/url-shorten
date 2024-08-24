import Image from "next/image";
import HeaderNav from "./ui/nav-links";
import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";
import HeroTextChange from "./ui/hero-text-change";
export default function Home() {
    return (
        <Grid
            container
            spacing={2}
            padding={2}
            bgcolor="secondary"
            className="min-h-[80vh] "
        >
            <Grid item xs={12} sm={6}>
                <Box>
                    <Typography
                        variant="h2"
                        sx={{
                            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                        }}
                        color="primary"
                    >
                        TinyURL
                    </Typography>

                    <Typography variant="h5" paddingBottom={2}>
                        Streamline your digital presence in just a click.
                        <HeroTextChange />
                    </Typography>
                    <Link
                        href="/about"
                        className="p-1 opacity-80 hover:underline"
                    >
                        Learn how we can help meet your needs
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column-reverse", md: "row" }}
                    justifyContent="center"
                    gap={2}
                    height="100%"
                >
                    {/* 
              <DisplayUrl /> */}
                </Box>
            </Grid>
        </Grid>
    );
}
