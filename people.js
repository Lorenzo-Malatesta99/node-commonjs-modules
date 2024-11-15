const completeName = require("./names");
const myHobbies = require("./hobbies");
function createProfile() {
  const name = completeName("Mario", "Rossi");
  const hobbies = myHobbies("Reading", "Traveling", "Cooking");
  return {
    firstName: name.firstName,
    lastName: name.lastName,
    hobbies: hobbies.hobbies,
  };
}
const profile = createProfile();
console.log(profile);
