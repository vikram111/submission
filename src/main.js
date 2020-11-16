let classifier = require('./index.js');
let params = {startNum: 50, endNum: 500, factor1: 3, factor2: 5, classification1: "Breakfast", classification2: "Lunch", combinedClassification: "Brunch"};
classifier.runMainClassifier(params);