import React from 'react'
import Flex from "../shared/Containers/Flex"
import MaskedAvatarWithTitle from "../shared/Hubs/MaskedAvatarWithTitle";
import Chip from "../shared/Buttons/Chip"
import Avatar from "../shared/ExampleImages/avatar.png"
import Colaborador from "../shared/ExampleImages/Hubs/tituloColaborador.png"
import contatiempo from "../images/buttons/contatiempo.png"
import contatiempoactivo from "../images/buttons/contatiempoactivo.png"
import ImagePanel from "../shared/Panels/ImagedPanel"
import ContentSede from "../images/general/contasedejuego.png"
import contapersonajes from "../images/general/contapersonajes.png"
import portalVillavicencio from "../images/Portales/inportalvilla.png"

function SedeScreen(props) {
    return (
        <Flex align="center"  style={{marginTop:"0%",marginLeft:"5%",marginRight:"5%",flexWrap:"wrap"}}>
            <Flex style={{width:"50%"}} align={"center"} direction={"column"}>
                <ImagePanel
                    image={ContentSede}
                    padding={"6% 20%"}
                    style={{width:"400px",}}
                >
                    <Flex style={{}} align={"center"} direction={"column"}>
                        <h2>{props.title || "Titulo"}</h2>
                        <p style={{ height:"100px",overflowX:"auto",paddingTop:"10px"}}>{props.legend || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}</p>
                        <div>
                            <img alt="portal" src={portalVillavicencio}></img>
                        </div>
                    </Flex>
                </ImagePanel>
            </Flex>
            {/* <MaskedAvatarWithTitle
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
			</MaskedAvatarWithTitle> */}
            <Flex style={{width:"50%",flexWrap:"wrap"}}>
                <Flex direction="column" align="center" style={{margin:"20px",width:"160px"}}>
                    <MaskedAvatarWithTitle
                    id="colaborador2"
                    avatar={Avatar}
                    containerImage={contapersonajes}
                    padding={12}
                    paddingLabel={5}
                    maskBorder={100}
                    imageTitle={Colaborador}
                    textAlign={"center"}
                    // imageLabel={TituloColaborador}
                    debug={true}
                    label={<label style={{color:'#fff'}}>Profesora</label>}
                    pointer={true}
                    listener={() => console.log('Clicked MarkedAvatar')}
                    leftLabel={"48%"}
                    topLabel={"75%"}
                    >
                    </MaskedAvatarWithTitle>
                    <Chip
                        imageselect={contatiempoactivo}
                        imagenoselect={contatiempo}
                        id={"profesorachip"}
                        label={"0-5 pm"}
                        active={false}
                        style={{width: "150px",height: "40px"}}
                    ></Chip>
                    <Chip
                        imageselect={contatiempoactivo}
                        imagenoselect={contatiempo}
                        id={"profesorachip1"}
                        label={"0-5 pm"}
                        active={true}
                        style={{width: "150px",height: "40px"}}
                    ></Chip>
                </Flex>
                <Flex direction="column" align="center" style={{margin:"20px",width:"160px"}}>
                    <MaskedAvatarWithTitle
                        id="colaborador3"
                        avatar={Avatar}
                        containerImage={contapersonajes}
                        padding={12}
                        paddingLabel={5}
                        maskBorder={100}
                        imageTitle={Colaborador}
                        textAlign={"center"}
                        //imageLabel={TituloColaborador}
                        debug={true}
                        label={<label style={{color:'#fff'}}>Secretaria</label>}
                        pointer={true}
                        listener={() => console.log('Clicked MarkedAvatar')}
                        leftLabel={"48%"}
                        topLabel={"75%"}
                        >
                    </MaskedAvatarWithTitle>
                    <Chip
                        id={"secretariachip"}
                        label={"0-5 pm"}
                        active={false}
                        imageselect={contatiempoactivo}
                        imagenoselect={contatiempo}
                        style={{width: "150px",height: "40px",}}
                    ></Chip>
                    <Chip
                        id={"secretariachip1"}
                        label={"0-5 pm"}
                        active={false}
                        imageselect={contatiempoactivo}
                        imagenoselect={contatiempo}
                        style={{width: "150px",height: "40px",}}
                    ></Chip>
                </Flex>
                <Flex direction="column" align="center" style={{margin:"20px",width:"160px"}}>
                    <MaskedAvatarWithTitle
                    id="colaborador4"
                    avatar={Avatar}
                    containerImage={contapersonajes}
                    padding={12}
                    paddingLabel={5}
                    maskBorder={100}
                    imageTitle={Colaborador}
                    textAlign={"center"}
                    //imageLabel={TituloColaborador}
                    debug={true}
                    label={<label style={{color:'#fff'}}>Fraile</label>}
                    pointer={true}
                    listener={() => console.log('Clicked MarkedAvatar')}
                    leftLabel={"48%"}
                    topLabel={"75%"}
                    >
                    </MaskedAvatarWithTitle>
                    <Chip
                        id={"frailechip"}
                        label={"0-5 pm"}
                        active={false}
                        imageselect={contatiempoactivo}
                        imagenoselect={contatiempo}
                        style={{width: "150px",height: "40px"}}
                    ></Chip>
                    <Chip
                        id={"frailechip1"}
                        label={"0-5 pm"}
                        active={false}
                        imageselect={contatiempoactivo}
                        imagenoselect={contatiempo}
                        style={{width: "150px",height: "40px",}}
                    ></Chip>
                </Flex>
                <Flex direction="column" align="center" style={{margin:"20px",width:"160px"}}>
                    <MaskedAvatarWithTitle
                        id="colaborador5"
                        avatar={Avatar}
                        containerImage={contapersonajes}
                        padding={12}
                        paddingLabel={5}
                        maskBorder={100}
                        //imageTitle={Colaborador}
                        textAlign={"center"}
                        //imageLabel={TituloColaborador}
                        debug={true}
                        label={<label style={{color:'#fff'}}>Estudiante</label>}
                        pointer={true}
                        listener={() => console.log('Clicked MarkedAvatar')}
                        leftLabel={"48%"}
                        topLabel={"75%"}
                        >
                    </MaskedAvatarWithTitle>
                    <Chip
                        id={"estudiantechip"}
                        label={"0-5 pm"}
                        active={false}
                        imageselect={contatiempoactivo}
                        imagenoselect={contatiempo}
                        style={{width: "150px",height: "40px"}}
                    ></Chip>
                    <Chip
                        id={"estudiantechip1"}
                        label={"0-5 pm"}
                        active={false}
                        imageselect={contatiempoactivo}
                        imagenoselect={contatiempo}
                        style={{width: "150px",height: "40px",}}
                    ></Chip>
                </Flex>
            </Flex>
        </Flex>
    )
}


export default SedeScreen;