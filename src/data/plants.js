// Single source of truth for the catalog. ProductList and the cart both read from here.
// Prices are in USD. Images are bundled SVG illustrations in src/assets/plants.
import snakePlant from '../assets/plants/snake-plant.svg'
import zzPlant from '../assets/plants/zz-plant.svg'
import pothos from '../assets/plants/pothos.svg'
import castIronPlant from '../assets/plants/cast-iron-plant.svg'
import chineseEvergreen from '../assets/plants/chinese-evergreen.svg'
import philodendron from '../assets/plants/philodendron.svg'
import jadePlant from '../assets/plants/jade-plant.svg'
import aloeVera from '../assets/plants/aloe-vera.svg'
import echeveria from '../assets/plants/echeveria.svg'
import haworthia from '../assets/plants/haworthia.svg'
import stringOfPearls from '../assets/plants/string-of-pearls.svg'
import pandaPlant from '../assets/plants/panda-plant.svg'
import peaceLily from '../assets/plants/peace-lily.svg'
import spiderPlant from '../assets/plants/spider-plant.svg'
import arecaPalm from '../assets/plants/areca-palm.svg'
import bostonFern from '../assets/plants/boston-fern.svg'
import bambooPalm from '../assets/plants/bamboo-palm.svg'
import dracaena from '../assets/plants/dracaena.svg'

export const CATEGORIES = [
  { id: 'low-light', title: 'Low-Light Plants' },
  { id: 'succulents', title: 'Succulents and Cacti' },
  { id: 'air-purifying', title: 'Air-Purifying Plants' },
]

// Helper keeps each entry short: id, display name, category, price, image, alt text, description.
const plant = (id, name, category, price, image, alt, description) => ({
  id, name, category, price, image, alt, description,
})

export const PLANTS = [
  // Low-Light Plants
  plant('snake-plant', 'Snake Plant', 'low-light', 28, snakePlant,
    'Illustration of a snake plant with tall upright striped leaves in a terracotta pot',
    'Tough, upright leaves that thrive on neglect and low light.'),
  plant('zz-plant', 'ZZ Plant', 'low-light', 34, zzPlant,
    'Illustration of a ZZ plant with glossy arching leaflets in a terracotta pot',
    'Glossy, drought-tolerant foliage for dim corners and busy schedules.'),
  plant('pothos', 'Pothos', 'low-light', 18, pothos,
    'Illustration of a pothos with heart-shaped leaves on trailing vines',
    'A forgiving trailing vine that brightens shelves and hanging spots.'),
  plant('cast-iron-plant', 'Cast Iron Plant', 'low-light', 30, castIronPlant,
    'Illustration of a cast iron plant with broad dark green leaves',
    'Nearly indestructible, with deep green leaves that handle deep shade.'),
  plant('chinese-evergreen', 'Chinese Evergreen', 'low-light', 24, chineseEvergreen,
    'Illustration of a Chinese evergreen with speckled leaves in a pot',
    'Patterned leaves in silver and green that suit offices and bathrooms.'),
  plant('philodendron', 'Philodendron', 'low-light', 22, philodendron,
    'Illustration of a philodendron with deep green heart-shaped leaves',
    'Rich, glossy leaves that grow fuller with every season.'),

  // Succulents and Cacti
  plant('jade-plant', 'Jade Plant', 'succulents', 22, jadePlant,
    'Illustration of a jade plant with round, thick green leaves on a woody stem',
    'Plump, coin-shaped leaves on a sturdy little trunk.'),
  plant('aloe-vera', 'Aloe Vera', 'succulents', 16, aloeVera,
    'Illustration of an aloe vera rosette with spiky fleshy leaves',
    'A classic succulent with soothing gel inside its leaves.'),
  plant('echeveria', 'Echeveria', 'succulents', 14, echeveria,
    'Illustration of an echeveria rosette of blue-green layered leaves',
    'Sculptural rosettes in soft silvery greens.'),
  plant('haworthia', 'Haworthia', 'succulents', 15, haworthia,
    'Illustration of a haworthia rosette with dark banded leaves',
    'Compact, striped rosettes that stay small on a windowsill.'),
  plant('string-of-pearls', 'String of Pearls', 'succulents', 19, stringOfPearls,
    'Illustration of string of pearls trailing from a pot with round green beads',
    'Cascading strands of bead-like leaves for hanging baskets.'),
  plant('panda-plant', 'Panda Plant', 'succulents', 17, pandaPlant,
    'Illustration of a panda plant with fuzzy silver-grey leaves',
    'Soft, velvety leaves with a silvery finish.'),

  // Air-Purifying Plants
  plant('peace-lily', 'Peace Lily', 'air-purifying', 26, peaceLily,
    'Illustration of a peace lily with dark green leaves and white blooms',
    'Elegant white blooms and one of the easiest houseplants to keep.'),
  plant('spider-plant', 'Spider Plant', 'air-purifying', 15, spiderPlant,
    'Illustration of a spider plant with arching striped leaves and a plantlet',
    'Arching leaves and playful plantlets, ideal for beginners.'),
  plant('areca-palm', 'Areca Palm', 'air-purifying', 45, arecaPalm,
    'Illustration of an areca palm with feathery fronds in a terracotta pot',
    'A lush, feathery palm that adds a tropical feel to any room.'),
  plant('boston-fern', 'Boston Fern', 'air-purifying', 21, bostonFern,
    'Illustration of a Boston fern with full arching green fronds',
    'Lacy, full fronds that add softness and humidity to a room.'),
  plant('bamboo-palm', 'Bamboo Palm', 'air-purifying', 38, bambooPalm,
    'Illustration of a bamboo palm with slender green canes and fronds',
    'Slim, cane-like stems and a light, airy canopy.'),
  plant('dracaena', 'Dracaena', 'air-purifying', 27, dracaena,
    'Illustration of a dracaena with long strappy leaves in a pot',
    'Long, striped leaves that tolerate a wide range of indoor light.'),
]
