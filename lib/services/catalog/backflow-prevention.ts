import type { Service } from '../types'

export const backflowPrevention: Service = {
  slug: 'backflow-prevention',
  published: true,
  category: 'lines',
  title: 'Backflow Prevention',
  icon: 'backflow',
  image: 'backflowCopper',
  summary: 'Backflow prevention device installation, repair and replacement to protect the water supply.',
  seo: {
    title: 'Backflow Prevention in New York City | PLUMBON24 MECHANICAL INC',
    description:
      'Need a backflow preventer installed, repaired or replaced in NYC? PLUMBON24 MECHANICAL INC helps protect your building’s drinking water supply.',
  },
  hero: {
    heading: 'Backflow Prevention in New York City',
    intro:
      'Backflow prevention devices keep contaminated water from flowing back into the drinking water supply. We help with installation, repair and replacement.',
  },
  overview: [
    'Backflow happens when water reverses direction in a plumbing system (after a pressure drop in the city main, for example) and draws water from equipment, irrigation or process lines back into the drinking water supply. A backflow prevention device is designed to stop that.',
    'Commercial buildings, restaurants, medical and industrial properties, and buildings with fire sprinkler or irrigation systems commonly need backflow protection. We help owners and property managers with installing, repairing and replacing backflow prevention assemblies.',
  ],
  local: {
    heading: 'NYC backflow requirements',
    text: 'New York City’s Department of Environmental Protection (DEP) requires backflow prevention devices on the water service of many properties, based on the potential hazard of what is connected to the building’s plumbing. Required devices generally must be tested every year by a certified tester, with the results submitted to DEP. If you’ve received a notice, or you aren’t sure whether your property needs a device, contact us to talk it through.',
  },
  problemsHeading: 'Common Backflow Issues',
  problems: [
    {
      title: 'Missing required device',
      text: 'Properties that need backflow protection may receive a DEP notice to install a device.',
    },
    {
      title: 'Failed annual test',
      text: 'A device that fails its test needs repair or replacement before it can pass.',
    },
    {
      title: 'Discharging relief valve',
      text: 'A reduced pressure zone (RPZ) assembly that keeps discharging water usually has a problem inside.',
    },
    {
      title: 'Worn internal parts',
      text: 'Check valves, springs and seals wear over time and stop sealing properly.',
    },
    {
      title: 'Freeze damage',
      text: 'Devices in unheated spaces can be damaged by freezing temperatures.',
    },
    {
      title: 'A change in building use',
      text: 'A new tenant or new equipment, such as a restaurant moving into a retail space, can change the protection required.',
    },
  ],
  signs: [
    'You received a backflow notice from NYC DEP',
    'Your device failed its annual test',
    'Water is discharging from the relief valve',
    'Water pressure dropped after a device was installed',
    'The building has new equipment, irrigation or a change in use',
    'The device is old, corroded or leaking',
  ],
  process: [
    {
      title: 'Review the requirements',
      text: 'We look at how the building is used, the existing device (if any) and any notices you’ve received.',
    },
    {
      title: 'Choose the right assembly',
      text: 'The type of device depends on the hazard level and the building’s water service.',
    },
    {
      title: 'Install, repair or replace',
      text: 'Work is completed with attention to orientation, clearances, access and protection from freezing.',
    },
    {
      title: 'Plan the next steps',
      text: 'Required devices need to be tested by a certified tester after installation or repair, and we’ll explain what comes next.',
    },
  ],
  benefits: [
    {
      title: 'Safer drinking water',
      text: 'Backflow protection helps keep contaminants out of the potable water supply.',
    },
    {
      title: 'Meeting requirements',
      text: 'Addressing DEP requirements helps avoid violations and penalties.',
    },
    {
      title: 'Devices that pass',
      text: 'Properly installed and maintained assemblies are more likely to pass their annual tests.',
    },
    {
      title: 'Clear guidance',
      text: 'Understand what your property needs, and why.',
    },
  ],
  whyUs:
    'Backflow requirements can be confusing. We help you understand what your property needs and handle the plumbing work with care.',
  faqs: [
    {
      question: 'What is backflow?',
      answer:
        'Backflow is the unwanted reversal of water flow in a plumbing system, which can allow contaminated water to enter the drinking water supply.',
    },
    {
      question: 'Does my property need a backflow preventer?',
      answer:
        'It depends on how the building is used and what is connected to its plumbing. Many commercial, mixed-use and larger residential properties need one. NYC DEP sets the requirements, and properties that need a device are typically notified.',
    },
    {
      question: 'How often does a backflow device need to be tested?',
      answer:
        'In New York City, required backflow prevention devices generally must be tested once a year by a certified tester, with results filed with DEP.',
    },
    {
      question: 'What is an RPZ valve?',
      answer:
        'A reduced pressure zone (RPZ) assembly is a type of backflow preventer used where the hazard is high. It has a relief valve that discharges water if its internal check valves stop sealing.',
    },
  ],
  related: ['water-line-services', 'commercial-plumbing', 'plumbing-maintenance'],
}
