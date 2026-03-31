export interface Service {
  id: string;
  icon: string;
  titleKey: string;
  descKey: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'distribution',
    icon: '🚛',
    titleKey: 'distribution',
    descKey: 'distributionDesc',
    features: ['distributionF1', 'distributionF2', 'distributionF3'],
  },
  {
    id: 'wholesale',
    icon: '🏪',
    titleKey: 'wholesale',
    descKey: 'wholesaleDesc',
    features: ['wholesaleF1', 'wholesaleF2', 'wholesaleF3'],
  },
  {
    id: 'stockist',
    icon: '🤝',
    titleKey: 'stockist',
    descKey: 'stockistDesc',
    features: ['stockistF1', 'stockistF2', 'stockistF3'],
  },
];
