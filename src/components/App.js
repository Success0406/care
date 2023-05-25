import "../index.css";
import Navbar from "./navbar/navbar.jsx";
import WelcomeSection from "./welcome/intro-section.jsx";
import ServiceSection from "./services/service.jsx";
import AboutSection from "./about/about.jsx";
import ContactSection from "./contact/contact.jsx";
/* The following line can be included in a src/App.scss */
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;
