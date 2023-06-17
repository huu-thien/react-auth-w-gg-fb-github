import { Link } from 'react-router-dom';

function Navbar({ user }) {
  const logout = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }
  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/" className="link">
          NHT Dev
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="list-item">
            <img className="avatar" src={user.photos[0]} alt="user" />
          </li>
          <li className="list-item">{user.displayName}</li>
          <li className="list-item" onClick={logout}>Logout</li>
        </ul>
      ) : (
        <Link className="link" to="login">Login</Link>
      )}
    </div>
  );
}

export default Navbar;
