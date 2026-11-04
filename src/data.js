// Source of truth: the Circle Heart menu Google Sheet
// https://docs.google.com/spreadsheets/d/1E7vGMg7-LUzinSM1uEDnPj4xWpFkz6p_juPkNpPtjZA
// Names, descriptions, ingredients, prices and photo folders below are transcribed from it.
export const WHATSAPP = '6282194895838';
export const INSTAGRAM = 'circle.heart.id';
export const SOCIAL = {
  instagram: 'https://www.instagram.com/circle.heart.id',
  tiktok: 'https://www.tiktok.com/@circle.heart.id',
};

export const LOCATIONS = [
  {
    name: 'Cendrawasih',
    address: 'Jl. Cendrawasih No. 276, Makassar',
    grab: 'https://app.grab.com/s/9u5XZyY3',
    gofood: 'https://gofood.co.id/makassar/restaurant/circle-heart-salad-cendrawasih-3b252d25-0705-4335-ad89-0d2914bf6807',
    maps: 'https://www.google.com/maps/search/?api=1&query=Circle+Heart+Salad+Jl+Cendrawasih+276+Makassar',
  },
  {
    name: 'Tamalanrea (BTP)',
    address: 'Jl. Tamalanrea Raya Blok M No. 1, Makassar',
    grab: 'https://app.grab.com/s/loa3uhwG',
    gofood: 'https://gofood.co.id/makassar/restaurant/circle-heart-salad-tamalanrea-btp-e340cb0b-53f6-492b-9fbb-9001a9c930dd',
    maps: 'https://www.google.com/maps/search/?api=1&query=Circle+Heart+Salad+Tamalanrea+Raya+Blok+M+Makassar',
  },
];

// Choice of meat for All In, Bibim-cha, Medium and the sandwiches (sheet: "Choice of Meat")
export const MEATS = [
  { id: 'chicken', name: 'Grilled Chicken', extra: 0, color: 0xd9a066 },
  { id: 'shilin', name: 'Shilin Chicken', extra: 0, color: 0xc98b45 },
  { id: 'beef', name: 'Smoked Beef', extra: 0, color: 0x9b4a3b },
  { id: 'patty', name: 'Beef Patty', extra: 0, color: 0x6b3a2a },
  { id: 'tuna', name: 'Grilled Tuna', extra: 0, color: 0x8c3b3b },
  { id: 'shrimp', name: 'Spicy Lime Shrimp', extra: 10000, color: 0xf08a4b },
  { id: 'salmon', name: 'Torched Baked Salmon', extra: 30000, color: 0xf2956a },
  { id: 'edamame', name: 'Edamame (Vegetarian)', extra: 0, color: 0x8dc63f },
];

