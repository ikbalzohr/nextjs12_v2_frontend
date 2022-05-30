import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;
