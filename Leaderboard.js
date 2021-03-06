import React,{useState} from "react"
// import Loading from "./Loading"
// import medalGold from "../../images/ICONS/medalGold.png"
// import medalSilver from "../../images/ICONS/medalSilver.png"
// import medalBronze from "../../images/ICONS/medalBronze.png"
//import Robot from "../robots/Robot.js"
import Flex from "./Containers/Flex"
import "./Leaderboard.css"
import MaskedAvatar from "./Hubs/MaskedAvatar"
import avatar from "../images/Graficos/estudiante.png"
import contaavatar from "../images/general/contaavatar.png"
//const medals = [medalGold, medalSilver, medalBronze]
import gear from "../images/Graficos/engranajejugadores.png"
// import {Players} from  '../shared/Utils/engine'

export default props => {
	const [leaderboard] = useState(props.leaders || [])
	return(
		<Flex className="LeaderBoard" style={{width:"100%"}} direction="column">
			{leaderboard.map((e,i) =>
				<div key={i} className="lbItem" style={{width:"100%",height:"27%", margin:"2% 0",textAlign: "center",paddingRight:"5%",paddingLeft:"5%", background: "linear-gradient(to left, rgba(25,15,11,1) 0%, rgba(66,33,11,1) 25%, rgba(96,56,19,1) 51%, rgba(66,33,11,1) 80%, rgba(25,15,11,1) 100%)", borderTop:"3px var(--yellow) solid", borderBottom:"3px var(--yellow) solid" }}>
					<div style={{width:"10%"}}>
						<img src={gear} alt={`gear${(i+1)}`}>
						</img>
					</div>
					<div className="" style={{width:"5%"}}>
						<h1>{e.position}</h1>
					</div>
					<Flex style={{width:"20%"}}>
						<MaskedAvatar
							id="colaborador1"
							avatar={e.agent.agent.avatars.selected.image.thumb || avatar}
							containerImage={contaavatar}
							padding={"18% 17%"}
							listener={() => console.log('Clicked MarkedAvatar')}
							maskBorder={100}
						>
						</MaskedAvatar>
					</Flex>
					<Flex style={{width:"auto"}}>
						<h2>{e.agent.basic.name}</h2>
					</Flex>
					
				</div>
			)}
		</Flex>
	)
}