// objects, arrays, tuples, enums
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string; // string
  age: number; // number
  hobbies: string[]; // array
  availableRoles: [number, string, string]; // tuple
  role: Role; // enum
} = {
  name: "Alex",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  availableRoles: [0, "admin", "user"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

person.availableRoles = [1, "user", "admin"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
