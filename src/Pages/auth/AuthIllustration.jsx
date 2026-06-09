import { useState } from "react";

export default function AuthIllustration() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full max-w-[720px] mx-auto aspect-[9/8] min-h-[280px] sm:min-h-[360px] lg:min-h-[480px]">
      {!imgError ? (
        <img
          src="/login-illustration.png"
          alt=""
          className="w-full h-full object-contain object-center"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/80 p-6 text-center">
          <p className="text-sm font-semibold text-gray-500 mb-1">Illustration placeholder</p>
          <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
            Upload your image as{" "}
            <code className="text-blue-500 bg-blue-50 px-1 rounded">public/login-illustration.png</code>
            <br />
            Recommended size: <strong>720 × 640 px</strong> (or 1440 × 1280 @2x)
          </p>
        </div>
      )}
    </div>
  );
}
