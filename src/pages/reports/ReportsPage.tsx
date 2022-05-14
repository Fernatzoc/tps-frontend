import { Card, Container } from "@mui/material";
import {
  DataGrid,
  esES,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "../../components";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export const ReportsPage = () => {
  const [reporte, setReporte] = useState([]);

  const baseURL: string | undefined = process.env.BASE_URL;

  useEffect(() => {
    const getDashboardInfo = async () => {
      const url = `${baseURL}/dashboard`;
      const result = await axios.get(url);

      setReporte(result.data.reporte);
    };

    getDashboardInfo();
  }, []);

  const titles = ["fecha", "producto", "proveedor", "categoria", "movimiento", "cantidad", "costo_unitario", "total"];

  let columns: GridColDef[] = titles.map((field: any) => {
    return {
      field: field,
      headerName: field.charAt(0).toUpperCase() + field.slice(1),
      minWidth: 150,
    };
  });

  return (
    <Layout title="Reportes">
      <Container>
        <Card>
          <div style={{ height: "800px", width: "100%" }}>
            <DataGrid
              components={{
                Toolbar: CustomToolbar,
              }}
              localeText={esES.components.MuiDataGrid.defaultProps.localeText}
              rows={reporte}
              columns={columns}
              pageSize={20}
              rowsPerPageOptions={[20]}
            />
          </div>
        </Card>
      </Container>
    </Layout>
  );
};
