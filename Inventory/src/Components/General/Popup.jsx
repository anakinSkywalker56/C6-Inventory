import React, { useState } from "react";
import { useNavigate } from "react-router";

const Popup = () => {
  const [showPopup, setShowpopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="bg-green-500 h-16 w-64 rounded-xl hover:bg-green-700 transition text-white font-bold ml-5"
        onClick={() => setShowpopup(true)}
      >
        Create
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 pl-16 pr-16 w-150 relative">
            <div className="flex w-relative h-8  justify-center">
              <h2 className="text-xl font-bold mb-4 text-blue-950 ">
                SAVE THE CODE
              </h2>
            </div>
            <div className="flex w-relative h-full justify-center">
              <h2 className="text-8xl font-bold text-blue-950  mb-4">Z7M2A</h2>
            </div>
            <div className="flex w-relative h-full  justify-center">
              <p className="mb-4 text-center font-bold text-red-500">
                The code cannot be retrieved in the future, please take a
                permanent record of it. This will be used to retrieve a
                Database.
              </p>
            </div>
            <form action="" className="">
              <label htmlFor="" className="text-3xl text-blue-950 font-bold">
                Retype Code
              </label>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Z7M2A"
                  className="h-15 w-full border-5 p-5 border-gray-400 focus:border-blue-500 focus:outline-none rounded-xl text-blue-950 "
                />
              </div>
            </form>
            <div className="flex w-relative h-full justify-center mt-4">
              <button
                className="bg-gray-400 h-16 w-64 rounded-xl hover:bg-red-700 transition text-white font-bold ml-5"
                onClick={() => navigate("/")}
              >
                (0) OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
