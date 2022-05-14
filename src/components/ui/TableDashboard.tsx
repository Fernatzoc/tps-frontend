import { Card } from "@mui/material";
import { DataGrid, esES, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { FC } from "react";

interface Props {
  data: any[];
  titles: String[];
}

export const TableDashboard: FC<Props> = ({data, titles}) => {

  let columns: GridColDef[] = titles.map((field: any) => {
    return {
      field: field,
      headerName: field.charAt(0).toUpperCase() + field.slice(1),
      minWidth: 150,
    };
  });

  return (
    <Card>
      <div style={{ height: 434, width: "100%" }}>
        <DataGrid
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Card>
  );
};
