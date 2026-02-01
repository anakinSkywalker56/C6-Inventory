import Header from "../../Components/General/Header";

const FrontPage = () => {
  return (
    <div className="flex">
      <div className="flex h-full w-screen justify-center items-center">
        <div className="text-2xl">
          <Header />
          <div className="flex flex-col gap-5 justify-center items-center w-screen h-screen">
            <div className="h-40 w-120 bg-blue-500 text-4xl flex justify-center items-center text-white rounded-2xl">
              Create New Database
            </div>
            <div className="h-40 w-120 bg-green-500 text-4xl flex justify-center items-center text-white rounded-2xl">
              Open Existing Database
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
