import { forEachChild } from "typescript";


// GIT: https://github.com/RenzArenillo/personalTypescript




// Exercise1
interface City {
    city:string
    country:string
    population:number
}

var cityList:City[] = [];

export const addCity = (cityName:string, countryName:string, population:number) => {
    var newCity:City = {city:cityName, country:countryName, population:population}
    cityList.push(newCity);
    displayCities(cityList);    
}

export const displayCities = (checkList:City[]) => {
    let list = document.getElementById('cityList');
    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    cityList.forEach((item) => {
        if(list) {
            let li = document.createElement("li");
            li.innerText = item.city + ", " + item.country + " - Population:" + item.population
            list.appendChild(li)
        }
    })
}

export const searchCity = (searchKey:string) => {
    console.log("Searching..." + searchKey)
    var searchCity = cityList.filter(c => (c.city.indexOf(searchKey) >= 0
    || c.country.indexOf(searchKey) >= 0))
    displayCities(searchCity)
}

// Exercise2
export const validISBN = (inputISBN:string) => {
    var sum = 0;

    if (inputISBN.length != 10) {   
        return false
    }

    for (let i = 0; i < inputISBN.length; i++) {
        if (inputISBN.charAt(i) >= '0' && inputISBN.charAt(i) <= '9' || 
            (i == 9 && inputISBN.charAt(i) == 'X')) {
                if (inputISBN.charAt(i) == 'X') {
                    sum += (i + 1) * 10
                } else {
                    sum += (i + 1) * +inputISBN.charAt(i)
                }
        } else {
            return false
        }
    }

    return sum % 11 == 0

}

console.log(validISBN("1112223339"))
console.log(validISBN("111222333"))
console.log(validISBN("1112223339X"))
console.log(validISBN("1234554321"))
console.log(validISBN("1234512345"))
console.log(validISBN("048665088X"))
console.log(validISBN("X123456788"))

// Exercise3
var letters = 'abcdEefghIijklmnOopqrstUuvwxyzA'

export const changingLetters = (change:string) => {

    var output = ""
    var lowercase = change.toLowerCase()

    for (let i = 0; i < lowercase.length; i++) {
        if (lowercase.charAt(i) >= 'a' && lowercase.charAt(i) <= 'z') {
            var a = letters.indexOf(lowercase.charAt(i))
            output = output.concat(letters.charAt(a+1))
        } else {
            output = output.concat(lowercase.charAt(i))
        }
    }
    return output

}

console.log(changingLetters("#CatDogzZ30"))

// Exercise4

export const pushZeroes = (array:any[]) => {

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number'  && array[i] == 0) {
            array.push(array.splice(i, 1)[0])
        }
     }

     return array

}

console.log(pushZeroes([2, 0, 3, 'a', 0, 4,'true']))





