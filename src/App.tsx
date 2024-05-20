import { About } from "./components/About/About";
import { Advantagies } from "./components/Advantagies/Advantagies";
import { Coaches } from "./components/Coaches/Coaches";
import { Contacts } from "./components/Contacts/Contacts";
import { Feedback } from "./components/Feedback/Feedback";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./components/Intro/Intro";
import { Price } from "./components/Price/Price";
import { Sale } from "./components/Sale/Sale";

function App() {
    return (
        <main>
            <Intro />
            <About />
            <Price />
            <Coaches />
            <Advantagies />
            <Sale />
            <Feedback />
            <Contacts />
            <Footer />
        </main>
    );
}

export default App;
