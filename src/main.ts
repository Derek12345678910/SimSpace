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
import { List } from "./datastructures/list.js";
import { join } from "path";

const WORLD : Game = new Game(50, 50, 10);

const CANVAS : GameCanvas = new GameCanvas(WORLD.map)
const buildFunctions : BuildFunction = new BuildFunction(WORLD.map);

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
    TIMEDISPLAY.innerText = `New month in: ${10-(seconds%10)} \n Month: ${Math.floor(seconds/10)}`
}

export function gameOver(){
    const OVER = document.getElementById("OVER") as HTMLElement;
    OVER.hidden = false;
}

/**
 * Ticks the time by 1 second, if the time is a multiple of 10, updates new month
 */
function tickTime():void{
    monthInterval = setInterval(() => {
        if(timeOn){
            seconds++
            updateTimeDisplay();
            CANVAS.draw();
            updateTexts();
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
 * Change the type of build it is
 * @param type the type of plot
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

// Global token for tracking the latest placeObject call
let currentPlaceObjectToken = 0;
/**
 * Place the object of the indicated button
 * @param objName the name of the object
 */
async function placeObject(objName: string) {
    // Cancel any in-progress placement
    const myToken = ++currentPlaceObjectToken;

    // Always update selected button immediately
    WORLD.selectedButton = objName;

    // Don't trigger cell selection if one already in progress
    if (CANVAS.selectedCell !== null) return;

    CANVAS.selectedCell = null;
    let selectedCell = await waitForCellSelect();

    // If a newer call was made, exit early
    if (myToken !== currentPlaceObjectToken) return;

    let problems: List<string> = new List<string>();
    let selectedButton: string = WORLD.selectedButton!;
    const RESPONDER = document.getElementById("responder") as HTMLElement;

    if (selectedButton === "Rock") {
        problems = buildFunctions.buildRock(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= land.Rock.buildCost;
    } else if (selectedButton === "Tree") {
        problems = buildFunctions.buildTree(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= land.Tree.buildCost;
    } else if (selectedButton === "Factory") {
        problems = buildFunctions.buildFactory(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= industrial.Factory.buildCost;
    } else if (selectedButton === "EnvironmentalFacility") {
        problems = buildFunctions.buildEnvironmentalFacility(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= industrial.EnvironmentalFacility.buildCost;
    } else if (selectedButton === "Warehouse") {
        problems = buildFunctions.buildWarehouse(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= industrial.Warehouse.buildCost;
    } else if (selectedButton === "PowerPlant") {
        problems = buildFunctions.buildPowerPlant(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= essential.PowerPlant.buildCost;
    } else if (selectedButton === "EmergencyService") {
        problems = buildFunctions.buildEmergencyService(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= essential.EmergencyService.buildCost;
    } else if (selectedButton === "EducationCentre") {
        problems = buildFunctions.buildEducationCentre(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= essential.EducationCentre.buildCost;
    } else if (selectedButton === "Medical") {
        problems = buildFunctions.buildMedicalFacility(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= essential.Medical.buildCost;
    } else if (selectedButton === "Government") {
        problems = buildFunctions.buildGovernmentFacility(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= essential.Government.buildCost;
    } else if (selectedButton === "ComfortableHome") {
        problems = buildFunctions.buildComfortableHome(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= residential.ComfortableHome.buildCost;
    } else if (selectedButton === "AffordableHome") {
        problems = buildFunctions.buildAffordableHome(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= residential.AffordableHome.buildCost;
    } else if (selectedButton === "LuxuryHome") {
        problems = buildFunctions.buildLuxuryHome(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= residential.LuxuryHome.buildCost;
    } else if (selectedButton === "Restaurant") {
        problems = buildFunctions.buildRestaurant(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= commercial.Restaurant.buildCost;
    } else if (selectedButton === "Office") {
        problems = buildFunctions.buildOffice(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= commercial.Office.buildCost;
    } else if (selectedButton === "Store") {
        problems = buildFunctions.buildStore(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= commercial.Store.buildCost;
    } else if (selectedButton === "PlanetaryDefenseSystem") {
        problems = buildFunctions.buildPlanetaryDefenseSystem(selectedCell.key, selectedCell.val, WORLD.money);
        if (problems.length === 0) WORLD.money -= plot.PlanetaryDefenseSystem.buildCost;
    }

    console.log(WORLD.map);
    console.log(problems);

    CANVAS.selectedCell = null;
    WORLD.selectedButton = null;
    RESPONDER.innerText = "";
    for (let i = 0; i < problems.length; i++) {
        RESPONDER.innerText += `${problems.get(i)} \n`;
    }
}

/**
 * Waits for the User to select a cell
 * @returns Returns the selected cell
 */
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

// show texts at start
updateTexts();

// update functions
window.addEventListener("DOMContentLoaded", () => {
  Object.assign(window, {
    changeBuilds,
    updateTexts,
  });
});