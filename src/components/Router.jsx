import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Drug from './drug/Drug.jsx'
import Search from './search/Search.jsx'

export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/drugs/search" />
          <Route exact path="/drugs/search"><Search /></Route>
          <Route path="/drugs"><Drug /></Route>
        </Switch>
    </BrowserRouter>
  );
}