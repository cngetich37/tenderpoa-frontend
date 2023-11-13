import Sidebar from "../components/Sidebar";

const DueTenders = () => {
  return (
    <div className="flex bg-white">
      <div className="flex-none h-full">
        <Sidebar />
      </div>
      <div className="flex-1 w-48 h-full">Due Tenders</div>
    </div>
  );
};

export default DueTenders;
