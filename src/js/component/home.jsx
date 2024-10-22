import React from "react";



//create your first component
const Home = ({counter}) => {
		const six= Math.floor (counter/100000) % 10;
		const five= Math.floor (counter/10000) % 10;
		const four= Math.floor(counter/1000) % 10;  
		const three= Math.floor(counter/100) % 10;  
		const two= Math.floor(counter/10) % 10;  
		const one= Math.floor(counter/1) % 10;  

	return (<div className="bigCounter">
			<div className="icon">
                <i className="fas fa-clock"></i>
            </div>
		    <div className="six">{six}</div>	
			<div className="five">{five}</div>	
			<div clasaName="four">{four}</div>
			<div clasaName="three">{three}</div>
			<div clasaName="two">{two}</div>
			<div clasaName="one">{one}</div>
		</div>);     
	}
	
	
	
	
	
		
	
	
		
	



export default Home;
