import Header from "./Header.js";

export default function Outdoor() {
    const outdoor = document.createElement("section");
    outdoor.classList.add("outdoor");

    const header = Header();
    outdoor.appendChild(header);

    const content = document.createElement("div");
    content.classList.add("outdoor-content");

    const title = document.createElement("h1");
    title.textContent = "The Great Outdoors";

    const text = document.createElement("p");
    text.textContent = "Wander often. Wonder always.";

    const playButton = document.createElement("button");
    playButton.classList.add("play-button");
    playButton.textContent = "▶";

    content.append(title, text, playButton);

    const thumbnail = document.createElement("img");
    thumbnail.src = "./images/paisagem.jpg";
    thumbnail.classList.add("thumbnail");

    const video = document.createElement("iframe");
    video.src = "https://www.youtube.com/embed/1v-QlmIHKVM";
    video.classList.add("video");
    video.controls = true;

    playButton.addEventListener("click", () => {
        content.classList.add("fade-out");
        thumbnail.classList.add("fade-out");

        setTimeout(() => {
            thumbnail.style.display = "none";
            content.style.display = "none";
            video.style.display = "block";
            video.play();
        }, 600);
    });

    outdoor.append(thumbnail, content, video);
    return outdoor;
}
