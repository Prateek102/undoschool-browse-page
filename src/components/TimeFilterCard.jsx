const INSTRUCTOR_AVATAR = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face';

function PersonIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );
}
function ClockIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function StarIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
function CartIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

export default function TimeFilterCard({ course }) {
  const { title, instructor, image, sellingFast, rating, learners, tags, ageGroup, duration, price } = course;
  const timeLabel = tags.timeLabel || 'Morning class';

  return (
    <article className="group flex-shrink-0 w-full min-w-[320px] sm:min-w-[420px] max-w-[520px] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1.5 active:translate-y-0 transition-all duration-300 ease-out flex flex-col sm:flex-row">
      <div className="relative w-full sm:w-44 h-44 sm:h-auto sm:min-w-[176px] overflow-hidden rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
        />
        {sellingFast && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-amber-500 text-white text-xs font-semibold shadow-md">
            Selling Fast
          </span>
        )}
      </div>
      <div className="flex-1 p-5 flex flex-col justify-center min-w-0">
        <div className="flex flex-wrap gap-2 mb-2.5">
          <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
            {tags.language}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-medium">
            {tags.level}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-medium">
            {timeLabel}
          </span>
        </div>
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1.5 text-sm sm:text-base leading-snug">
          {title}
        </h3>
        <div className="flex items-center gap-2 mb-1">
          <img src={INSTRUCTOR_AVATAR} alt="" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
          <span className="text-sm text-gray-600">By: {instructor}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <StarIcon className="w-4 h-4 text-amber-400" />
          <span>{rating} | {learners} learners</span>
        </div>
        <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-600 pt-3 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <PersonIcon />
            {ageGroup}
          </span>
          <span className="flex items-center gap-1">
            <ClockIcon />
            {duration}
          </span>
          <span className="font-semibold text-gray-900 ml-auto">₹ {price}</span>
          <button type="button" className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Add to cart">
            <CartIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </article>
  );
}
