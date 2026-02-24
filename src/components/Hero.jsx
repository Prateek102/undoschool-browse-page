export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5 sm:mb-6">
            Learn a New Skill
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-amber-300 leading-snug mb-10 sm:mb-12">
            Everyday, Anytime, and Anywhere.
          </p>
          <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto">
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                placeholder="What do you want to learn today?"
                className="flex-1 w-full pl-12 pr-5 py-3.5 rounded-2xl border-0 bg-white/95 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/60 focus:outline-none text-sm sm:text-base shadow-lg transition-shadow duration-200"
                aria-label="Search courses"
              />
            </div>
            <button
              type="button"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span className="sr-only">Search</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
