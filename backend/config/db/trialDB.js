const Users = require("./users");

const createUser = async () => {
  const user = new Users({
    user_id: "23BIS70011",
    name: "Phulchand Kumar",
    email: "pk@gmail.com",
    role: "student",
  });
  await user.save();
  console.log("User Created:", user);
};

createUser();
