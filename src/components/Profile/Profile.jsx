import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/authSlice";

const Profile = () => {
  const { user } = useSelector(userSelector);
  return <div>Profile {user.id}</div>;
};

export default Profile;
