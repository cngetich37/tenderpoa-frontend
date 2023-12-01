import { Link } from "react-router-dom";
import homepic from "../assets/homepic.png";
const Home = () => {
  const styles = {
    container: {
      backgroundImage: `url(${homepic})`,
      backgroundSize: "contain", // You can use 'contain' or a specific size as well
      height: "400px", // Adjust the height as needed
      // You can add more styling properties as per your requirements
    },
  };
  return (
    <>
      <main
        className="hero min-h-screen object-scale-down bg-white"
        style={styles.container}
      >
        <div className="hero-overlay bg-opacity-60">
          <div className="hero-content text-center">
            <div className="max-w-md font-serif">
              <h1 className="text-5xl font-bold text-white font-mono mt-8">
                TenderPoa
              </h1>
              <p className="py-8 text-white font-mono">
                Tender Poa is a new platform that makes tendering easy and
                elegant. It helps you to bid accurately, communicate smoothly,
                and evaluate proposals quickly. It eliminates the need for
                spreadsheets and emails, and gives you a digital dashboard to
                manage your bids. Tender Poa is designed to make tendering a
                beautiful and enjoyable process. Tender Poa is your ticket to a
                world of effortless vendor communication and proposal
                evaluation.
              </p>
              <Link
                to="/addtender"
                className="rounded-md text-md font-mono bg-[#800000] text-white hover:text-[#800000] hover:bg-gray-200 py-4 px-4"
              >
                Getting Started
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
