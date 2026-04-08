export interface Product {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
}

export const products: Product[] = [
  {
    slug: 'cems-monitoring-panels',
    name: 'CEMS Monitoring Panels',
    category: 'Monitoring',
    image: '/images/products/cems-pannel.webp',
    description: 'Continuous Emission Monitoring Systems designed for real-time monitoring of industrial exhaust gases and pollutants.',
    specs: [{ label: 'Integration', value: 'Multi-gas Analysis' }, { label: 'Standard', value: 'EPA Compliant' }],
    features: ['Automated Calibration', 'High Precision Sensors', 'Remote Data Logging'],
    applications: ['Power Plants', 'Chemical Refineries', 'Steel Mills'],
  },
  {
    slug: 'drive-control-panels',
    name: 'Drive Control Panels',
    category: 'Control',
    image: '/images/products/drive-control-panelzs.webp',
    description: 'Advanced VFD and Drive control panels for precise speed and torque management of industrial motors.',
    specs: [{ label: 'Power', value: 'Up to 500kW' }, { label: 'Communication', value: 'Modbus/TCP' }],
    features: ['Soft Start/Stop', 'Energy Optimization', 'Harmonic Filtration'],
    applications: ['Conveyors', 'Pumping Stations', 'Heavy Machinery'],
  },
  {
    slug: 'hazardous-area-panels',
    name: 'Hazardous Area Panels',
    category: 'Safety',
    image: '/images/products/dry-seal-hazardous-panel.webp',
    description: 'Certified explosion-proof panels designed for reliable operation in Dry Seal and other hazardous industrial zones.',
    specs: [{ label: 'Certification', value: 'ATEX / IECEx' }, { label: 'Enclosure', value: 'Ex-d / Ex-p' }],
    features: ['Flameproof Integrity', 'Pressurized Enclosures', 'Corrosion Resistance'],
    applications: ['Oil & Gas', 'Pharmaceuticals', 'Paint Shops'],
  },
  {
    slug: 'specialized-filtration-panels',
    name: 'Specialized Filtration Panels',
    category: 'Process',
    image: '/images/products/flargination-panel.webp',
    description: 'Specialized filtration and processing panels for critical industrial purification workflows.',
    specs: [{ label: 'Pressure', value: 'Up to 100 Bar' }, { label: 'Material', value: 'SS316' }],
    features: ['Multi-stage Filtering', 'Pressure Monitoring', 'Automated Backwash'],
    applications: ['Water Treatment', 'Chemical Processing', 'Food & Beverage'],
  },
  {
    slug: 'generator-control-panels',
    name: 'Generator Control Panels',
    category: 'Power',
    image: '/images/products/generators-cntrol-panel.webp',
    description: 'Comprehensive control solutions for backup generator sets with automated load sharing and AMF functionality.',
    specs: [{ label: 'Voltage', value: '415V - 11kV' }, { label: 'Sync', value: 'Multi-gen Sync' }],
    features: ['Auto Mains Failure', 'Engine Protection', 'Intelligent Metering'],
    applications: ['Datacenters', 'Commercial High-rises', 'Industrial Plants'],
  },
  {
    slug: 'health-monitoring-systems',
    name: 'Health Monitoring Systems',
    category: 'Monitoring',
    image: '/images/products/health-monitoring-system.webp',
    description: 'Advanced diagnostic systems for real-time health and performance monitoring of critical electrical infrastructure.',
    specs: [{ label: 'Analysis', value: 'Predictive Maintenance' }, { label: 'I/O', value: 'High Density' }],
    features: ['Thermal Imaging Integration', 'Vibration Analysis', 'Cloud Connectivity'],
    applications: ['Smart Grids', 'Critical Infrastructure', 'Manufacturing Lines'],
  },
  {
    slug: 'instrumentation-panels',
    name: 'Instrumentation Panels',
    category: 'Instrumentation',
    image: '/images/products/panel-instrumental-panel.webp',
    description: 'High-precision instrumentation control desks and panels for process industry monitoring.',
    specs: [{ label: 'Signal', value: '4-20mA / HART' }, { label: 'Mount', value: 'Floor/Flush' }],
    features: ['Custom Mimic Displays', 'Ergonomic Design', 'Interference Shielding'],
    applications: ['Process Plants', 'Control Rooms', 'Laboratories'],
  },
  {
    slug: 'plc-control-systems',
    name: 'PLC Control Systems',
    category: 'Automation',
    image: '/images/products/plc-control-panels.webp',
    description: 'Robust PLC-based automation panels providing flexible and scalable control for complex industrial processes.',
    specs: [{ label: 'CPU', value: 'High Speed Processor' }, { label: 'Protocols', value: 'Profinet/Ethernet' }],
    features: ['Hot Redundancy', 'SCADA Integration', 'Modular Expansion'],
    applications: ['Factory Automation', 'Material Handling', 'Logistics'],
  },
  {
    slug: 'gas-chromatographic-panels',
    name: 'Process Gas Chromatographic Panels',
    category: 'Analytical',
    image: '/images/products/process-gas-chrmographic-panel.webp',
    description: 'Highly specialized analytical panels for continuous gas chromatography in process streams.',
    specs: [{ label: 'Cycle Time', value: 'Fast Loop' }, { label: 'Analysis', value: 'Composition Percentage' }],
    features: ['Climate Controlled', 'High Purity Piping', 'Self-Diagnostics'],
    applications: ['Chemical Synthesis', 'Gas Pipelines', 'Refineries'],
  },
]
