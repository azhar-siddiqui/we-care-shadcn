import { FC, ReactNode, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

import Login from "@/content/pages/Auth/Login";

interface AuthenticatedProps {
  children: ReactNode;
}

const Authenticated: FC<AuthenticatedProps> = (props) => {
  const { children } = props;
  const auth = useAuth();
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  if (!auth.isAuthenticated) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }
    return <Login />;
  }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

export default Authenticated;
