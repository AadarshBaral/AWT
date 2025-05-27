const modal = document.getElementById("modal");
const cardContainer = document.getElementById("card-container");
const noCards = document.getElementById("no-cards");
const tagsContainer = document.getElementById("tags-container");

function toggleModal() {
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

let selectedCategory = null;
function quickCategory(cat) {
    selectedCategory = cat;
    console.log('ahhah', cat)
    Array.from(tagsContainer.children).forEach(span => {
        span.style.backgroundColor = (span.id === cat) ? "#4981f8" : "#2b3e7f";
    });
}

function renderCard(question, answer, category) {
    const card = document.createElement("div");
    card.className = "card";

    const inner = document.createElement("div");
    inner.className = "card-inner";

    inner.innerHTML = `
        <div class="front">
            <h4>Question</h4>
            <h2>${question}</h2>
            <p>Click to flip</p>
        </div>
        <div class="back">
            <h4>ANSWER</h4>
            <h2>${answer}</h2>
            <div class="category-label">${category}</div>
            <p>Click to flip back</p>
        </div>
    `;

    card.appendChild(inner);

    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });

    cardContainer.appendChild(card);
}

async function fetchCategories() {
    try {
        const res = await fetch("http://localhost:3000/flipcard/all-categories");
        const categories = await res.json();

        tagsContainer.innerHTML = "";
        categories.forEach(cat => {
            const span = document.createElement("span");
            span.textContent = cat.name;
            span.onclick = () => quickCategory(cat.id);
            span.id = cat.id;
            tagsContainer.appendChild(span);
        });
    } catch (err) {
        console.error("Failed to fetch categories", err);
    }
}

async function loadCards() {
    try {
        const res = await fetch("http://localhost:3000/flipcard/all-cards");
        const cards = await res.json();

        if (cards.length === 0) return;

        noCards.style.display = "none";
        cardContainer.innerHTML = "";

        cards.forEach(card => {
            renderCard(card.question, card.answer || "No answer", card.category?.name || "Uncategorized");
        });
    } catch (err) {
        console.error("Failed to load cards", err);
    }
}

async function addCard() {
    const task = document.getElementById("question").value.trim();
    const answer = document.getElementById("answer").value.trim();
    const categoryId = selectedCategory;

    if (!task || !answer || !categoryId) {
        alert("Please fill all fields and select a category.");
        return;
    }
    console.log("onclick", task, answer, categoryId)
    try {
        const res = await fetch("http://localhost:3000/flipcard/create-card", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                question: task,
                answer,
                categoryId: categoryId,
            }),
        });

        if (!res.ok) throw new Error("Failed to add card");

        const newCard = await res.json();
        renderCard(newCard.question, newCard.answer || "No answer", newCard.categoryId);

        noCards.style.display = "none";
        toggleModal();
        document.getElementById("question").value = "";
        document.getElementById("answer").value = "";
        selectedCategory = null;
        Array.from(tagsContainer.children).forEach(span => {
            span.style.backgroundColor = "#2b3e7f";
        });

    } catch (err) {
        console.error(err);
        alert("Something went wrong adding your card.");
    }
}

window.onload = async () => {
    await fetchCategories();
    await loadCards();
};