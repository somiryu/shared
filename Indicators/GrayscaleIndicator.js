//id, style, offGrayscale, 
//on={true || false} (Def. false)
//duration=miloseconds Def. 500
//image
//listener
import React from 'react'

export default (props) => {
    let style = {...props.style, 
        position:"relative", 
        display:"inline-block",maxWidth:"100%",
    }
	let grayscale = props.offGrayscale || 100
	if(props.on){ grayscale = 0; style.cursor = "pointer"}
	const duration = (props.duration || 500) / 1000
    
    const clickHandler = () =>{
        if(props.on && props.listener) props.listener(props.id)
    }

    return( 
    	<div id={props.id} className={props.debug ? "GrayscaleIndicator testBox" : "GrayscaleIndicator"}
    		style={style} onClick={clickHandler}
    	>	
    		<img alt="icon" 
    			src={props.image} 
    			style={{
    				display:"block",
    				margin:"auto",
    				maxWidth:"100%",
    				filter: "grayscale(" + grayscale + "%)",
    				transition: "filter "+duration+"s"
    			}}
    		/>    	
      	</div>
    )
}

