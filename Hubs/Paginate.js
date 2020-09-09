import React, {useState, useEffect} from "react";
import AnimatedText from "../Animations/AnimatedText"

export default (props) =>{
	const currentText = props.text.split(". ")
	const [currentIndex, setCurrentIndex] = useState(0)

	if(!currentText[currentIndex]){
		if(props.onFinish) props.onFinish()
	}
	
	useEffect(()=>{
		setCurrentIndex(0)
	}, [props.text])

	let text = currentText[currentIndex]
	if(currentText[currentIndex + 1]) text += "..."
	return(
		<div className="Paginate">
			<div className="paginateText">
				<AnimatedText
					value={text} 
					id={"paginate_"+currentIndex} 
				/>
			</div>
			{currentText[currentIndex + 1] ? 
				<div className="paginateButton" onClick={()=>setCurrentIndex(currentIndex + 1)}>
					{props.button}
				</div>
				:
				props.onFinish && <div className="paginateButton"  onClick={()=>props.onFinish()}>
					{props.button}
				</div>
			}
		</div>
	)
}