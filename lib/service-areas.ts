/**
 * Service areas.
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
    id: 'south-brooklyn',
    title: 'Sunset Park & South Brooklyn',
    description:
      'Our home base. Row houses, one- and two-family homes, walk-up apartment buildings and mixed-use buildings along busy commercial avenues — with basement water heaters, older sewer connections and storefront plumbing.',
    neighborhoods: [
      { name: 'Sunset Park', published: true },
      { name: 'Greenwood Heights', published: true },
      { name: 'Bay Ridge', published: true },
      { name: 'Dyker Heights', published: true },
      { name: 'Bensonhurst', published: true },
      { name: 'Borough Park', published: true },
    ],
  },
  {
    id: 'brownstone-brooklyn',
    title: 'Brownstone Brooklyn',
    description:
      'Historic brownstones and row houses, many converted into several units, alongside newer apartment buildings. Original galvanized and cast iron piping is common, and renovations often bring plumbing upgrades.',
    neighborhoods: [
      { name: 'Park Slope', published: true },
      { name: 'Prospect Heights', published: true },
      { name: 'Carroll Gardens', published: true },
      { name: 'Cobble Hill', published: true },
      { name: 'Downtown Brooklyn', published: true },
    ],
  },
  {
    id: 'waterfront',
    title: 'Waterfront & Low-Lying Areas',
    description:
      'Neighborhoods near the harbor and the Gowanus Canal, where basements and ground floors can be vulnerable to flooding and sewer backups in heavy storms — so sump pumps and backwater protection matter.',
    neighborhoods: [
      { name: 'Red Hook', published: true },
      { name: 'Gowanus', published: true },
    ],
  },
  {
    id: 'central-north-brooklyn',
    title: 'Central & North Brooklyn',
    description:
      'From Victorian houses and pre-war apartment buildings to converted lofts, new condos and busy restaurants, bars and retail spaces.',
    neighborhoods: [
      { name: 'Flatbush', published: true },
      { name: 'Bedford-Stuyvesant', published: true },
      { name: 'Bushwick', published: true },
      { name: 'Williamsburg', published: true },
      { name: 'Greenpoint', published: true },
    ],
  },
]

/** Groups with only their published neighborhoods; empty groups are dropped. */
export const serviceAreaGroups: ServiceAreaGroup[] = groups
  .map((group) => ({ ...group, neighborhoods: group.neighborhoods.filter((n) => n.published) }))
  .filter((group) => group.neighborhoods.length > 0)

export const neighborhoods: string[] = serviceAreaGroups.flatMap((group) => group.neighborhoods.map((n) => n.name))
