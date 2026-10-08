import { backflowPrevention } from './catalog/backflow-prevention'
import { bathroomPlumbing } from './catalog/bathroom-plumbing'
import { commercialPlumbing } from './catalog/commercial-plumbing'
import { drainCleaning } from './catalog/drain-cleaning'
import { emergencyPlumbing } from './catalog/emergency-plumbing'
import { faucetFixtureRepair } from './catalog/faucet-fixture-repair'
import { garbageDisposalServices } from './catalog/garbage-disposal-services'
import { gasLinePlumbing } from './catalog/gas-line-plumbing'
import { kitchenPlumbing } from './catalog/kitchen-plumbing'
import { leakDetectionRepair } from './catalog/leak-detection-repair'
import { pipeRepairReplacement } from './catalog/pipe-repair-replacement'
import { plumbingInstallation } from './catalog/plumbing-installation'
import { plumbingMaintenance } from './catalog/plumbing-maintenance'
import { repiping } from './catalog/repiping'
import { residentialPlumbing } from './catalog/residential-plumbing'
import { sewerLineServices } from './catalog/sewer-line-services'
import { sumpPumpServices } from './catalog/sump-pump-services'
import { toiletRepairInstallation } from './catalog/toilet-repair-installation'
import { waterHeaterServices } from './catalog/water-heater-services'
import { waterLineServices } from './catalog/water-line-services'
import type { Service, ServiceCategoryId } from './types'

export type { Faq, Service, ServiceCategoryId } from './types'

/** Every service, in display order. Add new services here after creating their file in ./catalog. */
const catalog: Service[] = [
  emergencyPlumbing,
  drainCleaning,
  leakDetectionRepair,
  pipeRepairReplacement,
  sewerLineServices,
  waterLineServices,
  gasLinePlumbing,
  backflowPrevention,
  repiping,
  waterHeaterServices,
  sumpPumpServices,
  faucetFixtureRepair,
  toiletRepairInstallation,
  garbageDisposalServices,
  bathroomPlumbing,
  kitchenPlumbing,
  plumbingInstallation,
  plumbingMaintenance,
  residentialPlumbing,
  commercialPlumbing,
]

export const serviceCategories: { id: ServiceCategoryId; title: string; description: string }[] = [
  {
    id: 'repairs',
    title: 'Repairs & Urgent Problems',
    description: 'Leaks, clogs, broken pipes and the plumbing problems that need attention now.',
  },
  {
    id: 'lines',
    title: 'Water, Sewer & Gas Lines',
    description: 'The lines that bring water and gas into your building and carry waste out — and the devices that protect them.',
  },
  {
    id: 'equipment',
    title: 'Water Heaters, Pumps & Fixtures',
    description: 'The equipment and fixtures you rely on every day, repaired, replaced or installed.',
  },
  {
    id: 'projects',
    title: 'Kitchens, Bathrooms & Projects',
    description: 'Plumbing for renovations, new installations and planned maintenance.',
  },
  {
    id: 'property',
    title: 'Residential & Commercial',
    description: 'Plumbing services organized around the property you own, manage or run.',
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
  'emergency-plumbing',
  'drain-cleaning',
  'water-heater-services',
  'sewer-line-services',
  'leak-detection-repair',
  'pipe-repair-replacement',
]
  .map(getService)
  .filter(isService)

/** Footer service links. */
export const footerServices: Service[] = [
  'emergency-plumbing',
  'drain-cleaning',
  'sewer-line-services',
  'water-heater-services',
  'leak-detection-repair',
  'pipe-repair-replacement',
  'commercial-plumbing',
  'residential-plumbing',
]
  .map(getService)
  .filter(isService)
