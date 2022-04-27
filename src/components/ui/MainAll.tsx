import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { FC } from "react";

interface Props {
  titleButton: string;
  titlePage: string;
  link: string;
}

export const MainAll: FC<Props> = ({
  titlePage,
  titleButton,
  link,
  children,
}) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          {titlePage}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to={link}
          startIcon={<AddOutlinedIcon />}
        >
          {titleButton}
        </Button>
      </Stack>
      <Card>{children}</Card>
    </Container>
  );
};
