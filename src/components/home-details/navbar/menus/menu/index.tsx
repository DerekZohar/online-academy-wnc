// import React, { useEffect, useState } from "react";
// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import Collapse from "@material-ui/core/Collapse";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import SendIcon from "@material-ui/icons/Send";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
// import StarBorder from "@material-ui/icons/StarBorder";
// import Axios from "axios";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       width: "100%",
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//     nested: {
//       paddingLeft: theme.spacing(4),
//     },
//   })
// );

// export default function NestedList() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const [categrories, setCategrories] = useState([]);

//   const handleClick = () => {
//     setOpen(!open);
//   };
//   useEffect(() => {
//     async function fetchData() {
//       await Axios.get("http://14.225.27.135/api/category").then((res) => {
//         console.log(res.data);
//         setCategrories(res.data);
//       });
//     }

//     fetchData();
//   }, []);

//   return (
//     <List
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//       //   subheader={
//       //     <ListSubheader component="div" id="nested-list-subheader">
//       //       Nested List Items
//       //     </ListSubheader>
//       //   }
//       className={classes.root}
//     >
//       {categrories.map((item: any, idx: number) => {
//         return (
//           <div key={idx}>
//             <ListItem button onClick={handleClick}>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary={item.categoryName} />
//               {open ? <ExpandLess /> : <ExpandMore />}
//             </ListItem>
//             <Collapse in={open} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 {item.subCategories.map((i: any, idx: number) => {
//                   return (
//                     <ListItem key={idx} button className={classes.nested}>
//                       <ListItemIcon>
//                         <StarBorder />
//                       </ListItemIcon>
//                       <ListItemText primary={i.categoryName} />
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             </Collapse>
//           </div>
//         );
//       })}
//     </List>
//   );
// }
import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";

import NestedMenuItem from "material-ui-nested-menu-item";

export const NestedMenu = () => {
  const [menuPosition, setMenuPosition] = useState<any>(null);

  const handleRightClick = (event: React.MouseEvent) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
    console.log();
  };

  const handleItemClick = (event: React.MouseEvent) => {
    console.log(123);
  };

  return (
    <div>
      {/* <Typography>Right click to open menu</Typography> */}
      <Button
        // ref={anchorRef}
        // aria-controls={open ? "menu-list-grow" : undefined}
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
        <MenuItem onClick={handleItemClick}>Button 1</MenuItem>
        <MenuItem onClick={handleItemClick}>Button 2</MenuItem>
        <NestedMenuItem
          label="Button 3"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
          <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
          <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
          <NestedMenuItem
            label="Sub-Button 3"
            parentMenuOpen={!!menuPosition}
            onClick={handleItemClick}
          >
            <MenuItem onClick={handleItemClick}>Sub-Sub-Button 1</MenuItem>
            <MenuItem onClick={handleItemClick}>Sub-Sub-Button 2</MenuItem>
          </NestedMenuItem>
        </NestedMenuItem>
        <MenuItem onClick={handleItemClick}>Button 4</MenuItem>
        <NestedMenuItem
          label="Button 5"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
          <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
          <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
        </NestedMenuItem>
      </Menu>
    </div>
  );
};

export default NestedMenu;
