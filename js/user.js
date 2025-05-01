const usersURL = "https://dummyjson.com/";
const SkelatonEl = document.querySelector(".scelaton");


function reanderDatausers(data) {
  const wrapperEl = document.querySelector(".wrapper");
  const fragmend = document.createDocumentFragment();
  wrapperEl.innerHTML = null;

  data?.users.forEach((user) => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card__image">
        <img src="../assets/user.png" alt="${user.firstName}" />
      </div>
      <div class="card__body">
        <h1>I.F: <span>${user.firstName} ${user.lastName}</span></h1>
        <h3><strong>Yoshi:</strong> <span>${user.age}</span></</h3>
        <h3><strong>Phone:</strong> <span>${user.phone}</span></h3>
      </div>
      <div class="tags__card">
        <button class="about__User">About</button>
      </div>
    `;

    const aboutBtn = card.querySelector(".about__User");
    aboutBtn.addEventListener("click", () => {
      const overlay = document.getElementById("modalOverlay");
      const modalContent = document.getElementById("modalContent");

      modalContent.innerHTML = `
        <h2>I.F: <span>${user.firstName} ${user.lastName}</span></h2>
        <p><strong>Yoshi:</strong> <span>${user.age}</span></p>
        <p><strong>Email:</strong> <span>${user.email || "No email"}</span></p>
        <p><strong>Phone:</strong> <span>${user.phone}</span></p>
        <p><strong>Jins:</strong> <span>${user.gender}</span></p>
        <p><strong>UserName:</strong> <span>${user.username}</span></p>
        <p><strong>Parol:</strong> <span>${user.password}</span></p>
        <p><strong>Tug'ilgan sana:</strong> <span>${user.birthDate}</span></p>
        <p><strong>Qon guruhi:</strong> <span>${user.bloodGroup}</span></p>
      `;

      overlay.classList.add("show");
    });

    fragmend.appendChild(card);
  });

  wrapperEl.appendChild(fragmend);
}

function fetchData(endpoint) {
  fetch(`${usersURL}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
      reanderDatausers(data);
    })
    .catch((err) => {
      console.log("Xatolik:", err);
    })
    .finally(()=>{
      SkelatonEl.style.display = "none"
    })
}

window.addEventListener("load", () => {
  fetchData("users");
});

const overlay = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("closeModalBtn");

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("show");
  }
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
          </div>
      `;
      fragmend.appendChild(div)
      console.log(div);
      
  });
  SkelatonEl.appendChild(fragmend)
}

createScelaton()