import { useState, useEffect } from "react";

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const loadUserInfo = async () => {
      const response = await fetch("http://localhost:8080/user-info");
      const userInfoData = await response.json();
      setUserInfo(userInfoData);
    };
    loadUserInfo();
  }, []);

  return [userInfo, setUserInfo];
};
