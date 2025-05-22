import Head from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Market from "./components/Market";

import comics from "./assets/comics";

export default function App() {
  return (
    <>
      <Head />
      <Main comics={comics} />

      <Market />
      <Footer />
    </>
  );
}
