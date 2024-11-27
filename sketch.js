let citizenRequestTable, baker = [];
const lsuCoords = { latitude: 30.4133, longitude: -91.1800 };
const cityBounds = { minLat: 30.3290, maxLat: 30.5838, minLon: -91.2805, maxLon: -91.0025 };
const aspectRatio = (cityBounds.maxLon - cityBounds.minLon) / (cityBounds.maxLat - cityBounds.minLat);

function preload() {
  citizenRequestTable = loadTable("EBRP_Library_Hotspot_Checkout_Stats_20241127.csv", "header");
}

function setup() {
  createCanvas(800, 800 / aspectRatio);
  main = citizenRequestTable.findRows("BAKER", "FAIRWOOD");
}

function draw() {
  background(0);
  noStroke();

  fill(255, 255, 255, 100);
  
  for (let i = 0; i < main.length; i++) {
    let x = map(main[i].obj.longitude, cityBounds.minLon, cityBounds.maxLon, 0, width);
    let y = map(main[i].obj.latitude, cityBounds.minLat, cityBounds.maxLat, height, 0);
    circle(x, y, 25);
  }

  let lsuX = map(lsuCoords.longitude, cityBounds.minLon, cityBounds.maxLon, 0, width);
  let lsuY = map(lsuCoords.latitude, cityBounds.minLat, cityBounds.maxLat, height, 0);
  fill(128, 0, 128);
  circle(lsuX, lsuY, 25);
}