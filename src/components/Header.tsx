interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  return (
    <header className="bg-gray-800 px-8 py-4 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => onNavigate('home')}
          className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition-colors bg-transparent border-0 p-0"
        >
          Job Post Platform
        </button>
        <nav>
          <ul className="flex gap-4 m-0 p-0 list-none">
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
                href="#admin"
                className={`px-4 py-2 rounded-md transition-all ${
                  currentPage.startsWith('admin')
                    ? 'text-purple-400 bg-purple-400/15 font-semibold'
                    : 'text-white hover:text-purple-400 hover:bg-purple-400/10'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('admin/job-posts');
                }}
              >
                Admin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
