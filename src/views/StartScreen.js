import React from "react";
//images test
import button from "../images/buttons/btnprincipal.png";
import imageTitle from "../images/general/bienvenido.png";
import SimpleForm from "../shared/Forms/SimpleForm"
import Flex  from "../shared/Containers/Flex"
import logosantoto from "../images/general/logosantoto.png";

function StartScreen(props) {

	return(
        <Flex id="startScreen" style={{height: "100vh"}}>
            <Flex style={{height: "100vh"}} align="center" justify="center" direction="column">
                <Flex style={{width:'90%'}}>
                    <img alt="logo" src={logosantoto} style={{width:"100%",padding:"5px"}} />
                </Flex>
                <SimpleForm 
                    stylesInput={{borderRadius:"50px",border:"2px solid #603813",width:"300px",textAlign:"center",background:"linear-gradient(to right, rgba(116,74,28,1) 0%, rgba(171,135,69,1) 11%, rgba(209,171,105,1) 89%, rgba(116,74,28,1) 100%)", }}		
                    ImageTitle = {imageTitle}
                    inputs={
                        [{id:"name", type:"text", placeholder:"Nombre", name:"name"},
                        {id:"email", type:"text", placeholder:"Correo", name:"email"},
                        {id:"documento", type:"text", placeholder:"Documento", name:"documento"},]
                    }
                    button={{id:"button",label:<label className='label-bg' style={{fontWeight:'600'}}>INGRESAR</label>, image:button,}}
                    idForm={"formstart"}
                    styles={{width:"auto",minHeight:"450px",padding:"10px",alignItems:"center"}}
                    listener={(dic)=>{
                        console.log(dic);
                        props.listener(1);
                    }}
                />
            </Flex>
        </Flex>
	)
}

export default StartScreen;