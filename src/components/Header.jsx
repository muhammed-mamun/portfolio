
const Header = () => {
 return (
    <div className="navbar bg-gradient-to-b from-zinc-900 to-zinc-900/0 ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-gradient-to-b from-zinc-900 to-zinc-900/0 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Mamun</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a href="#contact"  className=" hidden lg:btn">Contact</a>
    </div>
  </div>
  );
};

export default Header;


