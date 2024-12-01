const Projects = () => {
  return (
    <>
      <div className="text-center shadow-lg w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto py-3 rounded-full text-4xl my-10 font-bold">
        <h2 className="text-sm sm:text-base md:text-lg">On Server Side</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 sm:mx-8 lg:mx-20">
        <div className="shadow-lg">
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/556/958/desktop-wallpaper-react-js-mern-stack.jpg"
            alt="Node.Js"
            className="rounded-lg"
          />
          <h2 className="text-start px-2 py-2 text-lg font-semibold">
            Node.Js
          </h2>
          <p className="text-start px-2 py-2 text-sm text-gray-600">
            Node.js is a JavaScript runtime built on Chrome&#39;s V8 engine that
            allows developers to execute JavaScript on the server side...
          </p>
        </div>
        <div className="shadow-lg">
          <img
            src="https://img2.helpnetsecurity.com/posts2023/PostgreSQL-650.jpg"
            alt="PostgreSQL"
            className="rounded-lg"
          />
          <h2 className="text-start px-2 py-2 text-lg font-semibold">
            PostgreSQL
          </h2>
          <p className="text-start px-2 py-2 text-sm text-gray-600">
            PostgreSQL is a powerful, open-source relational database management
            system known for its reliability...
          </p>
        </div>
        <div className="shadow-lg">
          <img
            src="https://securereading.com/wp-content/uploads/2023/12/Add-a-subheading.png"
            alt="MongoDB"
            className="h-60 rounded-lg w-full"
          />
          <h2 className="text-start px-2 py-2 text-lg font-semibold">
            MongoDB
          </h2>
          <p className="text-start px-2 py-2 text-sm text-gray-600">
            MongoDB is a NoSQL database that stores data in a flexible,
            JSON-like format called BSON...
          </p>
        </div>
      </div>

      <div className="text-center shadow-lg w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto py-3 rounded-full my-16 text-4xl font-bold">
        <h2 className="text-sm sm:text-base md:text-lg">On Client Side</h2>
      </div>

      {/* Client Side Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 sm:mx-8 lg:mx-20 py-6">
        <div className="shadow-lg">
          <img
            src="https://wallpapercave.com/wp/wp4923981.jpg"
            alt="React.Js"
            className="rounded-lg"
          />
          <h2 className="text-start px-2 py-2 text-lg font-semibold">
            React.Js
          </h2>
          <p className="text-start px-2 py-2 text-sm text-gray-600">
            React.js is a JavaScript library for building user interfaces,
            primarily for single-page applications...
          </p>
        </div>
        <div className="shadow-lg">
          <img
            src="https://wallpapercave.com/wp/wp13639444.png"
            alt="Tailwind CSS"
            className="rounded-lg"
          />
          <h2 className="text-start px-2 py-2 text-lg font-semibold">
            Tailwind CSS
          </h2>
          <p className="text-start px-2 py-2 text-sm text-gray-600">
            Tailwind CSS is a utility-first CSS framework that provides a
            collection of pre-designed classes...
          </p>
        </div>
        <div className="shadow-lg">
          <img
            src="https://wallpapercave.com/wp/wp11723530.jpg"
            alt="HTML / CSS & JavaScript"
            className="rounded-lg"
          />
          <h2 className="text-start px-2 py-2 text-lg font-semibold">
            HTML / CSS & JavaScript
          </h2>
          <p className="text-start px-2 py-2 text-sm text-gray-600">
            HTML structures the content of web pages, CSS styles these elements,
            and JavaScript adds interactivity...
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
