import { Cart } from "./components/Cart/Cart";
import { HeaderPrincipal } from "./components/Layout/HeaderPrincipal";
import { Meals } from "./components/Meals/Meals";
function App() {
  return (
    <>
      <Cart />
      <HeaderPrincipal />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
