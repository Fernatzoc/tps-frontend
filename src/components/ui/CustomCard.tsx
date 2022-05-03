import { FC } from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";

interface Props {
  title: string;
  value: string;
  iconColor: string;
  icon: any;
}

export const CustomCard: FC<Props> = ({ title, value, iconColor, icon }) => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            {title}
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {value}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: iconColor,
              height: 56,
              width: 56,
            }}
          >
            {icon}
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
