// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {

    let listedPlanets = result;

    
    let planetSelected = pickPlanet(listedPlanets)
    addDestinationInfo(
      document,
      planetSelected.name,
      planetSelected.diameter,
      planetSelected.star,
      planetSelected.distance,
      planetSelected.moons,
      planetSelected.image
    )
  });
  

  const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]").value;
      let copilotNameInput = document.querySelector ("input[name=copilotName]").value;
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
      let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
      let items = document.querySelector("#faultyItems");
      items.style.visibility = "hidden";
      event.preventDefault();
      formSubmission(document,items,pilotNameInput,copilotNameInput,fuelLevelInput,cargoMassInput);
    });
  });
