const request = require("request");

const geocodeAddress = (address, callback) => {
  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}`,
      json: true
    },
    (error, resp, body) => {
      if (error) {
        // console.log("Unable to connect to google servers.");
        callback("Unable to connect to google servers.");
      } else if (body.status === "ZERO_RESULTS") {
        // console.log("Unable to find that address");
        callback("Unable to find that address");
      } else if (body.status === "OK") {
        var result = body.results[0],
          address = result.formatted_address,
          geo = result.geometry;

        callback(undefined, {
          address,
          lat: geo.location.lat,
          lng: geo.location.lng
        });

        // console.log(JSON.stringify(xxx, undefined, 3));
        // console.log(`Address: ${address}`);
        // console.log(`Lat: ${geo.location.lat}`);
        // console.log(`Lng: ${geo.location.lng}`);
      } else {
        console.log(resp.statusCode);
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;
