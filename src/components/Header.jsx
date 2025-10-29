const Header = ({ currentPage, onNavigate }) => {
  return (
    <header className="bg-gray-800 px-8 py-4 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1
          onClick={() => onNavigate('home')}
          className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition-colors"
        >
          Job Post Platform
        </h1>
        <nav>
          <ul className="flex gap-8 m-0 p-0 list-none">
            <li>
              <a
                href="#home"
                className={`px-4 py-2 rounded-md transition-all ${
                  currentPage === 'home'
                    ? 'text-blue-400 bg-blue-400/15 font-semibold'
                    : 'text-white hover:text-blue-400 hover:bg-blue-400/10'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#job-post"
                className={`px-4 py-2 rounded-md transition-all ${
                  currentPage === 'job-post'
                    ? 'text-blue-400 bg-blue-400/15 font-semibold'
                    : 'text-white hover:text-blue-400 hover:bg-blue-400/10'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('job-post');
                }}
              >
                Post a Job
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
