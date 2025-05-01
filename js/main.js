const recipesURL = "https://dummyjson.com/";
const SkelatonEl = document.querySelector(".scelaton");


function reanderDataRecipes(data) {
  console.log(data);
  console.log("ReanderData");
  const wrapperEl = document.querySelector(".wrapper");
  const fragmend = document.createDocumentFragment();
  wrapperEl.innerHTML = null;

  data?.recipes.forEach((recipes) => {
    let card = document.createElement("div");
    card.className = "card";

    const tagsHTML = recipes.tags
    ?.map(tag => `<p>#${tag}</p>`)
    .join("") || "";

    card.innerHTML = `
          <div class="card__image">
            <img src="${recipes.image}" alt="" />
          </div>
          <div class="card__body">
            <h1>${recipes.name}</h1>
            <h3>Raiting: ${recipes.rating}</h3>
          </div>
          <div class="tags__card">
            ${tagsHTML}
          </div>
        `;
    fragmend.appendChild(card);
  });
  wrapperEl.appendChild(fragmend);
}

function fetchData(endpoint) {
  fetch(`${recipesURL}${endpoint}`)
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      return res.json();
    })
    .then((data) => {
      reanderDataRecipes(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(()=>{
      SkelatonEl.style.display = "none"
    })
}

window.addEventListener("load", () => {
  fetchData("recipes");
});


function createScelaton() {
  const fragmend = document.createDocumentFragment()
Array(8)
  .fill("")
  .forEach((_) => {
    const div = document.createElement("div");
    div.className = "scelaton__card";
    div.innerHTML = `
           <div class="scelaton__image scelaton__animation"></div>
          <div class="scelaton_card__body scelaton__animation"></div>
          <div class="scelaton_card__body scelaton__animation"></div>
          <div class="scelaton_card__body scelaton__lines">
            <div class="scelaton__line scelaton__animation"></div>
            <div class="scelaton__line scelaton__animation"></div>
            <div class="scelaton__line scelaton__animation"></div>
          </div>
      `;
      fragmend.appendChild(div)
      console.log(div);
      
  });
  SkelatonEl.appendChild(fragmend)
}

createScelaton()