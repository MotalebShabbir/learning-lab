const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function ask(msg) {
  return new Promise((resolve) => {
    readline.question(msg, (input) => {
      resolve(input);
    });
  });
}
async function fetchTime() {
  const country = await ask("Enter your country name: ");
  const city = await ask("Enter your city name: ");
  readline.close();
  const rawData = await fetch(
    `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1`,
  );
  const data = await rawData.json();
  const timings = data.data.timings;
  textToTimeConvert(timings);
}
fetchTime();
function textToTimeConvert(timings) {
  const timingsObj = Object.entries(timings);
  const time = timingsObj.map((t) => {
    const date = new Date();
    const [hour, min] = t[1].split(":");
    date.setHours(hour, min, 0, 0);
    t[1] = date;
    return t;
  });
  showTime(Object.fromEntries(time));
}
function time(d) {
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}
function getNextPrayer({ Fajr, Dhuhr, Asr, Maghrib, Isha }) {
  const now = new Date();
  if (now < Fajr) return ["Fajr", Fajr];
  if (now < Dhuhr) return ["Dhuhr", Dhuhr];
  if (now < Asr) return ["Asr", Asr];
  if (now < Maghrib) return ["Maghrib", Maghrib];
  if (now < Isha) return ["Isha", Isha];
}

function showTime({ Fajr, Dhuhr, Asr, Maghrib, Isha }) {
  const nextPrayer = getNextPrayer({ Fajr, Dhuhr, Asr, Maghrib, Isha });
  console.log("=== Today prayer time =====");
  if (nextPrayer[0] === "Fajr") {
    console.log(`\x1b[42m\x1b[37m Fajr time   :  ${time(Fajr)} \x1b[0m`);
  } else {
    console.log("Fajr time    : " + time(Fajr));
  }
  if (nextPrayer[0] === "Dhuhr") {
    console.log(`\x1b[42m\x1b[37m Dhuhr time  :  ${time(Dhuhr)} \x1b[0m`);
  } else {
    console.log("Dhuhr time   : " + time(Dhuhr));
  }
  if (nextPrayer[0] === "Asr") {
    console.log(`\x1b[42m\x1b[37m Asr time    :  ${time(Asr)} \x1b[0m`);
  } else {
    console.log("Asr time     : " + time(Asr));
  }
  if (nextPrayer[0] === "Maghrib") {
    console.log(`\x1b[42m\x1b[37m Maghrib time:  ${time(Maghrib)} \x1b[0m`);
  } else {
    console.log("Maghrib time : " + time(Maghrib));
  }
  if (nextPrayer[0] === "Isha") {
    console.log(`\x1b[42m\x1b[37m Isha time   :  ${time(Isha)} \x1b[0m`);
  } else {
    console.log("Isha time    : " + time(Isha));
  }
  console.log("=== Next prayer time =====");
  console.log(`Next prayer ${nextPrayer[0]} : ` + time(nextPrayer[1]));
  console.log(
    `Time left for next prayer : ` +
      Math.floor((nextPrayer[1] - new Date()) / (1000 * 60 * 60)) +
      " hours and " +
      Math.floor(((nextPrayer[1] - new Date()) / (1000 * 60)) % 60) +
      " minutes",
  );
}
