import "./styles.css";
import * as Data_business from "./data-business.js";
import * as Utils from "./utils.js";

const rickAndMortyData = Data_business.getInfo();
rickAndMortyData.then((response) => {
  if (Array.isArray(response.results)) {
    console.log(response.results);
    document.getElementById("root").innerHTML = "";
    for (const character of response.results) {
      const element = Utils.createCharacterRow(character);
      element.onclick = function () {
        Utils.showCharacter(character);
      };
      document.getElementById("root").append(element);
    }
  } else {
    console.log(response);
  }
});
