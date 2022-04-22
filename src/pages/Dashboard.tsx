import { Container } from "@mui/material";
import { Layout } from "../components";

export const Dashboard = () => {
  return (
    <Layout title="Usuarios">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h2>Dashboard</h2>
      </Container>
    </Layout>
  );
};
