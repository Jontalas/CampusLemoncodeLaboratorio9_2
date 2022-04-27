function getInfo() {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.statusText;
      }
    })
    .catch(
      (error) =>
        (document.getElementById("root").innerHTML =
          "No se ha encontrado la fuente")
    );
}

export { getInfo };
