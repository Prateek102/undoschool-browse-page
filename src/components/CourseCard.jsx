// Icons as small SVG components for consistent styling
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
function CartIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
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

const INSTRUCTOR_AVATAR = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face';

export default function CourseCard({ course, variant = 'default' }) {
  const {
    title,
    instructor,
    image,
    sellingFast,
    rating,
    learners,
    tags,
    description,
    ageGroup,
    duration,
    price,
    startingAt,
  } = course;

  const showStartingAt = variant === 'webinar' && startingAt;

  return (
    <article className="group flex-shrink-0 w-[280px] sm:w-[304px] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-2 active:translate-y-0 transition-all duration-300 ease-out">
      <div className="relative aspect-[40/26] overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
        />
        {sellingFast && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-amber-500 text-white text-xs font-semibold shadow-md">
            Selling Fast
          </span>
        )}
        {/* Rating & learners overlay - top right */}
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-gray-600">
          <StarIcon className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-medium">
            {rating} | {learners} learners
          </span>
        </div>
      </div>
      <div className="p-5">
        {/* Tags: English (light blue), Intermediate (pink/purple), 4 classes (yellow-green) */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-medium border border-sky-200/60">
            {tags.language}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-medium border border-pink-200/60">
            {tags.level}
          </span>
          {showStartingAt ? (
            <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium border border-amber-200/60">
              Starting at {startingAt}
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full bg-lime-100 text-lime-700 text-xs font-medium border border-lime-200/60">
              {tags.classes} classes
            </span>
          )}
        </div>
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1.5 text-sm sm:text-base leading-snug">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-gray-500 line-clamp-2 mb-2">{description}</p>
        )}
        <div className="flex items-center gap-2 mb-4">
          <img
            src={INSTRUCTOR_AVATAR}
            alt=""
            className="w-6 h-6 rounded-full object-cover flex-shrink-0"
          />
          <span className="text-sm text-gray-600">By: {instructor}</span>
        </div>
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-100 gap-2">
          <span className="flex items-center gap-1">
            <PersonIcon />
            {ageGroup}
          </span>
          <span className="flex items-center gap-1">
            <ClockIcon />
            {duration}
          </span>
          <span className="font-semibold text-gray-900">₹ {price}</span>
          <button
            type="button"
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors ml-auto"
            aria-label="Add to cart"
          >
            <CartIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </article>
  );
}
