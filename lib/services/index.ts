import { backflowPrevention } from './catalog/backflow-prevention'
import { boilerHeatingServices } from './catalog/boiler-heating-services'
import { bathroomPiping } from './catalog/bathroom-piping'
import { commercialPiping } from './catalog/commercial-piping'
import { drainCleaning } from './catalog/drain-cleaning'
import { emergencyPiping } from './catalog/emergency-piping'
import { faucetFixtureRepair } from './catalog/faucet-fixture-repair'
import { fireSprinklerSystems } from './catalog/fire-sprinkler-systems'
import { garbageDisposalServices } from './catalog/garbage-disposal-services'
import { gasLinePiping } from './catalog/gas-line-piping'
import { kitchenPiping } from './catalog/kitchen-piping'
import { leakDetectionRepair } from './catalog/leak-detection-repair'
import { pipeRepairReplacement } from './catalog/pipe-repair-replacement'
import { pipingInstallation } from './catalog/piping-installation'
import { pipingMaintenance } from './catalog/piping-maintenance'
import { repiping } from './catalog/repiping'
import { residentialPiping } from './catalog/residential-piping'
import { sewerLineServices } from './catalog/sewer-line-services'
import { sumpPumpServices } from './catalog/sump-pump-services'
import { toiletRepairInstallation } from './catalog/toilet-repair-installation'
import { waterHeaterServices } from './catalog/water-heater-services'
import { waterLineServices } from './catalog/water-line-services'
import type { ImageKey } from '@/lib/images'
import type { Service, ServiceCategoryId } from './types'

export type { Faq, Service, ServiceCategoryId } from './types'

/** Every service, in display order. Add new services here after creating their file in ./catalog. */
const catalog: Service[] = [
  emergencyPiping,
  drainCleaning,
  leakDetectionRepair,
  pipeRepairReplacement,
  sewerLineServices,
  waterLineServices,
  gasLinePiping,
  backflowPrevention,
  fireSprinklerSystems,
  waterHeaterServices,
  boilerHeatingServices,
  sumpPumpServices,
  faucetFixtureRepair,
  toiletRepairInstallation,
  garbageDisposalServices,
  bathroomPiping,
  kitchenPiping,
  pipingInstallation,
  repiping,
  pipingMaintenance,
  residentialPiping,
  commercialPiping,
]

