import React from 'react';
import { ArrowLeft, MessageCircle, ShieldCheck, Truck, Award, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onWhatsAppClick: () => void;
  onOpenQuotation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onWhatsAppClick, onOpenQuotation }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#141f33] to-[#1e293b] text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C09A4B_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Copy - Right Side in RTL */}
          <div className="lg:col-span-7 text-right space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#C09A4B]/15 text-[#C09A4B] border border-[#C09A4B]/30 px-3.5 py-1.5 rounded-full text-xs font-bold">
              <Award className="w-4 h-4 text-[#C09A4B]" />
              <span>المورّد المعتمد للسلع التموينية الفاخرة بالمملكة</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              نوفر أجود أنواع <span className="text-[#C09A4B]">الأرز</span>،{' '}
              <span className="text-[#C09A4B]">المحسنات الغذائية</span>، والبهارات لقطاع الجملة والمطاعم
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              مؤسسة قوة الصفوة للتجارة تقدم حلول التوريد الشاملة للشركات وقطاع الإعاشة والمطاعم الفاخرة في السعودية، بتوريد مباشر من المنشأ، ونسب كسر دنيا، ومواصفات قياسية مضمونة.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenQuotation}
                className="bg-[#C09A4B] hover:bg-[#b08b3e] text-slate-950 font-black text-sm sm:text-base py-3.5 px-7 rounded-xl transition-all shadow-lg hover:shadow-[#C09A4B]/20 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>طلب تسعيرة B2B فورية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProducts}
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>استعراض أصنافنا المعتمدة</span>
              </button>

              <button
                onClick={onWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>واتساب المبيعات</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-right">
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#C09A4B]">1121</div>
                <div className="text-xs text-slate-400 font-medium">أرز سيلا كريمي طويل الحبة</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#C09A4B]">2%</div>
                <div className="text-xs text-slate-400 font-medium">أقل نسبة كسر معتمدة</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#C09A4B]">99%</div>
                <div className="text-xs text-slate-400 font-medium">نقاء محسنات VEDAN MSG</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#C09A4B]">40 KG</div>
                <div className="text-xs text-slate-400 font-medium">تعبئة أكياس خيش قياسية</div>
              </div>
            </div>
          </div>

          {/* Featured Visual Hero Cards - Left Side in RTL */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-5 border border-slate-700/80 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <span className="text-xs font-bold text-slate-300">المنتجات الأصلية لدى قوة الصفوة</span>
                <span className="bg-emerald-500/20 text-emerald-400 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  شحنات متوفرة بالمستودع
                </span>
              </div>

              {/* Grid of Actual Uploaded Products */}
              <div className="grid grid-cols-2 gap-3">
                {/* Real Pakistani Bag */}
                <div
                  onClick={onExploreProducts}
                  className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 group cursor-pointer relative"
                >
                  <div className="aspect-3/4 overflow-hidden">
                    <img
                      src="/images/WhatsApp Image 2026-09-19 at 11.35.34 AM.jpeg"
                      alt="أرز سيلا باكستاني 40 كجم"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2.5 text-right bg-slate-900/90">
                    <div className="text-xs font-bold text-white truncate">أرز باكستاني 1121</div>
                    <div className="text-[10px] text-[#C09A4B]">شوال 40 كجم · كسر 2%</div>
                  </div>
                </div>

                {/* Real Indian Bag */}
                <div
                  onClick={onExploreProducts}
                  className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 group cursor-pointer relative"
                >
                  <div className="aspect-3/4 overflow-hidden">
                    <img
                      src="/images/WhatsApp Image 2026-09-19 at 11..jpeg"
                      alt="أرز سيلا هندي 40 كجم"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2.5 text-right bg-slate-900/90">
                    <div className="text-xs font-bold text-white truncate">أرز هندي 1121</div>
                    <div className="text-[10px] text-[#C09A4B]">هدف الصفوة · سيلا كريمي</div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Notice */}
              <div className="bg-slate-900/60 rounded-xl p-3 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#C09A4B]" />
                  <span>توزيع ونقل مباشر لجميع مدن المملكة</span>
                </div>
                <button
                  onClick={onExploreProducts}
                  className="text-[#C09A4B] hover:underline font-bold text-xs cursor-pointer flex items-center gap-0.5"
                >
                  <span>عرض الكل</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
