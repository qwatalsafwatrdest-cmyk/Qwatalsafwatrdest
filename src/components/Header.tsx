import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { OfficialLogoEmblem } from './BrandLogo';

interface HeaderProps {
  onNavigate: (id: string) => void;
  onWhatsAppClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onWhatsAppClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* Top Bar - Corporate Contact Details (Typical for Professional B2B Websites) */}
      <div className="bg-[#0f172a] text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#C09A4B]" />
              الرياض، حي الشفا - شارع الإمام مسلم، المملكة العربية السعودية
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-[#C09A4B]" />
              qwatalsafwatrdest@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4 font-sans text-xs">
            <a
              href="tel:00966510304929"
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#C09A4B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C09A4B]" />
              <span>المبيعات: 0510304929</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="tel:00966502731185"
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#C09A4B] transition-colors"
            >
              <span>0502731185</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Corporate Identity */}
          <div
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3.5 cursor-pointer select-none group"
          >
            <OfficialLogoEmblem size={52} className="group-hover:scale-105 transition-transform" />
            <div className="text-right">
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                مؤسسة قوة <span className="text-[#C09A4B]">الصفوة</span> للتجارة
              </div>
              <div className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase mt-1">
                QUWAT AL-SAFWA TRADING EST. · توريد المواد الغذائية بالجملة
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-700">
            <button
              onClick={() => handleNavClick('hero')}
              className="hover:text-[#C09A4B] transition-colors cursor-pointer py-2 border-b-2 border-transparent hover:border-[#C09A4B]"
            >
              الرئيسية
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className="hover:text-[#C09A4B] transition-colors cursor-pointer py-2 border-b-2 border-transparent hover:border-[#C09A4B]"
            >
              أصناف المنتجات
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="hover:text-[#C09A4B] transition-colors cursor-pointer py-2 border-b-2 border-transparent hover:border-[#C09A4B]"
            >
              لماذا قوة الصفوة؟
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-[#C09A4B] transition-colors cursor-pointer py-2 border-b-2 border-transparent hover:border-[#C09A4B]"
            >
              عن المؤسسة
            </button>
            <button
              onClick={() => handleNavClick('quotation')}
              className="hover:text-[#C09A4B] transition-colors cursor-pointer py-2 border-b-2 border-transparent hover:border-[#C09A4B]"
            >
              طلب عرض سعر B2B
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('quotation')}
              className="hidden sm:inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              طلب تسعيرة فورية
            </button>

            <button
              onClick={onWhatsAppClick}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>واتساب المبيعات</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 text-right">
            <button
              onClick={() => handleNavClick('hero')}
              className="p-2.5 text-right font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              الرئيسية
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className="p-2.5 text-right font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              أصناف المنتجات
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="p-2.5 text-right font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              لماذا قوة الصفوة؟
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="p-2.5 text-right font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              عن المؤسسة
            </button>
            <button
              onClick={() => handleNavClick('quotation')}
              className="p-2.5 text-right font-bold text-[#C09A4B] hover:bg-amber-50 rounded-lg"
            >
              طلب عرض سعر B2B
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C09A4B]" />
              <span>0510304929 / 0502731185</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C09A4B]" />
              <span>الرياض - حي الشفا - شارع الإمام مسلم</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
