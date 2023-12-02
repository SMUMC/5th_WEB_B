import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { Follower } from "../style/Card.style";
import { followingAction } from "../redux/userSlice";

export default function HomeCard({
  id,
  name,
  title,
  subheader,
  image,
  content,
}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.isLogin);
  const [isLike, setIsLike] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [isFollow, setIsFollow] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColor = () => {
    setIsLike(!isLike);
  };

  const handleFollow = () => {
    setIsFollow(!isFollow);
    if (isFollow === true) {
      setCount(count + 1);
      dispatch(followingAction({ id, isFollow, count }));
    } else {
      setCount(count - 1);
      dispatch(followingAction({ id, isFollow, count }));
    }
  };

  return (
    <Card sx={{ maxWidth: 650, margin: "30px" }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{name}</Avatar>}
        action={
          state && (
            <Follower onClick={handleFollow}>
              {isFollow ? "팔로잉" : "팔로우"}
            </Follower>
          )
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia component="img" height="450" image={image} alt={title} />
      <IconButton aria-label="add to favorites">
        <FavoriteIcon
          style={{ color: isLike ? "red" : "inherit" }}
          onClick={handleColor}
        />
      </IconButton>
      <IconButton aria-label="add to comments">
        <CommentIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>신고</MenuItem>
      </Menu>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