// The 11 house dressings, in the sheet's order. `extra` is the All In surcharge for that dressing.
export const DRESSINGS = [
  { id: 'truffle', name: 'Cheesy Truffle Mayo', color: '#efd9a8', hex: 0xefd9a8, img: 'dressing-cheesy-truffle', extra: 10000, tag: 'New',
    note: 'Creamy and savoury from cheese mayo with aromatic truffle sauce. Such a healthy temptation!' },
  { id: 'caesar', name: 'Caesar King', color: '#8c2a2f', hex: 0x8c2a2f, img: 'dressing-caesar', extra: 0, tag: 'Favourite',
    note: 'Olive-oil based dressing with a sweet and tangy taste. Healthy and fresh with your favourite salad.' },
  { id: 'thousand', name: 'Thousand Island', color: '#e9834f', hex: 0xe9834f, img: 'dressing-thousand-island', extra: 0,
    note: 'Spicy homemade mayo-based dressing. Balanced taste for the spicy lover.' },
  { id: 'thai', name: 'Thai Dressing', color: '#9c2d3a', hex: 0x9c2d3a, img: 'dressing-thai', extra: 0,
    note: 'Sweet and spicy dressing with signature Thai flavour. One bite will never be enough. (Oil based)' },
  { id: 'sesame', name: 'Roasted Sesame', color: '#e6d3b3', hex: 0xe6d3b3, img: 'dressing-roasted-sesame', extra: 0,
    note: 'Japanese-style roasted sesame mayo. Savoury and tasty!' },
  { id: 'sweetmayo', name: 'Sweet Mayo', color: '#f0d24a', hex: 0xf0d24a, img: 'dressing-sweet-mayo', extra: 0,
    note: 'Sweet, salty and creamy mayo dressing. Kids to adults will love it from the first bite.' },
  { id: 'honey', name: 'Honey Mustard Mayo', color: '#f2c01e', hex: 0xf2c01e, img: 'dressing-honey-mustard', extra: 0,
    note: 'Creamy combination of Italian herbs, honey and mustard mayo. Perfect for your salad.' },
  { id: 'ranch', name: 'Ranch', color: '#f1ede4', hex: 0xf1ede4, img: 'dressing-ranch', extra: 0,
    note: 'The old-fashioned creamy and salty mayo dressing. The original Caesar mayo. Savoury!' },
  { id: 'balsamic', name: 'Balsamic Vinaigrette', color: '#2a1a16', hex: 0x2a1a16, img: 'dressing-balsamic', extra: 0, tag: 'Vegan',
    note: 'Vegan-friendly dressing with a delicate sweet, sour and slightly salty taste. (Oil based)' },
  { id: 'gochujang', name: 'Korean Gochujang', color: '#a3402c', hex: 0xa3402c, img: 'dressing-gochujang', extra: 0,
    note: 'Korean alert! Based on Korean spicy red pepper paste, the new K-star for your salad.' },
  { id: 'jungle', name: 'Jungle Berry', color: '#c0163f', hex: 0xc0163f, img: 'dressing-jungle-berry', extra: 0,
    note: 'Real berry purée and lime juice make this dressing rich in vitamin C. Eat this and cheer up your day.' },
];

const ALL_IN_CONTAIN = ['Mix Greens', 'Tomatoes', 'Cucumber', 'Corn', 'Onions', 'Eggs', 'Carrots', 'Red Cabbage', 'Smoked Beef', 'Almond', 'Sunflower Seeds', 'Choice of Meat', 'Choice of Dressing'];
const ALL_IN_BOWL = ['Macaroni', 'Edamame', 'Crabstick'];

// All In Salad, regular size. Rp 45.000 with any dressing; Cheesy Truffle Mayo Rp 55.000.
export const ALL_IN = {
  id: 'all-in', name: 'All In Salad', price: 45000, img: 'all-in', wrap: 'all-in-wrap', tag: 'Build your own', size: 'Regular',
  desc: 'Pick your meat and your dressing, and we pile on everything else. Eleven dressings to choose from.',
  contain: ALL_IN_CONTAIN, bowlOnly: ALL_IN_BOWL, choice: true,
};

