import React, {useState, useEffect} from 'react'
import ImageTest from "../shared/ExampleImages/Buttons/boton.png";
import circ40 from "../shared/ExampleImages/Circ-40.png"
import circ20 from "../shared/ExampleImages/Circ-20.png"
import Flex from "../shared/Containers/Flex"
import ProgressBar from "../shared/Indicators/ProgressBar";
import ButtonImage from "../shared/Buttons/ButtonImage"
import MaskedAvatarWithTitle from "../shared/Hubs/MaskedAvatarWithTitle";
import CurrencyHorizontal from "../shared/Indicators/CurrencyHorizontal"
import Chip from "../shared/Buttons/Chip"
import AvatarContainer from "../shared/ExampleImages/avcont.png"
import Avatar from "../shared/ExampleImages/avatar.png"
import Colaborador from "../shared/ExampleImages/Hubs/tituloColaborador.png"
import TituloColaborador from "../shared/ExampleImages/Hubs/tituloColaborador.png"

function SedeScreen(props) {
    const [state1, setState1] = useState("off");
    return (
        <Flex align="center" direction="column" style={{marginTop:"10%",marginLeft:"10%",marginRight:"10%"}}>
            {/* <Header></Header> */}
            <h2>{props.title || "Titulo"}</h2>
            <p>{props.legend || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}</p>
            <MaskedAvatarWithTitle
                id="colaborador1"
                avatar={Avatar}
                containerImage={AvatarContainer}
                padding={12}
                paddingLabel={5}
                maskBorder={100}
                imageTitle={Colaborador}
                textAlign={"center"}
                imageLabel={TituloColaborador}
                debug={true}
                label={<CurrencyHorizontal
                    quantity={30}
                    image={circ20}
                    displayX={true}
                    id="counterbar1"
                ></CurrencyHorizontal>}
                pointer={true}
                listener={() => console.log('Clicked MarkedAvatar')}
			>
			</MaskedAvatarWithTitle>
            <Flex>
                <Flex direction="column" align="center" style={{margin:"20px"}}>
                    <MaskedAvatarWithTitle
                    id="colaborador2"
                    avatar={Avatar}
                    containerImage={AvatarContainer}
                    padding={12}
                    paddingLabel={5}
                    maskBorder={100}
                    imageTitle={Colaborador}
                    textAlign={"center"}
                    imageLabel={TituloColaborador}
                    debug={true}
                    label={<label style={{color:'#fff'}}>Profesora</label>}
                    pointer={true}
                    listener={() => console.log('Clicked MarkedAvatar')}
                    >
                    </MaskedAvatarWithTitle>
                    <Chip
                        id={"profesorachip"}
                        label={"0-5 pm"}
                        active={false}
                    ></Chip>
                    <Chip
                        id={"profesorachip1"}
                        label={"0-5 pm"}
                        active={false}
                    ></Chip>
                </Flex>
                <Flex direction="column" align="center" style={{margin:"20px"}}>
                    <MaskedAvatarWithTitle
                        id="colaborador3"
                        avatar={Avatar}
                        containerImage={AvatarContainer}
                        padding={12}
                        paddingLabel={5}
                        maskBorder={100}
                        imageTitle={Colaborador}
                        textAlign={"center"}
                        imageLabel={TituloColaborador}
                        debug={true}
                        label={<label style={{color:'#fff'}}>Secretaria</label>}
                        pointer={true}
                        listener={() => console.log('Clicked MarkedAvatar')}
                        >
                    </MaskedAvatarWithTitle>
                    <Chip
                        id={"secretariachip"}
                        label={"0-5 pm"}
                        active={false}
                    ></Chip>
                    <Chip
                        id={"secretariachip1"}
                        label={"0-5 pm"}
                        active={false}
                    ></Chip>
                </Flex>
            </Flex>
            <Flex>
                <Flex direction="column" align="center" style={{margin:"20px"}}>
                    <MaskedAvatarWithTitle
                    id="colaborador4"
                    avatar={Avatar}
                    containerImage={AvatarContainer}
                    padding={12}
                    paddingLabel={5}
                    maskBorder={100}
                    imageTitle={Colaborador}
                    textAlign={"center"}
                    imageLabel={TituloColaborador}
                    debug={true}
                    label={<label style={{color:'#fff'}}>Fraile</label>}
                    pointer={true}
                    listener={() => console.log('Clicked MarkedAvatar')}
                    >
                    </MaskedAvatarWithTitle>
                    <Chip
                        id={"frailechip"}
                        label={"0-5 pm"}
                        active={false}
                    ></Chip>
                    <Chip
                        id={"frailechip1"}
                        label={"0-5 pm"}
                        active={false}
                    ></Chip>
                </Flex>
                <Flex direction="column" align="center" style={{margin:"20px"}}>
                    <MaskedAvatarWithTitle
                        id="colaborador5"
                        avatar={Avatar}
                        containerImage={AvatarContainer}
                        padding={12}
                        paddingLabel={5}
                        maskBorder={100}
                        imageTitle={Colaborador}
                        textAlign={"center"}
                        imageLabel={TituloColaborador}
                        debug={true}
                        label={<label style={{color:'#fff'}}>Estudiante</label>}
                        pointer={true}
                        listener={() => console.log('Clicked MarkedAvatar')}
                        >
                    </MaskedAvatarWithTitle>
                    <Chip
                        id={"estudiantechip"}
                        label={"0-5 pm"}
                        active={false}
                    ></Chip>
                    <Chip
                        id={"estudiantechip1"}
                        label={"0-5 pm"}
                        active={false}
                    ></Chip>
                </Flex>
            </Flex>
        </Flex>
    )
}



function Header(props){
	return(
        <div style={{width:"100%",height:"auto",backgroundColor:"rgba(5,5,5,0.3)"}}>
            <Flex justify="space-around" align="center">
                <Flex 
                    direction="column" 
                    margin="5%"
                    style={{width:"auto",margin:"10px 30px"}}
                >
                    <h6 style={{margin:"0 auto"}}>Titulo titulo</h6>
                    <ProgressBar
                            percentage="30"
                            // image={Bar}
                            padding={'3%'}
                            styleContainer={{width:"100px",border:"1px solid black",borderRadius:"10px",height:"10px"}}
                    >
                    </ProgressBar>
                    <CurrencyHorizontal
                        quantity={30}
                        image={circ20}
                        displayX={true}
                        id="counterbar"
                    ></CurrencyHorizontal>
                </Flex>
                <img src={ImageTest} width="40px" height="40px"></img>
                <h3 style={{margin:"auto 0"}}>20 X 1.2</h3>
                <ButtonImage
					id="btn1"
					image={circ40}
					listener={(id) => { console.log("clicked", id) }}
					scale={1.1} //1.1
					style={{ margin: 10 }} // {}
				/>
            </Flex>
        </div>
	)
}

export default SedeScreen;