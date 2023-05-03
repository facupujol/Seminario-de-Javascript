const selector = document.getElementById("selector");

selector.addEventListener("change", traerPaises);

const url = "https://restcountries.com/v3.1/all";

function mapPaises(paises){
    console.log(paises[0]);
    return paises.map((p) => ({
        name: p.name.common, 
        capital: p.capital, 
        population: p.population,
        region: p.region,
        subregion: p.subregion,
    }));
}

function traerPaises() {
    fetch(url)
    .then(rpta => rpta.json())
    .then(data => {
        const paises = mapPaises(data);
        ordenarPaises(paises, selector.value);
        const list = document.getElementById("lista");
        list.innerHTML = "";
        paises.forEach(pais => {
            const elemento = document.createElement("li");
            elemento.textContent = "Nombre: " + pais.name + ", Capital: " + pais.capital + ", Poblacion: " + pais.population + ", Region: " + pais.region + ", Subregion: " + pais.subregion;
            elemento.style.fontSize = "20px";
            list.appendChild(elemento);
        });
    });
}

function ordenarPaises(paises, criterio){
    paises.sort((a, b) => {
        if (a[criterio] < b[criterio]){
            return -1;
        }
        if (a[criterio] > b[criterio]){
            return 1
        }
        return 0;
    });
}