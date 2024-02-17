import { Backdrop, CircularProgress } from "@mui/material";

function CustomBackdrop() {
  return (
    <Backdrop open sx={{ zIndex: 100 }}>
      <CircularProgress sx={{ color: "#fff" }} />
    </Backdrop>
  );
}

export default CustomBackdrop;
