// Simple icon components for category cards (line-art style)
function LaptopIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function MicIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v7m0 0v-7m0 7a7 7 0 01-7-7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75" />
    </svg>
  );
}
function ChessIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
function BookIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}
function PhoneIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}
function MathIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

const iconMap = { laptop: LaptopIcon, mic: MicIcon, chess: ChessIcon, book: BookIcon, phone: PhoneIcon, math: MathIcon };

export default function CategoryCard({ category }) {
  const { label, icon, highlighted } = category;
  const IconComponent = iconMap[icon] || LaptopIcon;

  return (
    <button
      type="button"
      className={`
        flex-shrink-0 flex flex-col sm:flex-row items-center justify-center gap-3 w-[140px] sm:w-[180px] min-h-[94px] sm:min-h-[100px] px-4 py-4 rounded-2xl font-medium text-sm transition-all duration-300 ease-out
        ${highlighted
          ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]'
          : 'bg-white text-gray-800 border border-gray-100 shadow-sm hover:shadow-md hover:border-violet-200 hover:-translate-y-1 hover:bg-violet-50/50 active:translate-y-0'
        }
      `}
    >
      <IconComponent className={`flex-shrink-0 ${highlighted ? 'w-10 h-10' : 'w-10 h-10 text-gray-600'}`} />
      <span className="truncate text-left">{label}</span>
    </button>
  );
}
