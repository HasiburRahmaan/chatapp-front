import { useEffect, useState } from "react";
import { VERIFY } from "../config/api";
import { GetData } from "../http";

export default function useAuth() {
  let [auth, setAuth] = useState(false);
  let [loading, setLoading] = useState(false);

  useEffect(()=>{
    reloadAutheticationStatus()
  }, [])

  let reloadAutheticationStatus = async () => {
    setLoading(true);

    let res = await GetData({ api: VERIFY });
    if (res.data) {
      setAuth(true);
    }
    setLoading(false);
  };

  return [auth, setAuth, loading, reloadAutheticationStatus];
}
