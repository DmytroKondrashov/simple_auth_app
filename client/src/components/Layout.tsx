import { useAuth } from "../hooks/AuthProvider";

function Layout() {
  const auth = useAuth();

  return (
    'This is layout!'
  )
}

export default Layout;
