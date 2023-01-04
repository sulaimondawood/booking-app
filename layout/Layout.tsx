import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

interface IChildren {
  children: ReactNode;
}

const Layout = ({ children }: IChildren) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
