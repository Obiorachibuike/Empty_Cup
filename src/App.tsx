import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

// Import your components
import Rating from "./components/Rating";
import Stats from "./components/stats";
import DesignerActions from "./components/Actions";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Details from "./components/Details";

// rest of your code ...
// Type definition for a designer
interface Designer {
  id: string;
  name: string;
  description: string;
  projects: number;
  years: number;
  price: string;
  phone1: string;
  phone2: string;
  shortlisted: boolean;
  rating: number;
}

// Main App component
const App: React.FC = () => {
  const [designers, setDesigners] = useState<Designer[]>([]);
  const [showShortlistedOnly, setShowShortlistedOnly] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  
useEffect(() => {
  const fetchDesigners = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch from the actual API
      const response = await axios.get<Designer[]>("https://empty-cup-server.onrender.com");
      const designersData = response.data;

      setDesigners(designersData);

      // Initialize showDetails state based on fetched designers
      const initialShowDetails: Record<string, boolean> = {};
      designersData.forEach((designer) => {
        initialShowDetails[designer.id] = false;
      });
      setShowDetails(initialShowDetails);
    } catch (err) {
      setError("Failed to fetch designers. Please try again later.");
      console.error("Error fetching designers:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchDesigners();
}, []);

  const toggleShortlist = (id: string) => {
    setDesigners((prevDesigners) =>
      prevDesigners.map((designer) =>
        designer.id === id
          ? { ...designer, shortlisted: !designer.shortlisted }
          : designer
      )
    );
  };

  const toggleShortlistedFilter = () => {
    setShowShortlistedOnly((prevState) => !prevState);
  };

  const toggleDetails = (id: string) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const filteredDesigners = showShortlistedOnly
    ? designers.filter((designer) => designer.shortlisted)
    : designers;

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col items-center">
      <Header />
      <NavBar
        showShortlistedOnly={showShortlistedOnly}
        toggleShortlistedFilter={toggleShortlistedFilter}
      />

      <main className="w-full max-w-md p-4 space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-4 xl:grid-cols-3">
        {loading ? (
          <div className="col-span-full text-center p-8 bg-white rounded-xl shadow-md text-gray-600 flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              className="w-12 h-12 text-orange-500 mb-4"
            />
            <p className="text-lg font-semibold">Loading designers...</p>
          </div>
        ) : error ? (
          <div className="col-span-full text-center p-8 bg-red-100 rounded-xl shadow-md text-red-700">
            <FontAwesomeIcon
              icon={faXmark}
              className="w-12 h-12 mx-auto mb-4 text-red-500"
            />
            <p className="text-lg font-semibold">Error:</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        ) : filteredDesigners.length > 0 ? (
          filteredDesigners.map((designer) => (
            <div
              key={designer.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out flex"
            >
              <div className="border-r border-gray-200 flex-grow p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs font-medium">
                      <img
                        src={`https://placehold.co/48x48/CCCCCC/000000?text=${designer.name.charAt(
                          0
                        )}`}
                        alt={`${designer.name} profile`}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {designer.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {designer.description}
                      </p>
                    </div>
                  </div>
                </div>

                <Rating rating={designer.rating} />
                <Stats
                  projects={designer.projects}
                  years={designer.years}
                  price={designer.price}
                />
                {showDetails[designer.id] && <Details designer={designer} />}
              </div>

              <DesignerActions
                designer={designer}
                toggleDetails={toggleDetails}
                toggleShortlist={toggleShortlist}
                showDetailsState={showDetails[designer.id]}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center p-8 bg-white rounded-xl shadow-md text-gray-600">
            <FontAwesomeIcon
              icon={faXmark}
              className="w-12 h-12 mx-auto mb-4 text-gray-400"
            />
            <p className="text-lg font-semibold">No designers found.</p>
            {showShortlistedOnly && (
              <p className="text-sm mt-2">
                Try un-toggling the "Shortlisted" filter to see all designers.
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;