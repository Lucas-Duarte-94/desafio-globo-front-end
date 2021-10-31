import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ShowCards } from "./pages/showCards";
import { CreateInsight } from './pages/createInsight';
import { CardContextProvider } from './contexts/cardsContext';

function App() {
  return (
    <BrowserRouter>
      <CardContextProvider>
        <Switch>
          <Route path='/' exact component={ShowCards} />
          <Route path='/create-insight' component={CreateInsight} />
        </Switch>
      </CardContextProvider>
    </BrowserRouter>
  );
}

export default App;
