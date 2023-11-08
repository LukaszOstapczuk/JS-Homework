function daysTillFriday() {
  let today = new Date();
  let dayOfWeek = today.getDay(); // 0- niedziala, 1- piniedziałek, 2-wtorek...
  let daysTillFriday = 5 - dayOfWeek; // 5 = piątek
  if (daysTillFriday < 0) {
    daysTillFriday += 7;
  }
  return daysTillFriday;
}

const daysLeft = daysTillFriday();
console.log(`Liczba dni do piątku: ${daysLeft}`);
