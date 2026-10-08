import type { Faq } from '@/lib/services'
import { site } from '@/lib/site'

const contactOptions = site.phone
  ? `call us at ${site.phone.display}, use the service request form on this website, or email ${site.email}`
  : `use the service request form on this website or email us at ${site.email}`

/** General questions shown on the homepage and the services page. Answers only state verified facts. */
export const generalFaqs: Faq[] = [
  {
    question: 'Do you provide residential plumbing services?',
    answer:
      'Yes. We work in houses, brownstones, apartments, condos and multi-family buildings across Brooklyn — from leaks, clogs and running toilets to water heaters, fixtures and pipe work.',
  },
  {
    question: 'Do you provide commercial plumbing?',
    answer:
      'Yes. We work with offices, restaurants, retail spaces, property managers and commercial building owners on repairs, installations and maintenance.',
  },
  {
    question: 'What plumbing problems can you help with?',
    answer:
      'Leaks, clogged drains, sewer and water line problems, water heaters, pipe repair and replacement, repiping, faucets and fixtures, toilets, garbage disposals, sump pumps, backflow prevention, gas piping, and kitchen and bathroom plumbing.',
  },
  ...(site.features.emergencyService
    ? [
        {
          question: 'Do you handle emergency plumbing problems?',
          answer:
            'Yes, we help with urgent problems such as burst pipes, major leaks and sewer backups. Send an emergency service request with as much detail as you can — photos help — and we’ll get back to you as soon as possible. If water is actively leaking, close the main water shut-off valve while you wait.',
        },
      ]
    : []),
  {
    question: 'How can I request plumbing service?',
    answer: `Tell us what’s going on: ${contactOptions}. Include your address, the type of property and photos of the problem if you can.`,
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We’re based at 235 43rd St in Sunset Park and serve customers throughout Brooklyn and the surrounding New York area. If you’re not sure whether we cover your location, just ask.',
  },
  {
    question: 'How much does plumbing service cost?',
    answer:
      'Every job is different. Cost depends on the problem, how accessible the plumbing is, the parts and materials needed and the overall scope of work. Tell us about the issue and we’ll discuss pricing once we understand what’s involved.',
  },
]

/** Questions shown on the contact page. */
export const contactFaqs: Faq[] = [
  {
    question: 'What should I include in my request?',
    answer:
      'Your name, phone number and email, the address or neighborhood, the type of property, and a short description of what’s happening — when it started, where it is and anything you’ve noticed.',
  },
  {
    question: 'Can I send photos of the problem?',
    answer: `Yes. The request form lets you attach up to 3 photos. Photos of leaks, pipes, water heaters, drains or fixtures help us understand the problem before we get back to you.`,
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We’re based in Sunset Park and serve customers throughout Brooklyn and the surrounding New York area. If you’re not sure whether we cover your location, just ask.',
  },
  {
    question: 'How much does plumbing service cost?',
    answer:
      'It depends on the problem and the scope of work. Once we understand what’s involved, we’ll discuss pricing with you before any work begins.',
  },
]
