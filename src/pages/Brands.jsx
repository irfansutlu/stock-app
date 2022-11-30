import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/modals/BrandModal";
import useStockCalls from "../hooks/useStockCalls";
import { flexCenter, flexRow } from "../styles/globalStyle";

const Brands = () => {
  const { getBrands } = useStockCalls();
  const { brands, loading } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Brands
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        New Brand
      </Button>

      <BrandModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

      {!loading && !brands?.length && (
        <Alert severity="warning" sx={{ mt: 4, width: "50%" }}>
          There is no brand to show
        </Alert>
      )}

      {brands?.length > 0 && (
        <Grid container sx={flexRow} mt={4}>
          {brands?.map((brand) => (
            <Grid item key={brand.id}>
              <BrandCard brand={brand} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Brands;
