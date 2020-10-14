// height, interval
import React, { useEffect } from "react"
import "./Carrousel.css"
function Carrousel(props) {
	useEffect(() => {
		var slides = document.querySelectorAll('.Banner .slide');
		var currentSlide = 0
		var slideInterval = setInterval(nextSlide, props.interval || 400000);

		function nextSlide() {
			slides[currentSlide].className = 'slide';
			currentSlide = (currentSlide + 1) % slides.length;
			slides[currentSlide].className = 'slide showing';
		}
		return () => {
			clearInterval(slideInterval)
		}
	})

	const next = () => {
		
		var slides = document.querySelectorAll('.Banner .slide');
		console.log(slides)
		if (slides[0].className === 'slide') {
			slides[0].className = 'slide showing';
		} else {
			console.log("proximo slide")
			slides[1].className = 'slide showing';
			slides[0].className = 'slide';
		}
	}
	return (
		<div className="Banner flex" style={{
			display: 'flex',
			position: 'relative',
			flexDirection:'row',
			height: props.heigth || '100%',
			width: props.width || '80%',
			zIndex:'2'
		}}>

			<div className="arrowleft" style={{ display: 'flex', alignItems:'center',justifyContent:'100%', height: '100%',width:'10%',zIndex:'3', cursor:'pointer' }} onClick={props.clickL || next}>
				<img src={props.leftIcon} alt='Flecha Derecha' style={{ width: '100%' }} />
			</div>
			<div style={{ display: 'flex', height: '100%',width:'80%', zIndex:'1' }}>
				{props.children}
			</div>
			<div className="arrowrigth" style={{ display: 'flex',alignItems:'center', justifyContent:'100%',width:'10%', height:'100%',zIndex:'3', cursor:'pointer' }} onClick={props.clickR || next}>
				<img src={props.rightIcon} alt='Flecha Derecha' style={{ width: '100%' }} />
			</div>

		</div>
	)
}

export default Carrousel