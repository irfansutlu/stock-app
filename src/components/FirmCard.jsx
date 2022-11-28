import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { btnHoverStyle } from "../styles/globalStyle";
import useStockCalls from "../hooks/useStockCalls";

export default function FirmCard({ firm }) {
  const { deleteFirm } = useStockCalls();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="firm image"
        height="140"
        image={firm?.image}
        sx={{p:1, objectFit:"contain"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <EditIcon sx={btnHoverStyle} />
        <DeleteIcon sx={btnHoverStyle} onClick={() => deleteFirm(firm?.id)} />
      </CardActions>
    </Card>
  );
}
