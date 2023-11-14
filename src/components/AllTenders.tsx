import Sidebar from "../components/Sidebar";
import DataTable, { TableColumn,createTheme } from "react-data-table-component";
import data from "../assets/MOCK_DATA.json";

interface DataRow {
  id: number;
  tender_no: string;
  tender_description: string;
  client: string;
  // company:string;
  // status:string;
  site_visit_date: string;
  time_extension: number;
  bid_security: string;
  bid_source_insurance: string;
  closing_date_time: string;
  location: string;
  tender_value: number;
  tender_document_from_client: boolean;
  filled_scanned_tender_softcopy: boolean;
  month: string;
  year: number;
  dollar_rate: number;
}

const columns: TableColumn<DataRow>[] = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Tender No.",
    selector: (row) => row.tender_no,
    sortable: true,
  },
  {
    name: "Tender Description",
    selector: (row) => row.tender_description,
    sortable: true,
  },
  {
    name: "Client",
    selector: (row) => row.client,
    sortable: true,
  },
  // {
  //   name:'Company',
  //   selector:row => row.company,
  // },
  // {
  //   name:'Status',
  //   selector:row => row.status,
  // },
  {
    name: "Site Visit Date",
    selector: (row) => row.site_visit_date,
    sortable: true,
  },
  {
    name: "Time Extension",
    selector: (row) => row.time_extension,
    sortable: true,
  },
  {
    name: "Bid Security",
    selector: (row) => row.bid_security,
    sortable: true,
  },
  {
    name: "Bid Source/Insurance",
    selector: (row) => row.bid_source_insurance,
    sortable: true,
  },
  {
    name: "Closing Date Time",
    selector: (row) => row.closing_date_time,
    sortable: true,
  },
  {
    name: "Location",
    selector: (row) => row.location,
    sortable: true,
  },
  {
    name: "Tender Value",
    selector: (row) => row.tender_value,
    sortable: true,
  },
  {
    name: "Tender Document From Client",
    selector: (row) => row.tender_document_from_client,
    sortable: true,
  },
  {
    name: "Filled Scanned/Tender SoftCopy",
    selector: (row) => row.filled_scanned_tender_softcopy,
    sortable: true,
  },
  {
    name: "Month",
    selector: (row) => row.month,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Dollar Rate",
    selector: (row) => row.dollar_rate,
    sortable: true,
  },
];

const paginationComponentOptions = {
  rowsPerPageText: "AllTenders",
  rangeSeparatorText: "of",
  selectAllRowsItem: true,
  noRowsPerPage: false,
  // selectAllRowsItemText: 'Todos',
};

const customStyles = {
  rows: {
    style: {
      minHeight: "80px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

createTheme(
  "solarized",
  {
    text: {
      primary: "#800000",
      secondary: "#510000",
    },
    background: {
      default: "#FFFFFF",
    },
    context: {
      background: "#510000",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    button: {
      default: "#800000",
      hover: "rgba(0,0,0,.08)",
      focus: "rgba(255,255,255,.12)",
      disabled: "rgba(255, 255, 255, .34)",
    },
    sortFocus: {
      default: "#2aa198",
    },
  },
  "light"
);

const AllTenders = (): JSX.Element => {
  return (
    <div className="flex bg-white">
      <div className="flex-none h-full">
        <Sidebar />
      </div>
      <div className="flex-1 justify-center w-48 h-full overflow-x-auto">
        <div className=" text-white mb-4 py-6 px-12 mt-4">
          <DataTable
            columns={columns}
            data={data}
            dense
            striped
            title="All Tenders"
            responsive
            highlightOnHover
            pagination
            paginationComponentOptions={paginationComponentOptions}
            customStyles={customStyles}
            theme="solarized"
          />
        </div>
      </div>
    </div>
  );
};

export default AllTenders;
