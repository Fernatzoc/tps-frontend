import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CustomCard, Layout, TableDashboard } from "../../components";
import { Product } from "../../interfaces/interfaces";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

export const SingleProductPage = () => {
  const [products, setproducts] = useState([]);
  const [entradas, setEntradas] = useState([]);
  const [salidas, setSalidas] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const url = `http://localhost:8000/api/product/${id}`;
      const result = await axios.get(url);

      setproducts(result.data.product);
      setEntradas(result.data.entradas);
      setSalidas(result.data.salidas);
    };

    getProduct();
  }, []);

  const product: any = products.find((product: Product) => product.id == id);

  console.log(product?.nombre);
  console.log(entradas);

  return (
    <Layout title="Productos">
      <Container maxWidth={false}>
        <Stack
          style={{margin: "0"}}
          direction="row"
          alignItems="center"
          justifyContent="end"
          mb={5}
        >
          <Button
            variant="contained"
            component={Link}
            to="/productos"
            startIcon={<ArrowBackOutlinedIcon />}
          >
            Regresar
          </Button>
        </Stack>

        <Card style={{ margin: "15px 0", padding: "15px" }}>
          <Typography color="textPrimary" align="center" variant="h3">
            {product?.nombre}
          </Typography>
        </Card>
        <Grid container spacing={3}>
          <Grid item lg={4} sm={12} xl={4} xs={12}>
            <CustomCard
              title="Stock Existente"
              value={product?.stock}
              iconColor="error.main"
              icon={<Inventory2OutlinedIcon />}
            />
          </Grid>
          <Grid item lg={4} sm={12} xl={4} xs={12}>
            <CustomCard
              title="Categoria"
              value={product?.categoria}
              iconColor="success.main"
              icon={<Inventory2OutlinedIcon />}
            />
          </Grid>
          <Grid item lg={4} sm={12} xl={4} xs={12}>
            <CustomCard
              title="Proveedor"
              value={product?.proveedor}
              iconColor="warning.main"
              icon={<Inventory2OutlinedIcon />}
            />
          </Grid>

          <Grid item lg={6} sm={12} xl={6} xs={12}>
            <Card style={{ margin: "10px 0", padding: "10px" }}>
              <Typography color="textPrimary" align="center" variant="h4">
                Entradas
              </Typography>
            </Card>
            <TableDashboard
              data={entradas}
              titles={[
                "fecha",
                "movimiento",
                "cantidad",
                "costo_unitario",
                "total",
              ]}
            />
          </Grid>
          <Grid item lg={6} sm={12} xl={6} xs={12}>
            <Card style={{ margin: "10px 0", padding: "10px" }}>
              <Typography color="textPrimary" align="center" variant="h4">
                Salidas
              </Typography>
            </Card>
            <TableDashboard
              data={salidas}
              titles={[
                "fecha",
                "movimiento",
                "cantidad",
                "costo_unitario",
                "total",
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
