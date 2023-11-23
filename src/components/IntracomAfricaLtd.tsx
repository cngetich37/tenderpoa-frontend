import Sidebar from "./Sidebar";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import data from "../assets/MOCK_DATA.json";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// tenderNo:
// tenderDescription:
// client:,
// siteVisitDate:
// timeExtension: 5,
// bidSecurity: "",
// bidSourceInsurance: "",
// closingDateTime: new Date(),
// location: "",
// tenderValue: 10000,
// dollarRate: 151.55,
// company: "",
// tenderFile: File,
// status: "Not Bidded",

// "filled_scanned_tender_softcopy":false,"month":"October","year":2023,"dollar_rate":146.48},
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

const rows = data;

export default function IntracomAfricaLtd() {
  const columns: GridColDef[] = [
    {
      field: "tender_no",
      headerClassName: "super-app-theme--header",
      headerName: "Tender No",
      width: 130,
      editable: true,
    },
    {
      field: "tender_description",
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
      field: "site_visit_date",
      headerName: "Site Visit Date",
      headerClassName: "super-app-theme--header",
      width: 130,
      editable: true,
    },
    {
      field: "time_extension",
      headerName: "Time Extension",
      headerClassName: "super-app-theme--header",
      width: 130,
      editable: true,
    },
    {
      field: "bid_security",
      headerName: "Bid Security",
      headerClassName: "super-app-theme--header",
      width: 130,
      editable: true,
    },
    {
      field: "bid_source_insurance",
      headerName: "Bid Source Insurance",
      headerClassName: "super-app-theme--header",
      width: 170,
      editable: true,
    },
    {
      field: "closing_date_time",
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
      field: "tender_value",
      headerName: "Tender Value",
      headerClassName: "super-app-theme--header",
      type: "number",
      width: 130,
      editable: true,
    },
    {
      field: "dollar_rate",
      headerName: "Dollar Rate",
      headerClassName: "super-app-theme--header",
      width: 130,
      editable: true,
    },

    {
      field: "tender_document_from_client",
      headerName: "Tender Document",
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
            variant="h4"
            align="center"
            color="primary"
            className="mb-4 pb-4"
          >
            Intracom Africa Ltd
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
              editMode="row"
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10, 20]}
              slots={{ toolbar: GridToolbar }}
            />
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
