import React,{useState, useEffect} from 'react';
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
import LoadingScreen from "./views/LoadingScreen"
// import ButtonImage from "./shared/Buttons/ButtonImage"¡
// import QuestionBarScreen from "./views/QuestionBarScreen"
// import QuestionWithTitleScreen from "./views/QuestionWithTitleScreen"
import fondo from "./images/general/fondopatron.png"
import PlayArea from "./shared/PlayArea"
import Login from "./shared/Login"
import Absolute from "./shared/Containers/Absolute"
import footer from './images/Graficos/footer.png'
import ChooseScreen from "./views/ChooseScreen"
import Flash from "./shared/Flash"
import EventEmitter from "events"
import door from "./images/Iconos/inpuerta.png"
import engine from "./shared/Utils/engine"
import s from './models/Sedes'
window.DEBUG = false;
let sedes = s;
window.EM = new EventEmitter();
window.flash = (message, type="success") => window.EM.emit('flash', ({message, type}));
function App() {
  const [layout,setLayout] = useState("Loading")
  const [respuesta,setRespuesta] = useState(false)
  const [player,setPlayer] = useState()
  const [globalKeys,setGlobalKeys] = useState(100)
  const [secondaryBg] = useState(true)
  const [sede,setSede] = useState("Bogota")
  const [currentCahracter,setCurrentCahracter]=useState(false)
  const [pointsBar,setPointsBar]=useState(0)
  let date = new Date();
  let pages =["Register","Legend","Choose","Mapa","Profile","Sede","Rol","Question","Feedback","Login"]
  useEffect(() => {
    console.log('Player ===> ', player)
  }, [player])
  const listener = (indice) =>{
    setLayout(pages[indice])
  }

  const listenerChoose = (indice,player) =>{
    setPlayer(player)
    setLayout(pages[indice])
  }

  const listenerLogin = (indice,player) =>{
    setLayout(pages[indice])
    setPlayer(player)
  }
  const listenerQuestion = (indice,res,points) =>{
    setLayout(pages[indice])
    setRespuesta(res)
    if(points > 0){
      setPointsBar(points)
    }
  }
  const listenerFeedback = (points) =>{
    if(globalKeys===0 && points < 0){
      setGlobalKeys(0);
    }else{
      setGlobalKeys(globalKeys + points);
    }
    if(sede === "Bogota"){
      sedes[0].numbersOfKeys = sedes[0].numbersOfKeys + points
    }else{
      sedes.map((e)=>{
        if(e.name===sede){
          if(e.numbersOfKeys === 0){
            e.numbersOfKeys = 0
          }else{
            e.numbersOfKeys = e.numbersOfKeys - points
          }
        }
        return null
    })
    }
    setLayout(pages[3])
  }
  const listenerSede = (character) =>{
    setCurrentCahracter(character)
    setLayout(pages[6])
  }
  const LogOut = () =>{
    engine.logOut();
    setLayout(pages[0])
  }

  const changeSede = (newSede) =>{
    console.log("cambiando sede")
    setSede(newSede);
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
        {(layout !== "Register" && layout !== "Legend" && layout !== "Choose" && layout !== "Login" && layout !== "Loading") &&
          <Header 
            listener={listener} 
            layout={layout} 
            points={globalKeys}
            player = {player}
            >
            </Header>
        }

        {layout === "Login" &&
          <Login
            listener = {listener}
          >

          </Login>
        }

        {layout === "Register" &&
          <StartScreen
            listener = {listener}
            listenerPlayer = {listenerLogin}
          >

          </StartScreen>
        }
        {layout === "Legend" &&
          <LegendScreen
            listener = {listener}
            player ={player}
          >
          </LegendScreen>
        }
         {layout === "Mapa" &&
          <MapScreen 
            listener = {listener} 
            sede={sede} 
            changeSede={changeSede}
            sedes = {sedes}
            date = {date}
            currentKeys={globalKeys}
          >
          </MapScreen>
        }
        {layout === "Profile" &&
          <ProfileScreen 
            listener = {listener} 
            sede={sede}
            player = {player}
          >
          </ProfileScreen>
        }
        {layout === "Sede" &&
          <SedeScreen 
            listener = {listenerSede} 
            sede={sede}
            date = {date}
            >
          </SedeScreen>
        }
        {layout === "Rol" &&
          <RolProfileScreen listener = {listener} character={currentCahracter} sede={sede}>
          </RolProfileScreen>
        }
        {layout === "Question" &&
          <QuestionScreen 
            listener = {listenerQuestion} 
            sede={sede}
            player = {player}>
          </QuestionScreen>
        }
        {layout === "Feedback" &&
          <FeedBackScreen 
            listener = {listenerFeedback}
            respuesta = {respuesta}
            sede={sede}
            pointsBar = {pointsBar}
          >
          </FeedBackScreen>
        }
        {layout === "Choose" &&
          <ChooseScreen 
            listener = {listener}
            player={player}
          >
          </ChooseScreen>
        }
        {layout === "Loading" &&
          <LoadingScreen >
          </LoadingScreen>
        }
        {engine.getUser()&&
        <Absolute right={"80%"} top={"10%"} >
          <div onClick={LogOut}>
            <img src={door}>
            </img>
          </div>
        </Absolute>}
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
