// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (json) {
    

    console.log(json);
  });

  const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]").value;
      let copilotNameInput = document.querySelector ("input[name=copilotName]").value;
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
      let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
      let faultyItems = document.querySelector("#faultyItems");
      event.preventDefault();
      formSubmission(document,faultyItems,pilotNameInput,copilotNameInput,fuelLevelInput,cargoMassInput);
    });
  });
