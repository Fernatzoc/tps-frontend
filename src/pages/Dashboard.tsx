import { Container, Grid } from "@mui/material";
import {
  CustomCard,
  DoughnutChart,
  Layout,
  LineChart,
  Table2,
  VerticalBarChart,
} from "../components";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const Dashboard = () => {
  return (
    <Layout title="Usuarios">
      {/*<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <CustomCard />
        <LineChart />
        </Container>*/}
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <CustomCard
              title="Productos"
              value="12"
              iconColor="primary.main"
              icon={<AttachMoneyIcon />}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <CustomCard
              title="Compras"
              value="12"
              iconColor="primary.main"
              icon={<AttachMoneyIcon />}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <CustomCard
              title="Proveedores"
              value="12"
              iconColor="primary.main"
              icon={<AttachMoneyIcon />}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <CustomCard
              title="Categorias"
              value="12"
              iconColor="primary.main"
              icon={<AttachMoneyIcon />}
            />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <VerticalBarChart />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <LineChart />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <DoughnutChart />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Table2 />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
