"use client";

import "../styles/globals.css";
import { CssBaseline } from "@mui/material";
import Header from "../src/components/header";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import store from "../src/store/store";
import Footer from "../src/components/footer";
import Layout from "../src/components/Layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Breeze</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Breeze" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}
          <body id="__next">
            <CssBaseline />
            <Layout>
            {/* header section  */}
              {pathname != "/login" && <Header />}
              {/* xx header section  xx */}

              {children}

              {pathname != "/login" && (
                <footer className="absolute bottom-2">
                  <Footer />
                </footer>
              )}
            </Layout>
          </body>
        {/* </ThemeProvider> */}
      </Provider>
    </html>
  );
}
