import "../styles/global.css";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../styles/nprogress.css";
import { wrapper } from "../components/redux/store";

import { createGlobalStyle } from "styled-components";
// import { getDark } from "../components/userFuncs";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const dark = true;

  const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${dark ? `#181818` : `#cccccc`};
    }
    * {
      color: ${dark ? `#fff` : `#000`};
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = wrapper.getInitialAppProps();

export default wrapper.withRedux(MyApp);
