import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Container, Stack, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { RootState } from "../../state";
import { deleteUser, getUsers } from "../../state/action-creators/auth";
import { CustomTable, Layout } from "../../components";

export const UsersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { users } = useSelector((state: RootState) => state.auth);

  return (
    <Layout title="Usuarios">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Usuarios
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/users/new"
            startIcon={<AddOutlinedIcon />}
          >
            Agregar Usuario
          </Button>
        </Stack>
        <Card>
          <CustomTable
            data={users}
            titles={["id", "name", "email", "role"]}
            deleteItem={deleteUser}
          />
        </Card>
      </Container>
    </Layout>
  );
};
