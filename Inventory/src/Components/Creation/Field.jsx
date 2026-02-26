import { useNavigate } from "react-router";

const Field = () => {
  const navigate = useNavigate();

  return (
    <div className="w-relative h-28 p-4 pl-12 bg-white flex items-center rounded-2xl">
      <div className="text-3xl font-bold text-blue-950  w-full h-full flex items-center">
        Name
      </div>
      <div className="flex justify-end w-full ">
        <button
          className="bg-blue-500 h-16 w-64 rounded-xl hover:bg-blue-700 transition text-white font-bold ml-5"
          onClick={() => navigate(-1)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 h-16 w-64 rounded-xl hover:bg-red-700 transition text-white font-bold ml-5"
          onClick={() => navigate(-1)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Field;
