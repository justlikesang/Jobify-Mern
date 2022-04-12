import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby knausgaard drinking vinegar fanny pack, poke neutra fixie
            food truck. Hot chicken succulents butcher poutine pop-up air plant
            shoreditch kitsch irony kogi. Copper mug hashtag franzen, hot
            chicken coloring book brunch mumblecore lyft shaman waistcoat
            dreamcatcher tattooed activated charcoal. Cornhole meditation
            gochujang, poke adaptogen pour-over shaman kogi migas hot chicken.{' '}
          </p>
          <button className='btn btn-hero'>
            Login/Register  
          </button>
        </div>
      </div>
    </main>
  );
};

export default Landing;
