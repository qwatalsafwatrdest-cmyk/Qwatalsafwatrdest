import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface QuotationSectionProps {
  initialProduct?: string;
}

export const QuotationSection: React.FC<QuotationSectionProps> = ({ initialProduct }) => {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('الرياض');
  const [productType, setProductType] = useState(initialProduct || 'أرز (كميات جملة - أكياس 40 كجم)');
  const [quantity, setQuantity] = useState('50 كيس (2 طن)');
  const [orderDetails, setOrderDetails] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim()) {
      alert('يرجى إدخال اسم المؤسسة أو المنشأة التجارية');
      return;
    }

    const message =
      `*طلب عرض سعر B2B - مؤسسة قوة الصفوة للتجارة*\n` +
      `-----------------------------------------\n` +
      `*اسم المؤسسة / الشركة:* ${companyName}\n` +
      `*المسؤول / جهة الاتصال:* ${contactPerson || 'غير محدد'}\n` +
      `*رقم الجوال:* ${phoneNumber || 'مرفق عبر الواتساب'}\n` +
      `*المدينة وموقع التوريد:* ${city}\n` +
      `*المنتج المطلوب:* ${productType}\n` +
      `*الكمية التقديرية:* ${quantity}\n` +
      `*تفاصيل إضافية وملاحظات:*\n${orderDetails || 'نرجو تزويدنا بأفضل سعر تسليم مستودعكم أو بموقعنا مع جدول التوريد.'}`;

    // Target the primary official WhatsApp number: +966510304929
    const targetPhone = '966510304929';
    window.open(`https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="quotation" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C09A4B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#C09A4B] uppercase tracking-wider block">
            المبيعات وعقود الجملة
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            طلب تسعيرة B2B وعقود التوريد
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            املأ بيانات طلبك وسيقوم فريق المبيعات المتخصص بالتواصل المباشر معكم وتقديم عرض السعر المناسب لاحتياجكم.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Institutional Contact Card - Left Side on Desktop (Col 5) */}
          <div className="lg:col-span-5 bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-6 text-right order-2 lg:order-1">
            <div>
              <div className="text-xl font-bold text-white mb-2">
                مؤسسة قوة الصفوة للتجارة
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                مقرنا الرئيسي ومستودعاتنا المركزية في العاصمة الرياض مجهزة لخدمة وتلبية احتياجاتكم التموينية بكفاءة عالية.
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-700/80 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C09A4B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">العنوان والمستودعات</div>
                  <div className="text-slate-300 text-xs mt-0.5">
                    الرياض، حي الشفا - شارع الإمام مسلم، المملكة العربية السعودية
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C09A4B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">أرقام التواصل والمبيعات المباشرة</div>
                  <div className="flex flex-col gap-1 text-slate-300 text-xs mt-1 font-sans">
                    <a href="tel:00966510304929" className="hover:text-[#C09A4B] transition-colors">
                      هاتف رئيسي / واتساب: 0510304929
                    </a>
                    <a href="tel:00966502731185" className="hover:text-[#C09A4B] transition-colors">
                      هاتف إضافي: 0502731185
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C09A4B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">البريد الإلكتروني التجاري</div>
                  <div className="text-slate-300 text-xs mt-0.5 font-sans">
                    qwatalsafwatrdest@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C09A4B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">أوقات العمل والتسليم</div>
                  <div className="text-slate-300 text-xs mt-0.5">
                    السبت إلى الخميس: 8:00 صباحاً – 8:00 مساءً
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-700/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C09A4B]">
                <ShieldCheck className="w-4 h-4" />
                <span>مزايا التعاقد المؤسسي B2B:</span>
              </div>
              <ul className="text-[11px] text-slate-300 space-y-1.5 list-disc list-inside">
                <li>فواتير ضريبية نظامية معتمدة</li>
                <li>تسهيلات ائتمانية وتوريد تعاقدي منتظم</li>
                <li>شحن مباشر إلى موقع منشأتكم بالرياض ومدن المملكة</li>
              </ul>
            </div>
          </div>

          {/* Quotation Form - Right Side on Desktop (Col 7) */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl text-right order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center justify-between">
              <span>نموذج تسعيرة الجملة والطلبيات</span>
              <span className="text-xs text-[#C09A4B] font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                رد فوري خلال ساعات العمل
              </span>
            </h3>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Field 1: اسم المنشأة */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    اسم المؤسسة / الشركة / المطعم <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="مثال: مطاعم ومطابخ الضيافة..."
                    className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C09A4B] transition-all text-right"
                  />
                </div>

                {/* Field 2: اسم المسؤول */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    اسم الشخص المسؤول / المشتريات
                  </label>
                  <input
                    type="text"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="مثال: أ. عبدالله"
                    className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C09A4B] transition-all text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Field 3: رقم الجوال */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    رقم الجوال للتواصل
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="05XXXXXXXX"
                    className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C09A4B] transition-all text-right"
                  />
                </div>

                {/* Field 4: المدينة */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    مدينة التوريد
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C09A4B] transition-all text-right cursor-pointer"
                  >
                    <option value="الرياض">الرياض (تسليم فوري)</option>
                    <option value="جدة / مكة المكرمة">جدة / مكة المكرمة</option>
                    <option value="المنطقة الشرقية (الدمام / الخبر)">المنطقة الشرقية</option>
                    <option value="القصيم">القصيم</option>
                    <option value="المدينة المنورة">المدينة المنورة</option>
                    <option value="مدينة أخرى">مدينة أخرى بالمملكة</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Field 5: المنتج المطلوب */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    المنتج الرئيسي المطلوب <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C09A4B] transition-all text-right cursor-pointer"
                  >
                    <option value="أرز (كميات جملة - أكياس 40 كجم)">أرز (كميات جملة - أكياس 40 كجم)</option>
                    <option value="أرز سيلا باكستاني 1121 كريمي">أرز سيلا باكستاني 1121 كريمي</option>
                    <option value="أرز سيلا هندي 1121 كريمي">أرز سيلا هندي 1121 كريمي</option>
                    <option value="محسنات VEDAN (MSG) نقي 99%">محسنات VEDAN (MSG) نقي 99%</option>
                    <option value="بهارات مشكلة للمطاعم">بهارات مشكلة للمطاعم</option>
                    <option value="خيوط الزعفران الأصلي">خيوط الزعفران الأصلي</option>
                    <option value="طلبية مدمجة / أصناف متعددة">طلبية مدمجة / أصناف متعددة</option>
                  </select>
                </div>

                {/* Field 6: الكمية التقديرية */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    الكمية التقديرية المطلوبة
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C09A4B] transition-all text-right cursor-pointer"
                  >
                    <option value="25 إلى 50 كيس (1 - 2 طن)">25 إلى 50 كيس (1 - 2 طن)</option>
                    <option value="50 إلى 150 كيس (2 - 6 طن)">50 إلى 150 كيس (2 - 6 طن)</option>
                    <option value="150 إلى 500 كيس (6 - 20 طن)">150 إلى 500 كيس (6 - 20 طن)</option>
                    <option value="عقد توريد شهري مستمر">عقد توريد شهري مستمر</option>
                    <option value="كمية خاصة / تجربة عينة">كمية خاصة / تجربة عينة</option>
                  </select>
                </div>
              </div>

              {/* Field 7: تفاصيل الطلب والملاحظات */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  تفاصيل إضافية وملاحظات التوصيل
                </label>
                <textarea
                  rows={3}
                  value={orderDetails}
                  onChange={(e) => setOrderDetails(e.target.value)}
                  placeholder="حدد موقع التسليم بالضبط، وموعد التوريد المرغوب، أو أي استفسار آخر..."
                  className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C09A4B] transition-all text-right"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#C09A4B] hover:bg-[#b08b3e] text-slate-950 font-black text-sm sm:text-base py-4 px-6 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>إرسال طلب التسعيرة إلى مسؤولي المبيعات</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
