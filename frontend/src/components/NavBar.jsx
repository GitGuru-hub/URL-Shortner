import { Link } from '@tanstack/react-router';

const Navbar = () => {
  return (
    <nav className="bg-white border border-b-black">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-bold text-gray-800">
              URL Shortener
            </Link>
            <Link to="/dashboard" className="text-xl font-bold text-gray-800">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;