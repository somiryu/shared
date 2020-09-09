import React, { Component} from 'react'

class Col extends Component{
    render(){
    	const width = this.props.width || 50

    	return( 
	    	<div className="col" style={{width: width + "%", display: "inline-block"}}>
	    		{this.props.children}
	      	</div>
	    )
    }
}

export default Col;
