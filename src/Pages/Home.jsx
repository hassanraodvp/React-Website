import "../index.css";
const Home = () => {
  return (
    <>
      <div
        className="relative isolate py-14 my-1 lg:px-8 sm:px-5"
        id="Home"
        style={{
          backgroundImage:
            "url('https://pikaso.cdnpk.net/private/production/1192098087/render.jpeg?token=exp=1762300800~hmac=700af4137a3a330920b43c59d27ef523a0559cf8d1727506f631be238f469028')",
        }}
      >
        <div
          className="absolute inset-x-0 -top-50 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-50"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-1 sm:py-14 lg:py-56">
          <div className=" sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 my-3 mx-2 text-center text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Visit my Github to explore the projects.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Visit GitHub <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h5
              className="font-semibold tracking-tight text-gray-900 sm:text-7xl backdrop-blur-lg rounded-xl"
              style={{ fontSize: "3rem", lineHeight: "1.2" }}
            >
              Welcome to my web application, Let&apos;s Explore it.
            </h5>
            <p
              className="mt-8 text-pretty text-lg font-medium text-white backdrop-blur-md rounded-lg"
              id="Home-description"
            >
              This application built using React.Js and Tailwind CSS. It
              features a responsive design that adapts to different screen
              sizes, and a clean and simple user interface. It also cover up the
              topic named <b>Routing in React.Js</b>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold border-2 border-solid border-gray-900 py-1.5 px-3 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
    </>
  );
};

export default Home;
