import React ,{useState, useEffect} from 'react'
import Flex from "../../shared/Containers/Flex"
import Absolute from "../../shared/Containers/Absolute"
import ImagePanel from "../../shared/Panels/ImagedPanel"
import contasedes from "../../images/general/contasedes.png"
import btnsedesmarcomapa from "../../images/buttons/btnsedesmarcomapa@2x.png"
import MaskedAvatar from "../../shared/Hubs/MaskedAvatar"
import CurrencyHorizontal from "../../shared/Indicators/CurrencyHorizontal"
import copa from "../../images/Iconos/incopa.png"
import hut from "../../images/Iconos/insombrero.png"
import Leaderboard from "../../shared/Leaderboard"
import {Agents, Teams} from "../../shared/Utils/engine"
import sedeBogota from "../../images/Graficos/sedeprincipalbogota.png"
import sedeMedellin from "../../images/Graficos/sedemedellin.png"
import sedeBucaramanga from "../../images/Graficos/sedebucaramanga.png"
import sedeVillavicencio from "../../images/Graficos/sedeprincipalbogota.png"
import sedeTunja from "../../images/Graficos/sedeprincipalbogota.png"
import sedeDistancia from "../../images/Graficos/sededistancia.png"

const imagesSedes={
    "Bogota":sedeBogota,
    'Bucaramanga':sedeBucaramanga,
    'Tunja':sedeTunja,
    'Medellin':sedeMedellin,
    'Villavicencio':sedeVillavicencio,
    'Distancia':sedeDistancia,
}

function SedesTable(props){
    const [leaders,setLeaders] = useState([])
    const [sedesApi, setSedesApi] = useState([])

    useEffect(() => {
        Teams.getAll((r)=>{
            let sedesAux =[]
            r.map((e)=>{
                if(props.sedes){
                    props.sedes.map((e2)=>{
                        if(e.basic.name === e2.name){
                            sedesAux.push(e)
                        }
                    })
                } 
            })
            setSedesApi(sedesAux)
        })
    }, [])
    const listener = (teamId) =>{
        Agents.topLeaderboard("xp",(r)=>{
            console.log("======TOP========LEADERs",r.leaderboard)
            console.log("===Team==========",teamId)
            setLeaders(r.leaderboard)
        },{Team:teamId})
    }
    console.log("==============SEDES=================",sedesApi)
	return(
        <Flex
            direction="column"
            style={{width: "100%"}}
        >
            {sedesApi.map((sede, index) => {
                return (
                    <Flex 
                    style={{width:"100%"}}
                    direction="column"
                    >
                        <ImagePanel
                            image={contasedes}
                            padding={"0%"}
                            style={{ width: "100%" }}
                            onClick={()=>listener}
                        >
                            <Flex
                                style={{width: "100%",position: "relative",padding:"5%",height:"90%"}}
                                align="center"
                            >
                                <Flex
                                    style={{width: "20%"}}
                                    align={"center"}
                                >

                                </Flex>
                                <Flex
                                    style={{width: "80%"}}
                                    align={"center"}
                                >
                                    <Flex style={{width: "30%",position:"relative"}} >
                                        <Absolute  style={{
                                                backgroundColor: 'black',
                                                width: '70%',
                                                height: '78%',
                                                margin: '7% auto 34%',
                                                borderRadius: '50%',
                                        }}>

                                        </Absolute>
                                        <MaskedAvatar
                                        id="colaborador1"
                                        avatar={imagesSedes[sede.basic.name]}
                                        containerImage={btnsedesmarcomapa}
                                        padding={"15px 6px"}
                                        listener={() => listener(sede.basic.id)}
                                        maskBorder={100}
                                        />
                                    </Flex>
                                    <Flex style={{width: "70%"}} direction="column">
                                        <Flex style={{width: "100%"}}>
                                            <h2>{"Sede " + sede.basic.name}</h2>
                                        </Flex>
                                        <Flex style={{width: "100%"}}>
                                            <Flex
                                                className=""
                                                margin="5%"
                                                justify='center'
                                                align='center'
                                                style={{ width: "50%",height: '100%' }}
                                            >
                                                <Flex>
                                                    <img src={hut}></img>
                                                </Flex>
                                                <Flex
                                                    className="source"
                                                >
                                                    <p style={{color:'var(--yellow-ligth)'}}> &nbsp; X &nbsp; {sede.agent.currencies.multiplicador.quantity || "0"}</p>
                                                </Flex>
                                            </Flex>
                                            <Flex style={{ width: "50%",height: '100%' }}>
                                                <CurrencyHorizontal
                                                    quantity={sede.agent.currencies.vp.quantity || 0}
                                                    image={copa}
                                                    //displayX={true}
                                                    id="counterCup"
                                                    fontSize = "1em"
                                                ></CurrencyHorizontal>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </ImagePanel>
                        <React.Fragment>
                        {leaders.length > 0 &&
                                <Leaderboard leaders = {leaders}>
                                </Leaderboard>
                        }
                        </React.Fragment>
                    </Flex>
                    
                )
            })
            }
        </Flex>
	)
}

export default SedesTable;