import React,{useState} from "react";
//images test
import ImageTest from "../shared/ExampleImages/Buttons/boton.png";
//screens
import SimpleForm from "../shared/Forms/SimpleForm"
import LegendScreen from "../views/LegendScreen"
import MapScreen from "../views/MapScreen"
import ProfileScreen from "../views/ProfileScreen"
import SedeScreen from "../views/SedeScreen"
import RolProfileScreen from "../views/RolProfileScreen"

export default (props) =>{ 
	const [compType, setCompType] = useState("Forms");

	return(
		<div className="Components">
			<h3>{compType}</h3>
			<But text="Forms" listener={setCompType}/>
            <But text="Legend" listener={setCompType}/> 
			<But text="Map" listener={setCompType}/>
			<But text="Profile" listener={setCompType}/>
			<But text="Sede" listener={setCompType}/>
			<But text="RolProfile" listener={setCompType}/>     
			<hr/>
			{compType === "Forms" &&
				<SimpleForm 
					title={<h3 style={{textAlign:"center"}}>Hola soy un titulo</h3>} 
					stylesInput={{borderRadius:"50px",border:"1px solid black"}}		
					inputs={
						[{id:"name", type:"text", placeholder:"Nombre", name:"name"},
						{id:"email", type:"text", placeholder:"Correo", name:"email"},]
					}
					button={{id:"button",label:<label>Ingresar</label>, image:ImageTest,}}
					idForm={"formstart"}
					styles={{width:"40%",height:"300px",padding:"10px",border:"1px solid black"}}
                    listener={(dic)=>{console.log(dic)}}
				/>
			}
            {compType === "Legend" &&
				<LegendScreen 
					title={<h3 style={{textAlign:"center"}}>Hola soy un titulo</h3>} 
					legend="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
					styles={{width:"40%",height:"300px",padding:"10px",border:"1px solid black"}}
                    listener={()=>{console.log("hola es legend screen")}}
                    button={{id:"button",label:<label>Siguiente</label>, image:ImageTest,}}
				/>
			}
			{compType === "Map" &&
				<MapScreen />
			}
			{compType === "Profile" &&
				<ProfileScreen />
			}
			{compType === "Sede" &&
				<SedeScreen />
			}
			{compType === "RolProfile" &&
				<RolProfileScreen />
			}
		</div>
	)
}


function But(props){
	return(
		<div 
			style={{margin:2,backgroundColor: "blue", color:"white", cursor: "pointer", width:100, padding: 10, textAlign:"center", display:"inline-block"}}
			onClick={()=>{props.listener(props.text)}}>
			{props.text === true ? "OFF" : props.text === false ? "ON" : props.text}
		</div>
	)
}