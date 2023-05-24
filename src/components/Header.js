import logoComplexPinkOrange from '../img/logo-complex-pink-orange.svg'


const Header = () => {  
    return (            
    <header>
      {/* thinking about one div w/cream bg, one w/ green bg, one on top of both with no bg so img can horizontally center */}
      <div id="header-top"></div>
      <div id="header-divider">
        <img src={logoComplexPinkOrange} alt="logo-complex-pink-orange" id="header-logo" />
      </div>
      <div id="header-bottom"></div>
    </header>
    ); 
  };
  
export default Header;