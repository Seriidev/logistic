export default function StepWrapper({ eyebrow = "", title, description = "", children }) {
  return (
    <div className="animate-[fadeIn_0.3s_ease-out]">
      <div className="text-center mb-6 sm:mb-8">
        {eyebrow && (
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">
          {title}
        </h2>
        {description && (
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}
