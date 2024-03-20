import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import MainHeader from "../components/Header/MainHeader";

const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
