import Header from "../components/header";
import Footer from "../components/footer";
import Donatur from "../components/Donatur";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="main">
          <Donatur />
        </div>
        <Footer />
      </div>
    </>
  );
}
