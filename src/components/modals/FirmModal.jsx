import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { flexCenter, modalStyle } from "../../styles/globalStyle";
import { Button, TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";

export default function FirmModal({ open, setOpen, info, setInfo }) {
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
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              required
              value={info?.name || ""}
              onChange={handleChange}
            />

            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              required
              variant="outlined"
              value={info?.phone || ""}
              onChange={handleChange}
            />

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
              label="Image"
              name="image"
              id="image"
              type="url"
              required
              variant="outlined"
              value={info?.image || ""}
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
