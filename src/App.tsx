import About from "./components/sections/About";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Footer from "./components/sections/Footer";
import NavMobile from "./components/layout/NavMobile";

function App() {
  return (
    <>
      <NavMobile />
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
}

export default App;
