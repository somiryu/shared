import React,{useState,useEffect} from "react";
//images test
import button from "../images/buttons/btnprincipal.png";
import imageTitle from "../images/general/bienvenido.png";
import SimpleForm from "../shared/Forms/SimpleForm"
import Flex  from "../shared/Containers/Flex"
import logosantoto from "../images/general/logosantoto.png";
import {getCookie, Players, Trivia} from "../shared/Utils/engine";
import engine from "../shared/Utils/engine";
const ID_IN_APP = getCookie('iia');
const sedes = [
    {
        extension: 'usantotomas',
        team: 'Bogota'
    }
]
function StartScreen(props) {
    const [wrong_email] = useState("Email incorrecto")
    const [wrong_password] = useState("Verifica tus credenciales.")
    console.log(props)
    useEffect(() => {
        if(engine.getUser()){
            console.log("comprobando usuario")
            Players.get(ID_IN_APP, (response) => {
                console.log('Response ==> ', response)
            })
            Trivia.all( (trivias) => {
                console.log('Trivias ===> ', trivias)
            })
            // props.listener(1); 
        }
    }, [])

    const handleSubmit =(data)=>{
            /* LOGIN */
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email) ){} else { 
            window.flash("Verifica correo electronico", "error")
            return
        }
        Players.create(data.document,data,(r)=>{
            engine.logIn(data.document)
            props.listenerPlayer(1,r);
        });
        // Players.get_or_create();
        // window.engine.getPlayer(data.password, (response) => {
        //     if(response.success === false){
        //         console.log(wrong_password);
        //     } else {
        //         if(response.basic.email !== data.email){
        //             console.log(wrong_email);
        //         } else {
        //             /* Login succesful */
        //             window.engine.logIn(data.password);
        //         }
        //     }
        // })
    }
    		
	


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
                        {id:"document", type:"text", placeholder:"Documento", name:"document"},]
                    }
                    button={{id:"button",label:<label className='label-bg' style={{fontWeight:'600'}}>INGRESAR</label>, image:button,}}
                    idForm={"formstart"}
                    styles={{width:"auto",minHeight:"450px",padding:"10px",alignItems:"center"}}
                    listener={(dic)=>{
                        console.log(dic);
                        //props.listener(1);
                        handleSubmit(dic);
                    }}
                />
            </Flex>
        </Flex>
	)
}

export default StartScreen;