import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const root = document.getElementById('root');

const header = new Header().render();
const main = new Main().render();
const footer = new Footer().render();

root.append(header, main, footer);

// console.log('dev server');