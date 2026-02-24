import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Course" },
  { id: "about", label: "About" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
          >
            Undo School
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative text-sm font-semibold py-2 transition-colors duration-200 ${
                  active === item.id
                    ? "text-violet-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 w-full rounded-full bg-violet-600 transition-transform duration-300 origin-left ${
                    active === item.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Right Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-4 py-2.5 rounded-lg hover:bg-gray-100">
              Login
            </button>

            <button className="text-sm font-semibold text-white px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 shadow-md hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 transition-all duration-200">
              Register for free
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">

            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleLinkClick}
                className={`block text-sm font-semibold ${
                  active === item.id
                    ? "text-violet-600"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-100">
              <button className="w-full text-left text-sm font-medium text-gray-700 py-2">
                Login
              </button>

              <button className="w-full mt-2 text-sm font-semibold text-white px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600">
                Register for free
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}