/*
import { api } from "./Api";
*/
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  chefs_choice: boolean;
  image_url: string;
}
/*
export const MenuService = {
  createMenuItem: async (
    newMenuItem: Omit<MenuItem, "id">
  ): Promise<MenuItem> => {
    const data = await api.post(`/menu`, newMenuItem);
    return data.data;
  },

  getMenu: async (): Promise<MenuItem[]> => {
    const data = await api.get("/menu");
    return data.data;
  },

  getMenuItem: async (id: number): Promise<MenuItem> => {
    const data = await api.get(`/menu/${id}`);
    return data.data;
  },

  getCategories: async () => {
    const res = await api.get("/categories");
    return res.data;
  },

  updateMenuItem: async (
    id: number,
    updatedData: Partial<MenuItem>
  ): Promise<MenuItem> => {
    const data = await api.put(`/menu/${id}`, updatedData);
    return data.data;
  },

  deleteMenuItem: async (id: number): Promise<{ message: string } | void> => {
    const data = await api.delete(`/menu/${id}`);
    return data.data;
  },
}; 
*/

//-------  Fake MenuService  -------|

let mockMenuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Satay Gai',
    description: 'Gegrillte Hähnchenspieße mit Erdnusssauce',
    price: 8.50,
    category: 'Vorspeise',
    chefs_choice: false,
    image_url: 'https://www.thai-food-online.co.uk/cdn/shop/files/satay-chicken-recipe.png?v=1615891902'
  },
  {
    id: 2,
    name: 'Poh Pia Tod',
    description: 'Knusprige Frühlingsrollen mit Gemüse oder Fleisch',
    price: 7.50,
    category: 'Vorspeise',
    chefs_choice: false,
    image_url: 'https://www.thefoodieluv.com/wp-content/uploads/2019/05/poh-pia-tod-on-lettuce-2.jpg'
  },
  {
    id: 3,
    name: 'Tod Mun Pla',
    description: 'Fischkuchen mit rotem Curry und Kaffirlimette',
    price: 8.00,
    category: 'Vorspeise',
    chefs_choice: false,
    image_url: 'https://www.lionbrand.com.au/wp-content/uploads/2022/07/feature-Image-Thai-Fish-Cake-Recipe.jpg'
  },
  {
    id: 4,
    name: 'Som Tam',
    description: 'Scharfer grüner Papayasalat mit Erdnüssen, Chili und Limette',
    price: 7.50,
    category: 'Vorspeise',
    chefs_choice: true,
    image_url: 'https://www.entdecke-thailand.net/wp-content/uploads/2022/08/som-tam-thai.jpg'
  },
  {
    id: 5,
    name: 'Miang Kham',
    description: 'Kräuter-Snacks in Betelblättern mit Kokosraspeln, Limette, Ingwer',
    price: 8.50,
    category: 'Vorspeise',
    chefs_choice: true,
    image_url: 'https://asianinspirations.com.au/wp-content/uploads/2022/12/The-Goodness-of-Miang-Kham_01-Eating.jpg'
  },
  {
    id: 6,
    name: 'Tom Yum Goong',
    description: 'Scharfe Garnelensuppe mit Zitronengras, Galgant und Limette',
    price: 9.00,
    category: 'Suppe',
    chefs_choice: true,
    image_url: 'https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg'
  },
  {
    id: 7,
    name: 'Tom Kha Gai',
    description: 'Kokosmilch-Hühnchensuppe mit Galgant',
    price: 8.50,
    category: 'Suppe',
    chefs_choice: false,
    image_url: 'https://images.squarespace-cdn.com/content/v1/5d40bab35dafc600012f85c2/1570452491970-Q4NX89VP13TH5QPCHCOI/Chicken-coconut-noodle-soup.jpg'
  },
  {
    id: 8,
    name: 'Gaeng Jued',
    description: 'Milde klare Suppe mit Gemüse, Glasnudeln und Hackfleischbällchen',
    price: 7.50,
    category: 'Suppe',
    chefs_choice: false,
    image_url: 'https://fearlesseating.net/wp-content/uploads/2023/07/Gaeng-Jued-1024x683.jpg'
  },
  {
    id: 9,
    name: 'Gaeng Daeng',
    description: 'Rotes Curry mit Huhn, Rind oder Tofu',
    price: 17.50,
    category: 'Curry',
    chefs_choice: true,
    image_url: 'https://delishglobe.com/wp-content/uploads/2024/10/Gaeng-Daeng-Thai-Red-Curry.png'
  },
  {
    id: 10,
    name: 'Gaeng Keow Wan',
    description: 'Grünes Curry mit Kokosmilch, Aubergine und Thai-Basilikum',
    price: 17.50,
    category: 'Curry',
    chefs_choice: true,
    image_url: 'https://rachelcooksthai.com/wp-content/uploads/2011/05/Green-Curry-Eggplant-04.jpg'
  },
  {
    id: 11,
    name: 'Massaman Curry',
    description: 'Milder Curry mit Kartoffeln, Erdnüssen und Rind oder Huhn',
    price: 18.00,
    category: 'Curry',
    chefs_choice: false,
    image_url: 'https://www.thai-food-online.co.uk/cdn/shop/files/masaman-curry-recipe.jpg?v=1614285805'
  },
  {
    id: 12,
    name: 'Panang Curry',
    description: 'Dickes, cremiges Curry mit Erdnussnote',
    price: 17.50,
    category: 'Curry',
    chefs_choice: false,
    image_url: 'https://rachelcooksthai.com/wp-content/uploads/2011/09/panang-curry-beef-03.jpg'
  },
  {
    id: 13,
    name: 'Pad Thai',
    description: 'Gebratene Reisnudeln mit Tofu, Ei, Erdnüssen und Garnelen',
    price: 16.50,
    category: 'Hauptgericht',
    chefs_choice: true,
    image_url: 'https://www.seriouseats.com/thmb/gLZ3ZlKXVTGpgspZvvS8Afnw2TA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20250214-SEA-PadThai-AmandaSuarez-hero-4251c730d61a40ba935f2d43153d6862.jpg'
  },
  {
    id: 14,
    name: 'Pad See Ew',
    description: 'Breite Reisnudeln mit Sojasauce, Brokkoli und Fleisch',
    price: 15.50,
    category: 'Hauptgericht',
    chefs_choice: false,
    image_url: 'https://www.aromaandessence.com/wp-content/uploads/2023/04/Pad-See-Ew-2-1024x768.webp'
  },
  {
    id: 15,
    name: 'Pad Krapao',
    description: 'Gebratenes Hackfleisch mit Thai-Basilikum, Knoblauch und Chili',
    price: 16.00,
    category: 'Hauptgericht',
    chefs_choice: false,
    image_url: 'https://www.malteskitchen.de/wp-content/uploads/2025/01/pad-kra-pao-6.webp'
  },
  {
    id: 16,
    name: 'Gai Pad Med Mamuang',
    description: 'Gebratenes Hähnchen mit Cashewnüssen',
    price: 16.50,
    category: 'Hauptgericht',
    chefs_choice: false,
    image_url: 'https://www.travel-minds.com/wp-content/uploads/2022/03/Haehnchen-mit-Cashew-TITELBILD-1.png'
  },
  {
    id: 17,
    name: 'Pla Tod',
    description: 'Knusprig gebratener Fisch mit scharfer Chili-Knoblauchsauce',
    price: 17.00,
    category: 'Hauptgericht',
    chefs_choice: false,
    image_url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1W9c0vj9Lun0YHAQDsgf7T5Qa72u-1kD5G4xtmvAEzeNRKAYRo1kGeua3RYD8qZ9XSRpmlm8bqFJ2M8vIIMCn13VzOzIXAHJFZ3dn90_HoRkAn9gcVzldOs9DgPOenviKRYri2IKmzdJS/s1600/IMG_1827.JPG'
  },
  {
    id: 18,
    name: 'Khao Suay',
    description: 'Gedämpfter Jasminreis',
    price: 2.50,
    category: 'Beilage',
    chefs_choice: true,
    image_url: 'https://www.ndtv.com/cooks/images/Khao.suey.jpg'
  },
  {
    id: 19,
    name: 'Khao Niew',
    description: 'Klebreis',
    price: 2.50,
    category: 'Beilage',
    chefs_choice: true,
    image_url: 'https://cookingwithlane.com/wp-content/uploads/2019/08/sticky-rice-basket-bamboo.png'
  },
  {
    id: 20,
    name: 'Khao Pad',
    description: 'Gebratener Reis mit Gemüse, Ei und Fleisch',
    price: 6.50,
    category: 'Beilage',
    chefs_choice: false,
    image_url: 'https://www.andy-cooks.com/cdn/shop/articles/20240903051733-andy-20cooks-20-20thai-20prawn-20fried-20rice.jpg?v=1725927874'
  },
  {
    id: 21,
    name: 'Nam Prik',
    description: 'Verschiedene Chili-Pasten mit rohem oder gekochtem Gemüse',
    price: 5.50,
    category: 'Beilage',
    chefs_choice: true,
    image_url: 'https://images.squarespace-cdn.com/content/v1/60152ef33c15960033d3b095/1618149301940-OX2SJULKO271QJ6K46VC/prik-nam-pla-web2.jpg'
  },
  {
    id: 22,
    name: 'Mango Sticky Rice',
    description: 'Klebreis mit Kokosmilch und frischer Mango',
    price: 7.50,
    category: 'Dessert',
    chefs_choice: true,
    image_url: 'https://www.allrecipes.com/thmb/dDEZtABzmstRfYwbs4DfMREcRhg=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-150313-thai-sweet-sticky-rice-with-mango-khao-neeo-mamuang-ddmfs-4x3-hero-0da7a9b26cce4d07aea44f2f2b6abd95.jpg'
  },
  {
    id: 23,
    name: 'Khanom Buang',
    description: 'Thai-Crêpes mit süßer oder salziger Füllung',
    price: 6.50,
    category: 'Dessert',
    chefs_choice: false,
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oKS17hQ__qv_kHtlXLyuOIfQog-4hc-xVQ&s'
  },
  {
    id: 24,
    name: 'Tub Tim Grob',
    description: 'Wasserkastanien in Kokosmilch mit Crushed Ice',
    price: 6.50,
    category: 'Dessert',
    chefs_choice: true,
    image_url: 'https://www.thai-thaifood.de/wp-content/uploads/rubine-in-kokosmilch-tub-tim-678x381.jpg'
  },
  {
    id: 25,
    name: 'Bua Loy',
    description: 'Reisbällchen in süßer Kokosmilch',
    price: 6.00,
    category: 'Dessert',
    chefs_choice: false,
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1H7yD1cH9Jg9zsPbBqtRDDHt6ABUI_GRwew&s'
  },
  {
    id: 26,
    name: 'Sangkhaya',
    description: 'Thailändischer Kokos-Pudding mit Kürbis',
    price: 6.50,
    category: 'Dessert',
    chefs_choice: false,
    image_url: 'https://us.123rf.com/450wm/changephoto/changephoto1904/changephoto190400105/121071471-sticky-rice-with-steamed-custard-in-banana-leave.jpg?ver=6'
  }
];

const fakeApiDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const MenuService = {
  createMenuItem: async (newMenuItem: Omit<MenuItem, "id">): Promise<MenuItem> => {
    await fakeApiDelay(500);
    const newId = mockMenuItems.length ? Math.max(...mockMenuItems.map(i => i.id)) + 1 : 1;
    const item = { id: newId, ...newMenuItem };
    mockMenuItems.push(item);
    return item;
  },

  getMenu: async (): Promise<MenuItem[]> => {
    await fakeApiDelay(500);
    return [...mockMenuItems];
  },

  getMenuItem: async (id: number): Promise<MenuItem> => {
    await fakeApiDelay(300);
    const item = mockMenuItems.find(item => item.id === id);
    if (!item) throw new Error("Item not found");
    return item;
  },

  updateMenuItem: async (id: number, updatedData: Partial<MenuItem>): Promise<MenuItem> => {
    await fakeApiDelay(500);
    const index = mockMenuItems.findIndex(item => item.id === id);
    if (index === -1) throw new Error("Item not found");
    mockMenuItems[index] = { ...mockMenuItems[index], ...updatedData };
    return mockMenuItems[index];
  },

  deleteMenuItem: async (id: number): Promise<{ message: string }> => {
    await fakeApiDelay(500);
    mockMenuItems = mockMenuItems.filter(item => item.id !== id);
    return { message: "Deleted" };
  },

  getCategories: async (): Promise<string[]> => {
    await fakeApiDelay(300);
    return [...new Set(mockMenuItems.map(item => item.category))];
  }
};
