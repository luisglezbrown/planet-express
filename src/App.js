import Header from './components/Header';
import Calculator from './components/Calculator';
import OfferCountdown from './components/OfferCountdown';
import TheCompany from './components/TheCompany';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Calculator />
        <OfferCountdown />
        <TheCompany />
        <Newsletter />
      </main>
      <Footer/>
    </>
  );
}

export default App;
