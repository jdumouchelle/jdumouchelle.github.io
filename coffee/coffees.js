// Coffee data array - ADD NEW COFFEES HERE
const coffees = [
    {
        id: 'coffee5',
        name: 'Peru David Flores',
        fullName: 'Peru David Flores, Washed Sidra',
        roaster: 'Subtext Coffee',
        roasterUrl: 'https://www.subtext.coffee/',
        image: 'coffee/26_01_peru_david_flores.png',
        details: {
            'Tasting Notes': 'David Flores',
            'Producer': 'David Flores',
            'Origin' : 'Peru',
            'Region': 'Cajamarca',
            'Varietal': 'Sidra',
            'Process': 'Washed',
            'Altitude': '1,850-1,900 masl'
        }
    },
    {
        id: 'coffee4',
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
        id: 'coffee3',
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
    {
        id: 'coffee2',
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
        id: 'coffee1',
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
                <div class="coffee-year-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 30px;">
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
