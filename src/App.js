import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cointegration, Revenue, Modeling } from "./Pages/Cointegration";
import { Reports, Reports1, Reports2, Reports3 } from "./Pages/Reports";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/cointegration" exact component={Cointegration} />
          <Route path="/cointegration/modeling" exact component={Modeling} />
          <Route path="/cointegration/revenue" exact component={Revenue} />
          <Route path="/reports" exact component={Reports} />
          <Route path="/reports/reports1" exact component={Reports1} />
          <Route path="/reports/reports2" exact component={Reports2} />
          <Route path="/reports/reports3" exact component={Reports3} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
