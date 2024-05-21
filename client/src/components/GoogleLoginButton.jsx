import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await fetch('http://localhost:3001/auth/google/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tokenResponse),
      })
      const userData = res.json();
      console.log(userData);
    },
    onError: (error) => {
      console.error(error);
    }
  })

  return <button onClick={() => login()}>Sign in with Google</button>
}

export default GoogleLoginButton;