/** A service category. Each category with at least one published service gets its own page. */
export type ServiceCategory = {
  id: ServiceCategoryId
  /** URL segment: /services/category/<slug>. */
  slug: string
  title: string
  description: string
  image: ImageKey
  seo: {
    title: string
    description: string
  }
  /** Hero intro on the category page. */
  intro: string
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'repairs',
    slug: 'repairs',
    title: 'Repairs & Urgent Problems',
    description: 'Leaks, clogs, broken pipes and the piping problems that need attention now.',
    image: 'castIronDrainStack',
    seo: {
      title: 'Piping Repairs & Emergency Service in NYC | PLUMBON24',
      description:
        'Emergency piping service, drain cleaning, leak detection and pipe repair for homes and businesses in all five NYC boroughs. Available 24/7.',
    },
    intro:
      'Burst pipes, leaks, clogged drains and damaged piping, handled quickly in homes, apartments and businesses across New York City, with emergency service 24/7.',
  },
  {
    id: 'lines',
    slug: 'lines',
    title: 'Lines, Gas & Fire Sprinklers',
    description: 'Water and sewer lines, gas piping, backflow protection and fire sprinkler systems.',
    image: 'backflowCopper',
    seo: {
      title: 'Water, Sewer & Gas Lines in NYC | PLUMBON24',
      description: 'Water and sewer lines, gas piping, backflow protection and fire sprinkler systems in all five NYC boroughs.',
    },
    intro: 'Water and sewer lines, gas piping, backflow protection and fire sprinkler systems for NYC buildings.',
  },
  {
    id: 'equipment',
    slug: 'heating-hot-water-fixtures',
    title: 'Heating, Hot Water & Fixtures',
    description: 'Boilers, steam heat, water heaters, pumps and the fixtures you rely on every day, repaired, replaced or installed.',
    image: 'boilerRoomInstall',
    seo: {
      title: 'Boilers, Water Heaters & Fixtures in NYC | PLUMBON24',
      description:
        'Boiler and steam heat service, water heaters, sump pumps, faucets, toilets and garbage disposals: repair, replacement and installation in all five NYC boroughs.',
    },
    intro:
      'Boilers and steam heat, water heaters, pumps and everyday fixtures, repaired, replaced or installed in homes and buildings across all five boroughs.',
  },
  {
    id: 'projects',
    slug: 'kitchens-bathrooms-projects',
    title: 'Kitchens, Bathrooms & Projects',
    description: 'Piping for renovations, new installations, repiping and planned maintenance.',
    image: 'finishedFreestandingTub',
    seo: {
      title: 'Kitchen & Bathroom Piping, Repiping & Installations in NYC | PLUMBON24',
      description:
        'Piping for kitchen and bathroom renovations, new installations, repiping and planned maintenance for homes and businesses in all five NYC boroughs.',
    },
    intro:
      'Piping for kitchen and bathroom renovations, new installations, full repiping and planned maintenance, from rough-in to the finished fixtures.',
  },
  {
    id: 'property',
    slug: 'residential-commercial',
    title: 'Residential & Commercial',
    description: 'Piping services organized around the property you own, manage or run.',
    image: 'commercialRoughIn',
    seo: {
      title: 'Residential & Commercial Piping in NYC | PLUMBON24',
      description:
        'Piping services for houses, apartments, condos and co-ops, and for stores, restaurants, offices and mixed-use buildings in all five NYC boroughs.',
    },
    intro:
      'Whether it’s your home or your business, we handle repairs, installations and maintenance for the property you own, manage or run.',
  },
]

/** Published services only — unpublished services disappear from pages, menus, the sitemap and the form. */
export const services: Service[] = catalog.filter((service) => service.published)

function isService(value: Service | undefined): value is Service {
  return Boolean(value)
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getServicesByCategory(category: ServiceCategoryId): Service[] {
  return services.filter((service) => service.category === category)
}

export function getRelatedServices(service: Service, limit = 3): Service[] {
  const related = service.related.map(getService).filter(isService)
  const fillers = getServicesByCategory(service.category).filter(
    (candidate) => candidate.slug !== service.slug && !related.includes(candidate),
  )
  return [...related, ...fillers].slice(0, limit)
}

export function serviceHref(slug: string): string {
  return `/services/${slug}`
}

/** Categories with at least one published service, in display order. Only these get a page. */
export const visibleCategories: ServiceCategory[] = serviceCategories.filter(
  (category) => getServicesByCategory(category.id).length > 0,
)

export function getCategory(id: ServiceCategoryId): ServiceCategory | undefined {
  return visibleCategories.find((category) => category.id === id)
}

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return visibleCategories.find((category) => category.slug === slug)
}

export function categoryHref(category: ServiceCategory): string {
  return `/services/category/${category.slug}`
}

export function serviceLabel(service: Service): string {
  return service.shortTitle ?? service.title
}

/** Homepage service cards, in order (01–06). */
export const featuredServices: Service[] = [
  'emergency-piping',
  'drain-cleaning',
  'water-heater-services',
  'boiler-heating-services',
  'leak-detection-repair',
  'pipe-repair-replacement',
]
  .map(getService)
  .filter(isService)

/** Footer service links. */
export const footerServices: Service[] = [
  'emergency-piping',
  'drain-cleaning',
  'boiler-heating-services',
  'water-heater-services',
  'leak-detection-repair',
  'pipe-repair-replacement',
  'commercial-piping',
  'residential-piping',
]
  .map(getService)
  .filter(isService)
