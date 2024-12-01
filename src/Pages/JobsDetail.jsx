import { useLoaderData } from "react-router-dom";

const JobsDetail = () => {
  const jobDetail = useLoaderData();

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto bg-white  border border-gray-200 rounded-lg shadow">
        {/* <a href="#">
          <img className="p-8 rounded-md" src={jobDetail.img} alt="image" />
        </a> */}
        <div className="px-5 py-5">
          <h5 className="text-xl py-2 tracking-tight text-gray-900 ">
            <b>Name: </b> {jobDetail.name}
          </h5>
          <h5 className="text-xl py-2 tracking-tight text-gray-900 ">
            <b>Location: </b> {jobDetail.Location}
          </h5>
          <h5 className="text-xl py-2 tracking-tight text-gray-900 ">
            <b>Expertise: </b> {jobDetail.Expertise}
          </h5>
          <h5 className="text-xl py-2 tracking-tight text-gray-900 ">
            <b>Salary: </b> {jobDetail.Salary}
          </h5>
          <p className="text-xl py-2 tracking-tight text-gray-900 ">
            <b>Description:</b> {jobDetail.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default JobsDetail;

export const JobsDetailLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:5000/jobs/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch job details");
  }
  return response.json();
};
