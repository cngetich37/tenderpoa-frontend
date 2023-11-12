import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
  {
    name: "First Name",
    selector: (row: any) => row.first_name,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row: any) => row.last_name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
    sortable: true,
  },
];
const AllTenders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const fetchUsers = async (page: any) => {
    setLoading(true);

    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`
    );

    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  const handlePageChange = (page: any) => {
    fetchUsers(page);
  };

  const handlePerRowsChange = async (newPerPage: any, page: any) => {
    setLoading(true);

    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`
    );

    setData(response.data);
    setPerPage(newPerPage);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers(1); // fetch page 1 of users
  }, []);

  return (
    <div className="min-h-full bg-gray-200">
      <form className="card-body">
        <div className="flex gap-2 justify-end items-start">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#800000] text-sm font-semibold">
                Search
              </span>
            </label>
            <input
              type="text"
              placeholder="search"
              className="input bg-white input-primary w-full max-w-md lg:w-screen text-black"
              required
            />
          </div>
          <div className="">
            <div className="form-control mt-9">
              <button className="btn bg-[#000080]  text-white hover:bg-zinc-500 mb-0">
                search
              </button>
            </div>
          </div>
        </div>
      </form>

      <DataTable
        title="Users"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
      />
    </div>
  );
};

export default AllTenders;
