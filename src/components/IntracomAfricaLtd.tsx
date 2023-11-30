import Sidebar from "./Sidebar";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
// import data from "../assets/MOCK_DATA.json";
import axios from "axios";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";


const theme = createTheme({
  palette: {
    primary: {
      main: "#800000",
    },
    secondary: {
      main: "#510000",
    },
  },
});

export default function IntracomAfricaLtd() {
  const [tenderRows, setTenderRows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tenderpoa.onrender.com/api/tenders/intracom"
        );
        // Handle the successful response here
        console.log(response.data);
        setTenderRows(response.data);
      } catch (error) {
        // Handle errors here
        console.error("Error making GET request:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  const columns: GridColDef[] = [
    {
      field: "tenderNo",
      headerClassName: "super-app-theme--header",
      headerName: "Tender No",
      width: 130,
      editable: true,
    },
    {
      field: "tenderDescription",
      headerName: "Tender Description",
      headerClassName: "super-app-theme--header",
      width: 130,
      editable: true,
    },
    {
      field: "client",
      headerName: "Client",
      headerClassName: "super-app-theme--header",
      width: 130,
      editable: true,
    },
    {
      field: "siteVisitDate",
      headerName: "Site Visit Date",
      headerClassName: "super-app-theme--header",
      valueFormatter: (params) => dayjs(params.value).format("DD/MM/YYYY"),
      width: 130,
      editable: true,
    },
    {
      field: "timeExtension",
      headerName: "Time Extension",
      headerClassName: "super-app-theme--header",
      width: 130,
      editable: true,
    },
    {
      field: "bidSecurity",
      headerName: "Bid Security",
      headerClassName: "super-app-theme--header",
      width: 130,
      editable: true,
    },
    {
      field: "bidSourceInsurance",
      headerName: "Bid Source Insurance",
      headerClassName: "super-app-theme--header",
      width: 170,
      editable: true,
    },
    {
      field: "closingDateTime",
      headerName: "Closing Date Time",
      headerClassName: "super-app-theme--header",
      width: 130,
      valueFormatter: (params) => dayjs(params.value).format("DD/MM/YYYY"),
      editable: true,
    },
    {
      field: "location",
      headerName: "Location",
      headerClassName: "super-app-theme--header",
      width: 130,
      editable: true,
    },
    {
      field: "tenderValue",
      headerName: "Tender Value",
      headerClassName: "super-app-theme--header",
      type: "number",
      width: 130,
      editable: true,
    },
    {
      field: "dollarRate",
      headerName: "Dollar Rate",
      headerClassName: "super-app-theme--header",
      width: 130,
      editable: true,
    },

    {
      field: "company",
      headerName: "Company",
      headerClassName: "super-app-theme--header",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 160,
      editable: true,
    },
    {
      field: "tenderStatus",
      headerName: "Tender Status",
      headerClassName: "super-app-theme--header",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      editable: true,
    },
  ]; // Replace YourDataType with your actual data type

  return (
    <div className="flex bg-white">
      <div className="flex-none h-full">
        <Sidebar />
      </div>
      <div className="flex-1 w-48 h-full ml-6 mt-12 mr-6">
        <ThemeProvider theme={theme}>
          <Typography
            component="h1"
            variant="h6"
            align="center"
            color="primary"
            className="mb-4 pb-4"
          >
            Intracom Africa Ltd Pending Tenders
          </Typography>
          <Box
            sx={{
              height: 400,
              width: "100%",
              "& .super-app-theme--header": {
                backgroundColor: "#800000",
                color: "white",
              },
            }}
          >
            <DataGrid
              getRowId={(row) => row._id}
              editMode="row"
              rows={tenderRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10, 20]}
              slots={{ toolbar: GridToolbar }}
              checkboxSelection
            />
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