// kcal: [wrap, bowl] from the sheet descriptions
export const SALADS = [
  ALL_IN,
  { id: 'supreme', name: 'Supreme', price: 50000, tag: 'Best seller', img: 'supreme', wrap: 'supreme-wrap', kcal: [450, 395],
    desc: 'Yow! Preferred salad for all ages. Your literally everyday favourite.',
    contain: ['Mixed Greens', 'Shilin Chicken', 'Smoked Beef', 'Grated Parmesan', 'Tomatoes', 'Onions', 'Eggs', 'White & Red Cabbage', 'Wonton Strips', 'Caesar Dressing'], bowlOnly: ['Macaroni', 'Corn', 'Cucumbers'] },
  { id: 'truffle-lovers', name: 'Truffle Lovers', price: 55000, tag: 'New menu', img: 'truffle-lovers', kcal: [473, 455],
    desc: 'High quality ingredients with magical Cheesy Truffle Mayo sauce. It’s a BOOM!',
    contain: ['Mixed Greens', 'Red Cabbage', 'Edamame', 'Cucumber', 'Sauteed Italian Mushroom', 'Pickles', 'Smoked Beef', 'Eggs', 'Croutons', 'Mozzarella', 'Cheesy Truffle Mayo'], bowlOnly: ['Macaroni'] },
  { id: 'oliphers', name: "Olipher’s Salad", price: 55000, tag: 'A little spicy', img: 'oliphers', wrap: 'oliphers-wrap', kcal: [490, 430],
    desc: 'Sssttt.. it’s always someone’s favourite! (A little spicy.)',
    contain: ['Mixed Greens', 'Red and White Cabbage', 'Shilin Chicken', 'Grilled Chicken', 'Sauteed Italian Mushroom', 'Parmesan Cheese', 'Eggs', 'Onions', 'Corns', 'Tomatoes', 'Wonton Strips', 'Thai Dressing'], bowlOnly: ['Macaroni'] },
  { id: 'waldorf', name: 'Waldorf Warrior', price: 55000, tag: 'Classic twist', img: 'waldorf', kcal: [415, 396],
    desc: 'Famous Waldorf salad with a new twist!',
    contain: ['Mixed Greens', 'Cucumber', 'Tomato', 'Onion', 'Grapes', 'Parmesan Cheese', 'Cashew Nut', 'Wonton Strips', 'Golden Raisins', 'Sauteed Italian Mushroom', 'Grilled Chicken', 'Potato', 'Balsamic Dressing'], bowlOnly: ['Macaroni'] },
  { id: 'crunchy', name: 'Crunchy Salad', price: 55000, tag: 'Extra crunch', img: 'crunchy', wrap: 'crunchy-wrap', kcal: [520, 450],
    desc: 'Crunch! Krezzz! Kriiukk! Crunchy sensation in every bite!',
    contain: ['Mixed Greens', 'Potato', 'Carrots', 'Cucumbers', 'Corns', 'Edamame', 'Grilled Chicken', 'Eggs', 'Croutons', 'Almonds', 'Garlic Chips', 'Roasted Sesame Dressing'] },
  { id: 'classic-caesar', name: 'Classic Caesar', price: 55000, tag: 'All time favourite', img: 'classic-caesar', kcal: [440, 405],
    desc: 'All time favourite salad! The classic Caesar salad.',
    contain: ['Mixed Greens', 'Red and White Cabbage', 'Smoked Beef', 'Grilled Chicken', 'Croutons', 'Cherry Tomatoes', 'Eggs', 'Parmesan Cheese', 'Cheddar Cheese', 'Salty and Savoury Ranch Dressing'], bowlOnly: ['Macaroni'] },
  { id: 'baby-o', name: 'Baby-O', price: 55000, tag: 'Comfort', img: 'baby-o', kcal: [520, 480],
    desc: 'It’s super yummy, baby!',
    contain: ['Mixed Greens', 'Cucumber', 'Corns', 'Onions', 'Cherry Tomato', 'Croutons', 'Cheddar Cheese', 'Sauteed Mushroom', 'Japanese Eggs', 'Grilled Chicken', 'Honey Mustard Mayo'], bowlOnly: ['Red & White Cabbage'] },
  { id: 'san-shine', name: 'Sanshine', price: 50000, tag: 'Contains tuna', img: 'san-shine', wrap: 'san-shine-wrap', kcal: [405, 390],
    desc: 'Ohayo from Salad-San! Contains tuna.',
    contain: ['Mixed Greens', 'Tuna', 'Crabstick', 'Edamame', 'Shirataki Noodle', 'Red Cabbage', 'Cucumber', 'Corns', 'Onion', 'Carrots', 'Eggs', 'Roasted Sesame and Sweet Mayo Dressing'] },
  { id: 'big-omega', name: 'Big Omega', price: 85000, tag: 'Premium', img: 'big-omega', wrap: 'big-omega-wrap', kcal: [520, 480],
    desc: 'The healthiest combo! Torched grilled salmon with avocado, grapes and whole almonds.',
    contain: ['Torched Grilled Salmon', 'Mixed Greens', 'Avocadoes', 'Cherry Tomatoes', 'Grapes', 'Corns', 'Red and White Cabbages', 'Cucumbers', 'Onions', 'Whole Almonds', 'Sesame Seeds', 'Balsamic Vinaigrette Dressing'] },
  { id: 'mamacita', name: 'Mamacita', price: 45000, tag: 'Mexican', img: 'mamacita', wrap: 'mamacita-wrap', kcal: [460, 450],
    desc: 'Mamamia! Mexican taste in your hand.',
    contain: ['Mixed Greens', 'Corns', 'Tortilla Chips', 'Beef Patty', 'Onions', 'Tomatoes', 'Red Bean', 'Eggs', 'Avocadoes', 'Thousand Island Dressing'], bowlOnly: ['Carrots', 'Macaroni'] },
  { id: 'bibim-cha', name: 'Bibim-cha Salad', price: 60000, tag: 'Korean', img: 'bibim-cha', wrap: 'bibim-cha-wrap',
    desc: 'Korean alert! A fusion of the most comforting food from Korea with our signature salad.',
    contain: ['Mixed Greens', 'Cucumber', 'Carrots', 'Corn', 'Red Cabbage', 'Shirataki', 'Edamame', 'Fish Cake', 'Danmuji', 'Egg', 'Organic Red Rice', 'Choice of Meat', 'Choice of Dressing'], choice: true },
  { id: 'green-fit', name: 'Green Fit', price: 62000, tag: 'Refuel', img: 'green-fit',
    desc: 'Healthy food that will refuel your energy and mood.',
    contain: ['Mixed Greens', 'Kale', 'Edamame', 'White Cabbage', 'Red Cabbage', 'Apple', 'Shilin Chicken', 'Pumpkin Seeds', 'Steamed Potato', 'Cucumber', 'Onions', 'Eggs', 'Caesar Dressing & Sweet Mayo'] },
  { id: 'sawadee', name: 'Sawadee', price: 45000, tag: 'Contains shrimp', img: 'sawadee', wrap: 'sawadee-wrap', kcal: [380, 400],
    desc: 'Thai’s special salad. Contains shrimp.',
    contain: ['Mixed Greens', 'Chili Lime Shrimp', 'Glass Noodle', 'Cucumber', 'Carrots', 'Cashew Nut', 'Crispy Garlic', 'Thai Spicy Dressing'], bowlOnly: ['Corn', 'Edamame', 'Egg'] },
  { id: 'red-asia', name: 'Red Asia', price: 62000, tag: 'Dragon fruit', img: 'red-asia',
    desc: 'A new experience of taste and tasty.',
    contain: ['Mixed Greens', 'Dragon Fruit', 'Edamame', 'Cucumber', 'Chia Seeds', 'Corn', 'Red Cabbage', 'Macaroni', 'Croutons', 'Smoked Beef', 'Cheddar Cheese', 'Roasted Sesame & Balsamic Dressing'] },
  { id: 'jungle-berry', name: 'Jungle Berry', price: 45000, tag: 'Vegan friendly', img: 'jungle-berry', kcal: [410, 400],
    desc: 'Rich in vitamin C! Vegan friendly.',
    contain: ['Mixed Greens', 'Carrots', 'Almonds', 'Golden Raisins', 'Cheese', 'Tomatoes', 'Cucumber', 'Chia Seeds', 'Oats', 'Jungle Berry Dressing'], bowlOnly: ['Macaroni', 'Eggs'] },
];

