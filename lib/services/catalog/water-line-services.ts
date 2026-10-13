import type { Service } from '../types'

export const waterLineServices: Service = {
  slug: 'water-line-services',
  published: true,
  category: 'lines',
  title: 'Water Line Services',
  icon: 'water-meter',
  image: 'waterServiceCover',
  summary: 'Water service line repair and replacement, from the street connection to the main valve inside.',
  seo: {
    title: 'Water Line Repair & Replacement in New York City | PLUMBON24',
    description:
      'Low water pressure or a leaking water service line? PLUMBON24 MECHANICAL INC provides water line repair and replacement for NYC properties.',
  },
  hero: {
    heading: 'Water Line Services in New York City',
    intro:
      'The water service line brings water from the city main into your building. When it leaks, corrodes or loses pressure, we help diagnose the problem and plan the repair.',
  },
  overview: [
    'Your water service line runs from the city water main, under the street and sidewalk, to the main shut-off valve inside your building. Problems with it can show up as low pressure throughout the property, discolored water, a wet area in the sidewalk or basement wall, or a sudden loss of water.',
    'We help locate water line problems and repair or replace service lines, main shut-off valves and the connections inside the building — and we explain what the work involves before it begins.',
  ],
  local: {
    heading: 'Owner responsibility in New York City',
    text: 'In NYC, property owners are generally responsible for the water service line that connects their building to the city’s water main, including the section under the sidewalk and street. Many older NYC properties still have their original service lines, and homes built before the 1960s may have lead or galvanized steel lines that are good candidates for replacement.',
  },
  problemsHeading: 'Water Line Problems We Handle',
  problems: [
    {
      title: 'Leaking service line',
      text: 'Corrosion, age or ground movement can cause leaks anywhere between the street and the building.',
    },
    {
      title: 'Low water pressure',
      text: 'A corroded or partially blocked service line can restrict flow to the entire building.',
    },
    {
      title: 'Lead or galvanized lines',
      text: 'Older service lines may be made of materials that are worth replacing.',
    },
    {
      title: 'Failed main shut-off valve',
      text: 'Old valves can seize or leak, making it impossible to shut off the water in an emergency.',
    },
    {
      title: 'Discolored water',
      text: 'Rust and sediment from older lines can discolor the water.',
    },
    {
      title: 'Leaks at the foundation',
      text: 'Water seeping through the wall where the service line enters the basement.',
    },
  ],
  signs: [
    'Low water pressure everywhere in the building',
    'A wet spot or depression in the sidewalk or yard over the line',
    'Water seeping into the basement near the front wall',
    'Discolored or rusty water',
    'The main shut-off valve won’t close or leaks',
    'Your building still has an older service line',
  ],
  process: [
    {
      title: 'Assess the symptoms',
      text: 'We look at pressure, the main valve, the meter area and any signs of leaking.',
    },
    {
      title: 'Locate the problem',
      text: 'We determine whether the issue is inside the building, at the valve or along the service line.',
    },
    {
      title: 'Plan the repair',
      text: 'We explain the scope — from a valve replacement to a service line repair or replacement — before work begins.',
    },
    {
      title: 'Restore service',
      text: 'After the work, the line is tested and water service is restored.',
    },
  ],
  benefits: [
    {
      title: 'Better water pressure',
      text: 'A new or repaired service line can restore strong, consistent pressure.',
    },
    {
      title: 'A reliable shut-off',
      text: 'A working main valve is essential when you need to stop the water fast.',
    },
    {
      title: 'Updated materials',
      text: 'Replacing older lead or galvanized lines modernizes a critical part of the system.',
    },
    {
      title: 'Protection from water damage',
      text: 'Fixing service line leaks protects foundations and basements.',
    },
  ],
  whyUs:
    'Water service work affects your entire building. We take the time to diagnose the problem correctly and explain the plan clearly before work starts.',
  faqs: [
    {
      question: 'Who is responsible for the water line to my building?',
      answer:
        'In New York City, property owners are generally responsible for the water service line from the city main to the building, including the section under the street. The city is responsible for the water main itself.',
    },
    {
      question: 'How can I tell if my service line is lead?',
      answer:
        'Lead pipe is dull gray and soft; scratching it gently with a key reveals a shiny silver surface, and a magnet won’t stick to it. If your building was built before the 1960s and you’re not sure, have the line inspected where it enters the building.',
    },
    {
      question: 'Why is my water pressure low everywhere?',
      answer:
        'Building-wide low pressure can come from a corroded or restricted service line, a partially closed or failing main valve, or a faulty pressure-reducing valve if one is installed.',
    },
    {
      question: 'Why does the main shut-off valve matter?',
      answer:
        'In an emergency, it’s how you stop water to the entire building. Old valves can seize, so it’s worth making sure yours works before you need it.',
    },
  ],
  related: ['backflow-prevention', 'repiping', 'leak-detection-repair'],
}
