import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from '../components/GoogleLoginButton'
// import { useAuth } from "../hooks/AuthProvider";
// import { GoogleLogin } from 'react-google-login';

export default function Landing() {
  // const auth = useAuth();

  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

  return(
      // <GoogleLogin
      //   clientId="851019047002-kjeum6otrjgmumomvb2nhk474o04qmk1.apps.googleusercontent.com"
      //   buttonText="Login"
      //   onSuccess={responseGoogle}
      //   onFailure={responseGoogle}
      //   cookiePolicy={'single_host_origin'}
      //   redirectUri="http://localhost:3000/api/auth/google/redirect"
      // />

    <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
      <GoogleLoginButton />
    </GoogleOAuthProvider>

  //   <>
  //   <form>
  //     <div className="mb-3">
  //       <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  //       <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  //       <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  //     </div>
  //     <div className="mb-3">
  //       <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
  //       <input type="password" className="form-control" id="exampleInputPassword1" />
  //     </div>
  //     <div className="mb-3 form-check">
  //       <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  //       <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  //     </div>
  //     <button type="button" className="btn btn-primary" onClick={async () => await auth.loginAction()}>Submit</button>
  //   </form>
  // </>
  )
}