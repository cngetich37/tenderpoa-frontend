import Sidebar from "../components/Sidebar";

const AlreadyBidded = () => {
  return (
    <div className="flex bg-white">
      <div className="flex-none h-full">
        <Sidebar />
      </div>
      <div className="flex-1 w-48 h-full">Already Bidded</div>
    </div>
  );
};

export default AlreadyBidded;
