import type { Service } from '../types'

export const faucetFixtureRepair: Service = {
  slug: 'faucet-fixture-repair',
  published: true,
  category: 'equipment',
  title: 'Faucet & Fixture Repair',
  icon: 'faucet',
  image: 'finishedBathroom',
  summary: 'Repair and replacement of leaking faucets, shower valves, sinks and other fixtures.',
  seo: {
    title: 'Faucet & Fixture Repair in New York City | PLUMBON24',
    description:
      'Dripping faucet or a shower valve that won’t hold temperature? PLUMBON24 MECHANICAL INC repairs and installs faucets and fixtures across all five boroughs.',
  },
  hero: {
    heading: 'Faucet & Fixture Repair in New York City',
    intro:
      'Dripping faucets, leaking shower valves and loose fixtures are repaired or replaced — with care for the finishes around them.',
  },
  overview: [
    'Fixtures are the plumbing you use every day: faucets, shower valves, sinks, tubs and outdoor hose bibs. When a cartridge wears out, a seal fails or a connection loosens, the result can be a constant drip, a shower that won’t hold temperature or a leak inside the vanity.',
    'We repair fixtures when parts are available and the fixture is worth saving, and install new faucets and fixtures when replacement makes more sense — taking care with the countertops, tile and finishes around them.',
  ],
  local: {
    heading: 'Older fixtures, hard-to-find parts',
    text: 'Many NYC homes and pre-war apartments still have older two-handle faucets and shower valves set behind original tile. Parts for discontinued models can be hard to find, so part of the job is identifying exactly what you have and whether a repair, a rebuild or a replacement is the practical choice.',
  },
  problemsHeading: 'Fixture Problems We Fix',
  problems: [
    {
      title: 'Dripping faucets',
      text: 'Worn cartridges, washers and seals let water through even when the handle is closed.',
    },
    {
      title: 'Leaking shower valves',
      text: 'Worn valve parts can cause drips from the shower head or tub spout, or leaks behind the wall.',
    },
    {
      title: 'Low flow at one fixture',
      text: 'Clogged aerators, cartridges or supply valves can reduce flow at a single faucet or shower.',
    },
    {
      title: 'Loose fixtures',
      text: 'Loose faucets and sinks put stress on connections and can lead to leaks.',
    },
    {
      title: 'Failing supply lines and valves',
      text: 'Supply hoses and shut-off valves under sinks can fail with age.',
    },
    {
      title: 'Outdoor hose bibs',
      text: 'Outdoor faucets can drip, or freeze and crack in winter.',
    },
  ],
  signs: [
    'A faucet keeps dripping after you turn it off',
    'Water pools around the base of a faucet or inside the vanity',
    'The shower won’t hold a steady temperature',
    'Handles are stiff, loose or hard to turn',
    'Low water flow at one fixture',
    'Mineral buildup or corrosion on the fixture',
  ],
  process: [
    {
      title: 'Identify the fixture',
      text: 'We determine the type, make and condition of the fixture and what has failed.',
    },
    {
      title: 'Repair or replace',
      text: 'If parts are available and the fixture is in good shape, we repair it; otherwise we discuss replacement options.',
    },
    {
      title: 'Careful installation',
      text: 'New fixtures are installed with attention to the surrounding finishes, connections and shut-off valves.',
    },
    {
      title: 'Check for leaks',
      text: 'We test operation, temperature and every connection before finishing.',
    },
  ],
  benefits: [
    {
      title: 'No more drips',
      text: 'A repaired or new faucet stops wasted water and the constant drip.',
    },
    {
      title: 'Protected cabinets and finishes',
      text: 'Fixing leaks early prevents damage inside vanities and under sinks.',
    },
    {
      title: 'Comfortable showers',
      text: 'A properly working valve delivers a steady water temperature.',
    },
    {
      title: 'A refreshed look',
      text: 'New fixtures can update a kitchen or bathroom without a full renovation.',
    },
  ],
  whyUs:
    'Fixture work is detail work. We take care with your finishes and make sure everything is properly connected, sealed and working before we finish.',
  faqs: [
    {
      question: 'Is it worth repairing an old faucet?',
      answer:
        'If replacement parts are available and the faucet body is in good condition, a repair is often sensible. If parts are discontinued or the faucet is corroded, replacement is usually more practical.',
    },
    {
      question: 'Can you install a faucet I’ve already purchased?',
      answer:
        'Share the make and model when you request service, and we’ll confirm whether it’s compatible with your sink and existing connections.',
    },
    {
      question: 'Why does my shower temperature keep changing?',
      answer:
        'Temperature swings are often caused by a worn shower valve cartridge or a pressure-balancing valve that isn’t working properly, especially when other fixtures are being used.',
    },
    {
      question: 'Why is the water flow weak at my faucet?',
      answer:
        'A clogged aerator, a worn cartridge or a partly closed supply valve are common causes. If several fixtures are affected, the cause is more likely in the piping.',
    },
  ],
  related: ['toilet-repair-installation', 'bathroom-plumbing', 'kitchen-plumbing'],
}
