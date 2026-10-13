import type { Service } from '../types'

export const leakDetectionRepair: Service = {
  slug: 'leak-detection-repair',
  published: true,
  category: 'repairs',
  title: 'Leak Detection & Repair',
  shortTitle: 'Leak Repair',
  icon: 'leak-search',
  image: 'drippingTap',
  summary: 'Identify and repair plumbing leaks before they become larger problems.',
  seo: {
    title: 'Leak Detection & Repair in New York City | PLUMBON24',
    description:
      'Water stains, damp walls or a rising water bill? PLUMBON24 MECHANICAL INC traces and repairs plumbing leaks in NYC homes and commercial buildings.',
  },
  hero: {
    heading: 'Leak Detection & Repair in New York City',
    intro:
      'A small leak hidden in a wall or ceiling can do a lot of damage before anyone notices. We trace the source and repair it properly.',
  },
  overview: [
    'Visible drips are easy to spot. The leaks that do the most damage usually aren’t visible at all: a pinhole in a supply line inside a wall, a failed drain connection under a tub, or a slow leak under a floor that only shows up as a stain on the ceiling below.',
    'We trace leaks methodically — following the evidence, isolating parts of the system and testing — to find where the water is actually coming from before walls or floors are opened. Then we repair the failed pipe, fitting or connection.',
  ],
  local: {
    heading: 'Leaks travel in stacked buildings',
    text: 'In brownstones, row houses and apartment buildings, water from a leak often appears far from its source. It follows pipes, joists and walls down through the building, so a stain on a ground-floor ceiling can start two floors up. Tracing the water back to where it begins is often the most important part of the job.',
  },
  problemsHeading: 'Leaks We Track Down',
  problems: [
    {
      title: 'Hidden supply line leaks',
      text: 'Pinhole leaks and failed fittings on pressurized lines can leak around the clock inside walls and floors.',
    },
    {
      title: 'Drain and waste leaks',
      text: 'Failed drain connections under tubs, showers and sinks often leak only when the fixture is used.',
    },
    {
      title: 'Fixture leaks',
      text: 'Faucets, toilets and shower valves can leak at seals and connections, sometimes behind the wall.',
    },
    {
      title: 'Leaks below floors',
      text: 'Leaks under basement slabs or below floors are hard to locate without careful, step-by-step testing.',
    },
    {
      title: 'Water heater and appliance leaks',
      text: 'Tanks, valves and supply connections to heaters, washers and dishwashers wear out over time.',
    },
  ],
  signs: [
    'Water stains on ceilings or walls',
    'Peeling paint, bubbling plaster or warped flooring',
    'A musty smell or visible mold',
    'An unexplained increase in your water bill',
    'The sound of running water when everything is off',
    'Damp spots on floors, inside cabinets or on basement walls',
  ],
  process: [
    {
      title: 'Gather the evidence',
      text: 'We look at where the water shows up, when it appears and which fixtures or lines are nearby.',
    },
    {
      title: 'Trace the source',
      text: 'Depending on the situation, this may involve isolating sections of piping, pressure testing, moisture readings and careful inspection.',
    },
    {
      title: 'Repair the leak',
      text: 'Once the source is confirmed, we repair or replace the failed pipe, fitting or connection.',
    },
    {
      title: 'Test and confirm',
      text: 'The repaired section is tested to confirm the leak has stopped.',
    },
  ],
  benefits: [
    {
      title: 'Less damage',
      text: 'Finding a leak early limits damage to walls, ceilings, floors and neighboring units.',
    },
    {
      title: 'Targeted repairs',
      text: 'Locating the source accurately helps avoid unnecessary demolition.',
    },
    {
      title: 'Less wasted water',
      text: 'Stopping hidden leaks reduces wasted water — and the bills that come with it.',
    },
    {
      title: 'Healthier spaces',
      text: 'Removing ongoing moisture helps prevent mold and musty odors.',
    },
  ],
  whyUs:
    'Leak detection takes patience and experience. We follow the evidence carefully, so the repair targets the real source of the water.',
  faqs: [
    {
      question: 'How can I tell if I have a hidden leak?',
      answer:
        'Common signs include water stains, damp or warped materials, musty odors, the sound of running water when fixtures are off, and a higher-than-usual water bill. You can also check the water meter: if it keeps moving while all water is off, water is going somewhere.',
    },
    {
      question: 'Will my walls need to be opened?',
      answer:
        'Sometimes access is needed to make the repair. The point of leak detection is to pinpoint the source first, so any opening is as small and targeted as possible.',
    },
    {
      question: 'Can a small drip really cause damage?',
      answer:
        'Yes. A slow, constant leak can soak into subfloors, framing and ceilings over weeks or months, leading to rot, mold and much bigger repairs.',
    },
    {
      question: 'Should I shut off the water if I find a leak?',
      answer:
        'If the leak is active and you can’t stop it at a fixture valve, close the main water shut-off valve to limit damage, then request service.',
    },
  ],
  related: ['pipe-repair-replacement', 'emergency-plumbing', 'water-line-services'],
}
