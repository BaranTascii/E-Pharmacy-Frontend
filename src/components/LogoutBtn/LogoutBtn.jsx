import { useDispatch } from "react-redux";

import { logout } from "../../redux/auth/slice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutBtn;
