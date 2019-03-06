// Import outside libraries
const Phaser = require('phaser');
// Local Modules
const SerialPortReader = require('./SerialPortReader');
require('./SerialTest');

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
};

// Phaser setup
function create() {

}

function update(totalTime, deltaTime) {

}

config.scene = {
  create: create,
  update: update
}

let game;

// Exported Module so game can be initialized elseware
const GameManager = {
  init: () => {
    // The openPort function takes a callback function for finding the correct arduino from a list
    // and whatever you want your delimiter to be between packets
    SerialPortReader.openPort(p => /Arduino/.test(p.manufacturer), '-');
    
    game = new Phaser.Game(config);
  },
};

module.exports = GameManager;
