"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushZeroes = exports.changingLetters = exports.validISBN = exports.searchCity = exports.displayCities = exports.addCity = void 0;
var cityList = [];
const addCity = (cityName, countryName, population) => {
    var newCity = { city: cityName, country: countryName, population: population };
    cityList.push(newCity);
    (0, exports.displayCities)(cityList);
};
exports.addCity = addCity;
const displayCities = (checkList) => {
    let list = document.getElementById('cityList');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cityList.forEach((item) => {
        if (list) {
            let li = document.createElement("li");
            li.innerText = item.city + ", " + item.country + " - Population:" + item.population;
            list.appendChild(li);
        }
    });
};
exports.displayCities = displayCities;
const searchCity = (searchKey) => {
    console.log("Searching..." + searchKey);
    var searchCity = cityList.filter(c => (c.city.indexOf(searchKey) >= 0
        || c.country.indexOf(searchKey) >= 0));
    (0, exports.displayCities)(searchCity);
};
exports.searchCity = searchCity;
// Exercise2
const validISBN = (inputISBN) => {
    var sum = 0;
    if (inputISBN.length != 10) {
        return false;
    }
    for (let i = 0; i < inputISBN.length; i++) {
        if (inputISBN.charAt(i) >= '0' && inputISBN.charAt(i) <= '9' ||
            (i == 9 && inputISBN.charAt(i) == 'X')) {
            if (inputISBN.charAt(i) == 'X') {
                sum += (i + 1) * 10;
            }
            else {
                sum += (i + 1) * +inputISBN.charAt(i);
            }
        }
        else {
            return false;
        }
    }
    return sum % 11 == 0;
};
exports.validISBN = validISBN;
console.log((0, exports.validISBN)("1112223339"));
console.log((0, exports.validISBN)("111222333"));
console.log((0, exports.validISBN)("1112223339X"));
console.log((0, exports.validISBN)("1234554321"));
console.log((0, exports.validISBN)("1234512345"));
console.log((0, exports.validISBN)("048665088X"));
console.log((0, exports.validISBN)("X123456788"));
// Exercise3
var letters = 'abcdEefghIijklmnOopqrstUuvwxyzA';
const changingLetters = (change) => {
    var output = "";
    var lowercase = change.toLowerCase();
    for (let i = 0; i < lowercase.length; i++) {
        if (lowercase.charAt(i) >= 'a' && lowercase.charAt(i) <= 'z') {
            var a = letters.indexOf(lowercase.charAt(i));
            output = output.concat(letters.charAt(a + 1));
        }
        else {
            output = output.concat(lowercase.charAt(i));
        }
    }
    return output;
};
exports.changingLetters = changingLetters;
console.log((0, exports.changingLetters)("#CatDogzZ30"));
// Exercise4
const pushZeroes = (array) => {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number' && array[i] == 0) {
            array.push(array.splice(i, 1)[0]);
        }
    }
    return array;
};
exports.pushZeroes = pushZeroes;
console.log((0, exports.pushZeroes)([2, 0, 3, 'a', 0, 4, 'true']));
