import { site } from '@/lib/site'
import type { Service } from '../types'

export const emergencyPlumbing: Service = {
  slug: 'emergency-plumbing',
  /** Controlled by `features.emergencyService` in lib/site.ts so the page and the homepage section stay in sync. */
  published: site.features.emergencyService,
  category: 'repairs',
  title: 'Emergency Plumbing',
  icon: 'alert',
  image: 'faucetDark',
  summary: 'Professional assistance for urgent plumbing problems and unexpected leaks.',
  seo: {
    title: 'Emergency Plumbing Services in New York City | PLUMBON24',
    description:
      'Burst pipe, major leak or sewer backup in NYC? Request emergency plumbing service from PLUMBON24 MECHANICAL INC, backed by 15+ years of experience.',
  },
  hero: {
    heading: 'Emergency Plumbing Services in New York City',
    intro:
      'A burst pipe, a major leak or a sewage backup can damage a home or business quickly. Tell us what’s happening and we’ll help you work out the right next step.',
  },
  overview: [
    'Some plumbing problems can wait for a convenient appointment. Others can’t. When water is coming through a ceiling, a drain is backing up into the basement or a pipe has split, you need a plumber who can assess the situation and stop the damage from spreading.',
    'We approach urgent problems methodically: make the situation safe and stop the water first, then find the cause and explain the options for a proper repair, instead of a quick patch that fails again a week later.',
  ],
  local: {
    heading: 'Why urgent problems escalate quickly in NYC buildings',
    text: 'In row houses, brownstones and multi-family buildings, plumbing runs through shared walls, floors and stacks. A leak in one apartment can reach the unit below within minutes, and a blocked main line can affect every unit in the building. Knowing where your main shut-off valve is (usually in the basement or cellar, near where the water service enters from the street) is the most useful thing you can do before an emergency happens.',
  },
  problemsHeading: 'Common Plumbing Emergencies',
  problems: [
    {
      title: 'Burst or split pipes',
      text: 'Pipes in exterior walls, unheated basements and crawl spaces can freeze and split in winter, and aging pipes can fail without warning.',
    },
    {
      title: 'Major leaks',
      text: 'Water coming through a ceiling, wall or floor usually means a failed connection, a cracked fitting or a leaking drain line above.',
    },
    {
      title: 'Sewer and drain backups',
      text: 'Wastewater coming up through a floor drain, tub or toilet points to a blockage in a main line or the building sewer.',
    },
    {
      title: 'Overflowing toilets',
      text: 'A toilet that keeps overflowing, or overflows when other fixtures drain, can signal a deeper blockage in the line.',
    },
    {
      title: 'Leaking water heaters',
      text: 'A heater leaking from the tank, or sitting in water, needs attention before the leak gets worse.',
    },
    {
      title: 'Sudden loss of water',
      text: 'No water at all can come from a failed valve, a broken service line or a problem with the supply into the building.',
    },
  ],
  signsHeading: 'Treat It as an Emergency If…',
  signs: [
    'Water is actively leaking and you can’t stop it at a fixture valve',
    'Water is coming through a ceiling, light fixture or wall',
    'Sewage is backing up into a tub, shower, floor drain or toilet',
    'A pipe has burst or visibly split',
    'Your water heater is leaking from the tank',
    'You suddenly have no water, or pressure has dropped across the building',
  ],
  process: [
    {
      title: 'Tell us what’s happening',
      text: 'Send an emergency service request with your address, what you’re seeing and photos if you can safely take them.',
    },
    {
      title: 'Make it safe',
      text: 'The first priority is stopping the water and protecting the property: closing the right valve, isolating the affected line and containing the leak.',
    },
    {
      title: 'Find the cause',
      text: 'Once the situation is under control, we identify what failed and why, so the repair addresses the actual problem.',
    },
    {
      title: 'Repair properly',
      text: 'We explain the options for a lasting repair, including anything that needs follow-up work, before moving ahead.',
    },
  ],
  benefits: [
    {
      title: 'Damage control first',
      text: 'Stopping the water early limits damage to ceilings, floors, finishes and neighboring units.',
    },
    {
      title: 'A clear explanation',
      text: 'You’ll know what failed, why it happened and what the repair involves.',
    },
    {
      title: 'Fix the cause, not the symptom',
      text: 'The goal is a proper repair, not a temporary patch that leads to the next emergency.',
    },
    {
      title: 'Experience under pressure',
      text: 'Years of plumbing experience help us diagnose urgent problems calmly and methodically.',
    },
  ],
  whyUs:
    'When something goes wrong, you want a plumbing company that stays calm, explains what’s going on and does the work properly. That’s how we approach every urgent request.',
  faqs: [
    {
      question: 'What should I do while I wait for a plumber?',
      answer:
        'If water is leaking, close the nearest fixture shut-off valve or the main water shut-off valve. Keep away from water near outlets, electrical panels or appliances, and only turn off power if you can do it safely. Move valuables out of the way and take photos for your records.',
    },
    {
      question: 'Where is my main water shut-off valve?',
      answer:
        'In most NYC homes and buildings, the main shut-off valve is in the basement or cellar, usually on the front wall near the water meter, where the water service line enters from the street. If you can’t find it, mention it when you request service.',
    },
    {
      question: 'What should I do if I smell gas?',
      answer:
        'Leave the building immediately. Don’t use light switches, phones or anything that could create a spark inside. Call 911 or your gas utility’s emergency line from outside, and don’t go back in until it has been declared safe.',
    },
    {
      question: 'How soon can someone come out?',
      answer:
        'It depends on the timing of your request, your location and the work already scheduled. Send your request with as much detail as possible (photos help), and we’ll get back to you as soon as possible.',
    },
  ],
  related: ['leak-detection-repair', 'drain-cleaning', 'sewer-line-services'],
}
