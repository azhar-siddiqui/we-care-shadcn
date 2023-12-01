import { useRoutes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import router from "./routes";

function App() {
  const content = useRoutes(router);
  const auth = useAuth();
  return <>{auth.isAuthenticated ? content : <h1>Hello App</h1>}</>;
}

export default App;
