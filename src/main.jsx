import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { legacy_createStore as createStore } from "redux";
import coffeeReducer from "./reducers/coffeeReducer";
import { Provider } from "react-redux";

const store = createStore(coffeeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
