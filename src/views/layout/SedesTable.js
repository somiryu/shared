import React ,{useState} from 'react'
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
import {Agents} from "../../shared/Utils/engine"

function SedesTable(props){
    const [leaders,setLeaders] = useState([])
    const listener = () =>{
        Agents.topLeaderboard("xp",(r)=>{
            setLeaders(r.leaderboard)
        })
    }

	return(
        <Flex
            direction="column"
            style={{width: "100%"}}
        >
            {props.sedes.map((sede, index) => {
                return (
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
                                    avatar={sede.image}
                                    containerImage={btnsedesmarcomapa}
                                    padding={"15px 6px"}
                                    listener={() => listener()}
                                    maskBorder={100}
                                    />
                                </Flex>
                                <Flex style={{width: "70%"}} direction="column">
                                    <Flex style={{width: "100%"}}>
                                        <h2>{"Sede " + sede.name}</h2>
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
                                               <CurrencyHorizontal
                                                    className="source"
                                                    quantity={30}
                                                    image={hut}
                                                    direction={"row"}
                                                    displayX={false}
                                                    id="middleContent"
                                                    childStyle={{ color:'var(--yellow-ligth)'}}
                                                    styleBox={{display: "flex"}}
                                                    idX="xmiddleContent"
                                                ></CurrencyHorizontal>
                                            </Flex>
                                            <Flex
                                                className="source"
                                            >
                                                <p style={{color:'var(--yellow-ligth)'}}> &nbsp; X &nbsp; {props.multiplicator ? props.multiplicator : "2.0"}</p>
                                            </Flex>
                                        </Flex>
                                        <Flex style={{ width: "50%",height: '100%' }}>
                                            <CurrencyHorizontal
                                                quantity={30}
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
                )
            })
            }
            <Leaderboard leaders = {leaders}>
            </Leaderboard>
        </Flex>
	)
}

export default SedesTable;