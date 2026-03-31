export interface Product {
  id: string;
  name: string;
  nameHi?: string;
  tagline: string;
  taglineHi?: string;
  description: string;
  category: 'supplement' | 'mineral' | 'tonic' | 'treatment' | 'digestive';
  packing: string;
  color: string;
  benefits: string[];
}

export const products: Product[] = [
  {
    id: 'multimilk-plus',
    name: 'Multimilk-Plus',
    tagline: 'Extra Nutrients & Micro Minerals to Enhance Immunity & Improve Performance',
    description: 'Increases milk and fat percentage, promotes easy let-down of milk, removes stress, increases immunity, promotes udder development and prevents mastitis, overcomes calcium and phosphorous deficiency.',
    category: 'supplement',
    packing: '500 ml or 1/2/5 Ltr',
    color: '#d97706',
    benefits: [
      'Increases milk and fat percentage',
      'Promotes easy let-down of milk',
      'Removes stress & increases immunity',
      'Promotes udder development',
      'Prevents mastitis',
      'Improves strength of bones and muscles',
    ],
  },
  {
    id: 'sanmin-gold',
    name: 'SANMIN Gold',
    nameHi: 'सैनमिन गोल्ड',
    tagline: 'Metho-Chelated Mineral Mixture Powder',
    description: 'Enriched with Bioactive Chromium, Biotin, Bypass Fat & Probiotic. Essential mineral mixture for dairy cattle and livestock with complete mineral and vitamin profile.',
    category: 'mineral',
    packing: '500 ml or 1/2/5 Ltr',
    color: '#92400e',
    benefits: [
      'Complete mineral & vitamin profile',
      'Bioactive Chromium for metabolism',
      'Bypass Fat for energy',
      'Probiotic for gut health',
      'Biotin for hoof & skin health',
    ],
  },
  {
    id: 'dhab-h',
    name: 'DHAB-H',
    tagline: 'Unique Multi-Vitamin & Protein Iron Feed Supplement',
    description: 'Veterinary multivitamins liquid supplement for cow, goat, buffalo, dairy cattle, poultry and other livestock animals. Contains Vitamin H, E, A, D3. Ideal supplement for animal feeding.',
    category: 'supplement',
    packing: '50/120/250/500 ml & 1 Lt',
    color: '#b91c1c',
    benefits: [
      'Combats stress',
      'Strengthens udder tissues & muscles',
      'Improves fertility of breeding bulls',
      'Improves sperm count and stamina',
      'Prevents hair loss & improves body coat',
      'Prevents mastitis',
    ],
  },
  {
    id: 'jeevcal-gel',
    name: 'Jeevcal Gel',
    tagline: 'Comprehensive Nutritional Supplement for Dairy Cattle',
    description: 'Provides Calcium, Phosphorus, Vit A, Vit D3, Vit E, Vit B12, Magnesium, Cobalt, Selenium, Niacin, Pyridoxine & Citric acid with energy base. Prevents milk fever.',
    category: 'supplement',
    packing: '300 gm',
    color: '#1d4ed8',
    benefits: [
      'Prevents milk fever',
      'Essential post-calving nutrition',
      'Calcium & phosphorus supplement',
      'Complete vitamin complex',
      'Energy base for recovery',
    ],
  },
  {
    id: 'masti-san',
    name: 'Masti-San',
    tagline: 'Tri Sodium Citrate Oral Powder with Vit. K & Vit. C',
    description: 'pH care, milk conditioner, antioxidant. An ultimate solution to treat mastitis and get pure milk. Tissue repair, improves milk yield and quality.',
    category: 'treatment',
    packing: '5 x 60 gm',
    color: '#15803d',
    benefits: [
      'Treats & prevents mastitis',
      'Improves milk yield & quality',
      'Tissue repair properties',
      'Anti-inflammatory & analgesic',
      'Kills pathogenic bacteria',
      'Enhances immunity against mastitis',
    ],
  },
  {
    id: 'jeevliv-plus',
    name: 'Jeevliv Plus',
    tagline: 'Liver Tonic with Multivitamin, Liver Extracts & B-Complex',
    description: 'Anti-stress to counteract stress due to vaccination, deworming, disease, change in feed, weather. Helps restore liver function following liver fluke infection in livestock.',
    category: 'tonic',
    packing: '50/100/250/500 ml & 1 Lt',
    color: '#047857',
    benefits: [
      'Anti-oxidant & hepatoprotective',
      'Reduces blood lipids',
      'Helps in liver regeneration',
      'Increases liver cell synthesis',
      'Increases milk production',
      'Protects liver from toxins',
    ],
  },
  {
    id: 'san-biotics',
    name: 'San-Biotics',
    tagline: 'A Complete Supportive Treatment — Vet Bolus',
    description: 'Restores appetite, health, productivity. Rumenotonic with Probiotics & Enzymes. Prepared from scientific herbs for stimulation of appetite and utilization of feed.',
    category: 'digestive',
    packing: '10 x 4 Bolus',
    color: '#7c3aed',
    benefits: [
      'Restores appetite & health',
      'Improves digestion process',
      'Better secretion of saliva',
      'Effective digestion of food',
      'Regulates rumen microflora',
      'Probiotic & enzyme formula',
    ],
  },
  {
    id: 'pasu-pachak',
    name: 'Pasu Pachak',
    nameHi: 'पशु पाचक',
    tagline: 'Strong Appetite Stimulant & Digestive Supplement',
    taglineHi: 'क्षुधावर्धक एवं पाचक आहार',
    description: 'For prevention and treatment of digestive disorders like Anorexia, Dyspepsia, Constipation etc. An adjuvant therapy along with antibiotics, antibacterials, anthelmintics.',
    category: 'digestive',
    packing: '50/100/250/500 gm & 1 Kg',
    color: '#ea580c',
    benefits: [
      'Prevents anorexia & dyspepsia',
      'Treats constipation',
      'Improves ruminal digestion',
      'Boosts farm productivity',
      'Herbal formulation',
      'For cows, buffaloes, horses, goats',
    ],
  },
];
