export default function Footer() {
  return (
    <footer
      id="about"
      className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-16 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              Undo School
            </h3>
            <p className="text-sm text-gray-400 mt-3">
              Making learning fun, engaging, and accessible for every child.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#courses" className="hover:text-white">Coding</a></li>
              <li><a href="#courses" className="hover:text-white">Public Speaking</a></li>
              <li><a href="#courses" className="hover:text-white">Chess</a></li>
              <li><a href="#courses" className="hover:text-white">App Building</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#courses" className="hover:text-white">Courses</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Subscribe
            </h4>
            <p className="text-sm text-gray-400 mb-3">
              Get updates on new courses.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 text-sm rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button className="px-4 py-2 text-sm bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-r-lg hover:opacity-90">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Undo School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}