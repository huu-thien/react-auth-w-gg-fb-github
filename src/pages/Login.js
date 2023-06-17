import Google from '../img/google.png';
import Facebook from '../img/facebook.png';
import Github from '../img/github.png'


function Login() {

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self")
  }
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self")
  }
  return (
    <div className="login">
      <h1 className="login-title">Choose a login method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="login-button google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="login-button facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="login-button github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>

        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>

        <div className="right">
          <input type="text" className="" placeholder="Username"/>
          <input type="text" className="" placeholder="Password"/>
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
