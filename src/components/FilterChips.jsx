import { useState } from 'react';
import { ageGroups } from '../data/ages';

export default function FilterChips() {
  const [selected, setSelected] = useState(null);

  const select = (label) => {
    setSelected((prev) => (prev === label ? null : label));
  };

  return (
    <section className="pt-8 pb-6 sm:pt-10 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className=" font-poppins text-[46px] font-normal leading-none text-xl sm:text-2xl  text-gray-900 mb-2 text-center">
          
          How Old Are You? 🎯
        </h2>
        <p className="text-sm text-gray-600 mb-5 sm:mb-6 text-center">
          Pick your age and find the perfect courses just for you!
        </p>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth-x pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6">
          {ageGroups.map((label) => {
            const isActive = selected === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => select(label)}
                className={`
                  flex-shrink-0 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 ease-out
                  ${isActive
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25 ring-2 ring-violet-400 ring-offset-2 ring-offset-gray-50 scale-[1.02]'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-violet-300 hover:bg-violet-50/80 hover:shadow-sm active:scale-[0.98]'
                  }
                `}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
