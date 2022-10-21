import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "John",
    email: "john@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Jane",
    email: "jane@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
