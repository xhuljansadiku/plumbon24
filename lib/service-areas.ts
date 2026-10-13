/**
 * Service areas — all five boroughs of New York City, with example neighborhoods.
 *
 * Only list neighborhoods the company actually serves — set `published: false`
 * on any neighborhood that should not appear. There are deliberately no
 * per-neighborhood pages: thin "doorway" pages hurt local SEO. If neighborhood
 * pages are added later, each one needs genuinely unique, useful content.
 */

export type Neighborhood = {
  name: string
  published: boolean
}

export type ServiceAreaGroup = {
  id: string
  title: string
  description: string
  neighborhoods: Neighborhood[]
}

const groups: ServiceAreaGroup[] = [
  {
    id: 'brooklyn',
    title: 'Brooklyn',
    description:
      'Our home base in Sunset Park. Brownstones, row houses, one- and two-family homes, walk-ups and mixed-use buildings — with basement water heaters, original cast iron and galvanized piping, and older sewer connections.',
    neighborhoods: [
      { name: 'Sunset Park', published: true },
      { name: 'Bay Ridge', published: true },
      { name: 'Dyker Heights', published: true },
      { name: 'Bensonhurst', published: true },
      { name: 'Borough Park', published: true },
      { name: 'Park Slope', published: true },
      { name: 'Carroll Gardens', published: true },
      { name: 'Red Hook', published: true },
      { name: 'Downtown Brooklyn', published: true },
      { name: 'Flatbush', published: true },
      { name: 'Bedford-Stuyvesant', published: true },
      { name: 'Bushwick', published: true },
      { name: 'Williamsburg', published: true },
      { name: 'Greenpoint', published: true },
    ],
  },
  {
    id: 'manhattan',
    title: 'Manhattan',
    description:
      'Pre-war and high-rise apartment buildings, townhouses, offices, restaurants and retail spaces — where shared risers, building rules and coordination with management matter as much as the plumbing itself.',
    neighborhoods: [
      { name: 'Lower Manhattan', published: true },
      { name: 'Midtown', published: true },
      { name: 'Upper East Side', published: true },
      { name: 'Upper West Side', published: true },
      { name: 'Harlem', published: true },
      { name: 'Washington Heights', published: true },
    ],
  },
  {
    id: 'queens',
    title: 'Queens',
    description:
      'Detached and attached houses, two-family homes, garden apartments and busy commercial corridors — with basement plumbing, water heaters and sewer lines that see heavy use.',
    neighborhoods: [
      { name: 'Astoria', published: true },
      { name: 'Long Island City', published: true },
      { name: 'Ridgewood', published: true },
      { name: 'Jackson Heights', published: true },
      { name: 'Flushing', published: true },
      { name: 'Forest Hills', published: true },
    ],
  },
  {
    id: 'bronx',
    title: 'The Bronx',
    description:
      'Large pre-war apartment buildings, multi-family homes and commercial properties, where aging risers, leaks and drain problems often affect more than one unit.',
    neighborhoods: [
      { name: 'Riverdale', published: true },
      { name: 'Fordham', published: true },
      { name: 'Pelham Bay', published: true },
      { name: 'Throgs Neck', published: true },
      { name: 'Mott Haven', published: true },
    ],
  },
  {
    id: 'staten-island',
    title: 'Staten Island',
    description:
      'Mostly one- and two-family houses with their own water heaters, sump pumps and sewer connections, plus local shops and commercial spaces.',
    neighborhoods: [
      { name: 'St. George', published: true },
      { name: 'New Dorp', published: true },
      { name: 'Great Kills', published: true },
      { name: 'Tottenville', published: true },
    ],
  },
]

/** Groups with only their published neighborhoods; empty groups are dropped. */
export const serviceAreaGroups: ServiceAreaGroup[] = groups
  .map((group) => ({ ...group, neighborhoods: group.neighborhoods.filter((n) => n.published) }))
  .filter((group) => group.neighborhoods.length > 0)

export const neighborhoods: string[] = serviceAreaGroups.flatMap((group) => group.neighborhoods.map((n) => n.name))
