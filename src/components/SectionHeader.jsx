export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <h2 className=" text-sm sm:text-3xl lg:text-[36px] font-normal leading-tight text-gray-900">
        {title}
      </h2>

      {subtitle && (
        
          <p className="text-sm sm:text-base text-gray-600 mt-3 mx-auto lg:whitespace-nowrap">
          {subtitle}
        </p>
      )}
    </div>
  );
}
