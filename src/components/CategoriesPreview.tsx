import React from 'react';
import { ArrowLeft, PackageCheck, Sparkles, Flame, Check } from 'lucide-react';
import riceImg from '../assets/images/rice_hadaf_alsafwa_1790122499798.jpg';
import vedanImg from '../assets/images/vedan_msg_product_1790122513066.jpg';
import spicesImg from '../assets/images/premium_spices_bulk_1790122523600.jpg';

interface CategoriesPreviewProps {
  onSelectCategory: (categoryId: 'rice' | 'spices' | 'enhancers') => void;
  onOpenQuoteForCategory: (categoryName: string) => void;
}

export const CategoriesPreview: React.FC<CategoriesPreviewProps> = ({
  onSelectCategory,
  onOpenQuoteForCategory,
}) => {
  const categories = [
    {
      id: 'rice' as const,
      title: 'الأرز البسمتي الفاخر',
      brandBadge: 'علامة "هدف الصفوة" المعتمدة',
      description: 'أرز بسمتي سيلا باكستاني 1121 كريمي منتقى من أجود حقول البنجاب. حبة فائقة الطول، نكهة أصيلة، وقوام غير ملتصق مثالي لمطابخ الإعاشة والمطاعم الكبرى.',
      image: riceImg,
      icon: PackageCheck,
      features: [
        'أرز بسمتي سيلا 1121 كريمي حبة طويلة',
        'علامة تجارية مسجلة "هدف الصفوة"',
        'أكياس 10 كجم و 40 كجم عالية المتانة',
        'معدل استطالة استثنائي عند الطهي'
      ],
      tag: 'الأكثر طلباً للشركات'
    },
    {
      id: 'spices' as const,
      title: 'البهارات والتوابل التجارية',
      brandBadge: 'نقية ومختارة 100%',
      description: 'تشكيلة متكاملة من الهيل الأخضر الفاخر، الفلفل الأسود، الكمون، الكركم، والقرفة مع خلطات تتبيل حصرية للكبسة والبرياني والمشاوي.',
      image: spicesImg,
      icon: Flame,
      features: [
        'استيراد مباشر من الهند وفيتنام وسريلانكا',
        'خالية تماماً من الإضافات والصبغات الصناعية',
        'تعبئة في أكياس محكمة سعة 25 كجم و 50 كجم',
        'ثبات عالٍ في النكهة والزيوت العطرية'
      ],
      tag: 'جودة استثنائية'
    },
    {
      id: 'enhancers' as const,
      title: 'المحسنات الغذائية (VEDAN)',
      brandBadge: 'أحادي جلوتامات الصوديوم (MSG)',
      description: 'محسن الطعم العالمي المعتمد VEDAN (Monosodium Glutamate) بنقاء مخبري يتجاوز 99%، المفضل لمصانع الأغذية، الخلطات، والمطاعم.',
      image: vedanImg,
      icon: Sparkles,
      features: [
        'ماركة VEDAN العالمية الأصلية الموثوقة',
        'نسبة نقاء تزيد عن 99.0% E621',
        'أكياس صناعية معتمدة سعة 25 كجم',
        'مطابق لجميع اشتراطات الهيئة العامة للغذاء والدواء'
      ],
      tag: 'معتمد للمصانع والمطاعم'
    }
  ];

  return (
    <section id="categories" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <span>التصنيفات التموينية الرئيسية</span>
            <span className="text-slate-300">·</span>
            <span>توريد مباشر للشركات والتجار</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            حلول توريد غذائية متكاملة لقطاع الأعمال (B2B)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            نركز في مؤسسة قوة الصفوة للتجارة على توريد السلع الغذائية الأساسية الأكثر طلباً في السوق السعودي بأعلى معايير الجودة وبكميات مرنة تلبي متطلباتكم.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Visual Image Banner */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill Tag & Icon */}
                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-300 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/30">
                      {cat.brandBadge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between text-right space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {cat.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectCategory(cat.id)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 cursor-pointer py-1.5"
                    >
                      <span>تصفح المنتجات والمواصفات</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenQuoteForCategory(cat.title)}
                      className="bg-[#0B192C] hover:bg-[#13274F] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      طلب تسعيرة
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
