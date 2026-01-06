import { PacmanLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className={`flex justify-center items-center fixed bottom-0 bg-white h-[100vh] w-[100vw] mx-auto z-50 `}
    >
      <PacmanLoader color="#1e40af" speedMultiplier={2} size={80} />
    </div>
  );
};

export default Loading;
