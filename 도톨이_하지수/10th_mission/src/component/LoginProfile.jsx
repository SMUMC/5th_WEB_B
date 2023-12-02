import React from "react";
import {
  ProfileContainer,
  Label,
  LogoutButton,
  FollowerBox,
} from "../style/LoginProfile.style";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../redux/userSlice";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function LoginProfile() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.user.contents.contentCount);
  const follower = useSelector((state) => state.user.follower);
  const following = useSelector((state) => state.user.following.followingCount);

  const handleLogout = () => {
    dispatch(logoutAction({ isLogin: false }));
    localStorage.clear();
  };

  return (
    <ProfileContainer>
      <Avatar>D</Avatar>
      <Label> 도톨이 </Label>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "80%",
          marginTop: "10px",
          padding: "5px",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: "8px",
          bgcolor: "background.paper",
          color: "text.black",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <FollowerBox>
          게시글 <br /> {posts}
        </FollowerBox>
        <Divider orientation="vertical" flexItem />
        <FollowerBox>
          팔로워 <br /> {follower}
        </FollowerBox>
        <Divider orientation="vertical" flexItem />
        <FollowerBox>
          팔로잉 <br /> {following}
        </FollowerBox>
      </Box>
    </ProfileContainer>
  );
}
