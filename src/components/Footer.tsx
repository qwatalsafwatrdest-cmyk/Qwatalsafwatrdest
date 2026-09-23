import React from 'react';
import { OfficialLogoEmblem } from './BrandLogo';
import { Phone, MapPin, Mail, MessageCircle, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1120] text-slate-400 text-right pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand Info (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <OfficialLogoEmblem size={56} className="border border-slate-700" />
              <div>
                <h3 className="text-xl font-black text-white">
                  مؤسسة قوة <span className="text-[#C09A4B]">الصفوة</span> للتجارة
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">
                  QUWAT AL-SAFWA TRADING EST.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              المؤسسة المتخصصة في استيراد وتوريد الأرز البسمتي والمزة، المحسنات الغذائية العالمية VEDAN، والبهارات الفاخرة للقطاع التجاري وسلاسل المطاعم وشركات الإعاشة بالمملكة العربية السعودية.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#C09A4B]" />
              <span>منشأة تجارية مرخصة ومعتمدة</span>
            </div>
          </div>

          {/* Col 2: Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              روابط الموقع
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#C09A4B] transition-colors cursor-pointer"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#C09A4B] transition-colors cursor-pointer"
                >
                  أصناف المنتجات
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="hover:text-[#C09A4B] transition-colors cursor-pointer"
                >
                  لماذا قوة الصفوة؟
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C09A4B] transition-colors cursor-pointer"
                >
                  عن المؤسسة
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quotation')}
                  className="hover:text-[#C09A4B] transition-colors cursor-pointer"
                >
                  طلب تسعيرة B2B
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Products Categories (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              الأصناف الرئيسية
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>أرز بسمتي سيلا باكستاني 1121 (40 كجم)</li>
              <li>أرز بسمتي سيلا هندي 1121 كريمي (40 كجم)</li>
              <li>محسنات VEDAN مونوصوديوم جلوتاميت 99%</li>
              <li>توابل وبهارات الكبسة والمندي بالجملة</li>
              <li>خيوط الزعفران الأصلي للمطاعم</li>
              <li>عقود التوريد الدورية للشركات والمطابخ</li>
            </ul>
          </div>

          {/* Col 4: Contact Info (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              بيانات الاتصال
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C09A4B] shrink-0 mt-0.5" />
                <span>الرياض - حي الشفا - شارع الإمام مسلم</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C09A4B] shrink-0" />
                <a href="tel:00966510304929" className="hover:text-white font-sans">
                  0510304929
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C09A4B] shrink-0" />
                <a href="tel:00966502731185" className="hover:text-white font-sans">
                  0502731185
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C09A4B] shrink-0" />
                <span className="font-sans text-[11px]">qwatalsafwatrdest@gmail.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/966510304929"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>محادثة واتساب سريعة</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} مؤسسة قوة الصفوة للتجارة. جميع الحقوق محفوظة.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
