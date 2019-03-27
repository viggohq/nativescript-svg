const Observable = require('tns-core-modules/data/observable').Observable;
const SVG = require('@teammaestro/nativescript-svg');
const svgParser = new SVG.ImageSourceSVG();

function getMessage(counter) {
  if (counter <= 0) {
    return 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
  } else {
    return counter + ' taps left';
  }
}

function createViewModel() {
  const loaded = svgParser.fromResource('images/spider-test.svg');
  if (loaded) {
    console.log('object loaded');
  } else {
    console.log('error');
  }

  // var loaded = svgParser.loadFromFile('~/images/spider-test.svg');
  const viewModel = new Observable();
  viewModel.counter = 42;
  viewModel.message = getMessage(viewModel.counter);

  viewModel.message2 = loaded ? 'there is object' : "there isn't object";

  viewModel.onTap = function() {
    // this.set("svgSrc", '~/images/nativescript.svg');
    this.counter--;
    this.set('message', getMessage(this.counter));
  };

  return viewModel;
}

exports.createViewModel = createViewModel;
