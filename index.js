"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCondition = exports.loopPlane = exports.displayWheels = exports.addWheel = exports.addWheels = exports.addPlane = exports.Days = exports.testFunction = void 0;
const testFunction = () => {
    console.log("Hello to Typescript");
};
exports.testFunction = testFunction;
var parent;
parent = "myString";
parent = 500;
var nameArray = [];
var otherArray = new Array(10);
nameArray.push("myName");
otherArray.push("newName");
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days = exports.Days || (exports.Days = {}));
function addPlane2(data) {
}
var planeList = [];
const addPlane = (data) => {
    planeList.push(data);
};
exports.addPlane = addPlane;
var myWheels = [];
const addWheels = (...wheelsArray) => {
    wheelsArray.forEach((item) => {
        console.log(item);
    });
};
exports.addWheels = addWheels;
const addWheel = (wheel) => {
    myWheels.push(wheel);
    (0, exports.displayWheels)();
};
exports.addWheel = addWheel;
const displayWheels = () => {
    let list = document.getElementById('wheelList');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    myWheels.forEach((item) => {
        if (list) {
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        }
    });
};
exports.displayWheels = displayWheels;
//addWheels("small wheel", "medium wheel", "large wheel");
const loopPlane = () => {
    // forEach
    planeList.forEach((item) => {
        console.log("forEach");
        console.log(item);
    });
    // map
    planeList.map((item) => {
        console.log("map");
        console.log(item);
    });
    // for loop
    for (let i = 0; i < planeList.length; i++) {
        console.log("for loop");
        console.log(planeList[i]);
    }
    // while loop and do while
    /*  let i = 0;
     while(i < planeList.length) {
         console.log("while loop")
         console.log(planeList[i])
         i++
     } */
    // enhanced for loop
    for (let plane of planeList) {
        console.log("enhanced for loop");
        console.log(plane);
    }
    // index
    for (let ind in planeList) {
        console.log("index loop");
        console.log(planeList[ind]);
    }
};
exports.loopPlane = loopPlane;
const checkCondition = () => {
    var condition = true;
    var s = "first";
    if (condition) {
    }
    else if (!condition) {
    }
    else {
    }
    switch (s) {
        case "first":
            break;
        case "second":
            break;
        default:
    }
};
exports.checkCondition = checkCondition;
var tuple = ["myName", 1];
var tuple2 = ["first", 1, 2];
var plane1 = {
    name: "JetLee",
    model: "FighterJet"
};
var plane2 = {
    name: "Bruce Lee",
    model: "Jumbo Jet"
};
console.log(plane2.model);
(0, exports.addPlane)(plane1);
(0, exports.addPlane)(plane2);
(0, exports.loopPlane)();
(0, exports.testFunction)();
