import JournalCard from "./JournalCard.js";

export default function TheJournal() {
    const section = document.createElement("section");
    section.classList.add("the-journal");

    const header = document.createElement("div");
    header.classList.add("the-journal-header");

    const h2 = document.createElement("h2");
    h2.textContent = "The Journal";

    const p = document.createElement("p");
    p.textContent = "Our favorite stories about travel and adventure";

    header.append(h2, p);

    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("journal-cards");

    const journalPosts = [
        {
            date: "SEPTEMBER 15, 2024",
            title: "Exploring the Mountains",
            description: "A journey through breathtaking landscapes and unforgettable trails.",
            image: "./images/journal1.jpg"
        },
        {
            date: "OCTOBER 02, 2024",
            title: "Life in the Desert",
            description: "Discover how beauty and resilience coexist in the driest places.",
            image: "./images/journal2.jpg"
        }
    ];

    journalPosts.forEach(post => {
        const card = JournalCard(
            post.date,
            post.title,
            post.description,
            post.image
        );
        cardsContainer.appendChild(card);
    });

    const button = document.createElement("button");
    button.classList.add("see-more");
    button.textContent = "ALL POSTS";

    section.append(header, cardsContainer, button);

    return section;
}