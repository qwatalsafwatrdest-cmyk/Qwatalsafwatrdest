export type ProductCategory = 'all' | 'rice' | 'spices' | 'enhancers';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'rice' | 'spices' | 'enhancers';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  origin: string;
  packagingOptions: string[];
  specs: ProductSpec[];
  targetSectors: string[];
  minOrderQuantity: string;
  purity: string;
  shelfLife: string;
  featured?: boolean;
}

export interface QuoteRequestForm {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  businessType: string;
  selectedProductId: string;
  quantity: string;
  unit: string;
  deliveryDate: string;
  additionalNotes: string;
}

export interface ContactInfo {
  email: string;
  phones: {
    display: string;
    number: string;
    whatsappUrl: string;
    title: string;
  }[];
  address: string;
  workingHours: string;
}
