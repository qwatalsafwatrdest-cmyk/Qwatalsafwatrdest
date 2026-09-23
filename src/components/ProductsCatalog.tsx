import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { productsData } from '../data/products';
import { Search, Eye, FileText, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface ProductsCatalogProps {
  initialCategory?: ProductCategory;
  onOpenProductDetail: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({
  initialCategory = 'all',
  onOpenProductDetail,
  onRequestQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all' as const, label: 'كافة المنتجات' },
    { id: 'rice' as const, label: 'الأرز البسمتي (هدف الصفوة)' },
    { id: 'enhancers' as const, label: 'المحسنات الغذائية (VEDAN MSG)' },
    { id: 'spices' as const, label: 'البهارات والتوابل' },
  ];

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCat =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-right max-w-3xl mb-10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>كاتالوج المنتجات المعتمدة</span>
            <span className="text-slate-300">·</span>
            <span>مؤسسة قوة الصفوة للتجارة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            منتجات تموينية مختارة بعناية لأصحاب الأعمال والمطاعم
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            استعرض مواصفات أكياس الأرز، أوزان العبوات، نقاء محسنات VEDAN، وتشكيلة التوابل الخام والمطحونة. يمكنك طلب عروض أسعار مباشرة للكميات الكبيرة والتوريد الشهري.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-slate-50 p-2 sm:p-3 rounded-2xl border border-slate-200">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0B192C] text-amber-300 shadow-sm'
                      : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث بالصنف، العلامة، أو المنشأ..."
              className="w-full bg-white text-slate-800 text-xs sm:text-sm pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all text-right"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-600 font-medium">لم يتم العثور على منتجات مطابقة لعملية البحث.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-amber-700 hover:underline cursor-pointer"
            >
              عرض كافة المنتجات
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-amber-400/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Product Visual */}
                <div className="relative h-60 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0B192C]/90 text-amber-400 text-xs font-black px-3 py-1 rounded-lg border border-amber-400/30 shadow-md">
                    {product.brand}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/95 text-slate-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-sm border border-slate-200">
                    منشأ: {product.origin.split(' ')[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between text-right space-y-4">
                  <div>
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
                      <span className="font-semibold text-amber-700">{product.categoryLabel}</span>
                      <span>·</span>
                      <span>نقاء {product.purity}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Packaging list preview */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-500 block">
                        التعبئة والأوزان المتاحة:
                      </span>
                      {product.packagingOptions.slice(0, 2).map((pack, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="truncate">{pack}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-slate-600" />
                      <span>عرض التفاصيل</span>
                    </button>

                    <button
                      onClick={() => onRequestQuote(product)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-black py-2.5 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
                    >
                      <FileText className="w-4 h-4" />
                      <span>طلب كمية B2B</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner for Custom Spec Inquiries */}
        <div className="mt-14 bg-gradient-to-r from-[#0B192C] via-[#0F284A] to-[#0B192C] text-white p-6 sm:p-8 rounded-2xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-right space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>مواصفات وتعبئة خاصة للمصانع والشركات</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold">
              هل تبحث عن توريد بمواصفات خاصة أو تعبئة بعلامتك التجارية (Private Label)؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              نوفر في مؤسسة قوة الصفوة للتجارة عقود توريد متكاملة وتسهيلات خاصة للمصانع، والمستودعات المركزية وسلاسل الإعاشة الكبرى.
            </p>
          </div>

          <button
            onClick={() => onRequestQuote(productsData[0])}
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            تواصل مع مدير العقود الخاصة
          </button>
        </div>
      </div>
    </section>
  );
};
