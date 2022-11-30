import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductModal from "../components/modals/ProductModal";
import useStockCalls from "../hooks/useStockCalls";

const Products = () => {
  const { getProducts, getBrands, getCategories } = useStockCalls();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getProducts();
    getBrands();
    getCategories();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Products
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Product
      </Button>

      <ProductModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />
    </Box>
  );
};

export default Products;
