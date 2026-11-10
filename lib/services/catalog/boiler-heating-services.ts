import type { Service } from '../types'

export const boilerHeatingServices: Service = {
  slug: 'boiler-heating-services',
  published: true,
  category: 'equipment',
  title: 'Boiler & Heating Services',
  shortTitle: 'Boilers & Heating',
  icon: 'boiler',
  image: 'wallHungBoilers',
  summary: 'Boiler repair and installation, steam pipe repair, and the piping for radiators, baseboard and radiant heat.',
  seo: {
    title: 'Boiler Repair & Installation in New York City | PLUMBON24',
    description:
      'No heat or a boiler that keeps shutting off? PLUMBON24 MECHANICAL INC repairs, replaces and installs boilers and hot water heating systems in NYC.',
  },
  hero: {
    heading: 'Boiler & Heating Services in New York City',
    intro:
      'From a boiler that won’t fire to a full mechanical room with radiant heat, we repair, replace and install heating systems for homes and buildings.',
  },
  overview: [
    'Most NYC homes and buildings are heated by a boiler in the basement. When it stops working in January, everyone in the building feels it. Many problems give early warning: radiators that heat unevenly, a boiler that cycles on and off, pressure that keeps dropping or water around the unit.',
    'We repair existing boilers, replace old ones with modern high-efficiency and combi units, and install the piping that goes with them: circulator pumps, expansion tanks, zone valves and manifolds for radiators, baseboard and radiant floor heating.',
  ],
  local: {
    heading: 'Heat season in NYC',
    text: 'From October 1 to May 31, NYC building owners must provide heat to residential tenants, so a boiler failure in a rental building can’t wait. In many multifamily and commercial buildings, boilers must also be registered with the Department of Buildings and inspected every year.',
  },
  problemsHeading: 'Boiler & Heating Problems We Fix',
  problems: [
    {
      title: 'No heat',
      text: 'Ignition, burner, control or circulator failures can leave the whole building cold.',
    },
    {
      title: 'Uneven heat',
      text: 'Cold radiators or zones usually point to air in the system, a failed zone valve or a circulator problem.',
    },
    {
      title: 'Boiler keeps shutting off',
      text: 'Short cycling can come from low water, a faulty control, a pressure problem or poor venting.',
    },
    {
      title: 'Losing pressure or water',
      text: 'Usually a leak in the piping, a failing relief valve or a problem with the expansion tank.',
    },
    {
      title: 'Steam pipe leaks and banging',
      text: 'Leaking steam pipes and fittings, and banging from water trapped in the pipes. We repair and replace steam piping.',
    },
    {
      title: 'Old, inefficient boilers',
      text: 'An older boiler can burn much more fuel than a modern high-efficiency unit for the same heat.',
    },
  ],
  signs: [
    'No heat, or no hot water from a combi boiler',
    'Radiators that stay cold at the top',
    'The pressure gauge keeps dropping',
    'Water around the boiler or its relief valve',
    'Banging or clanking in the heating pipes',
    'Fuel bills rising for no clear reason',
  ],
  process: [
    {
      title: 'Find the cause',
      text: 'We check controls, ignition, water level, pressure, circulators and venting to find out what’s wrong.',
    },
    {
      title: 'Repair or replace?',
      text: 'We explain whether a repair makes sense for the boiler’s age and condition, or whether replacement is the better investment.',
    },
    {
      title: 'Careful installation',
      text: 'New boilers and heating piping are installed with proper venting, valves, pumps and expansion tanks.',
    },
    {
      title: 'Fill, purge and test',
      text: 'The system is filled, air is purged, and we test it through a full heating cycle.',
    },
  ],
  benefits: [
    {
      title: 'Reliable heat',
      text: 'A warm home or building through the whole heating season.',
    },
    {
      title: 'Lower fuel bills',
      text: 'A well-tuned or high-efficiency boiler uses less fuel for the same heat.',
    },
    {
      title: 'Safety',
      text: 'Proper venting, relief valves and controls keep the system operating safely.',
    },
    {
      title: 'Fewer breakdowns',
      text: 'Catching problems early means fewer no-heat calls in the coldest weeks.',
    },
  ],
  whyUs:
    'From a single boiler swap to a mechanical room with several boilers and a radiant manifold, we plan the piping carefully and leave the system clean and easy to service.',
  faqs: [
    {
      question: 'Should I repair or replace my boiler?',
      answer:
        'It depends on the boiler’s age, the cost of the repair and how efficiently it runs. Many boilers last 15 to 30 years. If yours is old and needs a major repair, replacement is often the better investment.',
    },
    {
      question: 'What is a combi boiler?',
      answer:
        'A combi boiler heats your home and makes hot water on demand in one compact, wall-mounted unit, so you don’t need a separate water heater tank.',
    },
    {
      question: 'Do you install radiant floor heating?',
      answer:
        'Yes. We install the piping, manifolds and circulator pumps that supply radiant floor heating, as well as radiator and baseboard systems.',
    },
    {
      question: 'Does my boiler need an annual inspection?',
      answer:
        'In NYC, boilers in many multifamily and commercial buildings must be inspected every year, with the results filed with the Department of Buildings. Even when it isn’t required, a yearly check before heat season helps prevent breakdowns.',
    },
  ],
  related: ['water-heater-services', 'repiping', 'piping-maintenance'],
}
