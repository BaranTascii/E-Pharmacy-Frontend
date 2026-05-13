import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <BurgerMenu onClick={toggleSidebar} />

      <div>
        <h2>Dashboard</h2>
      </div>
    </header>
  );
};

export default Header;
