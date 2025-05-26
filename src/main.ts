import { Game } from "./objects/game.js";
import { GameCanvas } from "./graphics.js";

import { BuildFunction } from "./objects/buildfunctions.js";
import * as commercial from "./children/commercialChilds.js";
import * as essential from "./children/essentialChilds.js";
import * as industrial from "./children/industrialChilds.js";
import * as land from "./children/landChilds.js";
import * as plot from "./children/plotChilds.js";
import * as residential from "./children/residentialChilds.js";

import { Pair } from "./datastructures/pair.js";

const WORLD : Game = new Game(50, 50, 10);

const CANVAS : GameCanvas = new GameCanvas(WORLD.map)
const BuildFunctions :BuildFunction = new BuildFunction(WORLD.map);

// if the timer is running or not
let timeOn: boolean = true;

// button that toggles the timer on and off
const TOGGLEBUTTON = document.getElementById("toggle-time") as HTMLButtonElement;
const TIMEDISPLAY = document.getElementById("time-display") as HTMLElement;

let monthInterval: ReturnType<typeof setInterval> | null = null;
let seconds: number = 0;


/**
 * Displays time until new month and how many months have passed
 */
function updateTimeDisplay(): void{
    TIMEDISPLAY.innerText = `New month in: ${10-(seconds%10)}
                             Month: ${Math.floor(seconds/10)}`
}

/**
 * Ticks the time by 1 second, if the time is a multiple of 10, updates new month
 */
function tickTime():void{
    monthInterval = setInterval(() => {
        if(timeOn){
            seconds++
            updateTimeDisplay();
            if(seconds%10 === 0){
                WORLD.updateNewMonth();
                updateTexts();
            }
        }
    }, 1000)
}

/**
 * Pause/play function, that either runs or stops the tickTime() function
 */
function toggleTime(){
    timeOn = !timeOn;
    if(timeOn){
        TOGGLEBUTTON.innerHTML = "Pause"
    }
    else{
        TOGGLEBUTTON.innerHTML = "Play"
    }

    if(timeOn && !monthInterval){
        tickTime();
    }

    if(!timeOn && monthInterval){
        clearInterval(monthInterval);
        monthInterval = null;
    }
}

// run the time when the game loads
document.addEventListener("DOMContentLoaded", () =>{
    tickTime();
    updateTimeDisplay();
    TOGGLEBUTTON.innerHTML = "Pause";
    TOGGLEBUTTON.addEventListener("click", toggleTime);
})


/**
 * Sets the values of the game to the texts for the user to see
 */

function updateTexts() : void{
    console.log("hi");
    const SCORE = document.getElementById("score") as HTMLElement;
    const MONEY = document.getElementById("money") as HTMLElement;
    const POPULATION = document.getElementById("population") as HTMLElement;
    const HAPPYPOPULATION = document.getElementById("happy-population") as HTMLElement;
    const CONTENTPOPULATION = document.getElementById("content-population") as HTMLElement;
    const POWER = document.getElementById("power") as HTMLElement;
    const POLLUTION = document.getElementById("pollution") as HTMLElement; 

    SCORE.innerText =  `Score: ${WORLD.score}`;
    MONEY.innerText = `Money: ${WORLD.money}`;
    POPULATION.innerText = `Population: ${WORLD.population}`;
    HAPPYPOPULATION.innerText = `Happy Population: ${WORLD.happypopulation}`;
    CONTENTPOPULATION.innerText = `Content Population: ${WORLD.contentpopulation}`;
    POWER.innerText = `Power: ${WORLD.power}`;
    POLLUTION.innerText = `Pollution: ${WORLD.pollution}`;

}

/**
 * 
 * @param type 
 */
function changeBuilds(type : string) : void{
    const container = document.getElementById("objects-container") as HTMLDivElement;
    // reset 
    container.innerHTML = "";
    if(type === "plot"){
        let objects = Object.values(plot)
        for(let i=0; i<objects.length; i++){
            let newButton = document.createElement("button")
            newButton.innerText = objects[i].name;
            newButton.addEventListener("click", () => {
                placeObject(objects[i].name);
            });
            container.appendChild(newButton);
        }
    }
    else if(type === "commercial"){
        let objects = Object.values(commercial)
        for(let i=0; i<objects.length; i++){
            let newButton = document.createElement("button")
            newButton.innerText = objects[i].name;
            newButton.addEventListener("click", () => {
                placeObject(objects[i].name);
            });
            container.appendChild(newButton);
        }
    }
    else if(type === "essential"){
        let objects = Object.values(essential)
        for(let i=0; i<objects.length; i++){
            let newButton = document.createElement("button")
            newButton.innerText = objects[i].name;
            newButton.addEventListener("click", () => {
                placeObject(objects[i].name);
            });
            container.appendChild(newButton);
        }
    }
    else if(type === "industrial"){
        let objects = Object.values(industrial)
        for(let i=0; i<objects.length; i++){
            let newButton = document.createElement("button")
            newButton.innerText = objects[i].name;
            newButton.addEventListener("click", () => {
                placeObject(objects[i].name);
            });
            container.appendChild(newButton);
        }
    }
    else if(type === "residential"){
        let objects = Object.values(residential)
        for(let i=0; i<objects.length; i++){
            let newButton = document.createElement("button")
            newButton.innerText = objects[i].name;
            newButton.addEventListener("click", () => {
                placeObject(objects[i].name);
            });
            container.appendChild(newButton);
        }
    }
    else if(type === "land"){
        let objects = Object.values(land)
        for(let i=0; i<objects.length; i++){
            let newButton = document.createElement("button")
            newButton.innerText = objects[i].name;
            newButton.addEventListener("click", () => {
                placeObject(objects[i].name);
            });
            container.appendChild(newButton);
        }
    }
}

let buildFunctions : BuildFunction = new BuildFunction(WORLD.map);

/**
 * Place the object of the indicated button
 * @param objName the name of the object
 */
async function placeObject(objName : string){
    CANVAS.selectedCell = null;
    let selectedCell = await waitForCellSelect();   
    // check code here     
}

function waitForCellSelect(): Promise<Pair> {
    return new Promise((resolve) => {
        function checkSelection() {
            if (CANVAS.selectedCell !== null) {
                CANVAS.lookingForSelect = false;
                resolve(CANVAS.selectedCell);
            } else {
                requestAnimationFrame(checkSelection);
            }
        }
        CANVAS.lookingForSelect = true;
        checkSelection();
    });
}

/**
 * Event listeners for the changing build types
 */
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.types button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let buildType = button.dataset.type;
            if (buildType) {
                changeBuilds(buildType);
            }
        });
    });
})
let x: number = 0;
let y: number = 0;



// show texts at start
updateTexts();

// update functions
window.addEventListener("DOMContentLoaded", () => {
  Object.assign(window, {
    changeBuilds,
    updateTexts,
  });
});

updateTexts();
