import { useNavigate } from "react-router";

const Cancel = () => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-red-500 h-16 w-64 rounded-xl hover:bg-red-700 transition text-white font-bold ml-5"
      onClick={() => navigate(-1)}
    >
      Cancel
    </button>
  );
};

export default Cancel;
