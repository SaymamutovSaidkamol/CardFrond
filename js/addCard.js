let user = JSON.parse(localStorage.getItem("users")) || [];

const SkelatonEl = document.querySelector(".scelaton");

function renderUserData(data) {
  const wrapperEl = document.querySelector(".wrapper");
  const fragmend = document.createDocumentFragment();
  wrapperEl.innerHTML = null;

  data.forEach((e) => {
    let card = document.createElement("div");
    card.className = "card";
    card.dataset.id = e.id;

    card.innerHTML = `
      <div class="card__image">
        <img src="../assets/user.png" alt="" />
      </div>
      <div class="delete">
          <button class="delete__card">
              <i class="fa-solid fa-trash"></i>
          </button>
      </div>
      <div class="card__body">
        <h1>${e.name}</h1>
        <h3><strong>Count: </strong>${e.count}</h3>
        <h3><strong>Price: </strong>${e.price}</h3>
        <h3><strong>Color: </strong>${e.color}</h3>
      </div>
    `;

    const deleteBtn = card.querySelector(".delete__card");
    deleteBtn.addEventListener("click", () => {
      user = user.filter((user) => user.id !== e.id);
      localStorage.setItem("users", JSON.stringify(user));
      renderUserData(user);
    });

    fragmend.appendChild(card);
  });

  wrapperEl.appendChild(fragmend);
  SkelatonEl.style.display = "none";
}

window.onload = () => {
  renderUserData(user);
};

const addUserBtn = document.querySelector(".AddUser");

addUserBtn.addEventListener("click", () => {
  const overlay = document.getElementById("modalOverlay");

  overlay.classList.add("show");
});

const overlay = document.getElementById("modalOverlay");
const ModalContent = document.getElementById("modalContent");
const closeBtn = document.getElementById("closeModalBtn");
const createBtn = document.querySelector(".create");

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("show");
  }
});

createBtn.addEventListener("click", () => {
  let [name, count, price, color] = ModalContent.children;

  let newUser = {
    id: new Date().getTime(),
    name: name.value,
    count: count.value,
    price: price.value,
    color: color.value,
  };

  user.push(newUser);
  localStorage.setItem("users", JSON.stringify(user));
  renderUserData(user);
  name.value = "";
  count.value = "";
  price.value = "";
  color.value = "";
});

function createScelaton() {
    const fragmend = document.createDocumentFragment()
  Array(5)
    .fill("")
    .forEach((_) => {
      const div = document.createElement("div");
      div.className = "scelaton__card";
      div.innerHTML = `
            <div class="scelaton__image scelaton__animation"></div>
            <div class="scelaton_card__body scelaton__animation"></div>
            <div class="scelaton_card__body scelaton__animation"></div>
            <div class="scelaton_card__body scelaton__animation"></div>
            <div class="scelaton_card__body scelaton__animation"></div>
        `;
        fragmend.appendChild(div)
        console.log(div);
        
    });
    SkelatonEl.appendChild(fragmend)
}

createScelaton()