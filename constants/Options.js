export const SelectTravelerList = [
  {
    id: 1,
    title: "Only Me",
    desc: "A solo traveler in exploration",
    icon: require("../assets/images/single-person.png"),
    people: "1 person",
  },
  {
    id: 2,
    title: "A couple",
    desc: "Two travelers in love",
    icon: require("../assets/images/couple.png"),
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "A family loving trip",
    icon: require("../assets/images/family.png"),
    people: "3 to 6 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A group of friends",
    icon: require("../assets/images/friends.png"),
    people: "4 to 10 people",
  },
];
export const selectBudgetOptions = [
  {
    id: 1,
    title: "Cheap ",
    desc: "A budget-friendly trip",
    icon: require("../assets/images/dollar-bill.png"),
  },
  {
    id: 2,
    title: "Moderate",
    desc: "A moderate budget trip",
    icon: require("../assets/images/dollar.png"),
  },
  {
    id: 3,
    title: "Expensive",
    desc: "An expensive trip",
    icon: require("../assets/images/cash.png"),
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location} for {totalDays} and {totalNight} night for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo coordinates, ticket pricing, Time to travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format ";
