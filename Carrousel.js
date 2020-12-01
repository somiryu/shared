// id, height, interval, numberShow
import React, { useEffect } from "react"
import "./Carrousel.css"
function Carrousel(props) {
	useEffect(() => {
		setTimeout(() => {
			let slides = document.querySelectorAll(`#${props.id}.Banner .slide`);
			if(slides.length > 0){
				slides[0].className = 'slide showing' 
			}
		}, 20);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	useEffect(() => {
		let slides = document.querySelectorAll('.Banner .slide');
		let currentSlide = 0
		let slideInterval = setInterval(nextSlide, props.interval || 40000000);

		function nextSlide() {
			slides[currentSlide].className = 'slide';
			currentSlide = (currentSlide + 1) % slides.length;
			slides[currentSlide].className = 'slide showing';
			
		}
		return () => {
			clearInterval(slideInterval)
		}
	})

	const next = (dir) => {
		let slides = document.querySelectorAll(`#${props.id}.Banner .slide`);
		let index = 0;
		slides.forEach((slide, current) => {
			if(slide.className === 'slide showing') {
				if(dir === 0) {
					index = slides[current-1] ? current-1 : 0;
				} else if(dir === 1) {
					index = slides[current+1] ? current+1 : 0;
				}
				slides[current].className = 'slide'
			}
		})
		if(slides[index]){
			slides[index].className = 'slide showing'
		}
		
		if(props.slideCurrent) props.slideCurrent(index)
	}
	return (
		<div id={props.id} className="Banner flex" style={{
			display: 'flex',
			position: 'relative',
			flexDirection:'row',
			height: props.heigth || '100%',
			width: props.width || '80%',
			zIndex:'2'
		}}>

			<div className="arrowleft" style={{ display: 'flex', alignItems:'center',justifyContent:'100%', height: '100%',width:'10%',zIndex:'3', cursor:'pointer' }} onClick={() => {if(props.leftIcon) {if(props.clickL) props.clickL(); else next(0)}}}>
				<img src={props.leftIcon} alt='' style={{ display: props.leftIcon && 'hidden',  width: '100%' }} />
			</div>
			<div style={{ display: 'flex', height: '100%',width:'80%', zIndex:'1', justifyContent:'center' }}>
				{props.children}
			</div>
			<div className="arrowrigth" style={{ display: 'flex',alignItems:'center', justifyContent:'100%',width:'10%', height:'100%',zIndex:'3', cursor:'pointer' }} onClick={() => { if(props.rightIcon) {if(props.clickR) props.clickR(); else next(1)}}}>
				<img src={props.rightIcon} alt='' style={{ width: '100%' }} />
			</div>

		</div>
	)
}

export default Carrousel