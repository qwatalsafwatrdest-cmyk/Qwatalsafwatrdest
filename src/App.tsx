import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProductsShowcase } from './components/ProductsShowcase';
import { QuotationSection } from './components/QuotationSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('أرز (كميات جملة - أكياس 40 كجم)');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = () => {
    window.open(
      'https://wa.me/966510304929?text=' +
        encodeURIComponent('السلام عليكم ورحمة الله، مؤسسة قوة الصفوة للتجارة. أود الاستفسار عن تفاصيل وأسعار توريد المواد الغذائية بالجملة.'),
      '_blank'
    );
  };

  const handleSelectProduct = (productName: string) => {
    setSelectedProductForQuote(productName);
    scrollToSection('quotation');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Website Navigation Header */}
      <Header
        onNavigate={scrollToSection}
        onWhatsAppClick={handleOpenWhatsApp}
      />

      {/* Main Website Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <div id="hero">
          <Hero
            onExploreProducts={() => scrollToSection('products')}
            onWhatsAppClick={handleOpenWhatsApp}
            onOpenQuotation={() => scrollToSection('quotation')}
          />
        </div>

        {/* Why Choose Us / Value Proposition */}
        <WhyChooseUs />

        {/* Products Showcase (Full Web Grid with Real Uploaded Images & Lightbox) */}
        <ProductsShowcase
          onSelectProduct={handleSelectProduct}
        />

        {/* B2B Quotation Form & Wholesale Contact Section */}
        <QuotationSection
          initialProduct={selectedProductForQuote}
        />

        {/* Corporate Profile / About Us */}
        <AboutSection />
      </main>

      {/* Corporate Website Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp Action Button for Web Visitors */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={handleOpenWhatsApp}
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-4 py-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/40"
          title="تواصل مباشر عبر واتساب"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline text-xs font-bold">تواصل معنا عبر واتساب</span>
        </button>
      </div>
    </div>
  );
}
