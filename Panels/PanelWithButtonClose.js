//id, image, padding(5%), debug, children(opt) (FROM IMAGEDPANEL)
//imageClose; (if not, does not appears: optional)
//children || Optional
//listenerClose
//close = show button close
//sizeClose = 3% size button close

import React, {useState, useEffect} from "react";
import ImagedPanel from "./ImagedPanel"

export default (props) => {
    const [close, setclose] = useState(true);
    useEffect(() => {
       if(props.close === false) setclose(props.close)
    }, [props.close]) 
    return (
        <div id={props.id + "_panel"} className={props.debug ? "testBox PanelWithButtonClose" : "PanelWithButtonClose"}>
            <ImagedPanel {...props}>
                <div className={props.debug ? "testBox" : ""} style={{width:'99%', height:'99%'}}>
                    {props.imageClose &&
                        <div onClick={props.listenerClose} className={props.debug ? "testBox" : ""} style={{cursor:'pointer', display:close ? 'flex' : 'none' ,position:'absolute', right:'4%',top:'6%', width:`calc(${props.sizeClose || '3%' } + 5px)`, alignItems:"flex-start"}}>
                            <img style={{width: '100%'}} src={props.imageClose} alt='close'></img>
                        </div>
                    }
                    {props.children}
                </div>
            </ImagedPanel>
        </div>
    )
}