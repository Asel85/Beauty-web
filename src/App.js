import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import SlideSection from './components/SlideSection';
import './styles/main.scss';
function App() {
  return (
    <>
      {' '}
      <Header />
      <div className="body">
        <Home />
        <SlideSection />
        <AboutMeSection />
        <Services />
      </div>
      <ContactSection />
    </>
  );
}

export default App;
