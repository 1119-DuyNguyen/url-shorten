import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import HeaderNav from "./ui/nav-links";
import { Footer } from "./ui/footer";

export const metadata = {
    title: "TinyURL - Simplify & Share Your Links",
    description:
        "Experience the power of simplicity with TinyURL! Shorten, customize, and track your URLs for free. Enhance your digital marketing & improve link sharing with our user-friendly platform.",
    keywords:
        "URL shortener,Link management,Short link,Cusstom URL,Digital marketing tool,TinyURL,Link tracking,Free URL shortener,Shareable links,Online marketing",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <HeaderNav />
                        <main className="flex min-h-screen flex-col items-center justify-between p-24">
                            {children}
                        </main>
                        <Footer></Footer>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
