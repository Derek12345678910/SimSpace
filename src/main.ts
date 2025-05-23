import { Game } from "./objects/game.js";

import * as commercial from "./children/commercialChilds.js";
import * as essential from "./children/essentialChilds.js";
import * as facilities from "./children/facilityChilds.js";
import * as industrial from "./children/industrialChilds.js";
import * as land from "./children/landChilds.js";
import * as plot from "./children/plotChilds.js";
import * as residential from "./children/residentialChilds.js";

const WORLD : Game = new Game(50, 50, 10);

/**
 * Sets the values of the game to the texts for the user to see
 */
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

            container.appendChild(newButton);
        }
    }
    else if(type === "essential"){
        let objects = Object.values(essential)
        for(let i=0; i<objects.length; i++){
            let newButton = document.createElement("button")
            newButton.innerText = objects[i].name;

            container.appendChild(newButton);
        }
    }
    else if(type === "industrial"){
        let objects = Object.values(industrial)
        for(let i=0; i<objects.length; i++){
            let newButton = document.createElement("button")
            newButton.innerText = objects[i].name;

            container.appendChild(newButton);
        }
    }
    else if(type === "residential"){
        let objects = Object.values(residential)
        for(let i=0; i<objects.length; i++){
            let newButton = document.createElement("button")
            newButton.innerText = objects[i].name;

            container.appendChild(newButton);
        }
    }
    else if(type === "land"){
        let objects = Object.values(land)
        for(let i=0; i<objects.length; i++){
            let newButton = document.createElement("button")
            newButton.innerText = objects[i].name;

            container.appendChild(newButton);
        }
    }
}

function placeObject(objName : string){
    
}

// show texts at start
updateTexts();

// update functions
window.addEventListener("DOMContentLoaded", () => {
  Object.assign(window, {
    changeBuilds,
    updateTexts,
  });
});

(window as any).mainFunctions = {
  changeBuilds,
  updateTexts,
};
// take all from buttons then compare it to the button have it match
// since we have all buttons loop through
// call build function 