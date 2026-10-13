import type { StaticImageData } from 'next/image'
import brooklynBrownstones from '@/public/images/brooklyn-brownstones.jpg'
import brooklynStreet from '@/public/images/brooklyn-street.jpg'
import commercialKitchenSink from '@/public/images/commercial-kitchen-sink.jpg'
import drippingTap from '@/public/images/dripping-tap.jpg'
import faucetDark from '@/public/images/faucet-dark.jpg'
import gasPipeFitting from '@/public/images/gas-pipe-fitting.jpg'
import manholeCover from '@/public/images/manhole-cover.jpg'
import manifoldGauge from '@/public/images/manifold-gauge.jpg'
import pumpRepair from '@/public/images/pump-repair.jpg'
import underSinkRepair from '@/public/images/under-sink-repair.jpg'
import waterServiceCover from '@/public/images/water-service-cover.jpg'
import wrenchOnSink from '@/public/images/wrench-on-sink.jpg'
import backflowCopper from '@/public/images/work/backflow-copper.jpg'
import basementCastIron from '@/public/images/work/basement-cast-iron.jpg'
import bathroomRoughIn from '@/public/images/work/bathroom-rough-in.jpg'
import boilerRoom from '@/public/images/work/boiler-room.jpg'
import commercialRoughIn from '@/public/images/work/commercial-rough-in.jpg'
import copperRisers from '@/public/images/work/copper-risers.jpg'
import finishedBathroom from '@/public/images/work/finished-bathroom.jpg'
import finishedFreestandingTub from '@/public/images/work/finished-freestanding-tub.jpg'
import finishedGlassShower from '@/public/images/work/finished-glass-shower.jpg'
import finishedKitchen from '@/public/images/work/finished-kitchen.jpg'
import finishedMarbleBathroom from '@/public/images/work/finished-marble-bathroom.jpg'
import finishedTiledShower from '@/public/images/work/finished-tiled-shower.jpg'
import framedRoughIn from '@/public/images/work/framed-rough-in.jpg'
import inWallToiletCarrier from '@/public/images/work/in-wall-toilet-carrier.jpg'
import indirectWaterHeater from '@/public/images/work/indirect-water-heater.jpg'
import mechanicalRoom from '@/public/images/work/mechanical-room.jpg'
import sewerConnection from '@/public/images/work/sewer-connection.jpg'
import showerPan from '@/public/images/work/shower-pan.jpg'
import showerRoughIn from '@/public/images/work/shower-rough-in.jpg'
import showerValveLaser from '@/public/images/work/shower-valve-laser.jpg'
import sprinklerValve from '@/public/images/work/sprinkler-valve.jpg'
import tanklessWaterHeaters from '@/public/images/work/tankless-water-heaters.jpg'
import utilitySink from '@/public/images/work/utility-sink.jpg'

export type SiteImage = {
  src: StaticImageData
  alt: string
  /** CSS object-position used when the image is cropped. */
  position?: string
}

/**
 * Photography registry.
 * - Project photos (public/images/work) are real jobs completed by the company.
 * - The rest are licensed stock photos (see docs/IMAGE-CREDITS.md). Their alt text describes
 *   what is shown and never presents stock models as company staff.
 */
