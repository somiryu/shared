import React,{useState} from 'react';
// import {BrowserRouter ,Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Header from '../src/views/layout/Header'
import Components from '../src/shared/Components'
import StartScreen from "./views/StartScreen"
import LegendScreen from "./views/LegendScreen"
import MapScreen from "./views/MapScreen"
import ProfileScreen from "./views/ProfileScreen"
import SedeScreen from "./views/SedeScreen"
import RolProfileScreen from "./views/RolProfileScreen"
import QuestionScreen from "./views/QuestionScreen"
import FeedBackScreen from "./views/FeedBackScreen"
// import QuestionBarScreen from "./views/QuestionBarScreen"
// import QuestionWithTitleScreen from "./views/QuestionWithTitleScreen"
import fondo from "./images/general/fondopatron.png"
import PlayArea from "./shared/PlayArea"
function App() {
  const [layout] = useState("Mapa")
  const [secondaryBg] = useState(true)
  let addClass;
  if (layout === "Mapa" || layout === "EndGame" || layout === "BeginGame") addClass = "SkyBackground";
  if (layout === "GameLayout" || layout === "Book") addClass = "PurpleBackground";
  if (layout === "Sabios") addClass = "SabioBackground";
  if (layout === "GameLayout" && secondaryBg) addClass = "PurpleBackground";
  const bgClass = "App " + addClass;
  return (
    <div className={bgClass+` general`}  style={{ overflow: "hidden", backgroundImage:fondo}}>
        {layout === "Componentes" && 
          <Components>
          </Components>
        }
       <PlayArea width={layout === 'BeginGame' ? 1400 : 1000}>
        {(layout !== "Register" && layout !== "Legend") &&
          <Header></Header>
        }
       
        {layout === "Register" &&
          <StartScreen>
          </StartScreen>
        }
        {layout === "Legend" &&
          <LegendScreen>
          </LegendScreen>
        }
         {layout === "Mapa" &&
          <MapScreen>
          </MapScreen>
        }
        {layout === "Profile" &&
          <ProfileScreen>
          </ProfileScreen>
        }
        {layout === "Sede" &&
          <SedeScreen>
          </SedeScreen>
        }
        {layout === "Rol" &&
          <RolProfileScreen>
          </RolProfileScreen>
        }
        {layout === "Question" &&
          <QuestionScreen>
          </QuestionScreen>
        }
        {layout === "Feedback" &&
          <FeedBackScreen>
          </FeedBackScreen>
        }
      </PlayArea>
    </div>
  );
}

export default App;
