import { Link } from "react-router-dom";
import homepic from "../assets/homepic.png";
const Home = () => {
  const styles = {
    container: {
      backgroundImage: `url(${homepic})`,
      backgroundSize: 'contain', // You can use 'contain' or a specific size as well
      height: '400px', // Adjust the height as needed
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
              <h1 className="text-5xl font-bold text-white font-serif mt-8">
                Tender Poa
              </h1>
              <p className="py-8 text-white">
                Imagine a streamlined oasis for your bidding needs, where
                efficiency meets elegance. Tender Poa is your ticket to a world
                of effortless vendor communication and proposal evaluation.
                Picture a digital command center, where bids flow like a
                symphony, and you hold the conductor's baton. Say goodbye to the
                chaos of spreadsheets and emails, and say hello to a future
                where your tendering process is a work of art, all within a few
                clicks. This is the epitome of tendering sophistication, made
                simple for you.
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
