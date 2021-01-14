import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";
import NestedMenuItem from "material-ui-nested-menu-item";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // const handleClose = (event: React.MouseEvent<EventTarget>) => {
  //   if (
  //     anchorRef.current &&
  //     anchorRef.current.contains(event.target as HTMLElement)
  //   ) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // function handleListKeyDown(event: React.KeyboardEvent) {
  //   if (event.key === "Tab") {
  //     event.preventDefault();
  //     setOpen(false);
  //   }
  // }

  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      await Axios.get("http://localhost:3000/api/category").then((res) => {
        if (res.status === 200) {
          setCategories(res.data);
        }
      });
    }
    fetchData();
  }, []);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  //handle click category
  const [menuPosition, setMenuPosition] = React.useState<any>(null);

  const handleRightClick = (event: React.MouseEvent) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };
  const history = useHistory();
  // const user = useSelector((state: any) => state.user.value);
  const handleItemClick = async (value: any) => {
    console.log("/search/" + value);
    history.push("/search/" + value);
  };
  // console.log(JSON.stringify(categories[0]) + "cate");

  if (!categories) return null;
  return (
    <div className={classes.root}>
      <Button
        // ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleRightClick}
      >
        Categories
      </Button>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        {/* <MenuItem onClick={handleItemClick}>Button 1</MenuItem>
        <MenuItem onClick={handleItemClick}>Button 2</MenuItem> */}

        {categories.map((item: any, idx: number) => {
          return (
            <NestedMenuItem
              key={idx}
              label={item.categoryName}
              parentMenuOpen={!!menuPosition}
              onClick={() => handleItemClick(item.categoryName)}
            >
              {item.subCategories.map((value: any, id: number) => {
                return (
                  <MenuItem
                    key={id}
                    onClick={() => handleItemClick(value.categoryName)}
                  >
                    {value.categoryName}
                  </MenuItem>
                );
              })}
            </NestedMenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
