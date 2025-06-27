const bcrypt = require("bcrypt");

const plainPassword = "admin12";
const hash = "$2b$10$R3BxN3A7pKyPJhp9r0yWkOeGJWQ5PP5Re9Es7xgo/Koj4NpzTuzv6";

bcrypt.compare(plainPassword, hash, (err, result) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Password match result:", result);
});
