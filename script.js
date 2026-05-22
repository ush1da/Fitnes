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

  const buttons = document.querySelectorAll(".details-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert(button.dataset.description);
    });
  });
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Дякуємо за заявку! Ми зв'яжемося з вами.");
  });
}

const trainingSelect = document.querySelector("#training-type");

if (trainingSelect) {
  const uniqueTrainings = new Set(fitnessSchedule.map((item) => item.name));

  uniqueTrainings.forEach((training) => {
    const option = document.createElement("option");

    option.textContent = training;

    trainingSelect.append(option);
  });
}

/* ===== FORM VALIDATION ===== */

const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const messageField = document.querySelector("#message");

    const message = messageField.value.toLowerCase();

    if (message.includes("спам") || message.includes("реклама")) {
      messageField.setCustomValidity(
        "Заборонено використовувати слова: спам або реклама"
      );
    } else {
      messageField.setCustomValidity("");
    }

    if (form.checkValidity()) {
      const formData = new FormData(form);

      const formObject = Object.fromEntries(formData.entries());

      console.log("Дані форми:", formObject);

      alert("Повідомлення успішно відправлено!");

      form.reset();
    } else {
      form.reportValidity();
    }
  });
}
