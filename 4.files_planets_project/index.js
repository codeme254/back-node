const parse = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
fs.createReadStream("kepler_data.csv")
  // pipe function connects a readable stream source to a writable stream destination
  // readable.pipe(writable)
  .pipe(
    parse.parse({
      comment: "#", //we are telling it that we want to treat lines starting with # as comments
      columns: true, // returns each row of a csv file as a javascript object with key value pairs rather than just an array of values
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(habitablePlanets.map((planet) => {
        return planet['kepler_name']
    }));
    console.log("done");
    console.log(`${habitablePlanets.length} habitable planets found`);
  });
