import { useRef, useState, useEffect } from 'react';
import CourseCard from './CourseCard';

export default function CourseRow({ title, subtitle, courses, variant = 'default' }) {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollPosition(el.scrollLeft);
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
    const step = 320;
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  const total = courses.length;
  const cardWidth = 304;
  const currentIndex = total > 0 ? Math.min(Math.round(scrollPosition / cardWidth) + 1, total) : 0;

  return (
    <section className="py-8 sm:py-10 lg:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-6">
          <h2 className="font-poppins text-[46px] font-normal  text-xl sm:text-2xl  text-gray-900 inline-flex items-center gap-1.5">
            {title}
            <span className="text-amber-400" aria-hidden>⭐</span>
          </h2>
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1.5">{subtitle}</p>
          )}
        </div>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth-x pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} variant={variant} />
            ))}
          </div>
          {/* Scroll arrows + position */}
          {total > 0 && (
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-sm font-medium text-gray-600 tabular-nums">
                {currentIndex}/{total}
              </span>
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
