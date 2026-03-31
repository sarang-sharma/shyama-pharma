export interface Brand {
  id: string;
  name: string;
  category: 'super-stockist' | 'stockist';
  color: string;
  logo?: string; // URL to real logo image
}

export const brands: Brand[] = [
  { id: 'nutrivet', name: 'Nutrivet Farm Care', category: 'super-stockist', color: '#1B5E20', logo: 'https://nutrivetindia.com/images/logo.png' },
  { id: 'ttk', name: 'TTK Healthcare', category: 'super-stockist', color: '#1565C0', logo: 'https://ttkhealthcare.com/wp-content/themes/ttk/assets/images/logo.jpg' },
  { id: 'sanjeevani', name: 'Sanjeevani Animal Healthcare', category: 'super-stockist', color: '#0f766e' },
  { id: 'vetoquinol', name: 'Vetoquinol', category: 'stockist', color: '#00695C', logo: 'https://www.vetoquinol.com/themes/custom/vetoquinol/integration/public/assets/images/logo.png' },
  { id: 'zydus', name: 'Zydus', category: 'stockist', color: '#D32F2F', logo: 'https://www.zyduslife.com/public/images/zydus-logo.png' },
  { id: 'excellar', name: 'Excellar', category: 'stockist', color: '#E65100', logo: 'https://excellar.in/assets/excellar01logo.jpg' },
  { id: 'brihans', name: 'Brihans', category: 'stockist', color: '#F57F17', logo: 'https://www.brihans.in/assets/images/logo.webp' },
  { id: 'kapl', name: 'KAPL', category: 'stockist', color: '#00838F', logo: 'https://www.kaplindia.com/wp-content/uploads/2018/08/1-1.jpg' },
  { id: 'anicure', name: 'Anicure', category: 'stockist', color: '#4527A0' },
  { id: 'concept', name: 'Concept', category: 'stockist', color: '#AD1457', logo: 'https://media.licdn.com/dms/image/v2/C560BAQFkDQZzi2oOiA/company-logo_200_200/company-logo_200_200/0/1630575068402/concept_pharmaceuticals_ltd_logo?e=2147483647&v=beta&t=IJSAQdAARw0wR5VsuXev2V5Ynb4AMzmSmwKvGDAAqkY' },
  { id: 'phytto', name: 'Phytto', category: 'stockist', color: '#2E7D32' },
  { id: 'acme', name: 'Acme', category: 'stockist', color: '#C62828', logo: 'https://acmepharma.co.in/images/settings/G1kmq150xaY0tVcVr2g2RckEOyItf4teZjRfjeoV.png' },
  { id: 'natural', name: 'Natural Remedies', category: 'stockist', color: '#558B2F', logo: 'https://www.naturalremedy.com/wp-content/uploads/2025/08/NR-New-logo-r.webp' },
  { id: 'mankind', name: 'Mankind', category: 'stockist', color: '#1565C0', logo: 'https://www.mankindpharma.com/wp-content/themes/mankind/assets/images/logos/logo.svg' },
  { id: 'curevet', name: 'Curevet', category: 'stockist', color: '#6A1B9A' },
  { id: 'slc', name: 'S.L.C.', category: 'stockist', color: '#BF360C', logo: 'https://shreelifecare.in/wp-content/uploads/2021/10/logo.png' },
  { id: 'bovion', name: 'Bovion', category: 'stockist', color: '#00695C', logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQF75q-b5HxHFA/company-logo_200_200/company-logo_200_200/0/1630628439947?e=2147483647&v=beta&t=57Mnuto2V-Ri3blXiH5AZTDPxZAWb25r7qX4ttSfpHo' },
  { id: 'sterling', name: 'Sterling Lab', category: 'stockist', color: '#4A148C', logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHcG4Ca-eTGew/company-logo_200_200/company-logo_200_200/0/1631316614387?e=2147483647&v=beta&t=xcTooiHRB73QBDqCPx5qc5CwvAkekuA0yeVh67JfXNA' },
  { id: 'vets', name: 'VETS', category: 'stockist', color: '#1B5E20', logo: 'https://www.vetsfarma.com/wp-content/uploads/2024/08/vetsfarma-logo.png' },
  { id: 'msd', name: 'MSD Intervet', category: 'stockist', color: '#0277BD', logo: 'https://www.msd-animal-health.co.in/wp-content/uploads/sites/33/2020/05/msd-animal-health-logo.png' },
  { id: 'kepler', name: 'Kepler', category: 'stockist', color: '#E65100', logo: 'https://media.licdn.com/dms/image/v2/C510BAQHeMY4mpUCQ_A/company-logo_200_200/company-logo_200_200/0/1631437282582/kepler_vet_mission_private_limited_logo?e=2147483647&v=beta&t=0jr1uJx_E8zGZTXstzpMsPxPv80VhWbEQOhiFUBkzVQ' },
  { id: 'aman', name: 'Aman F.C.', category: 'stockist', color: '#4E342E' },
  { id: 'cattle', name: 'Cattle Remedies', category: 'stockist', color: '#33691E', logo: 'https://vamso.in/wp-content/uploads/2024/09/vamso-logo-1.png' },
  { id: 'indianherbs', name: 'Indian Herbs', category: 'stockist', color: '#827717', logo: 'https://cdn.shopify.com/s/files/1/0782/2118/1216/files/IH_LOGO_1.jpg?v=1762541596' },
  { id: 'dabur', name: 'Dabur Ayurvet', category: 'stockist', color: '#2E7D32', logo: 'https://www.dabur.com/static/images/dabur-logo.png' },
  { id: 'vetchem', name: 'Vetchem', category: 'stockist', color: '#0D47A1', logo: 'https://vetchemhealthcare.com/images/logo/logo.png' },
  { id: 'getwell', name: 'Getwell', category: 'stockist', color: '#B71C1C', logo: 'https://www.getwellpharmaceutical.com/images/logo.png' },
  { id: 'reality', name: 'Reality', category: 'stockist', color: '#6A1B9A' },
  { id: 'vetsun', name: 'Vetsun', category: 'stockist', color: '#01579B', logo: 'https://i0.wp.com/vetsunbiotech.com/wp-content/uploads/2021/07/cropped-WhatsApp_Image_2021-03-20_at_10.45.25_PM-removebg-preview-1.png?fit=271%2C257&ssl=1' },
  { id: 'biosis', name: 'Biosis', category: 'stockist', color: '#004D40' },
  { id: 'intas', name: 'Intas Vet Pharma', category: 'stockist', color: '#1e3a5f' },
];

export const superStockists = brands.filter((b) => b.category === 'super-stockist');
export const stockists = brands.filter((b) => b.category === 'stockist');
