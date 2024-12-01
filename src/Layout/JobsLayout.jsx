import { Outlet } from "react-router-dom";

const JobsLayout = () => {
  return (
    <div>
      <h2 className="text-3xl text-center my-4 font-semibold">Jobs Offering</h2>
      <p className="text-center py-2">
        List of Jobs offering in our institute.
      </p>
      <Outlet />
    </div>
  );
};

export default JobsLayout;
