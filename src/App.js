import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Author from "./Pages/Author";
import InputData from "./Pages/InputData.js"
import NotFound from './Pages/Notfound';
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import About from "./Pages/AboutApp";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #e83e8c 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/about/about-app" component={About} />
            <Route path="/about/about-author" component={Author} />
            <Route path="/input" component={InputData} />
            
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
