import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  esES,
} from "@mui/x-data-grid";

interface Props {
  deleteItem: (id: string) => void;
  data: any[];
  titles: String[];
  view?: boolean;
}

interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}

function escapeRegExp(value: string): string {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

const QuickSearchToolbar = (props: QuickSearchToolbarProps) => {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Buscar..."
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />
    </Box>
  );
};

export const CustomTable: FC<Props> = ({ deleteItem, data, titles, view }) => {
  const dispatch = useDispatch();

  let columns: GridColDef[] = titles.map((field: any) => {
    return {
      field: field,
      headerName: field.charAt(0).toUpperCase() + field.slice(1),
      minWidth: 150,
    };
  });

  if (view) {
    columns = columns.concat(
      {
        field: "Ver",
        headerName: "Ver",
        sortable: false,
        width: 160,
        renderCell: (params: GridValueGetterParams) => (
          <Button
            color="success"
            variant="contained"
            component={Link}
            to={`${params.row.id}`}
            startIcon={<RemoveRedEyeOutlinedIcon />}
          >
            Ver
          </Button>
        ),
      }
    );
  }

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


  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState<any[]>(data);

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = data.filter((row: any) => {
      return Object.keys(row).some((field: any) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  useEffect(() => {
    setRows(data);
  }, [data]);

  return (
    <div style={{ height: 380, width: "100%" }}>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
              requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
          },
        }}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
