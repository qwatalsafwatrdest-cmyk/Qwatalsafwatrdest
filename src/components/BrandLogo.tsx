import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const OfficialLogoEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 46,
  className = '',
}) => {
  return (
    <img
      src="/images/WhatsApp Image 2026-09-22 at 11.16.44 PM.jpeg"
      alt="شعار مؤسسة قوة الصفوة للتجارة"
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`rounded-full object-cover shrink-0 select-none border border-slate-700/40 bg-black ${className}`}
      onError={(e) => {
        // Fallback to logo.jpeg if needed
        (e.target as HTMLImageElement).src = '/images/logo.jpeg';
      }}
    />
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const pixelSizes = {
    sm: 36,
    md: 46,
    lg: 58,
    xl: 72,
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <OfficialLogoEmblem size={pixelSizes[size]} />
      <div className="text-right">
        <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
          مؤسسة قوة <span className="text-[#C09A4B]">الصفوة</span>
        </div>
        <div className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1">
          للتجارة · QUWAT AL-SAFWA
        </div>
      </div>
    </div>
  );
};
