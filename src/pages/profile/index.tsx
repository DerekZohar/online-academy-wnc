import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Create";
import "./styles.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editUser } from "../login/loginSlice";
import Axios from "axios";
import {
  DatePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useFormik } from "formik";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  })
);

export default function Profile() {
  const classes = useStyles();
  const user = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();
  var tempFirstName = "";
  var tempLastName = "";
  const [firstNameOpen, setFirstNameOpen] = useState(false);
  const [lastNameOpen, setLastNameOpen] = useState(false);
  const [passOpen, setPassOpen] = useState(false);
  const [currentFirstName, setCurrentFirstName] = useState(user.firstName);
  const [currentLastName, setCurrentLastName] = useState(user.lastName);
  const [currentbirthDay, setBirthDay] = useState(user.birthDate);

  const FirstNameChange = (e: any) => {
    tempFirstName = e.target.value;
  };

  const LastNameChange = (e: any) => {
    tempLastName = e.target.value;
  };

  const handleFirstNameOpen = () => {
    setFirstNameOpen(true);
  };

  const handleFirstNameClose = () => {
    setFirstNameOpen(false);
  };

  const handleFirstNameOk = async () => {
    if (tempFirstName === "") {
      setFirstNameOpen(false);
    } else {
      await Axios.put(
        "http://14.225.27.135/api/user",
        {
          firstName: tempFirstName,
          userId: user.id,
        },
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
        .then((res) => {
          setCurrentFirstName(tempFirstName);
          dispatch(editUser({ firstName: tempFirstName }));
          setFirstNameOpen(false);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const handleLastNameOpen = () => {
    setLastNameOpen(true);
  };

  const handleLastNameClose = () => {
    setLastNameOpen(false);
  };

  const handleLastNameOk = async () => {
    if (tempLastName === "") {
      setLastNameOpen(false);
    } else {
      await Axios.put(
        "http://14.225.27.135/api/user",
        {
          lastName: tempLastName,
          userId: user.id,
        },
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
        .then((res) => {
          setCurrentLastName(tempLastName);
          dispatch(editUser({ lastName: tempLastName }));
          setLastNameOpen(false);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  useEffect(() => {
    async function fetchdata() {
      await Axios.put(
        "http://14.225.27.135/api/user",
        {
          birthDate: currentbirthDay,
          userId: user.id,
        },
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
        .then((res) => {
          dispatch(editUser({ birthDate: currentbirthDay }));
        })
        .catch((error) => {
          alert(error);
        });
    }
    fetchdata();
  }, [currentbirthDay]);

  const handlePassOpen = () => {
    setPassOpen(true);
  };

  const handlePassClose = () => {
    setPassOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    onSubmit: async (values) => {
      const userDataToPost = {
        email: user.email,
        oldPassword: formik.values.oldPassword,
        newPassword: formik.values.newPassword,
      };
      console.log(userDataToPost);
      await Axios.put(
        `http://14.225.27.135/api/authentication/change_password`,
        userDataToPost,
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
        .then((res) => {
          if (res.status === 200) {
            alert("change success");
          }
        })
        .catch((error) => console.log(error));
      // setOpen(true);
    },
  });
  return (
    <div className="Container">
      <div>
        <Avatar className={`${classes.large} ${"avatar"}`} />
        <div className="flex">
          <TextField
            label="First Name"
            InputProps={{
              readOnly: true,
            }}
            value={currentFirstName}
          />
          <button className="iconButton" onClick={handleFirstNameOpen}>
            <EditIcon />
          </button>
          <Dialog
            open={firstNameOpen}
            onClose={handleFirstNameClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle>Edit First Name</DialogTitle>
            <DialogContent>
              <TextField
                onChange={FirstNameChange}
                defaultValue={currentFirstName}
                autoFocus
                margin="dense"
                label="New first name"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleFirstNameClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleFirstNameOk} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="flex">
          <TextField
            label="User Name"
            InputProps={{
              readOnly: true,
            }}
            value={currentLastName}
          />
          <button className="iconButton" onClick={handleLastNameOpen}>
            <EditIcon />
          </button>
          <Dialog
            open={lastNameOpen}
            onClose={handleLastNameClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle>Edit Last Name</DialogTitle>
            <DialogContent>
              <TextField
                onChange={LastNameChange}
                defaultValue={currentLastName}
                autoFocus
                margin="dense"
                label="New last name"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleLastNameClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleLastNameOk} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="flex">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              label="BirthDay"
              onChange={setBirthDay}
              value={currentbirthDay}
            />
          </MuiPickersUtilsProvider>
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{
            fontSize: "16px",
            padding: "8px 24px 8px 24px",
            marginTop: 10,
          }}
          onClick={handlePassOpen}
        >
          Change Password
        </Button>
        <Dialog
          open={passOpen}
          onClose={handlePassClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle>Change Password</DialogTitle>
          <DialogContent>
            <form
              action=""
              style={{ padding: 0 }}
              onSubmit={formik.handleSubmit}
            >
              <TextField
                autoFocus
                margin="dense"
                label="Old Password"
                name="oldPassword"
                fullWidth
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
              />
              <TextField
                margin="dense"
                label="New Password"
                fullWidth
                name="newPassword"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
              />
              <DialogActions>
                <Button onClick={handlePassClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" onClick={handlePassClose} color="primary">
                  OK
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
