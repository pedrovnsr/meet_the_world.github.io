import ExploreCard from "./ExploreCard.js";

export default function ExploreSection() {

    const places = [
        {
            city: "Naeroyfjordeen",
            country: "NORWAY",
            image: "images/Naeroyfjordeen.jpg"
        },
        {
            city: "Antelope Canyon",
            country: "UNITED STATES",
            image: "images/Canyon.jpg"
        },
        {
            city: "Grossglockner",
            country: "AUSTRIA",
            image: "images/Grossglockner.jpg"
        }
    ];

    const section = document.createElement("section");
    section.classList.add("explore");

    const title = document.createElement("h2");
    title.textContent = "Explore the world";

    const text = document.createElement("p");
    text.classList.add("explore-text");
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat in dui id porta. Maecenas commodo, urna quis porta cursus, mi nunc ultricies lorem, ac vestibulum dolor turpis ac purus. Praesent blandit imperdiet ante in rhoncus. Proin iaculis feugiat tempor.";

    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("explore-cards");

    places.forEach(place => {
        const card = ExploreCard(
            place.city,
            place.country,
            place.image
        );
        cardsContainer.appendChild(card);
    });

    const button = document.createElement("button");
    button.classList.add("see-more");
    button.textContent = "SEE MORE";

    section.append(title, text, cardsContainer, button);

    return section;
}
