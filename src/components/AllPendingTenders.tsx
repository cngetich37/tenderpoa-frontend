import Sidebar from "./Sidebar";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import data from "../assets/MOCK_DATA.json";
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

const columns: GridColDef[] = [
  {
    field: "tender_no",
    headerClassName: "theme.palette.primary",
    headerName: "Tender No",
    width: 130,
  },
  { field: "tender_description", headerName: "Tender Description", width: 130 },
  { field: "client", headerName: "Client", width: 130 },
  {
    field: "site_visit_date",
    headerName: "Site Visit Date",
    width: 130,
    valueFormatter: (params) => dayjs(params.value).format("DD/MM/YYYY"),
  },
  { field: "time_extension", headerName: "Time Extension", width: 130 },
  { field: "bid_security", headerName: "Bid Security", width: 130 },
  {
    field: "bid_source_insurance",
    headerName: "Bid Source Insurance",
    width: 170,
  },
  {
    field: "closing_date_time",
    headerName: "Closing Date Time",
    width: 130,
    valueFormatter: (params) => dayjs(params.value).format("DD/MM/YYYY"),
  },
  { field: "location", headerName: "Location", width: 130 },
  {
    field: "tender_value",
    headerName: "Tender Value",
    type: "number",
    width: 130,
  },
  { field: "dollar_rate", headerName: "Dollar Rate", width: 130 },

  {
    field: "tender_document_from_client",
    headerName: "Tender Document",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

const rows = data;

export default function AllPendingTenders() {
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
            All Pending Tenders
          </Typography>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 20]}
              checkboxSelection
            />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}