export const MEDIUM = [
  { id: 'medium-all-in', name: 'All In Salad', size: 'Medium', price: 35000, img: 'medium-all-in',
    desc: 'Medium size, a little bit less in size but the same great taste.',
    contain: ALL_IN_CONTAIN, bowlOnly: ALL_IN_BOWL, choice: true },
  { id: 'medium-supreme', name: 'Supreme Salad', size: 'Medium', price: 40000, img: 'medium-supreme', kcal: [310, 330],
    desc: 'Medium size, a little bit less in size but the same great taste.',
    contain: ['Mixed Greens', 'Shilin Chicken', 'Smoked Beef', 'Grated Parmesan', 'Tomatoes', 'Onions', 'Eggs', 'White & Red Cabbage', 'Wonton Strips', 'Caesar Dressing'], bowlOnly: ['Macaroni', 'Corn', 'Cucumbers'] },
];

// JUSS: freshly made, cold pressed. No sugar, no water added.
export const JUSS = [
  { id: 'a-plus', name: 'A+', price: 42000, img: 'juss-a-plus', tag: 'Beetroot',
    desc: 'Beetroot is rich in nitrates that help lower blood pressure and boost stamina.',
    contain: ['Beet', 'Apple', 'Orange', 'Carrots'] },
  { id: 'abc', name: 'ABC', price: 40000, img: 'juss-abc', tag: 'Vitamin A & C',
    desc: 'High in vitamin A and C. Simply delicious and nutritious.',
    contain: ['Apple', 'Orange', 'Carrots'] },
  { id: 'green-booster', name: 'Green Booster', price: 40000, img: 'juss-green-booster', tag: 'Detox',
    desc: 'Boosts your health, detoxes the digestive system and is rich in antioxidants.',
    contain: ['Pear', 'Pineapple', 'Kale', 'Lemon'] },
  { id: 'power-immune', name: 'Power Immune', price: 40000, img: 'juss-power-immune', tag: 'Immunity',
    desc: 'A bottle that covers your daily vitamin C and helps fight coughs and colds.',
    contain: ['Pineapple', 'Carrots', 'Orange'] },
  { id: 'red-delight', name: 'Red Delight', price: 40000, img: 'juss-red-delight', tag: 'Dragon fruit',
    desc: 'High in vitamin A and C, aids digestion and is rich in antioxidants.',
    contain: ['Dragon Fruit', 'Apple', 'Orange', 'Carrots'] },
  { id: 'bye-bye-flu', name: 'Bye Bye Flu', price: 40000, img: 'juss-bye-bye-flu', tag: 'Ginger',
    desc: 'Rich in vitamins, with ginger as an anti-inflammatory. The perfect drink to boost your immune system.',
    contain: ['Apple', 'Orange', 'Carrots', 'Ginger', 'Celery'] },
  { id: 'mama-juss', name: 'Mama Juss', price: 40000, img: 'juss-mama', tag: 'Kids love it',
    desc: 'Rich in vitamin C, good for the eyes and brightens the skin. A taste kids love, so moms make this combo often. Everybody loves it.',
    contain: ['Tomatoes', 'Apple', 'Orange', 'Carrots'] },
];

