import { FunctionComponent } from "react";

const Loader: FunctionComponent = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2"></div>
    </div>
  );
};

export default Loader;
