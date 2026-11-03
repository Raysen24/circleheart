// All menu content transcribed from MenuBook_CH_rev 4.pdf
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
    address: 'Jl. Tamalanrea Raya Blok M No. 1, MR Food Court, Makassar',
    grab: 'https://app.grab.com/s/loa3uhwG',
    gofood: 'https://gofood.co.id/makassar/restaurant/circle-heart-salad-tamalanrea-btp-e340cb0b-53f6-492b-9fbb-9001a9c930dd',
    maps: 'https://www.google.com/maps/search/?api=1&query=MR+Food+Court+Tamalanrea+Raya+Blok+M+Makassar',
  },
];

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

export const DRESSINGS = [
  { id: 'caesar', name: 'Caesar King', color: '#8c2a2f', hex: 0x8c2a2f, note: 'Rich, savoury, a little tangy', img: 'dressing-caesar' },
  { id: 'thousand', name: 'Thousand Island', color: '#e9834f', hex: 0xe9834f, note: 'Creamy, sweet and zesty', img: 'dressing-thousand-island' },
  { id: 'sesame', name: 'Roasted Sesame', color: '#e6d3b3', hex: 0xe6d3b3, note: 'Nutty, toasty, Japanese-style', img: 'dressing-roasted-sesame' },
  { id: 'sweetmayo', name: 'Sweet Mayo', color: '#f0d24a', hex: 0xf0d24a, note: 'Silky and mildly sweet', img: 'dressing-sweet-mayo' },
  { id: 'honey', name: 'Honey Mustard', color: '#f2c01e', hex: 0xf2c01e, note: 'Sweet heat with mustard seeds', img: 'dressing-honey-mustard' },
  { id: 'thai', name: 'Thai Dressing', color: '#9c2d3a', hex: 0x9c2d3a, note: 'Sweet, sour and spicy', img: 'dressing-thai' },
  { id: 'ranch', name: 'Ranch', color: '#f1ede4', hex: 0xf1ede4, note: 'Cool, herby and creamy', img: 'dressing-ranch' },
  { id: 'balsamic', name: 'Balsamic Vinaigrette', color: '#2a1a16', hex: 0x2a1a16, note: 'Deep, glossy and tangy', img: 'dressing-balsamic' },
  { id: 'gochujang', name: 'Gochujang Vinaigrette', color: '#a3402c', hex: 0xa3402c, note: 'Korean chilli kick', img: 'dressing-gochujang' },
  { id: 'jungle', name: 'Jungle Berry', color: '#c0163f', hex: 0xc0163f, note: 'Bright, fruity and fresh', img: 'dressing-jungle-berry' },
];

