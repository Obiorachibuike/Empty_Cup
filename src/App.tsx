import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faImage,
  faMapPin,
  faHeart,
  faFilter,
  faPhone,
  faFlag,
  faChevronRight,
  faEyeSlash,
  faXmark,
  faStar,
  faStarHalfStroke,
  faSpinner,
  faExclamationCircle,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

// Import your components
import Rating from "./components/Rating";
import Stats from "./components/Stats";
import DesignerActions from "./components/Actions";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Details from "./components/Details";

// Main App component
const App = () => {
  const [designers, setDesigners] = useState([]);
  const [showShortlistedOnly, setShowShortlistedOnly] = useState(false);
  // MODIFIED: Initialize showDetails to an empty object, will populate in useEffect
  const [showDetails, setShowDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching data from a backend API
  useEffect(() => {
    const fetchDesigners = async () => {
      setLoading(true);
      setError(null);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const dummyData = [
          {
            id: "1",
            name: "Epic Designs",
            description:
              "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
            projects: 57,
            years: 8,
            price: "$$",
            phone1: "+91-984532853",
            phone2: "+91-984532854",
            shortlisted: false,
            rating: 3.5,
          },
          {
            id: "2",
            name: "Studio - D3",
            description:
              "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
            projects: 43,
            years: 6,
            price: "$$$",
            phone1: "+91-984532853",
            phone2: "+91-984532854",
            shortlisted: false,
            rating: 3.8,
          },
          {
            id: "3",
            name: "Creative Spaces",
            description:
              "Innovative designs for modern living, specializing in minimalist aesthetics.",
            projects: 30,
            years: 5,
            price: "$",
            phone1: "+91-987654321",
            phone2: "+91-987654322",
            shortlisted: false,
            rating: 5.0,
          },
          {
            id: "4",
            name: "Urban Interiors",
            description:
              "Transforming urban dwellings into functional and beautiful homes.",
            projects: 65,
            years: 10,
            price: "$$$",
            phone1: "+91-998877665",
            phone2: "+91-998877666",
            shortlisted: false,
            rating: 4.2,
          },
        ];
        setDesigners(dummyData);

        // MODIFIED: Initialize all designers to HIDE their details
        const initialShowDetails = {};
        dummyData.forEach(designer => {
          initialShowDetails[designer.id] = false; // Set to false initially
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

  const toggleShortlist = (id) => {
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

  const toggleDetails = (id) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // This correctly toggles true/false
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

                {/* Designer Rating */}
                <Rating rating={designer.rating} />

                {/* Designer Stats */}
                <Stats
                  projects={designer.projects}
                  years={designer.years}
                  price={designer.price}
                />

                {/* Collapsible Details Section */}
                {showDetails[designer.id] && (
                  <Details designer={designer} />
                )}
              </div>
              {/* Action Buttons - Ensure showDetailsState is passed */}
              <DesignerActions
                designer={designer}
                toggleDetails={toggleDetails}
                toggleShortlist={toggleShortlist}
                showDetailsState={showDetails[designer.id]} // Pass current details visibility state
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