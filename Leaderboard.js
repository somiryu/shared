import React,{useState, useEffect} from "react"
import Loading from "./Loading"
import medalGold from "../../images/ICONS/medalGold.png"
import medalSilver from "../../images/ICONS/medalSilver.png"
import medalBronze from "../../images/ICONS/medalBronze.png"
import Robot from "../robots/Robot.js"
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
					return {robot: window.robots.build(e.agent, e.item), points:e.quantity, player: e.owner}
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
						<Robot id={"lbrobot"+i} data={e.robot} noLabel={true}/>
					</div>
					<div className="lb_points">
						<div>Dueño:</div>
						<div>{e.player.basic.name}</div><br/>
						<div>XP: {e.points}</div>
					</div>
				</div>
			)}
		</div>
	)
}