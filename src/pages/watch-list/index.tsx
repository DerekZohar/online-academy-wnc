import React from "react";
import { List, makeStyles, Divider, Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Course from "../../components/course";
import "./styles.css";
import Axios from "axios";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    padding: theme.spacing(1.2),
  },
  avatar: { marginRight: theme.spacing(5) },
  paginator: {
    justifyContent: "center",
    padding: "10px",
  },
}));

const AllProjects = () => {
  const classes = useStyles();

  const user = useSelector((state: any) => state.user.value);
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      await Axios.get("http://localhost:3000/api/watchlist", {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }).then((res: any) => {
        if (res.status === 200) {
          setCourses(res.data);
          console.log(res.data);
        }
      });
    }
    fetchData();
  }, [user.token]);

  const itemsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(Math.ceil(courses.length / itemsPerPage));

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className="watch-list">
      <List>
        {courses
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((projectItem: any, index: any) => {
            // const labelId = `list-secondary-label-${projectItem.name}`;
            return <Course key={index} {...projectItem} />;
          })}
      </List>
      <Divider />
      <Box component="span">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
      </Box>
    </div>
  );
};

export default AllProjects;
