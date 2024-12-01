const About = () => {
  return (
    <>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className=" rounded-xl object-cover"
                  src="https://images.unsplash.com/photo-1524135329990-07660cd5bf10?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="about Us image"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="about Us image"
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    MERN Stack Developer
                  </h2>
                  <p className="text-gray-500 text-start font-normal leading-relaxed lg:text-start">
                    As a MERN stack developer, I specialize in building
                    full-stack web applications using MongoDB, Express.js,
                    React, and Node.js. I handle everything from designing
                    intuitive front-end user interfaces to developing robust
                    back-end APIs and managing database operations. My expertise
                    lies in delivering dynamic, scalable, and high-performance
                    solutions by leveraging the JavaScript ecosystem across the
                    entire stack. This unified approach ensures efficient and
                    seamless application development.
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      15+
                    </h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Month&apos;s of Experience
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      12+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Successful Projects
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      20+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  <a
                    href="https://github.com/hassanraodvp"
                    target="_blank"
                    className="text-white"
                  >
                    Visit My Repo.
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
