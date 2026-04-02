export interface Brand {
  id: string;
  name: string;
  category: 'super-stockist' | 'stockist';
  color: string;
  logo?: string; // URL to real logo image
}

export const brands: Brand[] = [
  // Super Stockists
  { id: 'nutrivet', name: 'Nutrivet Farm Care', category: 'super-stockist', color: '#1B5E20', logo: 'https://nutrivetindia.com/images/logo.png' },
  { id: 'ttk', name: 'TTK Healthcare', category: 'super-stockist', color: '#1565C0', logo: 'https://ttkhealthcare.com/wp-content/themes/ttk/assets/images/logo.jpg' },
  { id: 'sanjeevani', name: 'Sanjeevani Animal Healthcare', category: 'super-stockist', color: '#0f766e' },

  // Stockists
  { id: 'vetoquinol', name: 'Vetoquinol', category: 'stockist', color: '#00695C', logo: 'https://www.vetoquinol.com/themes/custom/vetoquinol/integration/public/assets/images/logo.png' },
  { id: 'zenox', name: 'Zenox Animal Healthcare', category: 'stockist', color: '#D32F2F', logo: 'https://www.zyduslife.com/public/images/zydus-logo.png' },
  { id: 'excellar', name: 'Excellar', category: 'stockist', color: '#E65100', logo: 'https://excellar.in/assets/excellar01logo.jpg' },
  { id: 'kapl', name: 'KAPL', category: 'stockist', color: '#00838F', logo: 'https://www.kaplindia.com/wp-content/uploads/2018/08/1-1.jpg' },
  { id: 'anicure', name: 'Anicure', category: 'stockist', color: '#4527A0' },
  { id: 'concept', name: 'Concept', category: 'stockist', color: '#AD1457', logo: 'https://media.licdn.com/dms/image/v2/C560BAQFkDQZzi2oOiA/company-logo_200_200/company-logo_200_200/0/1630575068402/concept_pharmaceuticals_ltd_logo?e=2147483647&v=beta&t=IJSAQdAARw0wR5VsuXev2V5Ynb4AMzmSmwKvGDAAqkY' },
  { id: 'phytto', name: 'Phytto', category: 'stockist', color: '#2E7D32' },
  { id: 'acme', name: 'Acme', category: 'stockist', color: '#C62828', logo: 'https://acmepharma.co.in/images/settings/G1kmq150xaY0tVcVr2g2RckEOyItf4teZjRfjeoV.png' },
  { id: 'natural', name: 'Natural Remedies', category: 'stockist', color: '#558B2F', logo: 'https://www.naturalremedy.com/wp-content/uploads/2025/08/NR-New-logo-r.webp' },
  { id: 'mankind', name: 'Mankind', category: 'stockist', color: '#1565C0', logo: 'https://www.mankindpharma.com/wp-content/themes/mankind/assets/images/logos/logo.svg' },
  { id: 'curevet', name: 'Curevet', category: 'stockist', color: '#6A1B9A' },
  { id: 'slc', name: 'S.L.C.', category: 'stockist', color: '#BF360C', logo: 'https://shreelifecare.in/wp-content/uploads/2021/10/logo.png' },
  { id: 'vets', name: 'VETS', category: 'stockist', color: '#1B5E20', logo: 'https://www.vetsfarma.com/wp-content/uploads/2024/08/vetsfarma-logo.png' },
  { id: 'msd', name: 'MSD Intervet', category: 'stockist', color: '#0277BD', logo: 'https://www.msd-animal-health.co.in/wp-content/uploads/sites/33/2020/05/msd-animal-health-logo.png' },
  { id: 'aman', name: 'Aman F.C.', category: 'stockist', color: '#4E342E' },
  { id: 'cattle', name: 'Cattle Remedies', category: 'stockist', color: '#33691E' },
  { id: 'vamso', name: 'Vamso Biotec', category: 'stockist', color: '#2e7d32', logo: 'https://vamso.in/wp-content/uploads/2024/09/vamso-logo-1.png' },
  { id: 'indianherbs', name: 'Indian Herbs', category: 'stockist', color: '#827717', logo: 'https://cdn.shopify.com/s/files/1/0782/2118/1216/files/IH_LOGO_1.jpg?v=1762541596' },
  { id: 'dabur', name: 'Dabur Ayurvet', category: 'stockist', color: '#2E7D32', logo: 'https://www.dabur.com/static/images/dabur-logo.png' },
  { id: 'vetchem', name: 'Vetchem', category: 'stockist', color: '#0D47A1', logo: 'https://vetchemhealthcare.com/images/logo/logo.png' },
  { id: 'vetsun', name: 'Vetsun', category: 'stockist', color: '#01579B', logo: 'https://i0.wp.com/vetsunbiotech.com/wp-content/uploads/2021/07/cropped-WhatsApp_Image_2021-03-20_at_10.45.25_PM-removebg-preview-1.png?fit=271%2C257&ssl=1' },
  { id: 'biosis', name: 'Biosis', category: 'stockist', color: '#004D40' },
  { id: 'intas', name: 'Intas Vet Pharma', category: 'stockist', color: '#1e3a5f', logo: 'https://www.intaspharma.com/wp-content/themes/intas/assets/images/intas_head.png' },
  { id: 'elanco', name: 'Elanco India', category: 'stockist', color: '#0054a4', logo: 'https://www.elanco.com/content/dam/elanco/images/global/logos/elanco-logo.svg' },
  { id: 'bharti', name: 'Bharti Boti Bhawan', category: 'stockist', color: '#8B4513' },
  { id: 'vetboe', name: 'Vetboe Pharmaceuticals', category: 'stockist', color: '#1a5276' },
  { id: 'carsus', name: 'Carsus Laboratories', category: 'stockist', color: '#6c3483' },
];

export const superStockists = brands.filter((b) => b.category === 'super-stockist');
export const stockists = brands.filter((b) => b.category === 'stockist');
