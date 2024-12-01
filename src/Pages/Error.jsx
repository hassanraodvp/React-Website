import { useRouteError } from "react-router-dom";
import "../index.css";
const Error = () => {
  const error = useRouteError();
  return (
    <>
      <div className="container h-screen" id="err">
        <b className="text-danger">Error Occurred: </b>{" "}
        <span> {error.message}</span>
      </div>
    </>
  );
};

export default Error;
