import React,{useState} from "react";
//images test
import ImageTest from "../shared/ExampleImages/Buttons/boton.png";
import SimpleForm from "../shared/Forms/SimpleForm"

function StartScreen(props) {

	return(
		<div className="Components">
            <SimpleForm 
                title={<h3 style={{textAlign:"center"}}>Hola soy un titulo</h3>} 
                stylesInput={{borderRadius:"50px",border:"1px solid black",width:"300px"}}		
                inputs={
                    [{id:"name", type:"text", placeholder:"Nombre", name:"name"},
                    {id:"email", type:"text", placeholder:"Correo", name:"email"},
                    {id:"documento", type:"text", placeholder:"Documento", name:"documento"},]
                }
                button={{id:"button",label:<label>Ingresar</label>, image:ImageTest,}}
                idForm={"formstart"}
                styles={{width:"auto",minHeight:"450px",padding:"10px",alignItems:"center"}}
                listener={(dic)=>{console.log(dic)}}
            />
		</div>
	)
}

export default StartScreen;