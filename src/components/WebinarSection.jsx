import { useRef, useState, useEffect } from 'react';
import CourseCard from './CourseCard';



export default function WebinarSection({ courses }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);
    updateScrollState();
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [courses.length]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section className="py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative header: dotted lines, diamond, title, alarm icon */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-5 sm:mb-6">
          <div className="flex-1 max-w-[120px] sm:max-w-[200px] h-px border-t-2 border-dashed border-gray-300" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 bg-violet-500 rounded-sm flex-shrink-0" />
          <h2 className="text-2xl sm:text-2xl  text-gray-900 text-center flex-shrink-0">
            Webinar starting within 24 hrs
          </h2>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 bg-violet-500 rounded-sm flex-shrink-0" />
          <div className="flex-1 max-w-[120px] sm:max-w-[200px] h-px border-t-2 border-dashed border-gray-300" />
          <div className="flex-shrink-0 text-gray-400">
        
          </div>
        </div>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth-x pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} variant="webinar" />
            ))}
          </div>
          {courses.length > 0 && (
            <div className="flex justify-end mt-2 pr-2">
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
