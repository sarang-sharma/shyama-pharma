export const COMPANY = {
  name: 'Shyama Pharma',
  nameHi: 'श्यामा फार्मा',
  nameMai: 'श्यामा फार्मा',
  phone: '+91 89358 05714',
  phone2: '+91 74885 56017',
  phoneClean: '918935805714',
  phone2Clean: '917488556017',
  whatsapp: '918935805714',
  email: 'shyamapharma@gmail.com',
  gst: '10AGGPC1751Q1ZL',
  drugLicense: 'BR - PAT-437/437A',
  address: {
    line1: 'A-2, Anand Bhawan Market',
    line2: 'Govind Mitra Road, Patna, Bihar - 800004',
    full: 'A-2, Anand Bhawan Market, Govind Mitra Road, Patna, Bihar - 800004',
  },
  googleMapsUrl: 'https://maps.app.goo.gl/a142KhkMJuTetJqV9',
  goddessImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Kali_by_Raja_Ravi_Varma.jpg/400px-Kali_by_Raja_Ravi_Varma.jpg',
  founded: 1995,
  yearsInBusiness: new Date().getFullYear() - 1995,
  whatsappMessage: {
    hi: 'नमस्ते, मैं श्यामा फार्मा से पशु चिकित्सा दवा के बारे में जानकारी चाहता/चाहती हूं।',
    en: 'Hello, I would like to inquire about veterinary medicines from Shyama Pharma.',
    mai: 'प्रणाम, हम श्यामा फार्मा सँ पशु चिकित्सा दवाइ के बारे मे जानकारी चाहैत छी।',
  },
  businessHours: {
    hi: 'सोमवार - शनिवार: सुबह 9:00 - शाम 7:00',
    en: 'Monday - Saturday: 9:00 AM - 7:00 PM',
    mai: 'सोमवार - शनिवार: भोर 9:00 - साँझ 7:00',
  },
} as const;

export function getWhatsAppUrl(locale: string = 'hi'): string {
  const msg =
    COMPANY.whatsappMessage[locale as keyof typeof COMPANY.whatsappMessage] ||
    COMPANY.whatsappMessage.hi;
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export function getPhoneUrl(phone: 'primary' | 'secondary' = 'primary'): string {
  return `tel:+${phone === 'primary' ? COMPANY.phoneClean : COMPANY.phone2Clean}`;
}
