const yargs = require("yargs");
// const geocode = require("./geocode/geocode.js");
const request = require("request");
// // b188f8811c2c2842114953ff024bb929

// const argv =
//   // .alias('help', 'h')
//   yargs
//     .options({
//       a: {
//         demand: true,
//         alias: "address",
//         describe: "Address to fetch weather for",
//         string: true
//       }
//     })
//     .help().argv;

// geocode.geocodeAddress(argv.address, (errormsg, resp) => {
//   if (errormsg) {
//     console.log(errormsg);
//   } else {
//     console.log(JSON.stringify(resp, undefined, 3));
//   }
// });

const weather = () => {
  request(
    {
      url:
        "https://api.darksky.net/forecast/b188f8811c2c2842114953ff024bb929/37.8267,-122.4233",
      json: true
    },
    (err, res, bd) => {
      if (!err && res.statusCode === 200) {
        console.log(`Temperature: ${bd.currently.temperature}`);
      } else {
        console.log("There was an error");
      }
    }
  );
};

weather();
