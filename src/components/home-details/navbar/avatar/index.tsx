import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Avatar, IconButton } from "@material-ui/core";
import { logOut } from "../../../../services/firebase";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initValue } from "../../../../pages/login/loginSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: "0 0 0 50px",
    },
    imgBtn: {
      cursor: "pointer",
    },
  })
);

export default function AvatarUser() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.user.value);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  const handleLogOut = async () => {
    if (!user.verified) await logOut();
    dispatch(initValue(1));
    localStorage.removeItem("userInfo");
    //update state of redux
    // history.push("/login");
  };
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleWatchList = () => {
    history.push("/user/watchlist");
  };
  const handleProfile = () => {
    history.push("/user/profile");
  };
  const handleMyLearning = () => {
    history.push("/user/learning");
  };
  const handleMyCourse = () => {
    history.push("/teacher/my-course");
  };
  return (
    <div className={classes.root}>
      {/* <Avatar
        className={classes.imgBtn}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      /> */}
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar
          className={classes.imgBtn}
          alt={user.firstName + user.lastName}
          src={user.avatarUrl}
        />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ position: "absolute" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {user.roleId === 1 ? (
                    <div>
                      <MenuItem onClick={handleWatchList}>Watch List</MenuItem>
                      <MenuItem onClick={handleMyLearning}>
                        My learning
                      </MenuItem>
                    </div>
                  ) : (
                    <MenuItem onClick={handleMyCourse}>My course</MenuItem>
                  )}
                  <hr />
                  {/* <MenuItem onClick={handleClose}>Public Profile</MenuItem> */}
                  <MenuItem onClick={handleProfile}>Edit Profile</MenuItem>
                  <hr />
                  <MenuItem onClick={handleLogOut}>Log out</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