export const SALADS = [
  { id: 'all-in', name: 'All In Salad', price: 40000, tag: 'Build your own', img: 'all-in', wrap: 'all-in-wrap',
    desc: 'The classic. Pick your meat, pick your dressing, and we pile on everything else.',
    contain: ['Mix Greens', 'Crabstick', 'Edamame', 'Tomatoes', 'Cucumber', 'Macaroni', 'Corn', 'Onions', 'Eggs', 'Carrots', 'Red Cabbage', 'Smoked Beef', 'Almond', 'Sunflower Seeds'],
    choice: true },
  { id: 'supreme', name: 'Supreme Salad', price: 45000, tag: 'Best seller', img: 'supreme', wrap: 'supreme-wrap',
    desc: 'Crispy Shilin chicken, smoked beef and parmesan over greens with wonton crunch.',
    contain: ['Mix Greens', 'Red Cabbage', 'White Cabbage', 'Parmesan Cheese', 'Egg', 'Tomatoes', 'Onions', 'Smoked Beef', 'Wonton Strips', 'Corns', 'Macaroni', 'Shilin Chicken', 'Caesar King Dressing'] },
  { id: 'sawadee', name: 'Sawadee Salad', price: 45000, tag: 'Thai style', img: 'sawadee', wrap: 'sawadee-wrap',
    desc: 'Glass noodles, spicy lime shrimp and cashews tossed in our Thai dressing.',
    contain: ['Mix Greens', 'Cucumber', 'Glass Noodles', 'Garlic Chips', 'Coriander Leaves', 'Cashew Nuts', 'Corns', 'Edamame', 'Eggs', 'Thai Dressing', 'Spicy Lime Shrimp'] },
  { id: 'san-shine', name: 'San-Shine Salad', price: 45000, tag: 'Light & bright', img: 'san-shine', wrap: 'san-shine-wrap',
    desc: 'Tuna, crabstick and shirataki with a sweet mayo and roasted sesame finish.',
    contain: ['Mix Greens', 'Edamame', 'Shirataki Noodle', 'Cucumber', 'Corn', 'Onions', 'Eggs', 'Carrots', 'Red Cabbage', 'Tuna & Crabstick', 'Sweet Mayo & Roasted Sesame Dressing'] },
  { id: 'jungle-berry', name: 'Jungle Berry Salad', price: 45000, tag: 'Superfood', img: 'jungle-berry',
    desc: 'Avocado, almonds, golden raisins, oats and chia for a wholesome crunch.',
    contain: ['Mix Greens', 'Almonds', 'Golden Raisins', 'Cheese', 'Carrots', 'Avocado', 'Tomatoes', 'Cucumber', 'Macaroni', 'Eggs', 'Rolled Oats', 'Chia Seed'] },
  { id: 'mamacita', name: 'Mamacita Salad', price: 45000, tag: 'Mexican twist', img: 'mamacita', wrap: 'mamacita-wrap',
    desc: 'Beef patty, red beans, tortilla chips and avocado with Thousand Island.',
    contain: ['Mix Greens', 'Corns', 'Tortilla Chips', 'Onions', 'Tomatoes', 'Red Beans', 'Eggs', 'Avocadoes', 'Macaroni', 'Carrots', 'Beef Patty', 'Thousand Island Dressing'] },
  { id: 'baby-o', name: 'Baby-o Salad', price: 50000, tag: 'Comfort', img: 'baby-o',
    desc: 'Grilled chicken, sautéed mushroom, cheddar and croutons with honey mustard.',
    contain: ['Mix Greens', 'Red Cabbages', 'Corns', 'Cheddar Cheese', 'Cherry Tomatoes', 'Cucumber', 'Croutons', 'Japanese Eggs', 'Sauteed Mushroom', 'Grilled Chicken', 'Honey Mustard Dressing'] },
  { id: 'crunchy', name: 'Crunchy Salad', price: 50000, tag: 'Extra crunch', img: 'crunchy', wrap: 'crunchy-wrap',
    desc: 'Potato, croutons, almonds and garlic chips. Every bite crunches.',
    contain: ['Mix Greens', 'Potato', 'Carrots', 'Cucumbers', 'Corns', 'Edamame', 'Eggs', 'Croutons', 'Almonds', 'Garlic Chips', 'Grilled Chicken', 'Roasted Sesame Dressing'] },
  { id: 'oliphers', name: "Olipher's Salad", price: 50000, tag: 'Double chicken', img: 'oliphers', wrap: 'oliphers-wrap',
    desc: 'Shilin and grilled chicken with Italian mushroom, parmesan and Thai dressing.',
    contain: ['Mix Greens', 'Red and White Cabbage', 'Sauteed Italian Mushroom', 'Parmesan Cheese', 'Eggs', 'Onions', 'Corns', 'Tomatoes', 'Wonton Strips', 'Shilin Chicken & Grilled Chicken', 'Thai Dressing'] },
  { id: 'classic-caesar', name: 'Classic Caesar Salad', price: 55000, tag: 'Classic', img: 'classic-caesar',
    desc: 'Grilled chicken and smoked beef, croutons and double cheese with ranch.',
    contain: ['Mix Greens', 'Red Cabbage', 'Croutons', 'Cherry Tomatoes', 'Eggs', 'Parmesan Cheese', 'Keju Parut', 'Macaroni', 'Grilled Chicken', 'Smoked Beef', 'Ranch Dressing'] },
  { id: 'bibim-cha', name: 'Bibim-Cha Salad', price: 60000, tag: 'Korean', img: 'bibim-cha', wrap: 'bibim-cha-wrap',
    desc: 'Brown rice, danmuji, shirataki and crabstick with gochujang. Add your meat.',
    contain: ['Mix Greens', 'Red Cabbage', 'Cucumber', 'Carrots', 'Corn', 'Shirataki', 'Edamame', 'Crabstick', 'Danmuji', 'Egg', 'Brown Rice', 'Gochujang', 'Preferable Meat'] },
  { id: 'big-omega', name: 'Big Omega Salad', price: 85000, tag: 'Premium', img: 'big-omega', wrap: 'big-omega-wrap',
    desc: 'Torched baked salmon, avocado, grapes and whole almonds with balsamic.',
    contain: ['Mix Greens', 'Avocadoes', 'Cherry Tomatoes', 'Grapes', 'Corns', 'Red and White Cabbages', 'Cucumber', 'Onions', 'Whole Almonds', 'Sesame Seeds', 'Torched Baked Salmon', 'Balsamic Vinaigrette Dressing'] },
  { id: 'waldorf', name: 'Waldorf Warrior Salad', price: 85000, tag: 'Premium', img: 'waldorf', wrap: 'waldorf-wrap',
    desc: 'Grapes, cashews, raisins, mushroom and potato with grilled chicken and balsamic.',
    contain: ['Mix Greens', 'Cucumber', 'Tomato', 'Onion', 'Grapes', 'Parmesan Cheese', 'Cashew Nuts', 'Wonton Strips', 'Golden Raisins', 'Mushroom', 'Potato', 'Macaroni', 'Grilled Chicken', 'Balsamic Vinaigrette'] },
];

