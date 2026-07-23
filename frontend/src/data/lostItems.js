import backpackImg from "../assets/found-items/backpack.jpg";
import keysImg from "../assets/found-items/keys.jpg";
import laptopImg from "../assets/found-items/laptop.jpg";
import phoneImg from "../assets/found-items/phone.jpg";



const lostItems = [

    {

  id: 1,
  image: backpackImg,
  name: "Black Backpack",
  category: "Bag",
  location: "Central Library",
  date: "15 July 2026",
  status: "Searching",
  officeLocation: "-",
  description:
    "Black backpack containing notebooks and stationery. Last seen near the Central Library."

    },

    {
  id: 2,
  image: phoneImg,
  name: "Samsung Galaxy S23",
  category: "Electronics",
  location: "Block A",
  date: "17 July 2026",
  status: "Searching",
  officeLocation: "-",
  description:
    "Samsung Galaxy S23 with a black protective case. Last seen outside Block A."
 },

    {
      id: 3,
  image: keysImg,
  name: "Car Keys",
  category: "Keys",
  location: "Cafeteria",
  date: "19 July 2026",
  status: "Searching",
  officeLocation: "-",
  description:
    "Car keys with a red keychain. Last seen near the cafeteria seating area."
    },

    
      {
  id: 4,
  image: laptopImg,
  name: "Dell Laptop",
  category: "Electronics",
  location: "Computer Lab",
  date: "20 July 2026",
  status: "Searching",
  officeLocation: "-",
  description:
    "Grey Dell laptop left in the Computer Lab after a practical session."
},

    {
  id: 5,
  image: backpackImg,
  name: "Blue Backpack",
  category: "Bag",
  location: "Seminar Hall",
  date: "22 July 2026",
  status: "Searching",
  officeLocation: "-",
  description:
    "Blue backpack containing books and a lunch box. Last seen in the Seminar Hall."
},

    {
  id: 6,
  image: phoneImg,
  name: "iPhone 14",
  category: "Electronics",
  location: "Main Gate",
  date: "23 July 2026",
  status: "Searching",
  officeLocation: "-",
  description:
    "Apple iPhone 14 with a transparent case. Last seen near the Main Gate."
}

  ];

  export default lostItems;