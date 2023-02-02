import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const Shareholders = ({ shareholders, onDelete }) => {
  const COLUMNS = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      //renderCell: (params) => <p>{params.row.lname}</p>,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "business_registration",
      headerName: "Businessregistration",
      flex: 1,
    },
    {
      field: "ownership_type",
      headerName: "Ownership Type",
      flex: 1,
    },
    {
      field: "share_count",
      headerName: "Share Count",
      flex: 1,
    },
    {
      field: "value_per_share",
      headerName: "Value per Share",
      flex: 1,
    },
    {
      field: "share_class",
      headerName: "Share Class",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "",
      flex: 1,
      renderCell: (params) => (
        <Button color="error" variant="contained" onClick={onDelete.bind(null, params.row.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <DataGrid sx={{ minHeight: 400 }} columns={COLUMNS} rows={shareholders} />
  );
};

export default Shareholders;
