const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
  }
  return `Greetings ${person.name}, how have you been lately?`;
};

const haveBirthday = (person) => {
  person.age += 1;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
};

const carMaker = (name, maker, year) => {
  const car = {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false,
  };
  return car;
};

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

const listHobbies = (person) => {
  for (const hobby of person.hobbies)
    console.log(`${person.name} likes ${hobby}.`);
};

const getNextOpponent = (team) => {
  return team["matches"][0] ? team["matches"][0]["teamName"] : null;
};

const listAllKeys = (obj) => {
  return Object.keys(obj);
};

const listAllValues = (obj) => {
  return Object.values(obj);
};

const convertToMatrix = (arr) => {
  let newArr = [];
  if (arr[0]) {
    newArr.push(Object.keys(arr[0]));
    for (const obj in arr) newArr.push(Object.values(arr[obj]));
  }
  return newArr;
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
