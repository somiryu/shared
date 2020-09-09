//props.data = [
// 	{label: "Label", component: <Component/>,
// ]
import React, { Component} from 'react'
import BorderedWidget from "./BorderedWidget.js"
import Tabs from "./Tabs.js"

import "./Accordion.css"

class Accordion extends Component{
	constructor(props){
		super(props);
		this.state={tab: 0}
	}
	tabClicked = (e) => {
		this.setState({tab: e})
	}
	render(){
		return( 
			<div id="Accordion">
				<Tabs data={this.props.data} tabClicked={this.tabClicked}>
					<BorderedWidget>
						<div>{this.props.data[this.state.tab].component}</div>
					</BorderedWidget>
				</Tabs>
			</div>
		)
	}
}

export default Accordion;
