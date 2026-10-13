import type { Service } from '../types'

export const pipeRepairReplacement: Service = {
  slug: 'pipe-repair-replacement',
  published: true,
  category: 'repairs',
  title: 'Pipe Repair & Replacement',
  shortTitle: 'Pipe Repair',
  icon: 'pipe',
  image: 'basementCastIron',
  summary: 'Professional pipe repair, replacement and plumbing system upgrades.',
  seo: {
    title: 'Pipe Repair & Replacement in New York City | PLUMBON24',
    description:
      'Leaking, corroded or damaged pipes? PLUMBON24 MECHANICAL INC repairs and replaces water and drain piping in NYC homes and commercial buildings.',
  },
  hero: {
    heading: 'Pipe Repair & Replacement in New York City',
    intro:
      'Leaking joints, corroded sections and damaged pipes are repaired properly — and when a section is beyond repair, it’s replaced with suitable materials.',
  },
  overview: [
    'Pipes fail for many reasons: corrosion, age, freezing, physical damage, high water pressure or a fitting that was never installed correctly. Sometimes a single repair is all that’s needed. Other times, a failed section is a sign that the pipe around it is near the end of its life.',
    'We repair and replace water supply and drain piping, matching materials and fittings to your system, and we’ll tell you honestly when a repair is enough — and when a larger replacement is worth considering.',
  ],
  local: {
    heading: 'Mixed piping in older buildings',
    text: 'New York City’s older homes often contain piping from several eras: original galvanized steel or cast iron alongside copper and plastic sections added during later renovations. Transitions between different materials need the right fittings to prevent leaks and corrosion, and poorly made transitions are a common source of repeat problems.',
  },
  problemsHeading: 'Pipe Problems We Repair',
  problems: [
    {
      title: 'Leaking joints and fittings',
      text: 'Threaded joints, soldered connections and compression fittings can loosen or fail over time.',
    },
    {
      title: 'Corroded galvanized pipe',
      text: 'Galvanized steel corrodes from the inside, restricting water flow and eventually leaking at the threads.',
    },
    {
      title: 'Cracked cast iron drains',
      text: 'Older cast iron drain lines can crack, rust through or separate at the joints.',
    },
    {
      title: 'Frozen and burst pipes',
      text: 'Pipes in cold spaces can freeze and split during a cold snap.',
    },
    {
      title: 'Pinhole leaks',
      text: 'Small leaks can develop in copper pipe from corrosion and water conditions.',
    },
    {
      title: 'Damaged pipes',
      text: 'Renovation work, settling or impact can bend, crack or puncture piping.',
    },
  ],
  signs: [
    'Visible leaks or moisture around exposed pipes',
    'Rust, green staining or corrosion on pipes and fittings',
    'Low water pressure in part of the building',
    'Discolored water when you first open a tap',
    'Banging or knocking noises in the pipes',
    'Repeated repairs on the same section of pipe',
  ],
  process: [
    {
      title: 'Inspect the damage',
      text: 'We look at the failed section and the piping around it to understand the cause and the extent of the problem.',
    },
    {
      title: 'Explain the options',
      text: 'You’ll know whether a section repair is appropriate or whether more pipe should be replaced.',
    },
    {
      title: 'Repair or replace',
      text: 'The work is completed with suitable materials and the correct transition fittings for your system.',
    },
    {
      title: 'Pressure and leak test',
      text: 'Repaired lines are tested to confirm they hold pressure or drain properly.',
    },
  ],
  benefits: [
    {
      title: 'Stop the leak',
      text: 'Repairing failed pipe protects your property from ongoing water damage.',
    },
    {
      title: 'Better water flow',
      text: 'Replacing corroded sections can improve water pressure and flow.',
    },
    {
      title: 'Clearer water',
      text: 'Removing heavily rusted pipe can reduce discolored water.',
    },
    {
      title: 'Long-term reliability',
      text: 'Suitable materials and proper fittings reduce the chance of repeat failures.',
    },
  ],
  whyUs:
    'Good pipe work depends on details — suitable materials, proper fittings and careful workmanship. That is the standard we bring from 15+ years of plumbing experience.',
  faqs: [
    {
      question: 'Should I repair or replace my pipes?',
      answer:
        'If the problem is limited to one joint or section and the rest of the piping is in good condition, a repair is usually fine. If you’re seeing repeated leaks, widespread corrosion or low pressure throughout, replacing more of the system may be the better long-term choice.',
    },
    {
      question: 'What causes pinhole leaks?',
      answer:
        'Pinhole leaks in copper pipe are usually caused by corrosion, which can be influenced by water chemistry, high water velocity and the age of the pipe.',
    },
    {
      question: 'How can I prevent frozen pipes?',
      answer:
        'Insulate pipes in unheated areas, seal drafts near plumbing, keep the heat on during cold weather and know where your shut-off valves are. Pipes along exterior walls and in unheated basements are most at risk.',
    },
    {
      question: 'Why are my pipes banging?',
      answer:
        'Banging, often called water hammer, usually happens when water flow stops suddenly — for example, when a valve closes quickly. Loose pipe supports and high water pressure can make it worse.',
    },
  ],
  related: ['repiping', 'leak-detection-repair', 'water-line-services'],
}
