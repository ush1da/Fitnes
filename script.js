const fitnessSchedule = [
  {
    id: "s1",
    "class type": "Yoga",
    info: {
      trainer: "Anna",
      duration: 60,
    },
    capacity: 15,
    "is full": true,
  },

  {
    id: "s2",
    "class type": "CrossFit",
    info: {
      trainer: "Oleh",
      duration: 45,
    },
    capacity: 10,
    "is full": false,
  },

  {
    id: "s3",
    "class type": "Pilates",
    info: {
      trainer: "Ira",
      duration: 60,
    },
    capacity: 12,
    "is full": false,
  },

  {
    id: "s4",
    "class type": "Boxing",
    info: {
      trainer: "Max",
      duration: 90,
    },
    capacity: 8,
    "is full": true,
  },

  {
    id: "s5",
    "class type": "Zumba",
    info: {
      trainer: "Elena",
      duration: 60,
    },
    capacity: 20,
    "is full": false,
  },
];

// 1. Робота з Array

const smallGroups = fitnessSchedule.filter((item) => item.capacity < 15);

console.log("Заняття з кількістю місць менше 15:");
console.log(smallGroups);

const classNames = fitnessSchedule.map((item) => item["class type"]);

console.log("Назви тренувань:");
console.log(classNames);

// 2. Робота з Set

const trainers = new Set(fitnessSchedule.map((item) => item.info.trainer));

console.log("Унікальні тренери:");
console.log([...trainers]);

// 3. Робота з Map

const priceList = new Map();

priceList.set("Yoga", 300);
priceList.set("CrossFit", 450);
priceList.set("Pilates", 350);
priceList.set("Boxing", 500);
priceList.set("Zumba", 320);

console.log("Ціна Yoga:");
console.log(priceList.get("Yoga"));

console.log("Ціна Boxing:");
console.log(priceList.get("Boxing"));

// Додаткові приклади

const availableClasses = fitnessSchedule.filter(
  (item) => item["is full"] === false
);

console.log("Доступні тренування:");
console.log(availableClasses);

const durations = fitnessSchedule.map((item) => ({
  training: item["class type"],
  duration: item.info.duration,
}));

console.log("Тривалість тренувань:");
console.log(durations);
