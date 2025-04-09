import React, { useEffect, useState } from "react";
import "./style.css";
import { getDatabase, ref, onValue, get } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
import { database } from "../../../../Firebase";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    get(ref(database, `users/${localStorage.getItem("uid")}`)).then(
      (snapshot) => {
        setUserData(snapshot.val());
      }
    );
  }, []);
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      window.location.href = "/";
    });
  };
  return (
    <div className="profilePageBaseContainer">
      <div className="profileDataContainer">
        <h1>PROFILE</h1>
        {userData ? (
          <div>
            <p>
              <strong>Name:</strong>
              {userData.name}
            </p>
            <p>
              <strong>Email:</strong>
              {userData.email}
            </p>
          </div>
        ) : (
          <p>Loading user data</p>
        )}
        <div className="logout">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
