import { Home, Building2, Wrench, Shield } from 'lucide-react';
import type { ServiceType } from './types';

export const services: ServiceType[] = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Custom solar solutions for homes of all sizes. Maximize your energy independence with our expert residential installations.',
    details: {
      features: [
        'Customized system design based on your home\'s energy needs',
        'High-efficiency solar panels with optimal placement',
        'Smart inverter technology for maximum power conversion',
        'Battery storage options for 24/7 power availability',
        'Aesthetic integration with your home\'s architecture'
      ],
      process: [
        'Free initial consultation',
        'Detailed site survey and analysis',
        'Custom system design',
        'Professional installation',
        'System monitoring setup'
      ]
    }
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    description: 'Comprehensive solar systems for businesses. Reduce operating costs and demonstrate your commitment to sustainability.',
    details: {
      features: [
        'Large-scale commercial installations',
        'Power purchase agreements (PPA)',
        'ROI analysis and financial planning',
        'Grid integration services',
        'Commercial energy storage solutions'
      ],
      benefits: [
        'Reduced operational costs',
        'Enhanced corporate sustainability',
        'Tax incentives and depreciation benefits',
        'Improved property value',
        'Energy independence'
      ]
    }
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: '24/7 monitoring and maintenance services to ensure your solar system performs at peak efficiency year-round.',
    details: {
      services: [
        'Regular system health checks',
        'Performance monitoring and optimization',
        'Panel cleaning and maintenance',
        'Inverter servicing',
        'Emergency repair services'
      ],
      plans: [
        'Basic monitoring plan',
        'Premium maintenance package',
        'All-inclusive service contract',
        '24/7 emergency support',
        'Annual system optimization'
      ]
    }
  },
  {
    icon: Shield,
    title: 'Warranty',
    description: 'Industry-leading 25-year warranty on all installations, backed by our commitment to quality and service.',
    details: {
      coverage: [
        'Panel performance guarantee',
        'Inverter warranty',
        'Installation workmanship',
        'System monitoring equipment',
        'Battery storage systems'
      ],
      terms: [
        '25-year panel output warranty',
        '10-year inverter warranty',
        '5-year workmanship warranty',
        'Transferable warranty terms',
        'No-hassle claim process'
      ]
    }
  }
];