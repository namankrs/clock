const moveSeconds = function(currDate) {
  const seconds = document.getElementById("secondHand");
  const currSeconds = currDate.getSeconds();
  const secDegrees = currSeconds * 6 + 90;
  seconds.style.transform = `rotate(${secDegrees}deg)`;
};

const moveMinutes = function(currDate) {
  const minutes = document.getElementById("minuteHand");
  const currMinutes = currDate.getMinutes();
  const minDegrees = currMinutes * 6 + 90;
  minutes.style.transform = `rotate(${minDegrees}deg)`;
};

const moveHours = function(currDate) {
  const hours = document.getElementById("hourHand");
  const currHours = currDate.getHours();
  const hourDegrees = currHours * 30 + 90;
  hours.style.transform = `rotate(${hourDegrees}deg)`;
};

const getValues = function() {
  const currDate = new Date();
  moveSeconds(currDate);
  moveMinutes(currDate);
  moveHours(currDate);
};
setInterval(getValues, 1000);
