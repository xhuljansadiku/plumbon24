import type { Service } from '../types'

export const waterHeaterServices: Service = {
  slug: 'water-heater-services',
  published: true,
  category: 'equipment',
  title: 'Water Heater Services',
  icon: 'water-heater',
  image: 'basementWaterHeater',
  summary: 'Professional repair, replacement and installation solutions.',
  seo: {
    title: 'Water Heater Repair & Installation in Brooklyn, NY | PLUMBON24',
    description:
      'No hot water or a leaking tank? PLUMBON24 MECHANICAL INC provides water heater repair, replacement and installation for Brooklyn homes and businesses.',
  },
  hero: {
    heading: 'Water Heater Services in Brooklyn, NY',
    intro:
      'From no hot water to a leaking tank, we diagnose water heater problems and help you decide whether to repair or replace.',
  },
  overview: [
    'Water heaters work every day and usually give some warning before they fail: hot water that runs out sooner, rumbling noises, discolored water or moisture around the base. Catching those signs early gives you time to plan a repair or replacement instead of dealing with a cold shower — or a wet basement.',
    'We diagnose the problem and explain whether a repair makes sense or whether replacement is the better investment for the age and condition of the unit. Whether you have a tank-style or tankless heater, include the make and model in your request if you can.',
  ],
  local: {
    heading: 'Basement water heaters in Brooklyn homes',
    text: 'In many Brooklyn houses and small buildings, the water heater sits in the basement or cellar alongside the boiler, the meters and the main shut-off valve. Older installations can have outdated venting, gas connections or valves, so a replacement often involves more than swapping the tank. Gas-fired heaters also need proper venting and combustion air to operate safely.',
  },
  problemsHeading: 'Water Heater Problems We Diagnose',
  problems: [
    {
      title: 'No hot water',
      text: 'Can be caused by a failed burner or ignition part, a heating element, a thermostat or a gas supply issue.',
    },
    {
      title: 'Not enough hot water',
      text: 'Sediment buildup, a failing component or an undersized heater can leave you short.',
    },
    {
      title: 'Leaking water heater',
      text: 'Leaks from fittings and valves may be repairable; a leak from the tank itself usually means replacement.',
    },
    {
      title: 'Rumbling or popping',
      text: 'Usually caused by sediment that has settled at the bottom of the tank.',
    },
    {
      title: 'Rusty or discolored hot water',
      text: 'Can point to corrosion inside the tank or in the hot water piping.',
    },
    {
      title: 'Pilot and ignition problems',
      text: 'A gas water heater that won’t stay lit needs to be checked for safety and proper function.',
    },
  ],
  signs: [
    'Hot water runs out faster than it used to',
    'The water temperature is inconsistent',
    'Rumbling, popping or banging noises from the tank',
    'Water pooling around the base of the heater',
    'Rust-colored hot water',
    'The tank is more than 10 years old and showing wear',
  ],
  process: [
    {
      title: 'Diagnose the problem',
      text: 'We check the heater, its connections, venting and controls to find out what’s wrong.',
    },
    {
      title: 'Repair or replace?',
      text: 'We explain whether a repair is worthwhile for the unit’s age and condition, or whether replacement makes more sense.',
    },
    {
      title: 'Careful work',
      text: 'Repairs and installations are completed with attention to connections, venting, relief valves and safety controls.',
    },
    {
      title: 'Test and explain',
      text: 'The system is tested, and we show you how it operates and where the shut-off valves are.',
    },
  ],
  benefits: [
    {
      title: 'Reliable hot water',
      text: 'Consistent hot water for showers, cleaning and everyday use.',
    },
    {
      title: 'Safety',
      text: 'Proper venting, gas connections and relief valves are essential for safe operation.',
    },
    {
      title: 'Better efficiency',
      text: 'A properly working — or new, correctly sized — heater can use energy more efficiently.',
    },
    {
      title: 'Fewer surprises',
      text: 'Spotting problems early lets you plan a replacement instead of reacting to a failure.',
    },
  ],
  whyUs:
    'Whether it’s a repair or a replacement, we explain the options honestly and complete the work with attention to the safety details — venting, valves and connections.',
  faqs: [
    {
      question: 'How long does a water heater last?',
      answer:
        'Tank-style water heaters commonly last around 8 to 12 years, depending on usage, water conditions and maintenance. Tankless units can last longer with proper care.',
    },
    {
      question: 'Should I repair or replace my water heater?',
      answer:
        'If the tank itself is leaking, replacement is usually necessary. For other problems, it depends on the age of the unit, the cost of the repair and its overall condition.',
    },
    {
      question: 'Why is there water around my water heater?',
      answer:
        'It could be a loose connection, a leaking valve, condensation or a leak in the tank itself. A leaking tank usually means the heater needs to be replaced.',
    },
    {
      question: 'What should I include in my service request?',
      answer:
        'The type of heater (gas or electric, tank or tankless), its approximate age, the make and model from the label, and what you’re experiencing. Photos of the label and the area around the heater are very helpful.',
    },
  ],
  related: ['plumbing-maintenance', 'leak-detection-repair', 'gas-line-plumbing'],
}
