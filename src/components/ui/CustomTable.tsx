import { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Category, Product, Proveedor, Transaction, User } from "../../interfaces";

interface Props {
  deleteItem: (id: string) => void;
  data: User[] | Proveedor[] | Category[] | Product[] | Transaction[];
  titles: String[];
}

export const CustomTable: FC<Props> = ({ deleteItem, data, titles }) => {
  const dispatch = useDispatch();

  let columns: GridColDef[] = titles.map((field: any) => {
    return { field: field, headerName: field, minWidth: 150 };
  });

  columns = columns.concat(
    {
      field: "Editar",
      headerName: "Editar",
      sortable: false,
      width: 160,
      renderCell: (params: GridValueGetterParams) => (
        <Button
          color="warning"
          variant="contained"
          component={Link}
          to={`actualizar/${params.row.id}`}
          startIcon={<EditOutlinedIcon />}
        >
          Editar
        </Button>
      ),
    },
    {
      field: "Eliminar",
      headerName: "Eliminar",
      sortable: false,
      width: 160,
      renderCell: (params: GridValueGetterParams) => (
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            dispatch(deleteItem(params.row.id));
          }}
          startIcon={<DeleteIcon />}
        >
          Eliminar
        </Button>
      ),
    }
  );

  return (
    <div style={{ height: 380, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
