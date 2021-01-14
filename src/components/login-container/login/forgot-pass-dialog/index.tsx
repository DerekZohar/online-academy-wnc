import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import { useFormik } from "formik";

export default function ForgotPasswordDialog(props: any) {
  const { open, handleClose } = props;
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: async () => {
      await Axios.post(
        "http://localhost:3000/api/authentication/forgot_password",
        {
          email: formik.values.email,
        }
      ).then((res) => {
        if (res.status === 200) {
          handleClose();
        }
      });
    },
  });

  //   const handleSend = async () => {};
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <form action="" onSubmit={formik.handleSubmit} style={{ padding: 0 }}>
        <DialogContent>
          <DialogContentText>
            To reset your pass, please enter your email address here. We will
            send new password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Send
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
