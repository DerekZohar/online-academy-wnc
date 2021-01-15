import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import { useHistory } from "react-router-dom";

export default function FormDialog({
  email,
  open,
  handleClickOpen,
  handleClose,
}: {
  email: any;
  open: any;
  handleClickOpen: any;
  handleClose: any;
}) {
  const history = useHistory();
  const [otpCode, setOtpCode] = React.useState("");
  console.log(otpCode);
  console.log(email);
  const handleVerify = async () => {
    await Axios.post("http://14.225.27.135/api/authentication/verify", {
      email: email,
      otp: otpCode,
    }).then((res) => {
      if (res.status === 200) {
        history.push("/login");
      }
    });
  };
  const handleOtpCodeChange = (e: any) => {
    setOtpCode(e.target.value);
  };
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Verification code</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To access to this website, please enter your otp here. We have sent
            otp to your email.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Otp code"
            type="string"
            value={otpCode}
            onChange={handleOtpCodeChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleVerify} color="primary">
            Verify
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
