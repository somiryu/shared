import React from 'react'
import ButtonImageWithLabel from  '../shared/Buttons/ButtonImageWithLabel'
import logosantoto from "../images/general/logosantoto.png";
import button from "../images/buttons/btnprincipal.png";
import imageTitle from "../images/general/bienvenido.png";
import Flex from '../shared/Containers/Flex';


function LegendScreen(props) {
    return (
        <Flex id="legendScreen" align='center' justify='center' style={{height: "100vh"}}>
            <Flex align='center' justify='center' direction='column' style={{margin: "auto", maxWidth: "400px",...props.styles}}>
                <Flex style={{padding:"30px"}}>
                    <img alt={"logo"} src={logosantoto} style={{width:"100%",padding:"5px"}}></img>
                </Flex >
                {props.title && 
                    props.title
                }
                <Flex>
                    <img alt={"logo"} src={imageTitle} style={{width:"100%",padding:"10px"}}></img>
                </Flex> 
                {props.legend || <p style={{textAlign:"center",padding:"25px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
                <Flex style={{ justifyContent:"center", margin:"0 auto",width:props.widthButton || "auto p"}}>
                    <ButtonImageWithLabel
                        id={props.buttonId || "firstbutton"}
                        image={props.buttonImage || button}
                        label={props.buttonLabel || <label className='label-bg' style={{fontWeight:'600'}}>INGRESAR</label>}
                        listener={() =>{
                            props.listener(2)
                        }}
                        
                    >
                    </ButtonImageWithLabel>
                </Flex>
            </Flex> 
        </Flex>
    )
}

export default LegendScreen;