const registry = {
  // Project photos
  commercialRoughIn: {
    src: commercialRoughIn,
    alt: 'PLUMBON24 plumber installing drain and vent piping overhead during a commercial build-out',
    position: '30% 50%',
  },
  framedRoughIn: {
    src: framedRoughIn,
    alt: 'Drain, vent and washer box rough-in inside new steel stud framing',
  },
  bathroomRoughIn: {
    src: bathroomRoughIn,
    alt: 'Copper supply lines and black drain piping roughed in for back-to-back bathrooms',
  },
  showerRoughIn: {
    src: showerRoughIn,
    alt: 'Copper shower valve and supply rough-in inside a steel stud wall',
  },
  showerValveLaser: {
    src: showerValveLaser,
    alt: 'Copper shower valve rough-in aligned with a green laser level',
  },
  showerPan: {
    src: showerPan,
    alt: 'Lead shower pan with a center drain, ready for tile',
  },
  inWallToiletCarrier: {
    src: inWallToiletCarrier,
    alt: 'In-wall toilet carrier installed in an open wall before finishing',
  },
  utilitySink: {
    src: utilitySink,
    alt: 'Newly installed wall-mounted utility sink with a chrome faucet and P-trap',
  },
  tanklessWaterHeaters: {
    src: tanklessWaterHeaters,
    alt: 'Wall-mounted tankless water heaters with gas and water connections',
  },
  indirectWaterHeater: {
    src: indirectWaterHeater,
    alt: 'Indirect water heater with a mixing valve, gas valve and new copper piping',
  },
  boilerRoom: {
    src: boilerRoom,
    alt: 'Boiler room with an expansion tank and insulated heating pipes',
  },
  mechanicalRoom: {
    src: mechanicalRoom,
    alt: 'Mechanical room with copper, insulated and black steel piping',
  },
  backflowCopper: {
    src: backflowCopper,
    alt: 'Backflow preventer installed on a building’s copper water service',
  },
  copperRisers: {
    src: copperRisers,
    alt: 'New copper water lines with shut-off valves and a pressure-reducing valve',
    position: '50% 40%',
  },
  sprinklerValve: {
    src: sprinklerValve,
    alt: 'Red sprinkler control valve assembly with a pressure gauge',
  },
  basementCastIron: {
    src: basementCastIron,
    alt: 'Cast iron waste piping run across a basement ceiling',
  },
  sewerConnection: {
    src: sewerConnection,
    alt: 'Cast iron sewer connection in an excavated basement floor',
  },
  finishedBathroom: {
    src: finishedBathroom,
    alt: 'Finished bathroom with a wall-hung vanity, brass fixtures and a tub under the window',
  },
  finishedTiledShower: {
    src: finishedTiledShower,
    alt: 'Finished bathroom with a green tiled glass shower and brass fixtures',
  },
  finishedGlassShower: {
    src: finishedGlassShower,
    alt: 'Finished stone walk-in shower with a frameless glass enclosure',
  },
  finishedMarbleBathroom: {
    src: finishedMarbleBathroom,
    alt: 'Finished marble bathroom with a glass shower, toilet and vanity',
  },
  finishedKitchen: {
    src: finishedKitchen,
    alt: 'Finished kitchen with a marble island, sink and pendant lights',
  },
  finishedFreestandingTub: {
    src: finishedFreestandingTub,
    alt: 'Finished primary bathroom with a freestanding tub between two vanities',
  },

  // Stock photos
  brooklynBrownstones: {
    src: brooklynBrownstones,
    alt: 'Row of Brooklyn brownstones with stoops and iron railings in autumn',
    position: '50% 60%',
  },
  brooklynStreet: {
    src: brooklynStreet,
    alt: 'Tree-lined New York City street corner with brownstone and brick apartment buildings',
    position: '50% 55%',
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
  pumpRepair: {
    src: pumpRepair,
    alt: 'Technician working on the connection of an electric water pump',
    position: '50% 60%',
  },
  manifoldGauge: {
    src: manifoldGauge,
    alt: 'Pressure gauge, pump and valves on a water distribution manifold',
  },
  waterServiceCover: {
    src: waterServiceCover,
    alt: 'Sidewalk access cover marked “WATER” for a building’s water service',
  },
  manholeCover: {
    src: manholeCover,
    alt: 'Sewer manhole cover on a wet city street',
  },
  underSinkRepair: {
    src: underSinkRepair,
    alt: 'Hands adjusting a pipe connection underneath a sink',
    position: '50% 55%',
  },
} satisfies Record<string, SiteImage>

export type ImageKey = keyof typeof registry

export const images: Record<ImageKey, SiteImage> = registry

/** Real project photos for the "Our Work" gallery — finished spaces first, then work behind the walls. */
export const workGallery: ImageKey[] = [
  'finishedFreestandingTub',
  'finishedKitchen',
  'finishedTiledShower',
  'finishedGlassShower',
  'commercialRoughIn',
  'bathroomRoughIn',
  'indirectWaterHeater',
  'backflowCopper',
  'tanklessWaterHeaters',
  'showerPan',
  'inWallToiletCarrier',
  'copperRisers',
]
