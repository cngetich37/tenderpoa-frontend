import Sidebar from "../components/Sidebar";

const AllTenders = () => {
  return (
    <div className="flex  bg-white">
      <div className="flex-none h-full">
        <Sidebar />
      </div>
      <div className="flex-1 w-48 h-full">All Tenders</div>
    </div>
  );
};

export default AllTenders;
