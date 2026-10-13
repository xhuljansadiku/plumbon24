import type { Service } from '../types'

export const commercialPlumbing: Service = {
  slug: 'commercial-plumbing',
  published: true,
  category: 'property',
  title: 'Commercial Plumbing',
  icon: 'building',
  image: 'commercialKitchenSink',
  summary: 'Plumbing for offices, restaurants, retail spaces, property managers and commercial buildings.',
  seo: {
    title: 'Commercial Plumber in New York City | PLUMBON24 MECHANICAL INC',
    description:
      'Commercial plumbing for NYC restaurants, offices, retail and property managers. Repairs, installations and maintenance from PLUMBON24 MECHANICAL INC.',
  },
  hero: {
    heading: 'Commercial Plumbing in New York City',
    intro:
      'For restaurants, offices, retail spaces and building owners, plumbing problems affect customers, tenants and revenue. We provide professional commercial plumbing with clear communication.',
  },
  overview: [
    'Commercial plumbing carries more load and more responsibility than residential plumbing: more fixtures, more users, larger piping and equipment, and requirements such as backflow protection. When something fails, it can close a restroom, stop a kitchen or affect every tenant in the building.',
    'We work with business owners and property managers on repairs, installations and maintenance — communicating clearly about the problem, the plan and anything that affects your operations.',
  ],
  local: {
    heading: 'New York City’s commercial mix',
    text: 'From restaurants and shops on New York City’s commercial avenues to mixed-use buildings with storefronts below apartments, commercial plumbing here often means working in tight spaces, around business hours and alongside residential tenants. Planning work to limit disruption is part of the job.',
  },
  problemsHeading: 'Commercial Plumbing We Handle',
  problems: [
    {
      title: 'Restroom plumbing',
      text: 'Toilets, urinals, flush valves and sinks that see heavy daily use.',
    },
    {
      title: 'Commercial kitchens',
      text: 'Sinks, drains, grease management and equipment connections.',
    },
    {
      title: 'Drain and sewer problems',
      text: 'Backups that affect customers, staff and tenants.',
    },
    {
      title: 'Hot water',
      text: 'Water heaters sized and maintained for commercial demand.',
    },
    {
      title: 'Backflow prevention',
      text: 'Protection that many commercial properties are required to have.',
    },
    {
      title: 'Tenant fit-outs',
      text: 'Plumbing for new or changing commercial spaces.',
    },
  ],
  signsHeading: 'When to Call Us',
  signs: [
    'Recurring drain or restroom problems',
    'Leaks affecting tenants or customers',
    'A backflow notice or a failed backflow test',
    'Hot water problems affecting operations',
    'A new tenant or a change of use',
    'Plumbing that needs planned maintenance',
  ],
  process: [
    {
      title: 'Understand your operation',
      text: 'We learn how the space is used, what’s affected and any constraints on access or timing.',
    },
    {
      title: 'Diagnose and plan',
      text: 'We identify the problem and outline a plan, including how to limit disruption.',
    },
    {
      title: 'Professional work',
      text: 'Work is carried out with attention to safety, cleanliness and your business.',
    },
    {
      title: 'Clear communication',
      text: 'You’ll know what was done and anything that needs follow-up.',
    },
  ],
  benefits: [
    {
      title: 'Less disruption',
      text: 'Planned, well-executed work helps keep your business running.',
    },
    {
      title: 'One point of contact',
      text: 'One plumbing company for repairs, installations and maintenance.',
    },
    {
      title: 'Requirements explained',
      text: 'Help understanding obligations such as backflow protection.',
    },
    {
      title: 'Professional on site',
      text: 'Respect for your customers, tenants and space.',
    },
  ],
  whyUs:
    'Businesses need a plumber who communicates clearly and respects their operations. With 15+ years of plumbing experience, that’s how we work.',
  faqs: [
    {
      question: 'What types of commercial properties do you work with?',
      answer:
        'Offices, restaurants, retail spaces, mixed-use buildings and commercial properties managed by owners and property managers.',
    },
    {
      question: 'Can you work around our business hours?',
      answer:
        'Tell us about your constraints when you request service, and we’ll discuss scheduling options that limit disruption.',
    },
    {
      question: 'Do you work with property managers?',
      answer:
        'Yes. We work with property managers and building owners on repairs, tenant issues and planned plumbing work.',
    },
    {
      question: 'Do commercial buildings need backflow prevention?',
      answer:
        'Many do. NYC DEP requires backflow protection based on a building’s use and potential hazard, and required devices must generally be tested every year.',
    },
  ],
  related: ['backflow-prevention', 'plumbing-maintenance', 'drain-cleaning'],
}
