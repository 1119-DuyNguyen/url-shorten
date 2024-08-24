"use client";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import themeLight from "../theme";
import HeaderNav from "./ui/nav-links";
import { Footer } from "./ui/footer";
import { Container, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
// export const metadata = {
//     title: "TinyURL - Simplify & Share Your Links",
//     description:
//         "Experience the power of simplicity with TinyURL! Shorten, customize, and track your URLs for free. Enhance your digital marketing & improve link sharing with our user-friendly platform.",
//     keywords:
//         "URL shortener,Link management,Short link,Cusstom URL,Digital marketing tool,TinyURL,Link tracking,Free URL shortener,Shareable links,Online marketing",
// };

// Create a styled container with primary color
const PrimaryContainer = styled(Container)(({ theme }) => ({
    // backgroundColor: theme.palette.grey[400],
    padding: theme.spacing(2),
}));
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={themeLight}>
                        <HeaderNav />
                        <PrimaryContainer
                            className=" min-h-screen"

                            //   className="bg-white flex min-h-screen flex-col items-center justify-between p-24 "
                        >
                            {children}
                        </PrimaryContainer>
                        <Footer></Footer>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
