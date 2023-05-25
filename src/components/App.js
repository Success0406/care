import "../index.css";
import Navbar from "./navbar/navbar.jsx";
import WelcomeSection from "./welcome/intro-section.jsx";
import ServiceSection from "./services/service.jsx";
/* The following line can be included in a src/App.scss */
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <ServiceSection />
    </div>
  );
}

export default App;
