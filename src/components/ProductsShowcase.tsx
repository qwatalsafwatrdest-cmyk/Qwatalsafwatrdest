import React, { useState } from 'react';
import { Eye, X, ZoomIn, CheckCircle, ArrowLeft, PackageCheck } from 'lucide-react';

interface ProductsShowcaseProps {
  onSelectProduct?: (productName: string) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ onSelectProduct }) => {
  const [activeImageModal, setActiveImageModal] = useState<{
    url: string;
    title: string;
    subtitle: string;
  } | null>(null);

  // User uploaded exact image paths
  const images = {
    ricePakistani: '/images/WhatsApp Image 2026-09-19 at 11.35.34 AM.jpeg',
    riceIndian: '/images/WhatsApp Image 2026-09-19 at 11..jpeg',
    riceLabel: '/images/WhatsApp Image 2026-09-22.jpeg',
    vedanMsgBag: '/images/WhatsApp Image 2026-09-23 at 1.24.28 AM.jpeg',
    vedanKabsaGuide: '/images/WhatsApp Image 2026-09-22 at 10.56.01 PM..jpeg',
  };

  const categories = [
    {
      id: 'rice',
      badge: 'الصنف التمويني الرئيسي',
      title: 'الأرز البسمتي والمزة 1121',
      subtitle: 'هدف الصفوة · HADAF AL SAFWA',
      desc: 'نخبة مختارة من أجود محاصيل الأرز الهندي والباكستاني سيلا كريمي طويل الحبة، مخصص لتلبية احتياجات المطابخ المركزية ومطاعم المندي والمضغوط والإعاشة الفاخرة.',
      specs: [
        { label: 'نوع الصنف', val: 'بسمتي سيلا 1121 كريمي' },
        { label: 'نسبة الكسر', val: '2% كحد أقصى' },
        { label: 'الوزن الصافي', val: '40 كيلوجرام' },
        { label: 'التعبئة', val: 'شوال خيش طبيعي متين' },
      ],
      bullets: [
        'أرز بسمتي سيلا درجة أولى Grade A',
        'طول الحبة مضاعف عند الطهي ونثري ممتاز',
        'متوفر بالمنشأ الباكستاني والهندي المعتمد',
        'تغليف مخصص للكميات التجارية وعقود الجملة',
      ],
      defaultProduct: 'أرز (كميات جملة - أكياس 40 كجم)',
      mainImage: images.ricePakistani,
      secondaryImages: [
        {
          url: images.riceIndian,
          title: 'شوال أرز سيلا هندي 40 كجم',
          sub: 'هدف الصفوة - هندي 1121 كريمي',
        },
        {
          url: images.riceLabel,
          title: 'كرت بطاقة المواصفات المعتمدة',
          sub: 'درجة أولى Grade A - نسبة الكسر 2%',
        },
      ],
    },
    {
      id: 'enhancers',
      badge: 'وكالة عالمية موثوقة',
      title: 'المحسنات الغذائية (VEDAN)',
      subtitle: 'Monosodium L-Glutamate %99 UP',
      desc: 'محسنات قوام ونكهة عالمية عالية النقاء مستخلصة من مصادر نباتية طبيعية (التابيوكا وقصب السكر) لتعزيز مذاق أطباق الكبسة واللحوم والمأكولات بالمعايير الفندقية.',
      specs: [
        { label: 'العلامة', val: 'VEDAN الأصلية' },
        { label: 'درجة النقاء', val: '99% وما فوق' },
        { label: 'المكونات', val: 'جلوتامات أحادية الصوديوم' },
        { label: 'الاستخدام', val: 'الكبسات، الشوربات، التتبيلات' },
      ],
      bullets: [
        'VEDAN - مونوصوديوم جلوتاميت (MSG) نقي 99%',
        'مستخلص طبيعي عبر تخمير نبات التابيوكا وقصب السكر',
        'يزيد التناغم المذاقي (الأومامي) دون التأثير على اللون',
        'إرشادات استخدام ومقادير قياسية مدعمة بالصور',
      ],
      defaultProduct: 'محسنات VEDAN (MSG) نقي 99%',
      mainImage: images.vedanMsgBag,
      secondaryImages: [
        {
          url: images.vedanKabsaGuide,
          title: 'دليل تحضير الكبسة والاستخدامات',
          sub: 'VEDAN - خطوات الطهي والمقادير الموصى بها',
        },
      ],
    },
    {
      id: 'spices',
      badge: 'خلطات وتوابل نقية',
      title: 'البهارات والتوابل التخصصية',
      subtitle: 'توابل ومطحونات جملة للمطابخ',
      desc: 'تشكيلة واسعة ونقية من بهارات الطهي الشرقية والخليجية المنتقاة بعناية لضمان النكهة الأصيلة والثابتة في كل وجبة تُقدم لعملائكم.',
      specs: [
        { label: 'الصنف', val: 'بهارات وتوابل مشكلة ومفردة' },
        { label: 'الدرجة', val: 'نقاء ممتاز وخالية من الإضافات' },
        { label: 'التوريد', val: 'عبوات وأكياس أحجام تجارية' },
        { label: 'الاستخدام', val: 'سلاسل المطاعم وشركات التموين' },
      ],
      bullets: [
        'بهارات الكبسة والمندي والبرياني الخاصة',
        'خيوط الزعفران الأصلي عالي الجودة',
        'هيل وقرفة وقرنفل وكمون بالجملة',
        'توريد دوري يحافظ على قوة الرائحة والنكهة',
      ],
      defaultProduct: 'بهارات وتوابل مشكلة للقطاع التجاري',
      mainImage: null,
      secondaryImages: [],
    },
  ];

  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#C09A4B] uppercase tracking-wider block">
            كتالوج التوريد التجاري
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            أصنافنا الرئيسية لقطاع الجملة والمطاعم
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            صور حقيقية مباشرة من شحناتنا ومستودعاتنا المعتمدة لمؤسسة قوة الصفوة للتجارة بالرياض.
          </p>
        </div>

        {/* Real Product Images Banner Showcase */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-3">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                معرض الفحص البصري للشحنات الرسمية
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                انقر على أي صورة لتكبيرها وفحص أختام الاستيراد، نسب الكسر، وبيانات التعبئة
              </p>
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shrink-0">
              <PackageCheck className="w-4 h-4 text-emerald-600" />
              جاهزة للشحن المباشر
            </span>
          </div>

          {/* 5 Real Photos Interactive Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {/* 1. Pakistani Sack */}
            <div
              onClick={() =>
                setActiveImageModal({
                  url: images.ricePakistani,
                  title: 'شوال أرز سيلا باكستاني 1121 كريمي (40 كجم)',
                  subtitle: 'HADAF AL SAFWA · وارد مؤسسة قوة الصفوة للتجارة بالرياض',
                })
              }
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:border-[#C09A4B] transition-all cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-slate-100">
                <img
                  src={images.ricePakistani}
                  alt="أرز سيلا باكستاني 40 كجم"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
              <div className="p-3 text-right">
                <div className="text-xs font-bold text-slate-900 truncate">أرز باكستاني 40 كجم</div>
                <div className="text-[11px] text-[#C09A4B] font-medium">هدف الصفوة 1121</div>
              </div>
            </div>

            {/* 2. Indian Sack */}
            <div
              onClick={() =>
                setActiveImageModal({
                  url: images.riceIndian,
                  title: 'شوال أرز سيلا هندي 1121 كريمي (40 كجم)',
                  subtitle: 'هدف الصفوة · نسبة كسر 2% · تعبئة أكياس خيش متينة',
                })
              }
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:border-[#C09A4B] transition-all cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-slate-100">
                <img
                  src={images.riceIndian}
                  alt="أرز سيلا هندي 40 كجم"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
              <div className="p-3 text-right">
                <div className="text-xs font-bold text-slate-900 truncate">أرز هندي 40 كجم</div>
                <div className="text-[11px] text-[#C09A4B] font-medium">سيلا كريمي طويل الحبة</div>
              </div>
            </div>

            {/* 3. Official Packaging Card */}
            <div
              onClick={() =>
                setActiveImageModal({
                  url: images.riceLabel,
                  title: 'بطاقة مواصفات التعبئة الرسمية',
                  subtitle: 'أرز بسمتي سيلا باكستاني 1121 كريمي · كيس 40 كجم · كسر 2%',
                })
              }
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:border-[#C09A4B] transition-all cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-slate-100">
                <img
                  src={images.riceLabel}
                  alt="بطاقة مواصفات التعبئة الرسمية"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
              <div className="p-3 text-right">
                <div className="text-xs font-bold text-slate-900 truncate">كرت المواصفات المعتمد</div>
                <div className="text-[11px] text-[#C09A4B] font-medium">درجة أولى Grade A</div>
              </div>
            </div>

            {/* 4. VEDAN MSG bag */}
            <div
              onClick={() =>
                setActiveImageModal({
                  url: images.vedanMsgBag,
                  title: 'محسنات VEDAN مونوصوديوم جلوتاميت (MSG)',
                  subtitle: 'درجة نقاء 99% وما فوق · Monosodium L-Glutamate الأصلي',
                })
              }
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:border-[#C09A4B] transition-all cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-slate-100">
                <img
                  src={images.vedanMsgBag}
                  alt="كيس محسنات VEDAN MSG"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
              <div className="p-3 text-right">
                <div className="text-xs font-bold text-slate-900 truncate">كيس محسنات VEDAN</div>
                <div className="text-[11px] text-[#C09A4B] font-medium">نقاء 99% طبيعي</div>
              </div>
            </div>

            {/* 5. VEDAN Kabsa Guide */}
            <div
              onClick={() =>
                setActiveImageModal({
                  url: images.vedanKabsaGuide,
                  title: 'دليل تحضير الكبسة وإرشادات الاستعمال',
                  subtitle: 'خطوات الطبخ ومقادير VEDAN للأطباق السعودية الشهيرة',
                })
              }
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:border-[#C09A4B] transition-all cursor-pointer group flex flex-col col-span-2 sm:col-span-1"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-slate-100">
                <img
                  src={images.vedanKabsaGuide}
                  alt="دليل تحضير الكبسة VEDAN"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
              <div className="p-3 text-right">
                <div className="text-xs font-bold text-slate-900 truncate">دليل طبخ الكبسة</div>
                <div className="text-[11px] text-[#C09A4B] font-medium">معايير المقادير للمطاعم</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Categories Desktop Cards (3-column layout on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all p-7 text-right flex flex-col justify-between hover:border-[#C09A4B]/40"
            >
              <div className="space-y-5">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#C09A4B] bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    توريد جملة B2B
                  </span>
                </div>

                {/* Title & Desc */}
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">
                    {card.title}
                  </h3>
                  <div className="text-xs font-bold text-[#C09A4B] mb-3">
                    {card.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                {/* Technical Specs Table */}
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 space-y-2 text-xs">
                  {card.specs.map((sp, idx) => (
                    <div key={idx} className="flex justify-between items-center text-slate-700">
                      <span className="font-semibold">{sp.val}</span>
                      <span className="text-slate-500">{sp.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-1">
                  {card.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onSelectProduct && onSelectProduct(card.defaultProduct)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>طلب تسعيرة لهذا الصنف</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                {card.secondaryImages && card.secondaryImages.length > 0 && (
                  <button
                    onClick={() =>
                      setActiveImageModal({
                        url: card.secondaryImages[0].url,
                        title: card.secondaryImages[0].title,
                        subtitle: card.secondaryImages[0].sub,
                      })
                    }
                    className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-3 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
                    title="معاينة الصور الأصلية"
                  >
                    <Eye className="w-4 h-4 text-slate-600" />
                    <span>معاينة</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Real Product Inspection */}
      {activeImageModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 text-right relative flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h4 className="text-sm sm:text-base font-bold">{activeImageModal.title}</h4>
                <p className="text-xs text-slate-400">{activeImageModal.subtitle}</p>
              </div>
              <button
                onClick={() => setActiveImageModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-100 flex-1 flex items-center justify-center overflow-auto min-h-[50vh]">
              <img
                src={activeImageModal.url}
                alt={activeImageModal.title}
                className="max-h-[68vh] w-auto object-contain rounded-xl shadow-md"
              />
            </div>

            <div className="p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
              <span className="text-xs text-emerald-600 font-bold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 shrink-0" />
                منتج أصلي معتمد لدى مؤسسة قوة الصفوة للتجارة (الرياض)
              </span>
              <button
                onClick={() => setActiveImageModal(null)}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer w-full sm:w-auto"
              >
                إغلاق المعاينة
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
