import type { Service } from '../types'

export const sumpPumpServices: Service = {
  slug: 'sump-pump-services',
  published: true,
  category: 'equipment',
  title: 'Sump Pump Services',
  icon: 'pump',
  image: 'pumpRepair',
  summary: 'Sump pump repair, replacement and installation to help keep basements dry.',
  seo: {
    title: 'Sump Pump Repair & Installation in New York City | PLUMBON24',
    description:
      'Help protect your basement from water. PLUMBON24 MECHANICAL INC repairs, replaces and installs sump pumps for NYC homes and buildings.',
  },
  hero: {
    heading: 'Sump Pump Services in New York City',
    intro:
      'A sump pump only matters if it works when the water arrives. We repair, replace and install sump pumps to help keep basements and cellars dry.',
  },
  overview: [
    'A sump pump collects water that gathers below or around a basement floor and pumps it away from the building. Because pumps often sit idle for months, many fail without warning, usually during the storm when they’re needed most.',
    'We test, repair and replace sump pumps, check float switches, check valves and discharge piping, and discuss options such as battery backup systems for properties where basement water is a recurring concern.',
  ],
  local: {
    heading: 'Low-lying areas and heavy rain',
    text: 'Parts of NYC, especially low-lying and waterfront neighborhoods, deal with high groundwater and flooding during heavy storms. Basements and cellars in these areas often rely on sump pumps, and a working pump with a properly routed discharge line can make a real difference.',
  },
  problemsHeading: 'Sump Pump Problems We Fix',
  problems: [
    {
      title: 'Pump won’t turn on',
      text: 'A stuck or failed float switch, an electrical problem or a burned-out motor can stop the pump.',
    },
    {
      title: 'Pump runs constantly',
      text: 'A stuck switch, an undersized pump or a failed check valve can keep it running.',
    },
    {
      title: 'Short cycling',
      text: 'A pump that turns on and off rapidly may have a float adjustment or pit sizing issue.',
    },
    {
      title: 'Clogged intake or discharge',
      text: 'Debris can block the pump intake or the discharge line.',
    },
    {
      title: 'Failed check valve',
      text: 'Water running back into the pit after every cycle makes the pump work harder and wear out sooner.',
    },
    {
      title: 'Aging pump',
      text: 'Pumps wear out over time and can fail without warning.',
    },
  ],
  signs: [
    'Water in the basement after rain',
    'The pump runs constantly or cycles very often',
    'Grinding, rattling or humming noises',
    'Visible rust or corrosion on the pump',
    'The pump hasn’t been tested in a long time',
    'The pump is several years old',
  ],
  process: [
    {
      title: 'Inspect and test',
      text: 'We check the pump, float switch, check valve, discharge line and pit.',
    },
    {
      title: 'Diagnose',
      text: 'We identify why the system isn’t working as it should.',
    },
    {
      title: 'Repair or replace',
      text: 'Components are repaired, or the pump is replaced with an appropriately sized unit.',
    },
    {
      title: 'Verify operation',
      text: 'We fill the pit to confirm the pump switches on and discharges properly.',
    },
  ],
  benefits: [
    {
      title: 'A drier basement',
      text: 'A working sump pump helps protect the basement from groundwater.',
    },
    {
      title: 'Protected equipment',
      text: 'Keep water away from boilers, water heaters and stored belongings.',
    },
    {
      title: 'Ready before storms',
      text: 'Testing and servicing ahead of storm season reduces the chance of a failure when it matters.',
    },
    {
      title: 'Less dampness',
      text: 'Controlling basement water helps limit dampness and mold.',
    },
  ],
  whyUs:
    'We treat a sump pump as a system (pump, switch, check valve and discharge) so the whole setup is ready when the water comes.',
  faqs: [
    {
      question: 'How often should I test my sump pump?',
      answer:
        'Test it a few times a year and before storm season by slowly pouring water into the pit to make sure the pump switches on and discharges.',
    },
    {
      question: 'How long do sump pumps last?',
      answer:
        'Many sump pumps last around 7 to 10 years, depending on how often they run and their quality. Older pumps should be checked regularly.',
    },
    {
      question: 'Do I need a battery backup sump pump?',
      answer:
        'A battery backup keeps pumping during a power outage, which often happens in the same storms that bring the most water. It’s worth considering if basement flooding would be costly.',
    },
    {
      question: 'Where should the sump pump discharge go?',
      answer:
        'Discharge should be directed safely away from the building, and rules about where it can go vary. We’ll discuss the right approach for your property.',
    },
  ],
  related: ['sewer-line-services', 'leak-detection-repair', 'plumbing-maintenance'],
}
