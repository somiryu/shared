//Requires Animations/AnimatedScore
//id, quantity, duration(2000), image, fontSize(1.1em), fontFamily(inherit), childStyle, styleX, 
//displayX => muestra x antes de el numero (ej: x3)
//imageWidth
//position = default(right) || center 
import React from 'react'
import AnimatedScore from "../Animations/AnimatedScore"

function CurrencyHorizontal(props) {
  // let position = props.position || 'right';
  let ubication = props.position === 'center' ? {
    position: 'absolute',
    top: '-10%',
    left: 0,
    right: 0,
    bottom: 0
  } : {};
  
  return (
    <div className={props.debug ? "testBox CurrencyHorizontal" : "CurrencyHorizontal"} style={{
      display: "flex", position: 'relative', height: '100%', width: '100%',flexDirection:(props.direction || "row"), textAlign: "center", alignItems: "center", justifyContent: (props.justify || "center")
    }}>
      <div className={props.debug ? "testBox img" : "img"} style={{ display: "inline-block", width: props.imageWidth,...props.styleImage }}>
        <img alt="curIcon" src={props.image} style={{ maxWidth: "100%" }} />
      </div>
      <div style={{display:"flex",justifyContent: "center",alignItems: "center"}}>
        {props.displayX && <div style={{ ...props.childStyle, ...props.styleX }}><span>x</span></div>}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <div className={props.debug ? "testBox qty font2" : "qty font2"} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: props.fontSize || "2em", fontFamily: props.fontFamily || "Bubblegum Sans", ...ubication  }}>
            <AnimatedScore id={props.id} className={props.classNameSpan} to={props.quantity} childStyle={props.childStyle || {}} duration={props.duration || 2000} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CurrencyHorizontal;
