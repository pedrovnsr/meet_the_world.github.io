export default function Header() {
    const header = document.createElement("header");
    header.classList.add("header");

    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const about = document.createElement("div");
    about.classList.add("nav-item");
    about.textContent = "ABOUT";

    const explore = document.createElement("div");
    explore.classList.add("nav-item");
    explore.textContent = "EXPLORE";

    const locationIcon = document.createElement("img");
    locationIcon.classList.add("location-icon");
    locationIcon.src = "assets/location.png";
    locationIcon.classList.add("nav-icon");

    const journal = document.createElement("div");
    journal.classList.add("nav-item");
    journal.textContent = "JOURNAL";

    const search = document.createElement("div");
    search.classList.add("nav-search");

    const searchIcon = document.createElement("img");
    searchIcon.src = "assets/lupa.png";
    searchIcon.alt = "Search";
    searchIcon.classList.add("nav-icon");

    const searchText = document.createElement("span");
    searchText.textContent = "SEARCH";

    search.append(searchIcon, searchText);

    nav.append(
        about,
        explore,
        locationIcon,
        journal,
        search
    );

    header.appendChild(nav);
    return header;
}
