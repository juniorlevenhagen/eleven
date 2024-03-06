import logo from '/Volumes/Macintosh HD - Dados/Eleven/eleven/src/assets/logo1.svg';
import './App.css';
import { HeadlineSection } from './components/HeadlineSection';
import { ServicesSection } from './components/ServicesSection';
import { BottomCalloutSection } from './components/BottomCalloutSection';
import { TopButtonPanel } from './components/TopButtonPanel ';
import { FooterInfoHub } from './components/FooterInfoHub';

const App = () => {
  return (
    <>
      <div className='bod'>
        <div className='bod1'>
          <div>
            <img className='logo_superior' src={logo} alt='Logotipo_superior' />
          </div>
        </div>
      </div>
      <HeadlineSection />
      <ServicesSection />
      <BottomCalloutSection />
      <TopButtonPanel />
      <FooterInfoHub />
    </>
  );
};

export default App;
