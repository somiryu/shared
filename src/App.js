import React,{useState} from 'react';
import {BrowserRouter ,Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Header from '../src/views/layout/Header'
import Components from '../src/shared/Components'
import Screen from './views/Screen'
import StartScreen from "./views/StartScreen"
import ImageTest from "../src/shared/ExampleImages/Buttons/boton.png";
import LegendScreen from "./views/LegendScreen"
import MapScreen from "./views/MapScreen"
import ProfileScreen from "./views/ProfileScreen"
import SedeScreen from "./views/SedeScreen"
import RolProfileScreen from "./views/RolProfileScreen"
import QuestionScreen from "./views/QuestionScreen"
import FeedBackScreen from "./views/FeedBackScreen"
import QuestionBarScreen from "./views/QuestionBarScreen"
import QuestionWithTitleScreen from "./views/QuestionWithTitleScreen"

function App() {
  const [screen, setScreen] = useState("form")
  return (
    //<Screen></Screen>
    //<Components></Components>
    <BrowserRouter>
      <Header/>
      <Switch>
        {/* <Route path="/">
          <StartScreen></StartScreen>
        </Route> */}
        {/* <Route path="/">
          <LegendScreen></LegendScreen>
        </Route> */}
        {/* <Route path="/">
          <MapScreen></MapScreen>
        </Route> */}
        {/* <Route path="/">
          <ProfileScreen></ProfileScreen>
        </Route> */}
        {/* <Route path="/">
          <SedeScreen></SedeScreen>
        </Route>  */}
        <Route path="/">
          <RolProfileScreen></RolProfileScreen>
        </Route>  
        {/* <Route path="/">
          <QuestionScreen></QuestionScreen>
        </Route>  */}
        {/* <Route path="/">
          <FeedBackScreen></FeedBackScreen>
        </Route>  */}
        {/* <Route path="/">
          <QuestionBarScreen></QuestionBarScreen>
        </Route>  */}
        {/* <Route path="/">
          <QuestionWithTitleScreen></QuestionWithTitleScreen>
        </Route>  */}
      </Switch>
    </BrowserRouter>
    // {/* <Route path="/admin">
    //   <SimpleForm/>
    // </Route> */}
  );
}

export default App;
