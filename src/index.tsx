import GlobalStyles from "./ui/globalStyles";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import {
  AppContext,
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContext
    components={[CurrencyContextProvider, ExpensesContextProvider, BudgetContextProvider]}
  >
    <GlobalStyles />
    <App />
  </AppContext>
);
