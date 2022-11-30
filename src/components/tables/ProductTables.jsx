import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { flexCenter, modalStyle } from "../../styles/globalStyle";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";

export default function ProductTable({ open, setOpen, info, setInfo }) {
  const { postFirm, putFirm } = useStockCalls();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      putFirm(info);
    } else {
      postFirm(info);
    }
    setOpen(false);
    setInfo({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setInfo({});
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit} sx={flexCenter}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              required
              variant="outlined"
              value={info?.address || ""}
              onChange={handleChange}
            />
            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              required
              value={info?.name || ""}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained">
              Submit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