export const MEDIUM = [
  { id: 'medium-all-in', name: 'All In Salad', size: 'Medium', price: 40000, img: 'medium-all-in',
    desc: 'Medium size, wrap or bowl.',
    contain: ['Mix Greens', 'Tomatoes', 'Cucumber', 'Corn', 'Onions', 'Eggs', 'Carrots', 'Red Cabbage', 'Smoked Beef', 'Almond', 'Sunflower Seeds'],
    bowlOnly: ['Macaroni', 'Edamame', 'Crabstick'] },
  { id: 'medium-supreme', name: 'Supreme Salad', size: 'Medium', price: 45000, img: 'medium-supreme',
    desc: 'Medium size, wrap or bowl.',
    contain: ['Mix Greens', 'Red Cabbage', 'White Cabbage', 'Parmesan Cheese', 'Tomatoes', 'Onions', 'Wonton Strips', 'Shilin Chicken', 'Smoked Beef', 'Caesar King Dressing'],
    bowlOnly: ['Macaroni', 'Cucumber', 'Corn'] },
];

export const SNACKS = [
  { id: 'sandwich-box', name: 'Japanese Egg Sandwich Box', price: 55000, img: 'sandwich-box', tag: '4 pcs',
    desc: '4 pcs of sandwich, stuffed with Japanese egg filling.', contain: ['4 pcs Sandwich', 'Japanese Egg Filling'] },
  { id: 'egg-sandwich', name: 'Japanese Egg Sandwich', price: 45000, img: 'egg-sandwich',
    desc: 'Stuffed with traditional Japanese beaten soft egg salad.',
    contain: ['Soft Japanese Egg Salad', 'Mixed Greens', 'Red Cabbage', 'Corns', 'Edamame', 'Tomato'] },
  { id: 'club-sandwich', name: 'Stuffed Club Sandwich', price: 45000, img: 'club-sandwich', tag: 'Choice of meat',
    desc: 'Whole wheat toasted bread packed with greens, eggs and your choice of meat.',
    contain: ['Whole Wheat Toasted Bread', 'Green Lettuce', 'Red Cabbage', 'Tomatoes', 'Carrots', 'Cucumbers', 'Boiled Egg', 'Japanese Egg', 'Choice of Meat'] },
  { id: 'oatmeal', name: 'Overnight Oatmeal', price: 40000, img: 'oatmeal',
    desc: 'Silky pudding, chia seed pudding and homemade granola.',
    contain: ['Silky Pudding', 'Chia Seeds Pudding', 'Almond', 'Golden Raisins', 'Overnight Oats', 'Homemade Granola'] },
  { id: 'granola', name: 'Granola Homemade', price: 25000, img: 'granola', tag: '100 gr',
    desc: 'Vanilla or Chocolate, 100 gr.', contain: ['Vanilla', 'Chocolate'] },
];

export const EXTRAS = {
  ingredients: [
    ['Eggs', 5000], ['Cheese', 5000], ['Crabstick', 5000], ['Corn', 5000], ['Red Bean', 5000], ['Edamame', 5000], ['Macaroni', 5000],
    ['Avocado', 7000], ['Sauteed Italian Mushroom', 7000], ['Parmesan Cheese', 7000], ['Cherry Tomato', 7000], ['Golden Raisins', 7000],
    ['Almond', 10000], ['Cashew Nut', 10000], ['Shirataki Noodle', 10000],
  ],
  meat: [
    ['Grilled Chicken', 8000], ['Shilin Chicken', 8000], ['Smoked Beef', 8000], ['Beef Patty', 8000], ['Grilled Tuna', 8000],
    ['Spicy Lime Shrimp', 10000], ['Torched Baked Salmon', 30000],
  ],
  dressing: [
    ['Thousand Island', 8000], ['Caesar King', 8000], ['Sweet Mayo', 8000], ['Honey Mustard Mayo', 8000], ['Roasted Sesame', 8000],
    ['Thai Dressing', 8000], ['Balsamic Vinaigrette', 8000], ['Jungle Berry', 8000], ['Ranch', 8000],
  ],
};

// Builder extras: a curated subset with 3D representations
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

export const CATERING = {
  healthy: {
    both: { title: 'Lunch & Dinner', sub: 'Both meals delivered', plans: [['Daily', '1 hari', 130000], ['Weekly', '5 hari', 600000], ['2 Weeks', '10 hari', 1150000], ['Monthly', '20 hari', 2250000]] },
    one: { title: 'Lunch or Dinner', sub: 'Pick one meal', plans: [['Daily', '1 hari', 65000], ['Weekly', '5 hari', 320000], ['2 Weeks', '10 hari', 620000], ['Monthly', '20 hari', 1200000]] },
  },
  family: { title: 'Family Catering', sub: '3 menu per day, for 2–3 persons', plans: [['1 Day', '', 125000], ['1 Week', '5 hari', 600000], ['1 Month', '20 hari', 2350000]] },
  notes: [
    'Different healthy menu every day, 400–500 kcal max',
    'No MSG, no trans fat, low salt, low sugar',
    'Monday to Friday, one delivery between 10:00–12:00',
    'Off on Saturday, Sunday and public holidays',
    'Pre-order minimum H-1 (one day before)',
    'Price includes delivery within Makassar city (selected areas)',
  ],
};

export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID');
export const short = (n) => (n / 1000) + 'k';
