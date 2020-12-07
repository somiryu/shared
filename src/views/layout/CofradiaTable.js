import React from 'react'
import Flex from "../../shared/Containers/Flex"
import Absolute from "../../shared/Containers/Absolute"
import ImagePanel from "../../shared/Panels/ImagedPanel"
import contasedes from "../../images/general/contasedes.png"
import btnsedesmarcomapa from "../../images/buttons/btnsedesmarcomapa@2x.png"
import MaskedAvatar from "../../shared/Hubs/MaskedAvatar"
function CofradiaTable(props){
	return(
        <Flex
            style={{width: "100%"}}
            direction="column"
        >
            {props.cofradias.map((cofradia, index) => {
                return (
                    <ImagePanel
                        image={contasedes}
                        padding={"0%"}
                        style={{ width: "100%" }}
                    >
                        <Flex
                            style={{width: "100%",position: "relative",padding:"5%",height:"90%"}}
                            align="center"
                        >
                            <Flex style={{width: "30%",heigth: "70%",position:"relative"}} align="center">
                                <Absolute  style={{
                                        backgroundColor: 'black',
                                        width: '60%',
                                        height: '78%',
                                        margin: '7% auto 34%',
                                        borderRadius: '50%',
                                }}>

                                </Absolute>
                                <MaskedAvatar
                                id="colaborador1"
                                avatar={cofradia.image}
                                containerImage={btnsedesmarcomapa}
                                padding={"15px 6px"}
                                listener={() => console.log('Clicked MarkedAvatar')}
                                maskBorder={100}
                                />
                            </Flex>
                            <Flex style={{width: "70%",heigth: "70%"}} direction="column">
                                <Flex style={{width: "100%"}}>
                                    <h2>{"Cofradia " + (cofradia.name ? cofradia.name:"Lorem ipsum")}</h2>
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