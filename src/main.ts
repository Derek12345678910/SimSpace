import { Game } from "./objects/game.js";
import { BuildFunction } from "./objects/buildfunctions.js";
import { GameCanvas } from "./graphics.js";

import * as commercial from "./children/commercialChilds.js";
import * as essential from "./children/essentialChilds.js";
import * as industrial from "./children/industrialChilds.js";
import * as land from "./children/landChilds.js";
import * as plot from "./children/plotChilds.js";
import * as residential from "./children/residentialChilds.js";

import { Pair } from "./datastructures/pair.js";
import { List } from "./datastructures/list.js";

const WORLD : Game = new Game(50, 50, 10);

const CANVAS : GameCanvas = new GameCanvas(WORLD.map)

/**
 * Sets the values of the game to the texts for the user to see
 */
/*
function updateTexts() : void{
    const SCORE = document.getElementById("score") as HTMLElement;
    const MONEY = document.getElementById("money") as HTMLElement;
    const POPULATION = document.getElementById("population") as HTMLElement;
    const HAPPYPOPULATION = document.getElementById("happy-population") as HTMLElement;
    const CONTENTPOPULATION = document.getElementById("content-population") as HTMLElement;

    SCORE.innerText = String(WORLD.score);
    MONEY.innerText = String(WORLD.money);
    POPULATION.innerText = String(WORLD.population);
    HAPPYPOPULATION.innerText = String(WORLD.happypopulation);
    CONTENTPOPULATION.innerText = String(WORLD.contentpopulation);

}
*/

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
        console.log(objects);
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
    let problems : List<string>; 
    console.log(selectedCell);
        if(objName === "Rock"){
        problems = (buildFunctions.buildRock(selectedCell.key, selectedCell.val, WORLD.money));
    }
    else if(objName === "Tree"){
        problems = (buildFunctions.buildTree(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "Factory"){
        problems = (buildFunctions.buildFactory(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "EnvironmentalFacility"){
        problems = (buildFunctions.buildEnvironmentalFacility(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "Warehouse"){
        problems = (buildFunctions.buildWarehouse(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "Power Plant"){
        problems = (buildFunctions.buildPowerPlant(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "EmergencyService"){
        problems = (buildFunctions.buildEmergencyService(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "EducationCentre"){
        problems = (buildFunctions.buildEducationCentre(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "Medical"){
        problems = (buildFunctions.buildMedicalFacility(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "Government"){
        problems = (buildFunctions.buildGovernmentFacility(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "ComfortableHome"){
        problems = (buildFunctions.buildComfortableHome(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "AffordableHome"){
        problems = (buildFunctions.buildAffordableHome(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "LuxuryHome"){
        problems = (buildFunctions.buildLuxuryHome(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "Restaurant"){
        problems = (buildFunctions.buildRestaurant(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "Office"){
        problems = (buildFunctions.buildOffice(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "Store"){
        problems = (buildFunctions.buildStore(selectedCell.key, selectedCell.val,WORLD.money));
    }
    else if(objName === "PlanetaryDefenseSystem"){
        problems = (buildFunctions.buildPlanetaryDefenseSystem(selectedCell.key, selectedCell.val,WORLD.money));
    }
    console.log(WORLD.map);
    CANVAS.selectedCell = null;
    CANVAS.draw();
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
});