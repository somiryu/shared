import React,{useEffect} from "react";
//images test
import button from "../images/buttons/btnprincipal.png";
import imageTitle from "../images/general/bienvenido.png";
import SimpleForm from "../shared/Forms/SimpleForm"
import Flex  from "../shared/Containers/Flex"
import logosantoto from "../images/general/logosantoto.png";
import {getCookie, Players, Trivia, evaluateEmail,Teams} from "../shared/Utils/engine";
import engine from "../shared/Utils/engine";
import sedes from '../models/Sedes'
const ID_IN_APP = getCookie('iia');
// @usantotomas.edu.co (Bogota)
// @ustamed.edu.co (Medellin)
// @ustadistancia.edu.co (Distancia)
// @ustabuca.edu.co  (Bucaramanga)
// @ustatunja.edu.co (Tunja)
// @f2p.co (Azar en pruebas)
const sedesAuth = [
    {
        id:1,
        extension: 'usantotomas',
        team: 'Bogota'
    },
    {
        id:7,
        extension:"ustamed",
        team:"Medellin",
    },
    {
        id:4,
        extension:"ustadistancia",
        team:"Distancia",
    },
    {
        id:3,
        extension:"ustabuca",
        team:"Bucaramanga",
    },
    {
        id:5,
        extension:"ustatunja",
        team:"Tunja",
    }
]
function StartScreen(props) {
    console.log(props)
    useEffect(() => {
        if(engine.getUser()){
            Players.get(ID_IN_APP, (response) => {
                props.listenerPlayer(1,response);
            })
            Trivia.all( (trivias) => {
                console.log('Trivias ===> ', trivias)
            }) 
        }
    }, [])
   
    const handleSubmit =(data)=>{
        const urlEmail = "https://api.hunter.io;"
        const serviceEmail = "/v2/email-verifier?email=" + data.email +"&api_key=96199ec63dc500ee57e2671cab1e9a0a0d7e9f33";
            /* LOGIN */
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email) ){} else { 
            window.flash("Verifica correo electronico", "error")
            return
        }
        
        
        // evaluateEmail("GET", serviceEmail,(r)=>{console.log("--------Este es el resultado",r)},urlEmail)
  

        Players.get(data.document,(r)=>{
            console.log("trajo",r);
            if(r["basic"]){
                if(r.basic.email === data.email && r.basic.id_in_app === data.document && r.basic.name === r.basic.name){
                    engine.logIn(data.document)
                    props.listenerPlayer(1,r); 
                }else{
                    window.flash("Credenciales incorrectas", "error")
                    return 
                }
            }else{
                let stringf = data.email.split("@");
                let sede =stringf[1].split(".");//de aca sacamos la sede
                sedesAuth.map((e)=>{
                    if(e.extension === sede){
                        data["team"] = {"id":e.id}
                    }
                    else{
                        data["team"] = {"id":1}
                    }
                    return null;
                })
                Players.create(data.document,data,(r)=>{
                    console.log("============> nuevo user",r)
                    engine.logIn(data.document)
                    props.listenerPlayer(1,r);  
                })
            }
            
        },data)

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
                        //console.log(dic);
                        //props.listener(1);
                        handleSubmit(dic);
                    }}
                />
            </Flex>
        </Flex>
	)
}

export default StartScreen;