import "dotenv/config.js";
import "../../config/database.js";
import Itinerary from "../Itinerary.js";

const itineraries = [
    {
        cityId: "672430ef4a985393f95ead84",
        userPhoto: "https://example.com/userphoto1.jpg",
        userName: "Alice Johnson",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["adventure", "nature"],
        comments: "Amazing experience!",
        title: "Adventure in Nature"
    },
    {
        cityId: "672430ef4a985393f95ead84",
        userPhoto: "https://example.com/userphoto2.jpg",
        userName: "Bob Smith",
        price: 4,
        duration: 4,
        likes: 0,
        hashtags: ["city", "culture"],
        comments: "Loved the museums!",
        title: "Cultural City Tour"
    },
    {
        cityId: "672430ef4a985393f95ead84",
        userPhoto: "https://example.com/userphoto3.jpg",
        userName: "Charlie Brown",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["food", "travel"],
        comments: "The food was fantastic!",
        title: "Culinary Journey"
    },
    {
        cityId: "672430ef4a985393f95ead85",
        userPhoto: "https://example.com/userphoto4.jpg",
        userName: "Diana Prince",
        price: 2,
        duration: 3,
        likes: 0,
        hashtags: ["relax", "beach"],
        comments: "Perfect for a getaway!",
        title: "Relaxing Beach Escape"
    },
    {
        cityId: "672430ef4a985393f95ead86",
        userPhoto: "https://example.com/userphoto6.jpg",
        userName: "Fiona Green",
        price: 4,
        duration: 2,
        likes: 0,
        hashtags: ["shopping", "fun"],
        comments: "Great places to shop!",
        title: "Shopping Spree"
    },
    {
        cityId: "672430ef4a985393f95ead86",
        userPhoto: "https://example.com/userphoto7.jpg",
        userName: "George Clark",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["art", "exhibition"],
        comments: "So much to see!",
        title: "Art Exhibition Experience"
    },
    {
        cityId: "672430ef4a985393f95ead86",
        userPhoto: "https://example.com/userphoto8.jpg",
        userName: "Hannah Adams",
        price: 2,
        duration: 4,
        likes: 0,
        hashtags: ["historic", "landmarks"],
        comments: "The history is rich here!",
        title: "Historic Landmarks Tour"
    },
    {
        cityId: "672430ef4a985393f95ead86",
        userPhoto: "https://example.com/userphoto9.jpg",
        userName: "Ian Bell",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["adventure", "outdoors"],
        comments: "A must-visit for thrill-seekers!",
        title: "Outdoor Adventure"
    },
    {
        cityId: "672430ef4a985393f95ead87",
        userPhoto: "https://example.com/userphoto10.jpg",
        userName: "Jane Doe",
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["family", "fun"],
        comments: "Perfect for a family trip!",
        title: "Family Fun Day"
    },
    {
        cityId: "672430ef4a985393f95ead88",
        userPhoto: "https://example.com/userphoto26.jpg",
        userName: "David Lee",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["nature", "explore"],
        comments: "A breathtaking journey through nature!",
        title: "Nature Exploration"
    },
    {
        cityId: "672430ef4a985393f95ead88",
        userPhoto: "https://example.com/userphoto27.jpg",
        userName: "Emily Davis",
        price: 4,
        duration: 4,
        likes: 0,
        hashtags: ["adventure", "outdoors"],
        comments: "Perfect for outdoor enthusiasts!",
        title: "Outdoor Enthusiast Adventure"
    },
    {
        cityId: "672430ef4a985393f95ead88",
        userPhoto: "https://example.com/userphoto28.jpg",
        userName: "Frank Wilson",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["art", "culture"],
        comments: "An artistic experience like no other.",
        title: "Artistic Experience"
    },
    {
        cityId: "672430ef4a985393f95ead88",
        userPhoto: "https://example.com/userphoto29.jpg",
        userName: "Grace Kim",
        price: 2,
        duration: 3,
        likes: 0,
        hashtags: ["family", "fun"],
        comments: "A great trip for the whole family!",
        title: "Family Day Out"
    },
    {
        cityId: "672430ef4a985393f95ead88",
        userPhoto: "https://example.com/userphoto30.jpg",
        userName: "Henry Zhang",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["food", "travel"],
        comments: "Delicious food and amazing sights!",
        title: "Food and Sights Tour"
    },
    {
        cityId: "672430ef4a985393f95ead8a",
        userPhoto: "https://example.com/userphoto41.jpg",
        userName: "Mia Smith",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["adventure", "exploration"],
        comments: "An unforgettable adventure!",
        title: "Exploration Adventure"
    },
    {
        cityId: "672430ef4a985393f95ead8a",
        userPhoto: "https://example.com/userphoto42.jpg",
        userName: "Noah Davis",
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["family", "fun"],
        comments: "Great for family trips!",
        title: "Family Getaway"
    },
    {
        cityId: "672430ef4a985393f95ead8a",
        userPhoto: "https://example.com/userphoto43.jpg",
        userName: "Olivia Taylor",
        price: 3,
        duration: 4,
        likes: 0,
        hashtags:["food", "local"],
        comments: "Delicious local cuisine!",
        title: "Local Cuisine Experience"
    },
    {
        cityId: "672430ef4a985393f95ead8a",
        userPhoto: "https://example.com/userphoto44.jpg",
        userName: "James Anderson",
        price: 2,
        duration: 6,
        likes: 0,
        hashtags: ["relaxation", "nature"],
        comments: "A serene escape into nature.",
        title: "Nature Relaxation Retreat"
    },
    {
        cityId: "672430ef4a985393f95ead8b",
        userPhoto: "https://example.com/userphoto45.jpg",
        userName: "Sophia Johnson",
        price: 5,
        duration: 5,
        likes: 0,
        hashtags: ["culture", "explore"],
        comments: "Amazing cultural experience!",
        title: "Cultural Exploration"
    },
    {
        cityId: "672430ef4a985393f95ead8b",
        userPhoto: "https://example.com/userphoto46.jpg",
        userName: "Liam Brown",
        price: 3,
        duration: 3,
        likes: 0,
        hashtags: ["sightseeing", "history"],
        comments: "So much history to see!",
        title: "Historical Sightseeing"
    },
    {
        cityId: "672430ef4a985393f95ead8c",
        userPhoto: "https://example.com/userphoto47.jpg",
        userName: "Olivia Smith",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["adventure", "nature"],
        comments: "A breathtaking adventure in nature!",
        title: "Nature Adventure"
    },
    {
        cityId: "672430ef4a985393f95ead8c",
        userPhoto: "https://example.com/userphoto48.jpg",
        userName: "James Williams",
        price: 2,
        duration: 2,
        likes: 0,
        hashtags: ["relaxation", "beach"],
        comments: "Perfect spot to unwind!",
        title: "Beach Relaxation"
    },
    {
        cityId: "672430ef4a985393f95ead8c",
        userPhoto: "https://example.com/userphoto49.jpg",
        userName: "Emma Davis",
        price: 5,
        duration: 8,
        likes: 0,
        hashtags: ["exploration", "foodie"],
        comments: "Amazing food and great sights!",
        title: "Foodie Exploration"
    },
    {
        cityId: "672430ef4a985393f95ead8d",
        userPhoto: "https://example.com/userphoto50.jpg",
        userName: "Liam Johnson",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags:["culture", "history"],
        comments: "A deep dive into the local culture!",
        title: "Cultural Dive"
    },
    {
        cityId: "672430ef4a985393f95ead8d",
        userPhoto: "https://example.com/userphoto51.jpg",
        userName: "Sophia Brown",
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["family", "fun"],
        comments: "Great for the whole family!",
        title: "Family Adventure"
    },
    {
        cityId: "672430ef4a985393f95ead8d",
        userPhoto: "https://example.com/userphoto52.jpg",
        userName: "Noah Jones",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["adventure", "hiking"],
        comments: "The hiking trails are spectacular!",
        title: "Spectacular Hiking Trails"
    },
    {
        cityId: "672430ef4a985393f95ead8d",
        userPhoto: "https://example.com/userphoto53.jpg",
        userName: "Mia Garcia",
        price: 2,
        duration: 4,
        likes: 0,
        hashtags: ["shopping", "local"],
        comments: "Perfect places to shop local crafts!",
        title: "Local Shopping Experience"
    },
    {
        cityId: "672430ef4a985393f95ead8e",
        userPhoto: "https://example.com/userphoto55.jpg",
        userName: "Ava Wilson",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["foodie", "culinary"],
        comments: "A delightful culinary journey!",
        title: "Culinary Journey"
    },
    {
        cityId: "672430ef4a985393f95ead8e",
        userPhoto: "https://example.com/userphoto56.jpg",
        userName: "James Lee",
        price: 5,
        duration: 3,
        likes: 0,
        hashtags:["art", "exploration"],
        comments: "Exploring the art scene was amazing!",
        title: "Art Scene Exploration"
    },
    {
        cityId: "672430ef4a985393f95ead8e",
        userPhoto: "https://example.com/userphoto57.jpg",
        userName: "Isabella Taylor",
        price: 2,
        duration: 4,
        likes: 0,
        hashtags:["nature", "relaxation"],
        comments: "A peaceful retreat in nature.",
        title: "Nature Retreat"
    },
    {
        cityId: "672430ef4a985393f95ead90",
        userPhoto: "https://example.com/userphoto62.jpg",
        userName: "Liam Smith",
        price: 3,
        duration: 6,
        likes: 0,
        hashtags:["adventure", "hiking"],
        comments: "Amazing trails and breathtaking views!",
        title: "Hiking Adventure"
    },
    {
        cityId: "672430ef4a985393f95ead91",
        userPhoto: "https://example.com/userphoto65.jpg",
        userName: "Sophia Johnson",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["beach", "relaxation"],
        comments: "The perfect getaway to unwind and relax!",
        title: "Beach Getaway"
    },
    {
        cityId: "672430ef4a985393f95ead91",
        userPhoto: "https://example.com/userphoto66.jpg",
        userName: "James Garcia",
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["history", "culture"],
        comments: "An enriching cultural experience.",
        title: "Cultural Enrichment"
    },
];


Itinerary.insertMany(itineraries);

