import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
};

export default Navbar;
