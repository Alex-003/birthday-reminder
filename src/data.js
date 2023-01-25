export default [
  {
    id: 1,
    name: "Berti Yates",
    age: 29,
    img: '../imgs/Albert.jpg'
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 30,
    img: '../imgs/Jordu.jpeg'
  },
  {
    id: 3,
    name: "Larry Litte",
    age: 31,
    img: "src/imgs/Lau.jpg"
  },
  {
    id: 4,
    name: "Terry Tew",
    age: 32,
    img: "src/imgs/Raf.jpg"
  },
  {
    id: 5,
    name: "Zacary Zil",
    age: 33,
    img: "src/imgs/Tin.jpg"
  },
];

/* 
This is an array of js objects where each object represents a person, and contains properties such as "id", "name", "age", and "img".
The properties are defined as key-value pairs.

This array is being exported as the default export from the module,
which means that when this file is imported in another file, it will be the default value that is imported.

This exported array will be passed as prop people to the component List and then it will be used to map over and render the information of each person.
*/