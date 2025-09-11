import EmailSuscribeSection from "./Components/EmailSuscribeSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import MessageSection from "./Components/MessageSection";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <EmailSuscribeSection></EmailSuscribeSection>
      <MessageSection></MessageSection>
      <Footer></Footer>
    </>
  );
};

export default App;
