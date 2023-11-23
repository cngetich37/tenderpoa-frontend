import {Link} from "react-router-dom";
import homepic from "../assets/homepic.png"
const Home = () => {
  return (
    <>
      <main className="hero min-h-screen object-scale-down" style={{backgroundImage:`url(${homepic})`}}>
        <div className="hero-overlay bg-opacity-60">
          <div className="hero-content text-center">
            <div className="max-w-md font-serif">
              <h1 className="text-5xl font-bold text-white font-serif">
                Tender Poa
              </h1>
              <p className="py-8 text-white">
                Imagine a streamlined oasis for your bidding needs, where
                efficiency meets elegance. Tender Poa is your ticket to a world of
                effortless vendor communication and proposal evaluation. Picture a
                digital command center, where bids flow like a symphony, and you
                hold the conductor's baton. Say goodbye to the chaos of
                spreadsheets and emails, and say hello to a future where your
                tendering process is a work of art, all within a few clicks. This
                is the epitome of tendering sophistication, made simple for you.
              </p>
              <Link to="/addtender" className="btn bg-[#800000] text-white hover:text-white hover:bg-purple-400">Make a Bid</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
