// components/Footer.js

const Footer = () => {
    return (
      <footer className="py-8 text-white bg-gray-900 px-36">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Mr UNI</h2>
              <p className="text-gray-400">Your company's tagline or mission statement.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition duration-300 hover:text-white">About</a>
              <a href="#" className="text-gray-400 transition duration-300 hover:text-white">Services</a>
              <a href="#" className="text-gray-400 transition duration-300 hover:text-white">Contact</a>
            </div>
          </div>
          <div className="pt-4 mt-6 text-center border-t border-gray-700">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Mr UNI All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  