import { useLoaderData, Link } from "react-router-dom";

const Jobs = () => {
  const JobsData = useLoaderData();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
        {JobsData.map((item, index) => {
          return (
            <Link to={`/jobs/${item.id}`} key={index}>
              <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-sm" src={item.img} alt={item.name} />
                </a>
                <div className="p-4">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    <span className="text-gray-900 font-medium">Position</span>:{" "}
                    {item.name}
                  </h5>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    <span className="text-gray-900 text-xl font-medium">
                      Location
                    </span>
                    : {item.Location}
                  </h5>
                  {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <span className="text-gray-900 text-xl font-medium">
                      Expertise:{" "}
                    </span>
                    {item.Expertise}
                  </p> */}
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <span className="text-gray-900 text-xl font-medium">
                      Salary:{" "}
                    </span>
                    {item.Salary}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Jobs;

export const JobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  return res.json();
};
