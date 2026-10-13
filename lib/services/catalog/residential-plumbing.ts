import type { Service } from '../types'

export const residentialPlumbing: Service = {
  slug: 'residential-plumbing',
  published: true,
  category: 'property',
  title: 'Residential Plumbing',
  icon: 'home',
  image: 'brooklynBrownstones',
  summary: 'Plumbing for houses, brownstones, apartments and condos — repairs, installations and upgrades.',
  seo: {
    title: 'Residential Plumber in New York City | PLUMBON24 MECHANICAL INC',
    description:
      'Residential plumbing for NYC houses, apartments, condos and brownstones: leaks, drains, water heaters, fixtures and pipes. 15+ years of experience.',
  },
  hero: {
    heading: 'Residential Plumbing in New York City',
    intro:
      'Houses, brownstones, apartments and condos — we handle residential plumbing repairs, installations and upgrades with respect for your home.',
  },
  overview: [
    'Residential plumbing covers everything that keeps a home running: water lines, drains, water heaters, fixtures, toilets and the main lines in and out of the building. When something goes wrong, you want a plumber who explains the problem clearly and treats your home with care.',
    'We work in single-family and multi-family houses, apartments, condos and co-ops across all five boroughs — on everything from a dripping faucet to a water heater replacement or a full repipe.',
  ],
  local: {
    heading: 'Every NYC home is different',
    text: 'A 19th-century brownstone, a 1920s two-family house and a new condo all have very different plumbing. Older homes may have galvanized and cast iron piping with decades of renovations layered on top; newer buildings have their own systems and building rules. Experience with that variety is what makes an accurate diagnosis possible.',
  },
  problemsHeading: 'Home Plumbing We Handle',
  problems: [
    {
      title: 'Leaks',
      text: 'Under sinks, behind walls and through ceilings.',
    },
    {
      title: 'Clogged drains',
      text: 'Kitchen, bathroom and main line clogs.',
    },
    {
      title: 'Water heaters',
      text: 'No hot water, leaking tanks and replacements.',
    },
    {
      title: 'Fixtures and toilets',
      text: 'Dripping faucets, running toilets and new installations.',
    },
    {
      title: 'Aging pipes',
      text: 'Corroded galvanized and cast iron piping.',
    },
    {
      title: 'Low water pressure',
      text: 'Pressure problems at one fixture or across the whole home.',
    },
  ],
  signsHeading: 'When to Call a Plumber',
  signs: [
    'A leak you can’t stop at the fixture',
    'Slow drains or repeated clogs',
    'Inconsistent hot water, or none at all',
    'Water stains or musty odors',
    'Low water pressure',
    'You’re planning a kitchen or bathroom upgrade',
  ],
  process: [
    {
      title: 'Tell us what’s happening',
      text: 'Describe the problem and send photos if you can.',
    },
    {
      title: 'Diagnose',
      text: 'We find the cause and explain it in plain language.',
    },
    {
      title: 'Agree on the work',
      text: 'You’ll understand the options before any work begins.',
    },
    {
      title: 'Careful, clean work',
      text: 'We complete the job with care for your home and test the results.',
    },
  ],
  benefits: [
    {
      title: 'Respect for your home',
      text: 'Careful work and a tidy work area.',
    },
    {
      title: 'Plain-language explanations',
      text: 'Understand what’s wrong and what your options are.',
    },
    {
      title: 'Practical solutions',
      text: 'Repairs and upgrades that fit your home and your priorities.',
    },
    {
      title: 'Local experience',
      text: 'Familiar with New York City’s mix of older and newer housing.',
    },
  ],
  whyUs:
    'Your home deserves careful, professional work. We bring 15+ years of plumbing experience and a practical, respectful approach to every residential job.',
  faqs: [
    {
      question: 'Do you work in apartments, condos and co-ops?',
      answer:
        'Yes. Some buildings have rules about working hours and access, so let us know about your building’s requirements when you request service.',
    },
    {
      question: 'What residential plumbing services do you offer?',
      answer:
        'Leak detection and repair, drain cleaning, water heater services, fixture and toilet repair, pipe repair and replacement, repiping, and more. See the full list on our services page.',
    },
    {
      question: 'Can you help with a renovation?',
      answer:
        'Yes. We handle the plumbing for kitchen and bathroom upgrades and can work alongside your contractor.',
    },
    {
      question: 'Do you serve my neighborhood?',
      answer:
        'We’re based in Sunset Park and serve customers throughout NYC. Check our service areas page or contact us to confirm.',
    },
  ],
  related: ['water-heater-services', 'leak-detection-repair', 'bathroom-plumbing'],
}
