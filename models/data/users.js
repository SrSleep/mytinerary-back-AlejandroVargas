import "dotenv/config.js";
import "../../config/database.js";
import User from "../Users.js";
import bcrypt from "bcryptjs";

const users = [
    {
        name: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        password: "Alice@123!",
        photo: "https://example.com/userphoto1.jpg",
        cityId: "672430ef4a985393f95ead88",
        online: false,
        role: "admin"
    },
    {
        name: "Bob",
        lastName: "Smith",
        email: "bob.smith@example.com",
        password: "B0b$mith!23",
        photo: "https://example.com/userphoto2.jpg",
        cityId: "672430ef4a985393f95ead87",
        online: false,
        role: "user"
    },
    {
        name: "Charlie",
        lastName: "Brown",
        email: "charlie.brown@example.com",
        password: "Ch@rlie#Br0wn",
        photo: "https://example.com/userphoto3.jpg",
        cityId: "672430ef4a985393f95ead86",
        online: false,
        role: "user"
    },
    {
        name: "Diana",
        lastName: "Prince",
        email: "diana.prince@example.com",
        password: "D!@na*2023",
        photo: "https://example.com/userphoto4.jpg",
        cityId: "672430ef4a985393f95ead92",
        online: false,
        role: "admin"
    },
    {
        name: "Fiona",
        lastName: "Green",
        email: "fiona.green@example.com",
        password: "F!0na_Gre#n_2023",
        photo: "https://example.com/userphoto6.jpg",
        cityId: "672430ef4a985393f95ead8e",
        online: false,
        role: "user"
    },
    {
        name: "George",
        lastName: "Clark",
        email: "george.clark@example.com",
        password: "G3orgE@Cl@rk!",
        photo: "https://example.com/userphoto7.jpg",
        cityId: "672430ef4a985393f95ead91",
        online: false,
        role: "user"
    },
    {
        name: "Hannah",
        lastName: "Adams",
        email: "hannah.adams@example.com",
        password: "H@nn@h_@dm$2023",
        photo: "https://example.com/userphoto8.jpg",
        cityId: "672430ef4a985393f95ead84",
        online: false,
        role: "admin"
    },
    {
        name: "Ian",
        lastName: "Bell",
        email: "ian.bell@example.com",
        password: "I@an_Bell!2023",
        photo: "https://example.com/userphoto9.jpg",
        cityId: "672430ef4a985393f95ead8d",
        online: false,
        role: "user"
    },
    {
        name: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        password: "J@neD0e#2023",
        photo: "https://example.com/userphoto10.jpg",
        cityId: "672430ef4a985393f95ead89",
        online: false,
        role: "user"
    },
    {
        name: "David",
        lastName: "Lee",
        email: "david.lee@example.com",
        password: "D@v!d_L33@2023",
        photo: "https://example.com/userphoto26.jpg",
        cityId: "672430ef4a985393f95ead88",
        online: false,
        role: "admin"
    }
];

const userWithHashed = users.map((user) => {
    user.password = bcrypt.hashSync(user.password, 10);
    return user;
});

const userWithHash = await User.insertMany(userWithHashed);
console.log(userWithHash);
