import React from 'react';
import { Building2, Award, Target, Users, MapPin, CheckCircle } from 'lucide-react';
import { OfficialLogoEmblem } from './BrandLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Right Column: About Details */}
          <div className="lg:col-span-7 text-right space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-[#9e7a32] px-3.5 py-1 rounded-full text-xs font-bold">
              <Building2 className="w-4 h-4" />
              <span>نبذة عن المؤسسة</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              مؤسسة قوة الصفوة للتجارة
              <span className="block text-xl sm:text-2xl font-bold text-[#C09A4B] mt-1">
                الريادة في تجارة وتوريد المواد الغذائية بالجملة بالمملكة
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              تأسست مؤسسة قوة الصفوة للتجارة بالرياض لتكون شريك النجاح الأول لقطاع الأغذية والإعاشة والمطاعم في المملكة العربية السعودية. نحرص على استيراد وانتقاء أفضل المحاصيل العالمية من الأرز البسمتي والمزة الهندي والباكستاني (علامة هدف الصفوة)، بالإضافة إلى تمثيل وتوزيع كبرى العلامات العالمية في المحسنات الغذائية مثل VEDAN عالية النقاء، والبهارات والتوابل الطازجة.
            </p>

            {/* Core Values 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <Target className="w-6 h-6 text-[#C09A4B] mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">رؤيتنا</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  أن نكون الخيار الأول والموثوق لكافة شركات الأغذية والمطاعم في سلاسل التوريد التموينية.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <Award className="w-6 h-6 text-[#C09A4B] mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">معايير الجودة</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  فحص مخبري صارم وتخزين قياسي وفق اشتراطات الهيئة العامة للغذاء والدواء.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <Users className="w-6 h-6 text-[#C09A4B] mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">شراكات مستدامة</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  علاقات تجارية طويلة الأمد مبنية على الثقة، والأسعار المنافسة، والالتزام بمواعيد الشحن.
                </p>
              </div>
            </div>
          </div>

          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 via-[#182333] to-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden text-right space-y-6">
              <div className="flex items-center gap-4">
                <OfficialLogoEmblem size={70} className="border-2 border-[#C09A4B]" />
                <div>
                  <h3 className="text-xl font-black text-white">مؤسسة قوة الصفوة للتجارة</h3>
                  <p className="text-xs text-[#C09A4B] font-bold">سجل تجاري نظامي ومعتمد</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C09A4B] shrink-0" />
                  <span>استيراد وتوزيع المواد التموينية والسلع الغذائية بالجملة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C09A4B] shrink-0" />
                  <span>المركز اللوجستي: الرياض - حي الشفا - شارع الإمام مسلم</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C09A4B] shrink-0" />
                  <span>تغطية توريد وتوصيل متكاملة لكافة مناطق ومدن المملكة</span>
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-slate-400">للاستفسارات والتعاقدات الرسمية:</span>
                <a
                  href="tel:00966510304929"
                  className="font-bold text-[#C09A4B] hover:underline font-sans"
                >
                  0510304929
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
