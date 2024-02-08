import "./App.css";
import Navbar from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greetings={"Hola! Bienvenidos a nuestro sitio web!"} />
    </div>
  );
}

export default App;
