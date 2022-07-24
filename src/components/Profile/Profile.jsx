import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/authSlice";
import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

const Profile = () => {
  const { user, isAuth } = useSelector(userSelector);
  const favouriteMovies = [];

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        {isAuth && (
          <Button color="inherit" onClick={logout}>
            Logout &nbsp; <ExitToApp />
          </Button>
        )}
      </Box>
      {!favouriteMovies.length ? (
        <Typography variant="h5">
          Add favourites or Watchlist some movies to see them
        </Typography>
      ) : (
        <Box>Favourite Movies</Box>
      )}
    </Box>
  );
};

export default Profile;
