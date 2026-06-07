/* ===== BOOKING MANAGER CLASS ===== */

class BookingManager {
  constructor() {
    this.bookings = JSON.parse(localStorage.getItem("fitlifeBookings")) || [];
  }

  addBooking(training) {
    this.bookings.push(training);

    this.saveBookings();
  }

  removeBooking(id) {
    this.bookings = this.bookings.filter((item) => item.id !== id);

    this.saveBookings();
  }

  clearBookings() {
    this.bookings = [];

    this.saveBookings();
  }

  saveBookings() {
    localStorage.setItem("fitlifeBookings", JSON.stringify(this.bookings));

    updateBookingCounter();
  }

  getBookings() {
    return this.bookings;
  }
}

/* ===== CREATE OBJECT ===== */

const bookingManager = new BookingManager();

async function loadProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=1");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

loadProducts();

/* ===== MENU COUNTER ===== */

function updateBookingCounter() {
  const nav = document.querySelector("nav ul");

  if (!nav) return;

  let counter = document.querySelector("#booking-counter");

  if (!counter) {
    counter = document.createElement("li");

    counter.id = "booking-counter";

    nav.append(counter);
  }

  counter.textContent = "Записано: " + bookingManager.getBookings().length;
}

updateBookingCounter();

/* ===== TRAININGS DATA ===== */

const trainings = [
  {
    id: 1,
    title: "Ранкова Йога",
    price: 300,
    description: "Спокійне тренування для гнучкості та релаксу.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },

  {
    id: 2,
    title: "Пілатес",
    price: 350,
    description: "Тренування для постави та зміцнення м'язів.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },

  {
    id: 3,
    title: "Кросфіт",
    price: 450,
    description: "Інтенсивне силове та кардіо тренування.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
  },

  {
    id: 4,
    title: "Бокс",
    price: 500,
    description: "Кардіо та боксерські вправи для витривалості.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
  },

  {
    id: 5,
    title: "Стретчинг",
    price: 250,
    description: "Розтяжка для гнучкості та відновлення м'язів.",
    image:
      "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 6,
    title: "Тайбо",
    price: 400,
    description: "Поєднання фітнесу, кардіо та бойових мистецтв.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
];

/* ===== RENDER TRAININGS ===== */

const catalogContainer = document.querySelector("#catalog-container");

function renderProducts() {
  if (!catalogContainer) return;

  catalogContainer.innerHTML = "";

  trainings.forEach((item) => {
    const card = document.createElement("div");

    card.classList.add("col-md-4");

    card.innerHTML = `
      <div class="card p-4 h-100">

        <img
          src="${item.image}"
          alt="${item.title}"
          class="img-fluid mb-3"
          style="
            height: 220px;
            object-fit: cover;
            border-radius: 12px;
          "
        >

        <h3>${item.title}</h3>

        <p>
          <strong>Ціна:</strong>
          ${item.price} грн
        </p>

        <p>${item.description}</p>

        <button
          class="btn btn-primary book-btn"
          data-id="${item.id}"
          data-title="${item.title}"
        >
          Записатися
        </button>

      </div>
    `;

    catalogContainer.append(card);
  });

  const buttons = document.querySelectorAll(".book-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const booking = {
        id: Number(button.dataset.id),
        title: button.dataset.title,
      };

      bookingManager.addBooking(booking);

      alert("Ви записались на: " + booking.title);
    });
  });
}

renderProducts();

/* ===== CONTACT FORM ===== */

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name");

    const email = document.querySelector("#email");

    const phone = document.querySelector("#phone");

    const message = document.querySelector("#message");

    /* ===== VALIDATION ===== */

    if (name.value.trim().length < 2) {
      alert("Ім'я повинно містити мінімум 2 символи");

      return;
    }

    if (
      message.value.toLowerCase().includes("спам") ||
      message.value.toLowerCase().includes("реклама")
    ) {
      alert("Заборонено використовувати слова: спам або реклама");

      return;
    }

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();

      return;
    }

    /* ===== FORM DATA ===== */

    const formData = new FormData(contactForm);

    const formObject = Object.fromEntries(formData.entries());

    console.log("Дані форми:", formObject);

    alert("Дякуємо! Вашу заявку успішно відправлено.");

    contactForm.reset();
  });
}

/* ===== TRAINING SELECT ===== */

const trainingSelect = document.querySelector("#training-type");

if (trainingSelect) {
  trainings.forEach((training) => {
    const option = document.createElement("option");

    option.value = training.title;

    option.textContent = training.title;

    trainingSelect.append(option);
  });
}
