import Footer from "./Footer";
import Grid from "./Grid";
import Header from "./Header";
import Slider from "./Slider";
import About from "./About";


function Home() {
  return (
    
      <div className="App">
        <Header />
        <Slider/>
        <Grid />
        <About />
        <Footer />
      </div>
   
  );
}

export default Home;
