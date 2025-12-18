import Outdoor from "./components/Outdoor.js";
import ExploreSection from "./components/ExploreSection.js";
import TheJournal from "./components/TheJournal.js";
import FooterSection from "./components/FooterSection.js";


const app = document.getElementById("app");

app.appendChild(Outdoor());
app.appendChild(ExploreSection());
app.appendChild(TheJournal());
app.appendChild(FooterSection());