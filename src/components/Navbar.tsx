import SideNavLinks from './SideNavLinks';
import NavLinks from './NavLinks';

function Navbar() {
  return (
    <>
      {/* Large ekran ve daha büyük ekranlarda bu kısım aktif olacak*/}
      <SideNavLinks />

      {/* Large ekrandan daha küçük ekranlarda bu kısım aktif olacak*/}
      <NavLinks />
    </>
  );
}

export default Navbar;
