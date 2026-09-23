import React from 'react';
import { Product } from '../types';
import { contactDetails } from '../data/products';
import { X, Check, MessageCircle, FileText, Globe, Package, Award, Sparkles, Building } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `السلام عليكم مؤسسة قوة الصفوة للتجارة،\nأود الاستفسار وطلب تسعيرة لمنتج: *${product.name}* (العلامة: ${product.brand})\nالرجاء إفادتنا بالأسعار للكميات والتوفر والتوصيل.`
    );
    window.open(`https://wa.me/${contactDetails.phones[0].number}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 text-right relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-5 sm:p-6 flex items-start justify-between border-b border-amber-500/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
              <span>{product.categoryLabel}</span>
              <span>·</span>
              <span>العلامة التجارية: {product.brand}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">{product.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Image */}
            <div className="md:col-span-5 space-y-3">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 aspect-4/3 relative shadow-inner">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#0B192C]/90 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-md border border-amber-400/30">
                  {product.brand}
                </div>
              </div>

              {/* Key Quick Facts */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-amber-600" />
                    بلد المنشأ:
                  </span>
                  <span className="font-bold text-slate-800">{product.origin}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    نسبة النقاء:
                  </span>
                  <span className="font-bold text-emerald-700">{product.purity}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-amber-600" />
                    الحد الأدنى للطلب (MOQ):
                  </span>
                  <span className="font-bold text-slate-800">{product.minOrderQuantity}</span>
                </div>
              </div>
            </div>

            {/* Details & Specs */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  نبذة ومواصفات المنتج
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  المواصفات الفنية والمخبرية
                </h4>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
                  {product.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="grid grid-cols-5 p-2.5">
                      <span className="col-span-2 text-slate-500 font-medium">{spec.label}</span>
                      <span className="col-span-3 text-slate-800 font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging Options */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-amber-500" />
                  خيارات التعبئة والأوزان المتوفرة
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.packagingOptions.map((pack, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-center gap-2 p-2 bg-amber-50/60 border border-amber-200/60 rounded-lg text-xs font-medium text-amber-950"
                    >
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{pack}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Sectors */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-amber-500" />
                  القطاعات والمستفيدون
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.targetSectors.map((sector, secIdx) => (
                    <span
                      key={secIdx}
                      className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            * نوفر عينات فحص مخبري وميداني للشركات والمطاعم المعتمدة قبل التعاقد.
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleWhatsAppInquiry}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>استفسار فوري بالواتساب</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>طلب تسعيرة B2B</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
