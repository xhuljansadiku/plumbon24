import type { Service } from '../types'

export const drainCleaning: Service = {
  slug: 'drain-cleaning',
  published: true,
  category: 'repairs',
  title: 'Drain Cleaning',
  icon: 'drain',
  image: 'underSinkRepair',
  summary: 'Solutions for clogged, slow or blocked drains.',
  seo: {
    title: 'Drain Cleaning in New York City | PLUMBON24 MECHANICAL INC',
    description:
      'Slow or clogged drains in NYC? PLUMBON24 MECHANICAL INC clears kitchen, bathroom and main line blockages and finds the cause. 15+ years of experience.',
  },
  hero: {
    heading: 'Drain Cleaning in New York City',
    intro:
      'Slow sinks, standing water in the shower and gurgling toilets rarely fix themselves. We clear the blockage and find out why it formed, so the same drain doesn’t clog again next month.',
  },
  overview: [
    'Most drain problems build up over time: grease and food in kitchen lines, hair and soap in bathroom drains, and scale or debris inside older pipes. Store-bought chemicals may open a small channel, but they rarely remove the buildup, and they can be hard on older pipes and seals.',
    'We clear clogs with the method that suits the drain and the blockage. When a clog keeps coming back, we look for the underlying cause, such as a sagging line, a damaged section, roots or a venting problem.',
  ],
  local: {
    heading: 'Older drain lines, recurring clogs',
    text: 'Many NYC buildings still rely on original cast iron and galvanized drain piping. Over decades, the inside of those pipes roughens and narrows, so grease and debris catch faster. In multi-family buildings, a blockage in a shared stack or main line often shows up first as a backup in the lowest unit.',
  },
  problemsHeading: 'Drains We Clear',
  problems: [
    {
      title: 'Kitchen sink clogs',
      text: 'Grease, oils and food waste cool and harden inside the line, narrowing the pipe until water barely drains.',
    },
    {
      title: 'Bathroom sinks, tubs and showers',
      text: 'Hair, soap scum and toiletries collect in traps and branch drains, slowing everything down.',
    },
    {
      title: 'Toilet clogs',
      text: 'Wipes, paper products and foreign objects can lodge in the toilet trap or further down the line.',
    },
    {
      title: 'Floor and basement drains',
      text: 'Sediment and debris block floor drains, and a backup there often points to a problem further down the building drain.',
    },
    {
      title: 'Main line blockages',
      text: 'When several fixtures back up at once, the blockage is usually in the main drain or the building sewer.',
    },
  ],
  signs: [
    'Water drains slowly from sinks, tubs or showers',
    'Gurgling sounds from drains or toilets',
    'Unpleasant odors coming from drains',
    'Water backs up in one fixture when another is used',
    'Clogs keep returning after you clear them',
    'Water pools around a floor drain',
  ],
  process: [
    {
      title: 'Locate the blockage',
      text: 'We start by working out which fixtures are affected and where the blockage is most likely to be.',
    },
    {
      title: 'Choose the right method',
      text: 'Depending on the drain and the clog, clearing may involve hand tools, a drain cable (snake) or water jetting.',
    },
    {
      title: 'Clear and test',
      text: 'We clear the line and run water through the affected fixtures to confirm everything drains properly.',
    },
    {
      title: 'Advise on prevention',
      text: 'If the clog points to a bigger issue (damaged pipe, poor slope or roots), we explain what we found and your options.',
    },
  ],
  benefits: [
    {
      title: 'Drains that work normally',
      text: 'Restore normal drainage across sinks, tubs, showers and floor drains.',
    },
    {
      title: 'Fewer repeat clogs',
      text: 'Addressing the cause, not just the symptom, reduces the chance of the same clog returning.',
    },
    {
      title: 'Kinder to your pipes',
      text: 'Mechanical cleaning avoids the harsh chemicals that can damage older pipes and seals.',
    },
    {
      title: 'Fresher drains',
      text: 'Removing buildup helps eliminate the odors that come with it.',
    },
  ],
  whyUs:
    'Clearing a drain is only half the job. We look at why it clogged, so you get a lasting fix and a clear explanation of what’s going on inside your pipes.',
  faqs: [
    {
      question: 'Are chemical drain cleaners safe to use?',
      answer:
        'They may clear a minor clog, but they often leave most of the blockage behind and can be harsh on older pipes and seals. If a drain keeps clogging, it’s better to have the line properly cleared and checked.',
    },
    {
      question: 'Why does my drain keep clogging?',
      answer:
        'Repeat clogs usually mean something in the line is catching debris: buildup on the pipe walls, a sag, a damaged section or a partial blockage further down. Finding that cause is the key to stopping the cycle.',
    },
    {
      question: 'Why are several drains backing up at the same time?',
      answer:
        'When multiple fixtures are affected, the blockage is usually in a shared drain line or the main building drain rather than in one fixture.',
    },
    {
      question: 'How can I prevent kitchen drain clogs?',
      answer:
        'Keep grease, oils and fats out of the sink, scrape plates into the trash, and run plenty of cold water when using a garbage disposal.',
    },
  ],
  related: ['sewer-line-services', 'garbage-disposal-services', 'kitchen-plumbing'],
}
