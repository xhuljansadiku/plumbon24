import type { Service } from '../types'

export const plumbingMaintenance: Service = {
  slug: 'plumbing-maintenance',
  published: true,
  category: 'projects',
  title: 'Plumbing Maintenance',
  icon: 'gauge',
  image: 'manifoldGauge',
  summary: 'Inspections and preventive maintenance that catch small problems before they become emergencies.',
  seo: {
    title: 'Plumbing Maintenance in Brooklyn, NY | PLUMBON24 MECHANICAL INC',
    description:
      'Preventive plumbing maintenance and inspections for Brooklyn homes, buildings and businesses. Catch small problems early with PLUMBON24 MECHANICAL INC.',
  },
  hero: {
    heading: 'Plumbing Maintenance in Brooklyn, NY',
    intro:
      'Preventive maintenance finds worn valves, slow leaks and failing components before they turn into emergencies.',
  },
  overview: [
    'Most plumbing emergencies start as small problems nobody noticed: a seeping valve, a corroded fitting, a water heater full of sediment or a drain that has been slowing down for months. Regular maintenance is the most practical way to catch them early.',
    'We inspect and maintain plumbing for homeowners, building owners and businesses — checking valves, water heaters, drains, fixtures and visible piping, and explaining anything that needs attention.',
  ],
  local: {
    heading: 'Maintenance for older buildings',
    text: 'In Brooklyn’s older housing stock, shut-off valves that haven’t been turned in years, aging water heaters and older drain lines are common. For multi-family and commercial buildings, planned maintenance also helps avoid tenant emergencies and keeps equipment such as sump pumps and backflow devices ready.',
  },
  problemsHeading: 'What Maintenance Covers',
  problems: [
    {
      title: 'Shut-off valves',
      text: 'Checking that main and fixture valves actually work when you need them.',
    },
    {
      title: 'Water heaters',
      text: 'Inspecting connections, venting and relief valves, and flushing sediment from tanks.',
    },
    {
      title: 'Drains',
      text: 'Identifying slow drains and buildup before they clog.',
    },
    {
      title: 'Visible piping',
      text: 'Looking for corrosion, leaks and loose supports.',
    },
    {
      title: 'Fixtures and toilets',
      text: 'Finding drips, running toilets and worn parts.',
    },
    {
      title: 'Pumps and devices',
      text: 'Testing sump pumps and checking backflow devices.',
    },
  ],
  signsHeading: 'Good Reasons to Schedule Maintenance',
  signs: [
    'Your plumbing has never been inspected',
    'Your water heater is several years old',
    'You manage a multi-family or commercial building',
    'You’ve had recurring drain problems',
    'You’re buying, or just bought, an older home',
    'Winter is coming and some pipes are exposed to the cold',
  ],
  process: [
    {
      title: 'Agree on the scope',
      text: 'We decide together what to inspect, based on your property and concerns.',
    },
    {
      title: 'Inspect',
      text: 'We check the key components of your plumbing system.',
    },
    {
      title: 'Report',
      text: 'You get a clear explanation of what we found and what we recommend.',
    },
    {
      title: 'Maintain or repair',
      text: 'Routine maintenance is completed, and any repairs are discussed before work begins.',
    },
  ],
  benefits: [
    {
      title: 'Fewer emergencies',
      text: 'Catch problems early, before they cause damage.',
    },
    {
      title: 'Longer equipment life',
      text: 'Maintained water heaters and fixtures tend to last longer.',
    },
    {
      title: 'Lower costs over time',
      text: 'Small planned repairs usually cost less than emergency repairs.',
    },
    {
      title: 'Know your system',
      text: 'Understand the condition of your plumbing and plan ahead.',
    },
  ],
  whyUs:
    'Maintenance is about noticing details. With 15+ years of plumbing experience, we know where problems tend to start — and how to catch them early.',
  faqs: [
    {
      question: 'How often should plumbing be inspected?',
      answer:
        'Many homeowners schedule a general check about once a year. Larger buildings and commercial properties often benefit from more frequent maintenance.',
    },
    {
      question: 'Should my water heater be flushed?',
      answer:
        'Periodically flushing a tank water heater removes sediment, which can improve efficiency and reduce noise. Manufacturer recommendations vary.',
    },
    {
      question: 'What can I do to prevent plumbing problems?',
      answer:
        'Know where your main shut-off valve is, keep grease and wipes out of drains, watch for leaks and stains, and protect pipes from freezing in winter.',
    },
    {
      question: 'Do you offer maintenance for buildings?',
      answer:
        'Yes. We work with building owners and property managers on planned plumbing maintenance.',
    },
  ],
  related: ['water-heater-services', 'drain-cleaning', 'sump-pump-services'],
}
