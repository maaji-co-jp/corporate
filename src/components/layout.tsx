import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "./head";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CssBaseline />
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
