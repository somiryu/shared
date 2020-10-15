import React,{useState, useEffect} from "react"
import Loading from "./Loading"
import medalGold from "../../images/ICONS/medalGold.png"
import medalSilver from "../../images/ICONS/medalSilver.png"
import medalBronze from "../../images/ICONS/medalBronze.png"
import BigRobot from "../robots/BigRobot"
import "./Leaderboard.css"
const medals = [medalGold, medalSilver, medalBronze]


export default props => {
	const [leaderboard, setLeaderboard] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(()=>{
		if(loading){
			window.engine.topLeaderboard(props.tag, (lb)=>{
				setLoading(false)
				let lbFinal = lb.leaderboard.map(e => {
				 	return window.robots.buildCreation(e.agent)
				})
				setLeaderboard(lbFinal)
			}, {agent_type: "AgentItem", page:1, per_page:3})
		}
	},[loading, props.tag])

	if(loading) return <Loading id="lbLoad"/>
	return(
		<div className="LeaderBoard">
			{leaderboard.map((e,i) =>
				<div key={i} className="lbItem">
					<div className="lb_position">
						<img src={medals[i]} alt={`Posicion ${i+1}`}/>
					</div>
					<div className="lb_player">
						<BigRobot robot={e} showComments={false} smallEf={true}/>
					</div>
				</div>
			)}
		</div>
	)
}