export const SNACKS = [
  { id: 'club-sandwich', name: 'Stuffed Club Sandwich', price: 45000, img: 'club-sandwich', tag: '2 pcs', kcal: [350, 400],
    desc: '2 pcs of healthy club sandwich stuffed with salad.',
    contain: ['Whole Wheat Toasted Bread', 'Green Lettuce', 'Red Cabbage', 'Tomatoes', 'Carrots', 'Cucumbers', 'Boiled Egg', 'Japanese Egg', 'Choice of Meat'], choice: true },
  { id: 'sandwich-box', name: 'Japanese Egg Sandwich', price: 55000, img: 'sandwich-box', tag: '4 pcs', kcal: [508],
    desc: '4 pcs of sandwich stuffed with Japanese egg filling.',
    contain: ['4 pcs Whole Wheat Toast Bread', 'Japanese Egg Filling', 'Choice of Meat'], choice: true },
  { id: 'egg-sandwich', name: 'Japanese Egg Sandwich with Side Salad', price: 45000, img: 'egg-sandwich', tag: 'Half & half', kcal: [400, 450],
    desc: 'Half sandwich and half salad.',
    contain: ['Sandwich stuffed with Japanese beaten soft egg salad', 'Mixed Greens', 'Red Cabbage', 'Corns', 'Edamame', 'Tomato', 'Your Favourite Dressing'] },
  { id: 'oatmeal', name: 'Overnight Oatmeal', price: 45000, img: 'oatmeal', tag: 'Chocolate / Vanilla',
    desc: 'Comfort food for your breakfast and a grab-to-go snack. Available in chocolate and vanilla.',
    contain: ['Silky Pudding', 'Chia Seeds Pudding', 'Almond', 'Golden Raisins', 'Overnight Oats', 'Homemade Granola'] },
  { id: 'granola', name: 'Granola', price: 30000, img: 'granola', tag: 'Chocolate / Vanilla',
    desc: 'High fibre snack. Healthy, no sugar added, made from 100% rolled oats. Contains nuts.',
    contain: ['Rolled Oats', 'Mixed Nuts (Almond, Pumpkin Seed, Sunflower Seed, Sesame Seed)', 'Honey'] },
];

