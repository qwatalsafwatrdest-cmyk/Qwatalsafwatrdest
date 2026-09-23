import React, { useState } from 'react';
import { contactDetails } from '../data/products';
import { Mail, Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      alert('يرجى تعبئة الحقول المطلوبة');
      return;
    }
    const text = encodeURIComponent(
      `رسالة من الموقع:\nالاسم: ${name}\nالشركة: ${company || 'غير محدد'}\nالجوال: ${phone}\nالرسالة: ${message}`
    );
    window.open(`https://wa.me/${contactDetails.phones[0].number}?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-right max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <Mail className="w-4 h-4" />
            <span>قنوات الاتصال المباشرة</span>
            <span className="text-slate-300">·</span>
            <span>مؤسسة قوة الصفوة للتجارة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            تواصل مع فريق المبيعات والتوريد
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            يسعدنا استقبال استفساراتكم ومناقشة عقود التوريد السنوية وجداول التسليم. يمكنك الاتصال بنا مباشرة أو عبر تطبيق الواتساب أو البريد الإلكتروني.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4 text-right">
            {/* Official Email Card */}
            <div className="bg-[#0B192C] text-white p-6 rounded-2xl border border-amber-500/25 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-300">البريد الإلكتروني الرسمي</h4>
                  <span className="text-xs text-amber-400">للمراسلات الرسمية والمناقصات</span>
                </div>
              </div>
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-amber-400 transition-colors block mt-2"
                dir="ltr"
              >
                {contactDetails.email}
              </a>
            </div>

            {/* Direct Phone & WhatsApp Lines (All 3 numbers from user prompt) */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>أرقام الهاتف والواتساب المباشرة:</span>
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  فريق مبيعات مخصص للرد الفوري على طلبات التجار والشركات:
                </p>
              </div>

              <div className="space-y-3">
                {contactDetails.phones.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition-all flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-800">{p.title}</div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5" dir="ltr">
                        {p.display}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${p.number}`}
                        className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                        title="اتصال هاتفي"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                      <a
                        href={`https://wa.me/${p.number}?text=${encodeURIComponent(
                          'السلام عليكم، أود التواصل مع مؤسسة قوة الصفوة للتجارة بخصوص توريد مواد غذائية'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>محادثة</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logistics & Work Hours */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-slate-900">المقر وشبكة المستودعات:</span>
                  <span>المملكة العربية السعودية · تغطية توريد شاملة لمختلف المدن والمحافظات</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-slate-900">ساعات استقبال الطلبات:</span>
                  <span>{contactDetails.workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-right space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">إرسال استفسار مباشر</h3>
              <p className="text-xs text-slate-500 mt-1">
                سيتواصل معكم ممثل المبيعات خلال دقائق عبر الواتساب أو الهاتف لمتابعة طلبكم.
              </p>
            </div>

            {sent ? (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-950">تم إرسال رسالتكم بنجاح!</h4>
                <p className="text-xs text-emerald-800">
                  تم فتح محادثة الواتساب المباشرة مع فريق المبيعات لتسريع الرد.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs text-slate-700 underline font-semibold cursor-pointer"
                >
                  إرسال استفسار آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      الاسم الكريم <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="اسمك أو اسم المسؤول"
                      className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      اسم المنشأة / النشاط
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="اسم المطعم أو الشركة"
                      className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all text-right"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    رقم الجوال أو الواتساب للتواصل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05XXXXXXXX"
                    className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    تفاصيل الاستفسار أو الطلب <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب استفسارك عن أصناف الأرز، المحسنات VEDAN، البهارات، أو الكميات المطلوبة..."
                    className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all text-right"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-[#13274F] text-white font-black text-sm py-3.5 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>إرسال الاستفسار وتوجيهه للمبيعات</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
