 import {Provider} from "react-redux";
import AgregarCliente from "./components/AgregarCliente";
import Lista from "./components/Lista";
 import {store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Lista/>
      <AgregarCliente/>
    </Provider>
  );
}

export default App;
