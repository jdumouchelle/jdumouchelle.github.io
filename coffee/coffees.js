// Coffee data array
// Ordered newest to oldest — to add a new coffee, insert at the top with the next id number.
const coffees = [
    // ── ADD NEW COFFEES HERE (next id: coffee19) ──

    // ── 2026-02 ──
    {
        id: 'coffee18',
        name: 'Red Inverse',
        fullName: 'Red Inverse - Yunnan Tianhao Manor',
        roaster: 'COFFEENOW',
        roasterUrl: 'https://coffeenow.today/',
        image: 'coffee/26_02_red_inverse.jpg',
        details: {
            'Tasting Notes': 'Jackfruit, Honeydew Melon, Wine Aroma, Chocolate Liqueur',
            'Origin': 'China',
            'Region': 'Lancan, Puer, Yunnan',
            'Farm': 'Tianhao Manor',
            'Varietal': 'Catimor',
            'Process': 'Anaerobic Natural',
        }
    },
    {
        id: 'coffee17',
        name: 'Drift',
        fullName: 'Seasonal Edition 001 - Drift',
        roaster: 'Paradigm Spark',
        roasterUrl: 'https://paradigmspark.com/',
        image: 'coffee/26_02_drift.png',
        details: {
            'Tasting Notes': 'Mango, blackberry, chocolate',
            'Origin': 'Ethiopia and Columbia',
            'Producer': 'Bensa local producers and Frank Torres',
            'Varietal': 'Local varieties and Caturra',
            'Process': 'Natural + Extended Fermentation Blend',
        }
    },
    {
        id: 'coffee16',
        name: 'Black Moon',
        fullName: 'Black Moon - Chiroso',
        roaster: 'Monogram Coffee',
        roasterUrl: 'https://monogramcoffee.com/',
        image: 'coffee/26_02_black_moon.png',
        details: {
            'Tasting Notes': 'Grape, floral, orange',
            'Origin': 'Panama',
            'Region': 'Alto Quiel, Boquete, Chiriquí',
            'Farm': 'Black Moon Farm',
            'Varietal': 'Chiroso',
            'Process': 'Anaerobic Natural',
            'Altitude': '1,700-1,780 masl'
        }
    },
    // ── 2026-01 ──
    {
        id: 'coffee15',
        name: 'The New School - Lychee',
        fullName: 'The New School - Lychee',
        roaster: 'Black & White Coffee Roasters',
        roasterUrl: 'https://www.blackwhiteroasters.com/',
        image: 'coffee/26_01_new_school_lychee.jpg',
        details: {
            'Tasting Notes': 'Lychee soda, sweet lemon, milk chocolate',
            'Origin': 'Colombia & Ethiopia',
            'Varietal': 'Various',
            'Process': 'Washed & Co-ferment',
            'Roast': 'Medium'
        }
    },
    {
        id: 'coffee14',
        name: 'Peru David Flores',
        fullName: 'Peru David Flores, Washed Sidra',
        roaster: 'Subtext Coffee',
        roasterUrl: 'https://www.subtext.coffee/',
        image: 'coffee/26_01_peru_david_flores.png',
        details: {
            'Tasting Notes': 'Plum, persimmon, floral',
            'Producer': 'David Flores',
            'Origin': 'Peru',
            'Region': 'Cajamarca',
            'Varietal': 'Sidra',
            'Process': 'Washed',
            'Altitude': '1,850-1,900 masl'
        }
    },
    {
        id: 'coffee13',
        name: 'Every Little Thing',
        fullName: 'Every Little Thing',
        roaster: 'FUNK Coffee',
        roasterUrl: 'https://www.funk.coffee/',
        image: 'coffee/26_01_every_little_thing.png',
        details: {
            'Tasting Notes': 'Mango',
            'Producer': 'Sebastian Ramirez',
            'Origin': 'Colombia',
            'Region': 'Quindío',
            'Varietal': 'Pink Bourbon',
            'Process': 'Co-Ferment (Mango)',
            'Altitude': '1,750 meters',
            'Roast': 'Medium-Light'
        }
    },
    {
        id: 'coffee12',
        name: 'Orange Marmalade Decaf',
        fullName: 'Orange Marmalade Decaf',
        roaster: 'Colorfull Coffee',
        roasterUrl: 'https://www.colorfullcoffee.com/',
        image: 'coffee/26_01_orange_marmalade.jpg',
        details: {
            'Tasting Notes': 'Lemon, Orange Blossom, Marmalade',
            'Producer': 'Wilton Benitez',
            'Origin': 'Colombia',
            'Region': 'Cauca',
            'Varietal': 'Red Bourbon',
            'Process': 'Anaerobic Washed',
            'Altitude': '2,100 meters',
            'Roast': 'Medium-Light',
            'Caffeine': 'Decaffeinated'
        }
    },
    {
        id: 'coffee11',
        name: 'Red Honey',
        fullName: 'Red Honey',
        roaster: 'Escape Coffee',
        roasterUrl: 'https://escape.cafe/',
        image: 'coffee/26_01_red_honey.png',
        details: {
            'Tasting Notes': 'Rose Petal, Pomegranate, Cocoa, Cherry Jelly',
            'Origin': 'Ethiopia',
            'Region': 'Sidama',
            'Farm': 'Faficho Bombe',
            'Varietal': 'Heirloom + Landrace',
            'Process': 'Red Honey',
            'Altitude': '2,100-2,200 meters'
        }
    },
    // ── 2025-12 ──
    {
        id: 'coffee10',
        name: 'Clara Luz: Geisha',
        fullName: 'Clara Luz: Geisha',
        roaster: 'Phil & Sebastian',
        roasterUrl: 'https://philsebastian.com/',
        image: 'coffee/25_12_clara_luz.png',
        details: {
            'Tasting Notes': 'Froot Loops, Black Tea, Concord Grape',
            'Producer': 'Servio Gonzales',
            'Origin': 'Ecuador',
            'Region': 'Quilanga',
            'Varietal': 'Geisha',
            'Process': 'Anaerobic Natural',
            'Altitude': '1,700 meters',
            'Roast': 'Light'
        }
    },
    // ── 2025-11 ──
    {
        id: 'coffee9',
        name: 'Blueberry Cheesecake',
        fullName: 'Blueberry Cheesecake',
        roaster: 'Jindo Coffee',
        roasterUrl: 'https://cafejindo.ca/',
        image: 'coffee/25_11_blueberry_cheesecake.png',
        details: {
            'Tasting Notes': 'Blueberry compote, creamy acidity, fresh mint, graham crackers',
            'Origin': 'Ethiopia',
            'Region': 'Bensa',
            'Varietal': '74158 (Walega)',
            'Process': 'White Honey',
            'Altitude': '2,200+ masl',
            'Roast': 'Medium'
        }
    },
    {
        id: 'coffee8',
        name: 'Jack of Fruits',
        fullName: 'Jack of Fruits',
        roaster: 'Jindo Coffee',
        roasterUrl: 'https://cafejindo.ca/',
        image: 'coffee/25_11_jack_of_fruits.png',
        details: {
            'Origin': 'Indonesia',
            'Region': 'Lintong, Sumatra',
            'Varietal': 'Sigararutang, LiniS795, Andungsari',
            'Process': 'Giling Basah',
            'Altitude': '1,400 masl',
            'Roast': 'Medium'
        }
    },
    {
        id: 'coffee7',
        name: 'Raspberry Candy Filter',
        fullName: 'Raspberry Candy Filter',
        roaster: 'ONA Coffee',
        roasterUrl: 'https://onacoffee.com.au/',
        image: 'coffee/25_11_raspberry_candy.png',
        details: {
            'Tasting Notes': 'Raspberry Candy, Chocolate, Hibiscus',
            'Origin': 'Ethiopia',
            'Region': 'Multiple Regions',
            'Producer': 'Various Smallholders',
            'Varietal': 'Various',
            'Process': 'Blend',
            'Roast': 'Medium'
        }
    },
    {
        id: 'coffee6',
        name: 'Seoul Cinema',
        fullName: 'Seoul Cinema',
        roaster: 'Fritz Coffee',
        roasterUrl: 'https://www.fritzcoffeecompany.com/',
        image: 'coffee/25_11_seoul_cinema.jpg',
        details: {
            'Tasting Notes': 'Plum, Raspberry, Zest, Assam Tea, Sugar',
            'Origin': 'Ethiopia (70%), Costa Rica (30%)',
            'Process': 'Blend',
            'Roast': 'Medium'
        }
    },
    // ── 2025-09 ──
    {
        id: 'coffee5',
        name: 'Gisele Almeida',
        fullName: 'Gisele Almeida',
        roaster: 'Manhattan Coffee Roasters',
        roasterUrl: 'https://manhattancoffeeroasters.com/',
        image: 'coffee/25_09_gisele_almeida.png',
        details: {
            'Tasting Notes': 'Pineapple, Custard Apple, Yellow Jelly',
            'Producer': 'Gisele Almeida',
            'Origin': 'Brazil',
            'Region': 'Mata de Minas',
            'Farm': 'Sítio Almeida',
            'Varietal': 'Yellow Catuai',
            'Process': 'Pulped Natural',
            'Altitude': '600 masl'
        }
    },
    // ── 2025-08 ──
    {
        id: 'coffee4',
        name: 'Bekele Natural',
        fullName: 'Bekele Natural',
        roaster: 'Coffee Collective',
        roasterUrl: 'https://coffeecollective.dk/',
        image: 'coffee/25_08_bekele_natural.png',
        details: {
            'Tasting Notes': 'Red Strawberries, Wine Gums, Melon, Bergamot',
            'Producer': 'Bekele Karchara',
            'Origin': 'Ethiopia',
            'Region': 'Murago, Sidama',
            'Varietal': '74-158 Kurume',
            'Process': 'Natural',
            'Altitude': '2,200-2,350 masl'
        }
    },
    {
        id: 'coffee3',
        name: 'Micaela Jacinto',
        fullName: 'Guatemala Micaela Jacinto',
        roaster: 'Friedhats',
        roasterUrl: 'https://friedhats.com/',
        image: 'coffee/25_08_michaela_jacinto.png',
        details: {
            'Tasting Notes': 'Smarties, Orange Marmalade, Darjeeling Tea',
            'Producer': 'Micaela Jacinto',
            'Origin': 'Guatemala',
            'Region': 'Concepcion Huista, Huehuetenango',
            'Farm': 'Cacha\'pina',
            'Cooperative': 'El Sendero',
            'Varietal': 'Caturra, Bourbon',
            'Process': 'Washed',
            'Altitude': '1,700-1,750 masl'
        }
    },
    // ── 2025-07 ──
    {
        id: 'coffee2',
        name: 'Berry Blues',
        fullName: 'Berry Blues',
        roaster: 'DAK Coffee Roasters',
        roasterUrl: 'https://www.dakcoffeeroasters.com/',
        image: 'coffee/25_07_berry_blues.png',
        details: {
            'Tasting Notes': 'Blueberry, Purple Grape, Myrtle Liqueur, Cashew Butter',
            'Producer': 'Esayas Beriso',
            'Origin': 'Ethiopia',
            'Region': 'Guji',
            'Varietal': 'Heirloom',
            'Process': 'Shade-Dried Anaerobic Natural',
            'Altitude': '2,300 masl'
        }
    },
    {
        id: 'coffee1',
        name: 'Hazy Clafoutis',
        fullName: 'Hazy Clafoutis - Kenya',
        roaster: 'DAK Coffee Roasters',
        roasterUrl: 'https://www.dakcoffeeroasters.com/',
        image: 'coffee/25_07_hazy_clafoutis.png',
        details: {
            'Tasting Notes': 'Lavender, Black Cherry, Lemon',
            'Origin': 'Kenya',
            'Farm': 'Mtaro Estate',
            'Varietal': 'SL-28, SL-34, Ruiru11',
            'Process': 'Natural',
            'Altitude': '1,900 masl'
        }
    },
];

