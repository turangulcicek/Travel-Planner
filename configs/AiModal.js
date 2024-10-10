const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, USA for 3 and 2 night for A couple with a Moderate budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo coordinates, ticket pricing, Time to travel each of the location for 3 days and 2 night with each day plan with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "flight": {\n    "details": "Round trip flight from [Your Departure City] to Las Vegas McCarran International Airport (LAS)",\n    "price": "$300 (Approximate)",\n    "booking_url": "https://www.google.com/flights" \n  },\n  "hotels": [\n    {\n      "name": "The D Las Vegas",\n      "address": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$80 - $120 per night",\n      "image_url": "https://www.thed.com/images/hero-images/hero-image-the-d.jpg",\n      "geo_coordinates": "36.1699, -115.1423",\n      "rating": "4.0",\n      "description": "Located in the heart of Fremont Street, The D Las Vegas offers affordable rooms, a casino, and live entertainment.  It\'s a great option for budget-conscious travelers who want to be close to the action."\n    },\n    {\n      "name": "Golden Nugget",\n      "address": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "$100 - $150 per night",\n      "image_url": "https://www.goldennugget.com/las-vegas/media/images/hero-images/hero-golden-nugget-las-vegas.jpg",\n      "geo_coordinates": "36.1693, -115.1413",\n      "rating": "4.5",\n      "description": "A classic Las Vegas hotel with a luxurious feel, the Golden Nugget features an impressive pool complex, a casino, and several dining options.  It\'s a great choice for couples who want a bit of glamour."\n    },\n    {\n      "name": "The Orleans Hotel & Casino",\n      "address": "4500 W Tropicana Ave, Las Vegas, NV 89103",\n      "price": "$70 - $100 per night",\n      "image_url": "https://www.orleanscasino.com/media/images/hero-images/hero-orleans-hotel-casino-las-vegas.jpg",\n      "geo_coordinates": "36.0936, -115.1982",\n      "rating": "4.0",\n      "description": "A great value option located on the Strip, the Orleans offers comfortable rooms, a casino, and several restaurants and bars.  It\'s a good choice for families or couples who want to be close to the action but don\'t want to pay exorbitant prices."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "location": "Fremont Street Experience",\n      "details": "Walk the Fremont Street Experience, a pedestrian mall with a giant video screen, live music, and street performers.  Enjoy the vibrant atmosphere and grab some lunch at one of the many restaurants in the area.",\n      "image_url": "https://www.visitlasvegas.com/media/images/experience-las-vegas/attractions-things-to-do/fremont-street-experience.jpg",\n      "geo_coordinates": "36.1698, -115.1420",\n      "ticket_pricing": "Free",\n      "time_to_travel": "1-2 hours"\n    },\n    "day1": {\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "location": "The Mob Museum",\n      "details": "Learn about the history of organized crime in Las Vegas and the United States at The Mob Museum.  This museum is a fascinating look into the world of gangsters, bootlegging, and law enforcement.",\n      "image_url": "https://www.themobmuseum.org/wp-content/uploads/2021/10/MobMuseum-Header-3.jpg",\n      "geo_coordinates": "36.1706, -115.1431",\n      "ticket_pricing": "$29.95",\n      "time_to_travel": "1-2 hours"\n    },\n    "day1": {\n      "time": "Evening (5:00 PM - 10:00 PM)",\n      "location": "Dinner at a Fremont Street Restaurant",\n      "details": "Enjoy dinner at one of the many restaurants on Fremont Street, such as the Heart Bar at The D, or the Golden Steer Steakhouse.",\n      "image_url": "https://www.theheartbarlv.com/wp-content/uploads/2018/09/IMG_6461-700x467.jpg",\n      "geo_coordinates": "36.1699, -115.1423",\n      "ticket_pricing": "Varies by restaurant",\n      "time_to_travel": "1-2 hours"\n    },\n    "day2": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "location": "The Strip",\n      "details": "Explore the Las Vegas Strip, home to some of the most iconic hotels and casinos in the world.  See the Bellagio Fountains, walk down the Las Vegas Boulevard, and visit the many shops and restaurants.",\n      "image_url": "https://www.visitlasvegas.com/media/images/experience-las-vegas/attractions-things-to-do/the-strip.jpg",\n      "geo_coordinates": "36.1085, -115.1738",\n      "ticket_pricing": "Free",\n      "time_to_travel": "3-4 hours"\n    },\n    "day2": {\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "location": "High Roller Observation Wheel",\n      "details": "Ride the High Roller, the world\'s largest observation wheel, for stunning views of the Las Vegas Strip.",\n      "image_url": "https://www.caesars.com/content/dam/caesars/las-vegas/attractions/high-roller/high-roller-observation-wheel-las-vegas.jpg",\n      "geo_coordinates": "36.1085, -115.1738",\n      "ticket_pricing": "$35",\n      "time_to_travel": "1-2 hours"\n    },\n    "day2": {\n      "time": "Evening (5:00 PM - 10:00 PM)",\n      "location": "Dinner at a Strip Restaurant",\n      "details": "Enjoy dinner at one of the many restaurants on the Strip, such as the Eiffel Tower Restaurant at Paris Las Vegas, or the Yard House.",\n      "image_url": "https://www.parislasvegas.com/content/dam/caesars/las-vegas/restaurants/eiffel-tower-restaurant/eiffel-tower-restaurant-dining-las-vegas.jpg",\n      "geo_coordinates": "36.1085, -115.1738",\n      "ticket_pricing": "Varies by restaurant",\n      "time_to_travel": "1-2 hours"\n    },\n    "day3": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "location": "Hoover Dam",\n      "details": "Take a day trip to Hoover Dam, an engineering marvel that is one of the most popular tourist destinations in Nevada.  Tour the dam and learn about its history and construction.",\n      "image_url": "https://www.nps.gov/hdam/learn/photosmultimedia/web-media-photo-gallery.htm?id=0",\n      "geo_coordinates": "36.0289, -114.9193",\n      "ticket_pricing": "Free (parking is $10)",\n      "time_to_travel": "3-4 hours (including travel time)"\n    },\n    "day3": {\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "location": "Red Rock Canyon National Conservation Area",\n      "details": "Explore the stunning beauty of Red Rock Canyon National Conservation Area, just a short drive from Las Vegas.  Go hiking, rock climbing, or simply enjoy the views.",\n      "image_url": "https://www.nps.gov/redr/planyourvisit/basicinfo.htm",\n      "geo_coordinates": "36.1334, -115.3187",\n      "ticket_pricing": "$15 per vehicle",\n      "time_to_travel": "2-3 hours"\n    },\n    "day3": {\n      "time": "Evening (5:00 PM - 10:00 PM)",\n      "location": "Dinner at a Downtown Restaurant",\n      "details": "Enjoy dinner at one of the many restaurants in Downtown Las Vegas, such as the Triple George Grill or the Peppermill Restaurant.",\n      "image_url": "https://www.triplegeorgegrill.com/",\n      "geo_coordinates": "36.1698, -115.1420",\n      "ticket_pricing": "Varies by restaurant",\n      "time_to_travel": "1-2 hours"\n    }\n  }\n}\n```\n\n**Notes:**\n\n* This is just a sample itinerary and can be customized to your specific interests and preferences.\n* Flight prices are approximate and may vary depending on the time of year and availability.\n* Hotel prices are also approximate and may vary depending on the time of year, room type, and availability.\n* Ticket prices for attractions and tours may also vary depending on the time of year and availability.\n* Be sure to book flights and hotels in advance, especially if you are traveling during peak season.\n\n**Have a great trip to Las Vegas!** \n',
        },
      ],
    },
  ],
});
