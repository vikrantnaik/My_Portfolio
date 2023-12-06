import "./App.scss";

import { About, Footer, Header, Skills, Work } from "./Container/index";

import { Navbar } from "./Components/index";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />

      <About />
      <Skills />
      <Work/>
      <Footer />
    </div>
  );
}

export default App;