// Extract year from filename (format: YY_MM_name.ext)
function extractYearFromImage(imagePath) {
    const filename = imagePath.split('/').pop(); // Get filename
    const match = filename.match(/^(\d{2})_(\d{2})/); // Match YY_MM pattern
    if (match) {
        const year = parseInt(match[1]);
        return year >= 20 ? `20${year}` : `19${year}`; // Assume 20xx for years >= 20
    }
    return null;
}

// Group coffees by year based on filename
function groupCoffeesByYear() {
    const grouped = {};
    coffees.forEach(coffee => {
        const year = extractYearFromImage(coffee.image);
        if (year) {
            if (!grouped[year]) {
                grouped[year] = [];
            }
            grouped[year].push(coffee);
        }
    });
    return grouped;
}

// Generate a single coffee card
function generateCoffeeCard(coffee) {
    return `
        <div onclick="openCoffeeModal('${coffee.id}')" style="cursor: pointer; transition: transform 0.2s;">
            <img src="${coffee.image}"
                 alt="${coffee.fullName}"
                 style="width: 100%; height: auto; aspect-ratio: 3/4; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.12); transition: transform 0.2s;"
                 onmouseover="this.style.transform='scale(1.05)'"
                 onmouseout="this.style.transform='scale(1)'">
            <div style="margin-top: 12px; text-align: center;">
                <div style="font-weight: 600; color: #1a1a1a; margin-bottom: 4px;">${coffee.name}</div>
                <div style="font-size: 0.9em; color: #666;">${coffee.roaster}</div>
            </div>
        </div>
    `;
}

