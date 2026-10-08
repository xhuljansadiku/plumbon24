import type { StaticImageData } from 'next/image'
import backflowPreventer from '@/public/images/backflow-preventer.jpg'
import basementWaterHeater from '@/public/images/basement-water-heater.jpg'
import bathroomFaucet from '@/public/images/bathroom-faucet.jpg'
import brooklynBrownstones from '@/public/images/brooklyn-brownstones.jpg'
import brooklynStreet from '@/public/images/brooklyn-street.jpg'
import commercialKitchenSink from '@/public/images/commercial-kitchen-sink.jpg'
import copperPipeVise from '@/public/images/copper-pipe-vise.jpg'
import drippingTap from '@/public/images/dripping-tap.jpg'
import faucetDark from '@/public/images/faucet-dark.jpg'
import gasPipeFitting from '@/public/images/gas-pipe-fitting.jpg'
import heroPlumber from '@/public/images/hero-plumber-fitting-pipes.jpg'
import kitchenSink from '@/public/images/kitchen-sink.jpg'
import manholeCover from '@/public/images/manhole-cover.jpg'
import manifoldGauge from '@/public/images/manifold-gauge.jpg'
import modernBathroom from '@/public/images/modern-bathroom.jpg'
import pipeThreading from '@/public/images/pipe-threading.jpg'
import pumpRepair from '@/public/images/pump-repair.jpg'
import toilet from '@/public/images/toilet.jpg'
import toolsOnBlueprint from '@/public/images/tools-on-blueprint.jpg'
import underSinkRepair from '@/public/images/under-sink-repair.jpg'
import valveManifold from '@/public/images/valve-manifold.jpg'
import waterServiceCover from '@/public/images/water-service-cover.jpg'
import wrenchOnSink from '@/public/images/wrench-on-sink.jpg'

export type SiteImage = {
  src: StaticImageData
  alt: string
  /** CSS object-position used when the image is cropped. */
  position?: string
}

/**
 * Photography registry. Images are licensed stock photos (see docs/IMAGE-CREDITS.md).
 * Alt text describes what is shown — it never presents stock models as company staff.
 * Replace with real project photos whenever they become available.
 */
const registry = {
  heroPlumber: {
    src: heroPlumber,
    alt: 'Plumber’s hands tightening a brass fitting on a steel water line',
    position: '50% 45%',
  },
  pipeThreading: {
    src: pipeThreading,
    alt: 'Gloved hands threading a steel pipe into a fitting, with pipe wrenches on the workbench',
  },
  copperPipeVise: {
    src: copperPipeVise,
    alt: 'Copper pipe assembly clamped in a bench vise during fabrication',
    position: '50% 40%',
  },
  toolsOnBlueprint: {
    src: toolsOnBlueprint,
    alt: 'Plumbing tools, a faucet and braided supply lines laid out on a floor plan',
  },
  brooklynBrownstones: {
    src: brooklynBrownstones,
    alt: 'Row of Brooklyn brownstones with stoops and iron railings in autumn',
    position: '50% 60%',
  },
  brooklynStreet: {
    src: brooklynStreet,
    alt: 'Tree-lined Brooklyn street corner with brownstone and brick apartment buildings',
    position: '50% 55%',
  },
  backflowPreventer: {
    src: backflowPreventer,
    alt: 'Backflow prevention assembly with valves on a building’s water service piping',
  },
  gasPipeFitting: {
    src: gasPipeFitting,
    alt: 'Gloved hands using an adjustable wrench on a gas pipe under a commercial kitchen hood',
  },
  commercialKitchenSink: {
    src: commercialKitchenSink,
    alt: 'Restaurant dish station with a stainless steel sink and pre-rinse faucet',
    position: '60% 50%',
  },
  faucetDark: {
    src: faucetDark,
    alt: 'Chrome faucet over an old sink in low light',
    position: '50% 35%',
  },
  drippingTap: {
    src: drippingTap,
    alt: 'Water drop falling from a dripping brass tap',
    position: '65% 50%',
  },
  wrenchOnSink: {
    src: wrenchOnSink,
    alt: 'Wrench resting on a wet stainless steel kitchen sink',
  },
  bathroomFaucet: {
    src: bathroomFaucet,
    alt: 'Brushed nickel faucet on a white bathroom vanity sink',
  },
  pumpRepair: {
    src: pumpRepair,
    alt: 'Technician working on the connection of an electric water pump',
    position: '50% 60%',
  },
  manifoldGauge: {
    src: manifoldGauge,
    alt: 'Pressure gauge, pump and valves on a water distribution manifold',
  },
  valveManifold: {
    src: valveManifold,
    alt: 'Gloved hands assembling a manifold of valves and pipe fittings',
    position: '50% 55%',
  },
  modernBathroom: {
    src: modernBathroom,
    alt: 'Modern bathroom with a glass shower enclosure and wall-mounted vanity',
  },
  kitchenSink: {
    src: kitchenSink,
    alt: 'Stainless steel kitchen sink with a chrome faucet and marble backsplash',
  },
  waterServiceCover: {
    src: waterServiceCover,
    alt: 'Sidewalk access cover marked “WATER” for a building’s water service',
  },
  manholeCover: {
    src: manholeCover,
    alt: 'Sewer manhole cover on a wet city street',
  },
  basementWaterHeater: {
    src: basementWaterHeater,
    alt: 'Basement utility area with a tank water heater, water softener, washer and dryer',
    position: '100% 50%',
  },
  underSinkRepair: {
    src: underSinkRepair,
    alt: 'Hands adjusting a pipe connection underneath a sink',
    position: '50% 55%',
  },
  toilet: {
    src: toilet,
    alt: 'White wall-mounted toilet in a tiled bathroom',
  },
} satisfies Record<string, SiteImage>

export type ImageKey = keyof typeof registry

export const images: Record<ImageKey, SiteImage> = registry
