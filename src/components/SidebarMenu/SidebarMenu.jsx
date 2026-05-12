import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/suppliers">Suppliers</NavLink>
        </li>

        <li>
          <NavLink to="/customers">Customers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarMenu;