// Hampers & Salad Cake: order by WhatsApp, price starts from
export const GIFTS = [
  { id: 'hampers', name: 'Hampers Salad', from: 185000, img: 'hampers', tag: 'Gift',
    desc: '3 portions of your preferred salad, all wrapped in special packaging for your special one.',
    contain: ['Choose from our salad menu'] },
  { id: 'salad-cake', name: 'Salad Cake', from: 295000, img: 'salad-cake', tag: 'Celebration',
    desc: '5 portions of your preferred salad (minimum, can be more), all wrapped in special packaging for your special one.',
    contain: ['Choose from our salad menu'] },
];

// Additional toppings for salad (sheet row "Addtional")
export const EXTRAS = {
  ingredients: [
    ['Eggs', 5000], ['Cheese', 5000], ['Crabstick', 5000], ['Corn', 5000], ['Red Bean', 5000], ['Edamame', 5000], ['Macaroni', 5000],
    ['Avocado', 7000], ['Sauteed Italian Mushroom', 7000], ['Parmesan Cheese', 7000], ['Cherry Tomato', 7000], ['Golden Raisins', 7000],
    ['Almond', 10000], ['Cashew Nut', 10000], ['Shirataki Noodle', 10000],
  ],
};

// Builder extras: a curated subset with photo representations
export const BUILDER_EXTRAS = [
  { id: 'egg', name: 'Extra Egg', price: 5000 },
  { id: 'cheese', name: 'Cheese', price: 5000 },
  { id: 'corn', name: 'Extra Corn', price: 5000 },
  { id: 'edamame', name: 'Edamame', price: 5000 },
  { id: 'avocado', name: 'Avocado', price: 7000 },
  { id: 'mushroom', name: 'Italian Mushroom', price: 7000 },
  { id: 'tomato', name: 'Cherry Tomato', price: 7000 },
  { id: 'almond', name: 'Almond', price: 10000 },
  { id: 'cashew', name: 'Cashew Nut', price: 10000 },
  { id: 'shirataki', name: 'Shirataki Noodle', price: 10000 },
];

// Catering. Each plan: [label, days, catering-only price, bundle options]
// Bundle options: { juss: number of Juss bottles, price: bundle total }
export const CATERING = {
  both: {
    title: 'Lunch & Dinner', sub: 'Both meals delivered',
    plans: [
      ['Daily', '1 hari', 130000, [{ juss: 1, price: 162000 }, { juss: 2, price: 194000 }]],
      ['Weekly', '5 hari', 600000, [{ juss: 5, price: 760000 }, { juss: 10, price: 900000 }]],
      ['2 Weeks', '10 hari', 1150000, [{ juss: 10, price: 1470000 }, { juss: 20, price: 1750000 }]],
      ['Monthly', '20 hari', 2250000, [{ juss: 20, price: 2850000 }, { juss: 40, price: 3450000 }]],
    ],
  },
  one: {
    title: 'Lunch or Dinner', sub: 'Pick one meal',
    plans: [
      ['Daily', '1 hari', 65000, [{ juss: 1, price: 100000 }]],
      ['Weekly', '5 hari', 320000, [{ juss: 5, price: 480000 }]],
      ['2 Weeks', '10 hari', 620000, [{ juss: 10, price: 920000 }]],
      ['Monthly', '20 hari', 1200000, [{ juss: 20, price: 1820000 }]],
    ],
  },
  notes: [
    'Different healthy menu every day, 400–500 kcal max',
    'No MSG, no trans fat, low salt, low sugar',
    'Monday to Friday, one delivery between 10:00–12:00',
    'Off on Saturday, Sunday and public holidays',
    'Pre-order minimum H-1 (one day before)',
    'Bundle it with Juss cold-pressed juice for a better price',
  ],
};

export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID');
export const short = (n) => (n / 1000) + 'k';
