import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const RouteLoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // 1.2s loader
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <Loader /> : children;
};

export default RouteLoaderWrapper;
