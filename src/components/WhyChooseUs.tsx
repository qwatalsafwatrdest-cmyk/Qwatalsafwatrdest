import React from 'react';
import { ShieldCheck, Truck, Scale, BadgePercent, Clock, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#C09A4B]" />,
      title: 'جودة معتمدة Grade A',
      desc: 'فحص مخبري دقيق لكل دفعة، مع الالتزام بأقل نسبة كسر (2%) ونقاء تام لحبات الأرز البسمتي والمزة 1121.',
    },
    {
      icon: <Truck className="w-8 h-8 text-[#C09A4B]" />,
      title: 'جاهزية الإمداد والمستودعات',
      desc: 'مستودعاتنا بالرياض (حي الشفا) مجهزة لتلبية طلبيات الجملة الفورية وعقود التوريد الشهرية والسنوية بدون انقطاع.',
    },
    {
      icon: <Scale className="w-8 h-8 text-[#C09A4B]" />,
      title: 'أوزان وتعبئة قياسية 40 كجم',
      desc: 'تعبئة متينة في أكياس خيش طبيعي مصممة خصيصاً للحفاظ على خواص وجودة ونكهة الأرز أثناء النقل والتخزين.',
    },
    {
      icon: <BadgePercent className="w-8 h-8 text-[#C09A4B]" />,
      title: 'أسعار جملة مباشرة ومنافسة',
      desc: 'أسعار استيراد مباشرة بدون وسطاء مع توفير شروط تعاقد مرنة تناسب سلاسل المطاعم وشركات الإعاشة الكبرى.',
    },
  ];

  return (
    <section id="why-us" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#C09A4B] uppercase tracking-wider block">
            الميزة التنافسية
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            لماذا يختار كبار الطهاة والمطاعم مؤسسة قوة الصفوة؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            نضع معايير الجودة والالتزام بالمواعيد في صميم أعمالنا لتكون شراكتنا هي الركيزة الأساسية لنجاح أعمالكم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#C09A4B]/40 transition-all text-right flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>ضمان الجودة والالتزام</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
