const ics = require("ics");
const yaml = require("js-yaml");
const fs = require("fs");

const doc = yaml.safeLoad(
  fs.readFileSync("../data/training/sessions.yml", "utf8")
);

const loadYAMLDate = (dd_mm_yyyy) =>
  dd_mm_yyyy
    .split(".")
    .reverse()
    .map((x) => (x.length == 1 ? `0${x}` : x))
    .join("");

const parseDate = (dateString) => {
  var year = dateString.substring(0, 4);
  var month = dateString.substring(4, 6);
  var day = dateString.substring(6, 8);

  var date = new Date(year, month - 1, day);
  return date;
};

function getCal() {
  let events = [];
  doc.map((event) => {
    if (!event.active) return;

    let d = parseDate(loadYAMLDate(event.date_from));

    let days = 1;
    if (event.date_from != event.date_to) days = 2;
    events.push({
      start: [d.getFullYear(), d.getMonth() + 1, d.getDate()],
      duration: { days: days },
      title: `${event.name}, ${event.city}`,
      description: `${event.name} in ${event.city}`,
      location: `${event.city}`,
      url: "https://sika.io",
      status: "CONFIRMED",
      busyStatus: "BUSY",
      organizer: { name: "Ondrej Sika", email: "ondrej@sika.io" }
    });
  });
  const { error, value } = ics.createEvents(events);

  if (error) {
    console.log(error);
    return;
  }

  return value;
}

module.exports = getCal;
