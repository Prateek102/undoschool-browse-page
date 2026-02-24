import { useState } from 'react';
import { timeSlots } from '../data/ages';

function SunIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
function MoonIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

export default function TimeChips() {
  const [selected, setSelected] = useState('morning');

  return (
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8 sm:mb-8">
      {timeSlots.map((slot) => {
        const isActive = selected === slot.id;
        return (
          <button
            key={slot.id}
            type="button"
            onClick={() => setSelected(slot.id)}
            className={`
              flex-shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-2xl text-left transition-all duration-200 ease-out min-w-[160px] sm:min-w-[180px]
              ${isActive
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25 ring-2 ring-violet-400 ring-offset-2 ring-offset-gray-50 scale-[1.02]'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-violet-300 hover:bg-violet-50/80 hover:shadow-sm active:scale-[0.98]'
              }
            `}
          >
            {slot.icon === 'sun' ? (
              <SunIcon className={isActive ? 'text-white' : 'text-amber-500'} />
            ) : (
              <MoonIcon className={isActive ? 'text-white' : 'text-indigo-400'} />
            )}
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{slot.label}</span>
              <span className={`text-xs ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                {slot.sublabel}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
