// const dayjs = require("dayjs");
// console.log("hello");
// console.log(now.format("dddd, MMMM D YYYY"));

const now = dayjs();
let date = now.format("dddd, MMMM D, YYYY");
$("#date").text(date);
console.log(date);

// let d = new Date(2022, 8, 18);
// let day = dayjs(d);
// console.log(day);

// dayjs()
//   .startOf("month")
//   .add(1, "day")
//   .set("year", 2018)
//   .format("YYYY-MM-DD HH:mm:ss");
