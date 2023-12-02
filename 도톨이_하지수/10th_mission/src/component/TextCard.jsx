import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
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
import { useDispatch } from "react-redux";
import { deleteAction } from "../redux/userSlice";

export default function TextCard({ contents }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLike, setIsLike] = React.useState(false);
  const [isComment, setIsComment] = React.useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(deleteAction(contents.id));
  };

  const handleColor = () => {
    setIsLike(!isLike);
  };

  const handleComment = () => {
    setIsComment(!isComment);
  };

  return (
    <Card sx={{ maxWidth: 650, margin: "30px" }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">D</Avatar>}
        // action={state && <Follower onClick={handleFollow}>팔로우</Follower>}
        title="도톨이"
        subheader="December 12, 2023"
      />

      <Typography variant="body2" color="text.secondary" padding="20px">
        {contents.content}
      </Typography>

      <IconButton aria-label="add to favorites">
        <FavoriteIcon
          style={{ color: isLike ? "red" : "inherit" }}
          onClick={handleColor}
        />
      </IconButton>
      <IconButton aria-label="add to comments">
        <CommentIcon onClick={handleComment} />
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
        <MenuItem onClick={handleClose}>수정</MenuItem>
        <MenuItem onClick={handleDelete}>삭제</MenuItem>
      </Menu>
      <CardContent></CardContent>
    </Card>
  );
}
