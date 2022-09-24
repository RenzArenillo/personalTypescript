
export const testFunction = () => {
    console.log("Hello to Typescript")
}

var parent:any;
parent = "myString";
parent = 500;

var nameArray:string[] = [];
var otherArray = new Array(10);

nameArray.push("myName");
otherArray.push("newName")

export enum Days {
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
}

interface Plane {
    name:string
    model:string
    fly?: (destination:string) => string
}

function addPlane2(data:Plane) {
}

var planeList:Plane[] = [];
export const addPlane = (data:Plane) => {
    planeList.push(data)
}

var myWheels:string[] = [];
export const addWheels = (...wheelsArray:string[]) => {
    wheelsArray.forEach((item) => {
        console.log(item)
    })
}

export const addWheel = (wheel:string) => {
    myWheels.push(wheel);
    displayWheels();
}

export const displayWheels = () => {
    let list = document.getElementById('wheelList');
    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    myWheels.forEach((item) => {
        if(list) {
            let li = document.createElement("li");
            li.innerText = item
            list.appendChild(li)
        }
    })
}

//addWheels("small wheel", "medium wheel", "large wheel");

export const loopPlane = () => {
    // forEach
    planeList.forEach((item) => {
        console.log("forEach")
        console.log(item)
    })
    
    // map
    planeList.map((item) => {
        console.log("map")
        console.log(item)
    })
    
    // for loop
    for(let i = 0; i < planeList.length; i++) {
        console.log("for loop")
        console.log(planeList[i])
    }
    
    // while loop and do while
   /*  let i = 0;
    while(i < planeList.length) {
        console.log("while loop")
        console.log(planeList[i])
        i++
    } */
    
    // enhanced for loop
    for(let plane of planeList) {
        console.log("enhanced for loop")
        console.log(plane)
    }
    
    // index
    for(let ind in planeList) {
        console.log("index loop")
        console.log(planeList[ind])
    }
}

export const checkCondition = () => {
    var condition:boolean = true;
    var s:string = "first"
    if(condition) {

    } else if(!condition) {

    } else {

    }

    switch(s) {
        case "first": 
        break;
        case "second":
            break;
        default: 
    }
}

var tuple = ["myName", 1];
var tuple2:(string | number)[] = ["first", 1, 2];

var plane1:Plane = {
    name: "JetLee",
    model: "FighterJet"
}

var plane2:Plane = {
    name: "Bruce Lee",
    model: "Jumbo Jet"
}


console.log(plane2.model)
addPlane(plane1);
addPlane(plane2);

loopPlane();
testFunction();