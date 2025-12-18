export default function FooterSection() {
    const section = document.createElement("section");
    section.classList.add("footer-section");

    const text = document.createElement("p");
    text.textContent = "Lorem ipsum dolor sit amet.     |";

    const nav = document.createElement("div");
    nav.classList.add("footer-nav");

    ["ABOUT", "EXPLORE", "JOURNAL", "SEARCH"].forEach(label => {
        const btn = document.createElement("button");
        btn.textContent = label;
        nav.appendChild(btn);
        btn.classList.add("footer-button");
    });

    section.append(text, nav);
    return section;
}