// Generate all coffee cards organized by year
function generateCoffeeGrid() {
    const groupedByYear = groupCoffeesByYear();
    let html = '';

    // Sort years in descending order (newest first)
    const years = Object.keys(groupedByYear).sort((a, b) => b - a);

    years.forEach((year, index) => {
        // Add spacing between year sections (except for the first one)
        const topMargin = index === 0 ? '0px' : '50px';

        html += `
            <div style="margin-top: ${topMargin};">
                <h3 style="margin-bottom: 25px; color: #1a1a1a; font-size: 1.8em; border-bottom: 2px solid #8B4513; padding-bottom: 8px; display: inline-block;">${year}</h3>
                <div class="coffee-year-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(125px, 1fr)); gap: 30px;">
                    ${groupedByYear[year].map(coffee => generateCoffeeCard(coffee)).join('')}
                </div>
            </div>
        `;
    });

    return html;
}

// Generate a single coffee modal
function generateCoffeeModal(coffee) {
    const detailsHTML = Object.entries(coffee.details).map(([key, value]) => {
        // Special handling for roaster to make it a link
        if (key === 'Roaster') {
            return '';  // Skip roaster in details since it's handled separately
        }
        return `
            <div style="margin-bottom: 12px;">
                <strong style="color: #1a1a1a;">${key}:</strong> ${value}
            </div>
        `;
    }).join('');

    return `
        <div id="${coffee.id}Modal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); overflow: auto;">
            <div style="position: relative; background-color: white; margin: 5% auto; padding: 0; width: 90%; max-width: 700px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                <span onclick="closeCoffeeModal('${coffee.id}')" style="position: absolute; right: 20px; top: 15px; color: #999; font-size: 28px; font-weight: bold; cursor: pointer; z-index: 1001;">&times;</span>

                <div style="padding: 40px;">
                    <h3 style="margin-top: 0; margin-bottom: 25px; color: #1a1a1a; font-size: 1.5em;">${coffee.fullName}</h3>

                    <div style="display: flex; gap: 30px; align-items: flex-start; flex-wrap: wrap;">
                        <div style="flex: 0 0 200px;">
                            <img src="${coffee.image}"
                                 alt="${coffee.fullName}"
                                 style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.12);">
                        </div>

                        <div style="flex: 1; min-width: 250px;">
                            ${detailsHTML}
                            <div style="margin-bottom: 12px;">
                                <strong style="color: #1a1a1a;">Roaster:</strong> <a href="${coffee.roasterUrl}" target="_blank" style="color: #2563eb; text-decoration: none;">${coffee.roaster}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate all coffee modals
function generateCoffeeModals() {
    return coffees.map(coffee => generateCoffeeModal(coffee)).join('\n');
}

// Wait for DOM to be ready, then load coffee content
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCoffeeContent);
} else {
    loadCoffeeContent();
}

function loadCoffeeContent() {
    // Insert coffee grid
    const coffeeGridContainer = document.querySelector('.coffee-grid-container');
    if (coffeeGridContainer) {
        coffeeGridContainer.innerHTML = generateCoffeeGrid();
    }

    // Insert coffee modals - find the misc content div
    const miscContent = document.querySelector('#misc .content');
    if (miscContent) {
        // Find the comment that marks where modals should go
        const modalsHTML = generateCoffeeModals();
        miscContent.insertAdjacentHTML('beforeend', modalsHTML);
    }
}
