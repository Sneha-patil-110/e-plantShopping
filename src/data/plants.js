// Single source of truth for the catalog. ProductList and the cart both read from here.
// Prices are in USD. Images are bundled SVG illustrations in src/assets/plants.
import snakePlant from '../assets/plants/snake-plant.svg'
import zzPlant from '../assets/plants/zz-plant.svg'
import pothos from '../assets/plants/pothos.svg'
import jadePlant from '../assets/plants/jade-plant.svg'
import aloeVera from '../assets/plants/aloe-vera.svg'
import echeveria from '../assets/plants/echeveria.svg'
import peaceLily from '../assets/plants/peace-lily.svg'
import spiderPlant from '../assets/plants/spider-plant.svg'
import arecaPalm from '../assets/plants/areca-palm.svg'

export const CATEGORIES = [
  { id: 'low-light', title: 'Low-Light Plants' },
  { id: 'succulents', title: 'Succulents and Cacti' },
  { id: 'air-purifying', title: 'Air-Purifying Plants' },
]

export const PLANTS = [
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    category: 'low-light',
    price: 28,
    image: snakePlant,
    alt: 'Illustration of a snake plant with tall upright striped leaves in a terracotta pot',
    description: 'Tough, upright leaves that thrive on neglect and low light.',
  },
  {
    id: 'zz-plant',
    name: 'ZZ Plant',
    category: 'low-light',
    price: 34,
    image: zzPlant,
    alt: 'Illustration of a ZZ plant with glossy arching leaflets in a terracotta pot',
    description: 'Glossy, drought-tolerant foliage for dim corners and busy schedules.',
  },
  {
    id: 'pothos',
    name: 'Pothos',
    category: 'low-light',
    price: 18,
    image: pothos,
    alt: 'Illustration of a pothos with heart-shaped leaves on trailing vines',
    description: 'A forgiving trailing vine that brightens shelves and hanging spots.',
  },
  {
    id: 'jade-plant',
    name: 'Jade Plant',
    category: 'succulents',
    price: 22,
    image: jadePlant,
    alt: 'Illustration of a jade plant with round, thick green leaves on a woody stem',
    description: 'Plump, coin-shaped leaves on a sturdy little trunk.',
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    category: 'succulents',
    price: 16,
    image: aloeVera,
    alt: 'Illustration of an aloe vera rosette with spiky fleshy leaves',
    description: 'A classic succulent with soothing gel inside its leaves.',
  },
  {
    id: 'echeveria',
    name: 'Echeveria',
    category: 'succulents',
    price: 14,
    image: echeveria,
    alt: 'Illustration of an echeveria rosette of blue-green layered leaves',
    description: 'Sculptural rosettes in soft silvery greens.',
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    category: 'air-purifying',
    price: 26,
    image: peaceLily,
    alt: 'Illustration of a peace lily with dark green leaves and white blooms',
    description: 'Elegant white blooms and one of the easiest houseplants to keep.',
  },
  {
    id: 'spider-plant',
    name: 'Spider Plant',
    category: 'air-purifying',
    price: 15,
    image: spiderPlant,
    alt: 'Illustration of a spider plant with arching striped leaves and a plantlet',
    description: 'Arching leaves and playful plantlets, ideal for beginners.',
  },
  {
    id: 'areca-palm',
    name: 'Areca Palm',
    category: 'air-purifying',
    price: 45,
    image: arecaPalm,
    alt: 'Illustration of an areca palm with feathery fronds in a terracotta pot',
    description: 'A lush, feathery palm that adds a tropical feel to any room.',
  },
]
