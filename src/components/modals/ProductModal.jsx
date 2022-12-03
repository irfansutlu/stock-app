import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";
import { useSelector } from "react-redux";

export default function ProductModal({ open, setOpen, info, setInfo }) {
  const { postProduct } = useStockCalls();
  const { categories, brands } = useSelector((state) => state.stock);

  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct(info);
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
          <Box sx={flexColumn} component={"form"} onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel variant="outlined" id="category-select">
                Category
              </InputLabel>
              <Select
                labelId="category-select"
                label="Category"
                id="firm-select"
                name="category_id"
                value={info?.category_id || ""}
                onChange={handleChange}
                required
              >
                {categories?.map((category) => {
                  return (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel variant="outlined" id="brand-select">
                Brands
              </InputLabel>
              <Select
                labelId="brand-select"
                label="Brand"
                id="brand-select"
                name="brand_id"
                value={info?.brand_id || ""}
                onChange={handleChange}
                required
              >
                {brands?.map((brand) => {
                  return (
                    <MenuItem key={brand.id} value={brand.id}>
                      {brand.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <TextField
              margin="dense"
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info?.name || ""}
              onChange={handleChange}
              required
            />

            <Button type="submit" variant="contained" size="large">
              Add New Product
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
