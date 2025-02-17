import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import About2 from "./Components/About2";

import './i18n';

function App() {
  

  return (
    <div className="App">
      <Home />
      <About />
      <About2/>
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
