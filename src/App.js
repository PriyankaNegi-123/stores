import "./App.css";
import ApparelList from "./components/ApparelList";
import { products } from "./data";

function App(){
    return(
        <main>
        <h1 className="title">Shirt Store</h1>
        <ApparelList products = {products}/>
        </main>
    )
}

export default App;
