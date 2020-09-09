import React, { useState } from 'react'
import ImageMultiStateAndIcon from '../Images/ImageMultiStateAndIcon'
import { But } from '../ComponentPages/Buttons'
import List from '../Containers/List'
import ImageWithTextAbsolute from '../Images/ImageWithTextAbsolute'
export default function Images(props) {
    const [state1, setState1] = useState('off')
    return (
        <div>
            <But text="on" listener={() => setState1("on")} />
            <But text="off" listener={() => setState1("off")} />
            <h4>
                ImageMultiStateAndIcon
            </h4>
            <ImageMultiStateAndIcon
                state={state1}
                images={{ off: props.images.sq80, on: props.images.circ80 }}
                icon={props.images.rec20}
                iconPosition={{ top: '-10%' }}
            />
            <h4>
                List
            </h4>
            <List
                list={[<ImageMultiStateAndIcon
                    state={state1}
                    images={{ off: props.images.sq80, on: props.images.circ80 }}
                />,
                <ImageMultiStateAndIcon
                    state={state1}
                    images={{ off: props.images.sq80, on: props.images.circ80 }}
                />,
                <ImageMultiStateAndIcon
                    state={state1}
                    images={{ off: props.images.sq80, on: props.images.circ80 }}
                    icon={props.images.rec20}
                    iconPosition={{ top: '-10%' }}
                />,
                <ImageMultiStateAndIcon
                    state={state1}
                    images={{ off: props.images.sq80, on: props.images.circ80 }}
                />,
                <ImageMultiStateAndIcon
                    state={state1}
                    images={{ off: props.images.sq80, on: props.images.circ80 }}
                />,
                <ImageMultiStateAndIcon
                    state={state1}
                    images={{ off: props.images.sq80, on: props.images.circ80 }}
                />, <ImageMultiStateAndIcon
                    state={state1}
                    images={{ off: props.images.sq80, on: props.images.circ80 }}
                />, <ImageMultiStateAndIcon
                    state={state1}
                    images={{ off: props.images.sq80, on: props.images.circ80 }}
                />, <ImageMultiStateAndIcon
                    state={state1}
                    images={{ off: props.images.sq80, on: props.images.circ80 }}
                />,]}
                justify={'space-evenly'}
                styleItems={{ padding: '5px' }}
            />
            <div style={{width:'50px'}}>
                <ImageWithTextAbsolute
                    image={props.images.circ80}
                    positionChild={{ top: '80%' }}
                >
                    <div style={{display:'inline-block'}}>
                        <h2 style={{ color: "var(--orange)" }}>X2</h2>
                    </div>
                </ImageWithTextAbsolute>
            </div>

        </div>
    )
}