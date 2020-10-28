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
// import ButtonImage from "./shared/Buttons/ButtonImage"¡
// import QuestionBarScreen from "./views/QuestionBarScreen"
// import QuestionWithTitleScreen from "./views/QuestionWithTitleScreen"
import fondo from "./images/general/fondopatron.png"
import PlayArea from "./shared/PlayArea"
import footer from './images/Graficos/footer.png'
import ChooseScreen from "./views/ChooseScreen"
import Flash from "./shared/Flash"
import EventEmitter from "events"
window.DEBUG = false;

window.EM = new EventEmitter();
window.flash = (message, type="success") => window.EM.emit('flash', ({message, type}));

function App() {
  const [layout,setLayout] = useState("Register")
  const [respuesta,setRespuesta] = useState(false)
  const [globalKeys,setGlobalKeys] = useState(0)
  const [secondaryBg] = useState(true)
  let pages =["Register","Legend","Choose","Mapa","Profile","Sede","Rol","Question","Feedback"]
  const listener = (indice) =>{
    setLayout(pages[indice])
  }
  const listenerQuestion = (indice,res) =>{
    setLayout(pages[indice])
    setRespuesta(res)
  }
  const listenerFeedback = (points) =>{
    setGlobalKeys(globalKeys + points)
    setLayout(pages[3])
  }
  let addClass;
  if (layout === "Mapa" || layout === "EndGame" || layout === "BeginGame") addClass = "SkyBackground";
  if (layout === "GameLayout" || layout === "Book") addClass = "PurpleBackground";
  if (layout === "Sabios") addClass = "SabioBackground";
  if (layout === "GameLayout" && secondaryBg) addClass = "PurpleBackground";
  const bgClass = "App " + addClass;
  return (
    <div className={bgClass+` general`}  style={{ overflow: "hidden", backgroundImage:fondo}}>
        {/* <div style={{position:"absolute",top:"5%", left:"5%"}}>
          <ButtonImage
              id="btn1"
              image={btnlideres}
              listener={(id) => { 
                console.log("si estoy")
                if(i>=pages.length){
                  i = 0
                }else{
                  i=i+1; 
                }
                setLayout(pages[i]); 
              }}
              scale={1.1} //1.1
              style={{ margin: 10 }} // {}
          />
        </div> */}
        {layout === "Componentes" && 
          <Components>
          </Components>
        }
       <PlayArea width={layout === 'BeginGame' ? 1400 : 1000}>
        {(layout !== "Register" && layout !== "Legend" && layout !== "Choose") &&
          <Header listener={listener} layout={layout} points={globalKeys}></Header>
        }
       
        {layout === "Register" &&
          <StartScreen
            listener = {listener}
          >

          </StartScreen>
        }
        {layout === "Legend" &&
          <LegendScreen
            listener = {listener}
          >
          </LegendScreen>
        }
         {layout === "Mapa" &&
          <MapScreen listener = {listener}>
          </MapScreen>
        }
        {layout === "Profile" &&
          <ProfileScreen listener = {listener}>
          </ProfileScreen>
        }
        {layout === "Sede" &&
          <SedeScreen listener = {listener}>
          </SedeScreen>
        }
        {layout === "Rol" &&
          <RolProfileScreen listener = {listener}>
          </RolProfileScreen>
        }
        {layout === "Question" &&
          <QuestionScreen listener = {listenerQuestion}>
          </QuestionScreen>
        }
        {layout === "Feedback" &&
          <FeedBackScreen 
            listener = {listenerFeedback}
            respuesta = {respuesta}
          >
          </FeedBackScreen>
        }
        {layout === "Choose" &&
          <ChooseScreen listener = {listener}>
          </ChooseScreen>
        }
        <Flash/>
        
      </PlayArea>
      <div style={{display:"flex",justifyContent:"center",position:"fixed",bottom:"0%",width:"100%",height:"100px",backgroundImage:`url(${footer})`}}>
        {/* <img src={footer} alt="footer">
        </img> */}
      </div>
    </div>
  );
}

export default App;
