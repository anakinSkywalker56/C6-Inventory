import React, { useState } from "react";

const Add = () => {
  const [showPopup, setShowpopup] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 transition h-10 w-25 rounded-xl text-white font-bold ml-5"
        onClick={() => setShowpopup(true)}
      >
        Add +
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-140 relative">
            <form action="">
              <div className="">
                <div className="">
                  <label
                    htmlFor=""
                    className="text-3xl text-blue-950 font-bold"
                  >
                    Field Name
                  </label>
                  <div className="mt-5 flex justify-center">
                    <input
                      type="text"
                      className="h-15 w-120 border-5 p-5 border-gray-400 focus:border-blue-500 focus:outline-none rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="flex justify-center gap-5">
              <button
                className="bg-red-500 h-16 w-34 rounded-xl hover:bg-red-700 transition text-white font-bold mt-10"
                onClick={() => setShowpopup(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 h-16 w-34 rounded-xl hover:bg-green-700 transition text-white font-bold mt-10"
                onClick={() => setShowpopup(false)}
              >
                Add
              </button>
            </div>
            <button
              className="absolute top-2 right-5 text-gray-600 hover:text-black font-bold"
              onClick={() => setShowpopup(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Add;
