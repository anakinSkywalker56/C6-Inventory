import Header from "../../Components/General/Header";

const CreateDB = () => {
  return (
    <div className="flex">
      <div className="flex h-full w-screen justify-center items-center">
        <div className="text-2xl">
          <Header />
          <div className="flex w-screen h-215 justify-center items-center">
            <div className="w-460 h-200  border border-gray-300 rounded-2xl shadow-2xl">
              <div className="text-4xl mt-10 ml-15 text-blue-950 font-bold">
                Database Information
              </div>
              <div className="w-460 justify-center flex">
                <div className="h-2 w-430 bg-blue-500 rounded-2xl mt-3"></div>
              </div>
              <div className="w-460 justify-center flex ">
                <div className="mt-10 h-150 w-430  flex">
                  <div className="h-150 w-150 ">
                    <form action="">
                      <div className="">
                        <div>
                          <label
                            htmlFor=""
                            className="text-3xl text-blue-950 font-bold"
                          >
                            Database Name
                          </label>
                          <div className="w-150 flex justify-center mt-5">
                            <input
                              type="text"
                              className="h-15 w-150 border-5 p-5 border-gray-400 focus:border-blue-500 focus:outline-none rounded-xl"
                              placeholder="Database Name"
                            />
                          </div>
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor=""
                            className="text-3xl text-blue-950 font-bold"
                          >
                            Description
                          </label>
                          <div className="w-150 flex justify-center mt-5">
                            <textarea
                              className="h-50 w-150 border-5 p-5 border-gray-400 focus:border-blue-500 focus:outline-none rounded-xl"
                              placeholder="Database Name"
                              rows={4}
                            />
                          </div>
                        </div>
                        <div className="mt-10">
                          <label
                            htmlFor=""
                            className="text-3xl text-blue-950 font-bold"
                          >
                            Database Name
                          </label>
                          <div className="w-150 flex justify-center mt-5">
                            <input
                              type="text"
                              className="h-15 w-150 border-5 p-5 border-gray-400 focus:border-blue-500 focus:outline-none rounded-xl"
                              placeholder="Database Name"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="ml-10 h-150 w-270 bg-green-500">
                    <div>
                      <div className="text-3xl font-bold text-blue-950">
                        Fields
                      </div>
                      <button className="bg-blue-500 h-10 w-25 rounded-xl text-white font-bold">
                        Add +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDB;
