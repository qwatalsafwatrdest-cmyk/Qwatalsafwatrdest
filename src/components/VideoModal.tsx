import React, { useState } from 'react';
import { X, Play, Volume2, ShieldCheck, Film } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  onUpdateVideoUrl?: (url: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl = '',
  onUpdateVideoUrl,
}) => {
  const [customInputUrl, setCustomInputUrl] = useState('');
  const [activeUrl, setActiveUrl] = useState(videoUrl);

  if (!isOpen) return null;

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInputUrl.trim()) {
      setActiveUrl(customInputUrl.trim());
      if (onUpdateVideoUrl) {
        onUpdateVideoUrl(customInputUrl.trim());
      }
    }
  };

  // Convert youtube watch url to embed if needed
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('youtube.com/watch?v=')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(activeUrl);
  const isDirectVideo = activeUrl.endsWith('.mp4') || activeUrl.endsWith('.webm');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-[#0B192C] text-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-amber-500/30 text-right relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-[#07111E]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-400 flex items-center justify-center">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                الفيديو التعريفي لمؤسسة قوة الصفوة للتجارة
              </h3>
              <p className="text-[11px] text-slate-400">
                استعراض سلاسل الإمداد ومستودعات التوريد والمحاصيل
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {activeUrl ? (
            isDirectVideo ? (
              <video
                src={activeUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : (
              <iframe
                src={embedUrl}
                title="فيديو مؤسسة قوة الصفوة"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )
          ) : (
            <div className="text-center p-8 space-y-4 max-w-lg">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/30 animate-pulse">
                <Play className="w-8 h-8 fill-amber-400 ml-1" />
              </div>
              <h4 className="text-lg font-bold text-white">بانتظار إضافة رابط الفيديو</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                يمكنك إرسال الفيديو عبر رابط (YouTube / Drive / MP4) أو إرساله في الرسالة القادمة ليتم عرضه هنا وفي الواجهة الرئيسية للزوار مباشرة.
              </p>

              <form onSubmit={handleApplyUrl} className="flex gap-2 pt-2">
                <input
                  type="text"
                  dir="ltr"
                  value={customInputUrl}
                  onChange={(e) => setCustomInputUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="flex-1 bg-white/10 text-white text-xs px-3 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-amber-400 text-left font-mono"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  تشغيل
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-[#07111E] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2 text-amber-400">
            <ShieldCheck className="w-4 h-4" />
            <span>مؤسسة قوة الصفوة للتجارة · جودة وأصالة معتمدة</span>
          </div>

          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/15 text-white font-semibold px-4 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            إغلاق النافذة
          </button>
        </div>
      </div>
    </div>
  );
};
