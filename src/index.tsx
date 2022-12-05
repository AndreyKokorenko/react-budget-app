import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppContext } from "./context/AppContext";
import { BudgetContextProvider } from "./context/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";
import GlobalStyles from "./ui/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContext
    components={[CurrencyContextProvider, ExpensesContextProvider, BudgetContextProvider]}
  >
    <GlobalStyles />
    <App />
  </AppContext>
);
