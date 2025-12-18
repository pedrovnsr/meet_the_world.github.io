export default function JournalCard(date, title, description, image) {
    const card = document.createElement("article");
    card.classList.add("journal-card");

    const img = document.createElement("img");
    img.src = image;
    img.alt = title;

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("journal-date");
    dateSpan.textContent = date;

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");
    p.textContent = description;

    card.append(img, dateSpan, h3, p);

    return card;
}
