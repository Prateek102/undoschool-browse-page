export default function TeacherCard({ teacher }) {
  const { name, image, credentials, experience, studentsCount, subject } = teacher;

  return (
    <article className="group flex-shrink-0 w-[200px] sm:w-[220px] min-h-[210px] flex flex-col items-center text-center pt-12 pb-0 px-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1.5 transition-all duration-300">

      {/* Avatar inside flow */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-md -mt-12 bg-white">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mt-3 leading-snug">
        {name}
      </h3>

      {/* Credentials + Experience */}
      <div className="flex flex-wrap items-center justify-center gap-1 text-xs text-gray-600 mt-1">
        <span>{credentials}</span>
        <span className="w-px h-3 bg-gray-300" />
        <span>{experience}</span>
      </div>

      {/* Students */}
      <p className="text-xs text-gray-500 mt-1">
        {studentsCount}
      </p>

      {/* Subject */}
      <span className="mt-3 px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium group-hover:bg-gray-200 transition-colors duration-200">
        {subject}
      </span>
    </article>
  );
}
