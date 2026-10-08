import type { Service } from '../types'

export const toiletRepairInstallation: Service = {
  slug: 'toilet-repair-installation',
  published: true,
  category: 'equipment',
  title: 'Toilet Repair & Installation',
  icon: 'toilet',
  image: 'toilet',
  summary: 'Repair of running, leaking or clogged toilets, plus professional toilet installation.',
  seo: {
    title: 'Toilet Repair & Installation in Brooklyn, NY | PLUMBON24',
    description:
      'Running, leaking or constantly clogged toilet? PLUMBON24 MECHANICAL INC repairs and installs toilets in Brooklyn homes, apartments and businesses.',
  },
  hero: {
    heading: 'Toilet Repair & Installation in Brooklyn, NY',
    intro:
      'From a toilet that runs all night to a leak at the base, we repair the problem — or install a new toilet when it’s time to replace.',
  },
  overview: [
    'Toilets are simple, but small failures cause big problems: a worn flapper can waste a surprising amount of water, a failed wax seal can rot the subfloor, and a cracked tank can flood a bathroom. Most toilet problems can be repaired once the cause is identified.',
    'When a toilet is cracked, inefficient or simply worn out, we install a new one — setting it properly on the flange, sealing it and connecting a new supply line so it sits solid and stays dry.',
  ],
  local: {
    heading: 'Toilets in older Brooklyn bathrooms',
    text: 'In older buildings, removing a toilet can reveal a corroded closet flange, a deteriorated floor or an unusual rough-in distance. Those details matter: a toilet that isn’t properly supported and sealed will rock, leak and damage the floor below — which, in a stacked building, may be a neighbor’s ceiling.',
  },
  problemsHeading: 'Toilet Problems We Fix',
  problems: [
    {
      title: 'Running toilets',
      text: 'A worn flapper, fill valve or float lets water run continuously into the bowl.',
    },
    {
      title: 'Leaks at the base',
      text: 'A failed wax seal or a loose toilet can let water seep onto the floor.',
    },
    {
      title: 'Weak or incomplete flushes',
      text: 'Clogged rim jets, a low tank water level or a partial blockage reduce flushing power.',
    },
    {
      title: 'Frequent clogs',
      text: 'Repeated clogs can point to a problem in the toilet trap or the drain line beyond it.',
    },
    {
      title: 'Tank leaks',
      text: 'Cracks, worn tank bolts or a failed gasket can leak from the tank.',
    },
    {
      title: 'Rocking toilets',
      text: 'A toilet that moves can break its seal and start leaking.',
    },
  ],
  signs: [
    'The toilet runs or refills on its own',
    'Water on the floor around the base',
    'The toilet rocks or feels loose',
    'Weak flushes or frequent clogs',
    'Cracks in the bowl or tank',
    'An unexpected jump in your water bill',
  ],
  process: [
    {
      title: 'Diagnose',
      text: 'We check the tank components, seals, supply connection and drain to find the cause.',
    },
    {
      title: 'Repair',
      text: 'Worn parts are replaced and connections are tightened or resealed.',
    },
    {
      title: 'Or replace',
      text: 'If the toilet is cracked or worn out, we remove it, inspect the flange and floor, and install a new one.',
    },
    {
      title: 'Test',
      text: 'We test flushing, refilling and the base seal to make sure everything works without leaks.',
    },
  ],
  benefits: [
    {
      title: 'Save water',
      text: 'Fixing a running toilet stops one of the most common sources of wasted water at home.',
    },
    {
      title: 'Protect your floors',
      text: 'A proper seal prevents leaks that damage subfloors and ceilings below.',
    },
    {
      title: 'Reliable flushing',
      text: 'A properly working toilet flushes completely the first time.',
    },
    {
      title: 'A solid installation',
      text: 'New toilets are set level, secured and sealed correctly.',
    },
  ],
  whyUs:
    'A toilet installation is only as good as what’s underneath it. We pay attention to the flange, the seal and the floor, so the job is done properly.',
  faqs: [
    {
      question: 'Why does my toilet keep running?',
      answer:
        'The most common causes are a worn flapper that no longer seals, a fill valve that doesn’t shut off, or a float set too high. These parts can usually be replaced.',
    },
    {
      question: 'Why is water leaking around the base of my toilet?',
      answer:
        'Usually the wax seal has failed or the toilet has become loose. It should be fixed promptly to prevent damage to the floor and the ceiling below.',
    },
    {
      question: 'Should I repair or replace my toilet?',
      answer:
        'Most problems can be repaired with new parts. Replacement makes sense if the toilet is cracked, clogs constantly or is very old and inefficient.',
    },
    {
      question: 'Can you install a toilet I bought myself?',
      answer:
        'Share the make and model when you request service and we’ll confirm whether it fits your bathroom’s rough-in measurement and connections.',
    },
  ],
  related: ['drain-cleaning', 'bathroom-plumbing', 'faucet-fixture-repair'],
}
