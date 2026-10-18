import type { Service } from '../types'

export const sewerLineServices: Service = {
  slug: 'sewer-line-services',
  published: true,
  category: 'lines',
  title: 'Sewer Line Services',
  shortTitle: 'Sewer Services',
  icon: 'sewer',
  image: 'undergroundRoughIn',
  summary: 'Professional sewer inspection, repair and replacement solutions.',
  seo: {
    title: 'Sewer Line Repair & Services in New York City | PLUMBON24',
    description:
      'Sewer backups, slow drains or sewage odors in NYC? PLUMBON24 MECHANICAL INC provides sewer line inspection, cleaning, repair and replacement.',
  },
  hero: {
    heading: 'Sewer Line Services in New York City',
    intro:
      'When the main line that carries waste out of your building has a problem, every drain feels it. We diagnose sewer line issues and explain the right repair.',
  },
  overview: [
    'Your building sewer is the pipe that carries all wastewater from the property to the city sewer. When it’s blocked, cracked, sagging or invaded by roots, the symptoms show up everywhere: slow drains, gurgling fixtures, sewage odors and backups in the lowest drains.',
    'We work to establish the actual condition of the line, often with a camera inspection, before recommending cleaning, a section repair or a replacement. That way the recommendation is based on what’s really inside the pipe, not a guess.',
  ],
  local: {
    heading: 'In NYC, the sewer connection is the owner’s responsibility',
    text: 'New York City property owners are generally responsible for the sewer service line that runs from the building to the city’s sewer main, including the part under the sidewalk and street. Many NYC sewer lines are decades old, made of clay or cast iron, and vulnerable to roots, cracks and settling.',
  },
  problemsHeading: 'Sewer Problems We Diagnose',
  problems: [
    {
      title: 'Main line blockages',
      text: 'Grease, wipes and debris collect in the building sewer and cause backups in basement fixtures and floor drains.',
    },
    {
      title: 'Root intrusion',
      text: 'Tree roots enter older clay and cast iron lines through joints and cracks, catching debris until the pipe blocks.',
    },
    {
      title: 'Cracked or broken pipe',
      text: 'Age, ground movement and corrosion can crack a sewer line, leading to leaks, odors and recurring blockages.',
    },
    {
      title: 'Sagging sections',
      text: 'When part of a line settles, waste collects in the low spot instead of flowing out.',
    },
    {
      title: 'Backups during heavy rain',
      text: 'In some areas, heavy storms can push sewer water back toward buildings. A backwater valve may help protect the property.',
    },
  ],
  signs: [
    'Several drains are slow or backing up at the same time',
    'Sewage odors in the basement or around floor drains',
    'Toilets or drains gurgle when other fixtures are used',
    'Water backs up into the lowest fixtures or floor drain',
    'The main line clogs again and again',
    'Sinking or damp ground along the sewer line route',
  ],
  process: [
    {
      title: 'Assess the symptoms',
      text: 'We start with which fixtures are affected and how the problem behaves, to narrow down where the issue is.',
    },
    {
      title: 'Inspect the line',
      text: 'A sewer camera inspection can reveal blockages, roots, cracks and sags inside the pipe without digging.',
    },
    {
      title: 'Recommend the right fix',
      text: 'Depending on what we find, the solution may be cleaning, a section repair or replacement of the line.',
    },
    {
      title: 'Restore and verify',
      text: 'After the work, the line is tested to confirm wastewater flows freely again.',
    },
  ],
  benefits: [
    {
      title: 'Accurate diagnosis',
      text: 'Seeing inside the pipe means the repair is based on facts, not guesswork.',
    },
    {
      title: 'Fewer backups',
      text: 'Fixing the underlying problem helps prevent repeat sewage backups.',
    },
    {
      title: 'Protects the property',
      text: 'Sewage backups can damage basements, finishes and stored belongings.',
    },
    {
      title: 'Informed decisions',
      text: 'You understand the condition of your sewer line before choosing a repair.',
    },
  ],
  whyUs:
    'Sewer work is disruptive and important to get right. We focus on diagnosing the line correctly and explaining your options clearly.',
  faqs: [
    {
      question: 'Who is responsible for my sewer line in New York City?',
      answer:
        'In NYC, property owners are generally responsible for the sewer service line between the building and the city’s sewer main, including the section under the street. The city is responsible for the main itself.',
    },
    {
      question: 'What is a sewer camera inspection?',
      answer:
        'A small waterproof camera is fed into the sewer line to show its condition on a screen, revealing blockages, roots, cracks, sags and offset joints without digging.',
    },
    {
      question: 'What is a backwater valve?',
      answer:
        'A backwater valve is installed on the building sewer. It lets wastewater flow out but helps stop sewer water from flowing back into the building when the city sewer is overloaded, for example during heavy rain.',
    },
    {
      question: 'Does a damaged sewer line always need to be replaced?',
      answer:
        'No. Many problems can be solved by cleaning or repairing a section of pipe. Full replacement is usually considered when the line is badly damaged along much of its length.',
    },
  ],
  related: ['drain-cleaning', 'sump-pump-services', 'water-line-services'],
}
