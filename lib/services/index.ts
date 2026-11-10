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

export const serviceCategories: { id: ServiceCategoryId; title: string; description: string }[] = [
  {
    id: 'repairs',
    title: 'Repairs & Urgent Problems',
    description: 'Leaks, clogs, broken pipes and the piping problems that need attention now.',
  },
  {
    id: 'lines',
    title: 'Lines, Gas & Fire Sprinklers',
    description: 'Water and sewer lines, gas piping, backflow protection and fire sprinkler systems.',
  },
  {
    id: 'equipment',
    title: 'Heating, Hot Water & Fixtures',
    description: 'Boilers, steam heat, water heaters, pumps and the fixtures you rely on every day, repaired, replaced or installed.',
  },
  {
    id: 'projects',
    title: 'Kitchens, Bathrooms & Projects',
    description: 'Piping for renovations, new installations, repiping and planned maintenance.',
  },
  {
    id: 'property',
    title: 'Residential & Commercial',
    description: 'Piping services organized around the property you own, manage or run.',
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
