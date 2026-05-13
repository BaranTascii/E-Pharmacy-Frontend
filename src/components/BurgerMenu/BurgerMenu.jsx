import { HiOutlineMenuAlt2 } from "react-icons/hi";

const BurgerMenu = ({ onClick }) => {
  return (
    <button onClick={onClick} className="burger-btn">
      <HiOutlineMenuAlt2 size={24} />
    </button>
  );
};

export default BurgerMenu;
