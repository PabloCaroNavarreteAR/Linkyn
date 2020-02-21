document.addEventListener('DOMContentLoaded', () =>{
	//console.log('works');
	//animaciones iniciales
	anime.timeline({
		easing: 'easeOutExpo',
		
	})
	.add({
		targets: '.home',
		opacity:[0,1],
		translateY:[-500,0],
		delay: (el, i) => 10 * i,
		offset: '-*50',
	})
})

document.addEventListener('DOMContentLoaded', () =>{
	//console.log('works');
	//animaciones iniciales
	anime.timeline({
		easing: 'easeOutExpo',
		
	})
	.add({
		targets: '.project-page',
		opacity:[0,1],
		translateX:[-500,0],
		delay: (el, i) => 10 * i,
		offset: '-*50',
	})
	.add({
		targets: '.project-page .carousel-caption',
		opacity:[0,1],
		translateX:[+100,0],
		delay: (el, i) => 10 * i,
		offset: '-*0',
	})
})

document.addEventListener('DOMContentLoaded', () =>{
	//console.log('works');
	//animaciones iniciales
	anime.timeline({
		easing: 'easeOutExpo',
		
	})
	.add({
		targets: '.project-detail-page',
		opacity:[0,1],
		translateX:[-500,0],
		delay: (el, i) => 10 * i,
		offset: '-*50',
	})
	.add({
		targets: '.project-detail-page .carousel-caption',
		opacity:[0,1],
		translateX:[+100,0],
		delay: (el, i) => 10 * i,
		offset: '-*0',
	})
})



document.addEventListener('DOMContentLoaded', () =>{
	//console.log('works');
	//animaciones iniciales
	anime.timeline({
		easing: 'easeOutExpo',
		
	})
	.add({
		targets: '.contact-page',
		opacity:[0,1],
		translateX:[-500,0],
		delay: (el, i) => 0 * i,
		offset: '-*50',
	})
	.add({
		targets: '.contact-page .carousel-caption',
		opacity:[0,1],
		translateX:[-100,0],
		delay: (el, i) => 0 * i,
		offset: '-*0',
	})
	.add({
		targets: '.contact-page .navbar',
		opacity:[0,1],
		translateY:[-500,0],
		delay: (el, i) => 0 * i,
		offset: '-*50',
	})
})

document.addEventListener('DOMContentLoaded', () =>{
	//console.log('works');
	//animaciones iniciales
	anime.timeline({
		easing: 'easeOutExpo',
		
	})
	.add({
		targets: '.prensa-page',
		opacity:[0,1],
		translateX:[-500,0],
		delay: (el, i) => 0 * i,
		offset: '-*50',
	})
	.add({
		targets: '.prensa-page .carousel-caption',
		opacity:[0,1],
		translateY:[-500,0],
		delay: (el, i) => 0 * i,
		offset: '-*0',
	})
	.add({
		targets: '.prensa-page .navbar',
		opacity:[0,1],
		translateY:[-500,0],
		delay: (el, i) => 0 * i,
		offset: '-*50',
	})
})

var proyectos = document.getElementById("btnProyectos");
proyectos.addEventListener('click', () => {
  anime.timeline({
    easing:'easeOutExpo',
  })
  .add({
    targets:'.content',
    opacity:[0,1],
    translateX:[-1000,0],
    delay: (el, i) => 100 * i,
    offset: '-*50',
  })
})

//animacion botones