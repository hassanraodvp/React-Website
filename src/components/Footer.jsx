const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900 mt-16">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
          {/* Footer Top Section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            {/* Logo Section */}
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://w0.peakpx.com/wallpaper/410/412/HD-wallpaper-plain-black-black.jpg"
                  className="h-10 w-10 rounded-full mt-5 me-4 md:me-10"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>
            {/* Links Section */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
              {/* Resources Section */}
              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Documentation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              {/* Follow Us Section */}
              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a
                      href="https://github.com/hassanraodvp"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/hassandev-ai/"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              {/* Legal Section */}
              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Divider */}
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          {/* Footer Bottom Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 text-center dark:text-gray-400">
              © 2024 by{" "}
              <a href="#" className="hover:underline">
                Hassan Akhtar ᴴᴬ
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
