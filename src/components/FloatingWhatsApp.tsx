import React, { useState } from 'react';
import { contactDetails } from '../data/products';
import { MessageCircle, X, ChevronUp, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 text-right">
      {/* Expanded Popup Menu */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-[#0B192C] text-white p-4 flex items-center justify-between border-b border-amber-500/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold">مؤسسة قوة الصفوة للتجارة</h4>
                <span className="text-[11px] text-emerald-400 font-medium">
                  فريق المبيعات متواجد لخدمتكم
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 bg-slate-50 space-y-2">
            <p className="text-[11px] text-slate-600 px-1">
              اختر ممثل المبيعات المناسب لبدء محادثة واتساب فورية:
            </p>

            <div className="space-y-1.5">
              {contactDetails.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${phone.number}?text=${encodeURIComponent(
                    'السلام عليكم مؤسسة قوة الصفوة للتجارة، أود الاستفسار عن توريد مواد غذائية لمنشأتنا.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-white hover:bg-emerald-50 rounded-xl border border-slate-200 transition-colors group"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                      {phone.title}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono" dir="ltr">
                      {phone.display}
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-100 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center transition-colors">
                    <Send className="w-3.5 h-3.5 rotate-180" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="p-2.5 bg-white border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400">
              استجابة سريعة لطلبات الأسعار والكميات
            </span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-3 rounded-full shadow-2xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/20"
        title="تواصل معنا عبر الواتساب"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="text-xs font-bold hidden sm:inline">محادثة واتساب فورية</span>
      </button>
    </div>
  );
};
