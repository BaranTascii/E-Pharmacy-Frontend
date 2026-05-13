import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <BurgerMenu onClick={toggleSidebar} />

      <div>
        <h2>Dashboard</h2>
      </div>
      
      <div className="header-right">
        <LogoutBtn />
      </div>
    </header>
  );
};

export default Header;
