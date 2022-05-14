import { Card, Container, Grid, Typography } from "@mui/material";
import {
  CustomCard,
  DoughnutChart,
  Layout,
  TableDashboard,
  VerticalBarChart,
} from "../components";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useEffect, useState } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [count, setCount] = useState<any>([]);
  const [topProducts, setTopProductos] = useState([]);
  const [trasacciones, setTrasacciones] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const baseURL: string | undefined = process.env.BASE_URL;

  useEffect(() => {
    const getDashboardInfo = async () => {
      const url = `${baseURL}/dashboard`;
      const result = await axios.get(url);

      setCount(result.data.count);
      setTopProductos(result.data.productos);
      setTrasacciones(result.data.trasacciones);
      setProveedores(result.data.proveerdores);
      setCategorias(result.data.categorias);
    };

    getDashboardInfo();
  }, []);

  return (
    <Layout title="Usuarios">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <CustomCard
              title="Productos"
              value={count?.productos}
              iconColor="error.main"
              icon={<AttachMoneyIcon />}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <CustomCard
              title="Categorias"
              value={count?.categorias}
              iconColor="success.main"
              icon={<AttachMoneyIcon />}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <CustomCard
              title="Proveedores"
              value={count?.proveedores}
              iconColor="warning.main"
              icon={<AttachMoneyIcon />}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <CustomCard
              title="usuarios"
              value={count?.usuarios}
              iconColor="primary.main"
              icon={<AttachMoneyIcon />}
            />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <VerticalBarChart
              info={proveedores}
              color="53, 162, 235, 0.5"
              name="Productos"
              text="Top Proveedores"
            />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <VerticalBarChart
              info={categorias}
              color="255, 99, 71, 0.5"
              name="Productos"
              text="Top Categorias"
            />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <Card style={{ margin: "10px 0", padding: "10px" }}>
              <Typography color="textPrimary" align="center" variant="h5">
                Productos con más unidades
              </Typography>
            </Card>
            <DoughnutChart info={topProducts} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Card style={{ margin: "10px 0", padding: "10px" }}>
              <Typography color="textPrimary" align="center" variant="h5">
                Movimientos recientes
              </Typography>
            </Card>
            <TableDashboard
              data={trasacciones}
              titles={["fecha", "producto", "movimiento", "cantidad"]}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
