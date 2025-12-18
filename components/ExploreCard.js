export default function ExploreCard(city, country, image) {
    const card = document.createElement("div");
    card.classList.add("explore-card");
    card.style.backgroundImage = `url(${image})`;

    const content = document.createElement("div");
    content.classList.add("card-content");

    const title = document.createElement("h3");
    title.textContent = city;

    const subtitle = document.createElement("span");
    subtitle.textContent = country;

    content.append(title, subtitle);
    card.appendChild(content);

    return card;
}
