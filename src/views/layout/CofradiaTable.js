import React from 'react'
import Flex from "../../shared/Containers/Flex"
import ImagePanel from "../../shared/Panels/ImagedPanel"
import contasedes from "../../images/general/contasedes.png"
import btnsedesmarcomapa from "../../images/buttons/btnsedesmarcomapa@2x.png"
import MaskedAvatar from "../../shared/Hubs/MaskedAvatar"
function CofradiaTable(props){
	return(
        <Flex
            style={{width: "100%"}}
        >
            {props.cofradias.map((cofradia, index) => {
                return (
                    <ImagePanel
                        image={contasedes}
                        padding={"0%"}
                        style={{ width: "100%" }}
                    >
                        <Flex
                            style={{width: "100%",position: "relative",padding:"5%"}}
                        >
                            <Flex style={{width: "30%"}}>
                                <MaskedAvatar
                                id="colaborador1"
                                avatar={cofradia.image}
                                containerImage={btnsedesmarcomapa}
                                padding={5}
                                listener={() => console.log('Clicked MarkedAvatar')}
                                maskBorder={100}
                                />
                            </Flex>
                            <Flex style={{width: "70%"}} direction="column">
                                <Flex style={{width: "100%"}}>
                                    <h2>{"Cofradia " + (cofradia.name ? cofradia.name:"Lorem ipsum")}</h2>
                                </Flex>
                                <Flex style={{width: "100%"}}>
                                    <h2>{"Sede " + cofradia.sede}</h2>
                                </Flex>
                            </Flex>   
                        </Flex>
                    </ImagePanel>
                )
            })
            }
        </Flex>
	)
}

export default CofradiaTable;