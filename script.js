// Дані тренувань
const fitnessSchedule = [
  {
    id: 1,
    name: "Yoga",
    price: 300,
    description: "Спокійне тренування для гнучкості",
    trainer: "Anna",
  },

  {
    id: 2,
    name: "CrossFit",
    price: 450,
    description: "Інтенсивне силове тренування",
    trainer: "Oleh",
  },

  {
    id: 3,
    name: "Pilates",
    price: 350,
    description: "Тренування для постави та м’язів",
    trainer: "Ira",
  },

  {
    id: 4,
    name: "Boxing",
    price: 500,
    description: "Кардіо та боксерські вправи",
    trainer: "Max",
  },
];

// ===============================
// 1. Динамічне наповнення catalog
// ===============================

const catalogContainer = document.querySelector("#catalog-container");

if (catalogContainer) {
  fitnessSchedule.forEach((item) => {
    const card = document.createElement("div");

    card.classList.add("col-md-4");

    card.innerHTML = `
      <div class="card p-4 h-100">
        <h3>${item.name}</h3>

        <p>${item.price} грн</p>

        <button
          class="btn btn-primary details-btn"
          data-description="${item.description}"
        >
          Детальніше
        </button>
      </div>
    `;

    catalogContainer.append(card);
  });

  // Кнопка детальніше
  const buttons = document.querySelectorAll(".details-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert(button.dataset.description);
    });
  });
}

// ===============================
// 2. Обробка форми
// ===============================

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Дякуємо за заявку! Ми зв'яжемося з вами.");
  });
}

// ===============================
// 3. Set для select
// ===============================

const trainingSelect = document.querySelector("#training-type");

if (trainingSelect) {
  const uniqueTrainings = new Set(fitnessSchedule.map((item) => item.name));

  uniqueTrainings.forEach((training) => {
    const option = document.createElement("option");

    option.textContent = training;

    trainingSelect.append(option);
  });
}
