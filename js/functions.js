document.addEventListener('DOMContentLoaded', () =>{
	//console.log('works');
	//animaciones iniciales
	anime.timeline({
		easing: 'easeOutExpo',
		
	})
	.add({
		targets: 'body',
		opacity:[0,1],
		translateY:[-500,0],
		delay: (el, i) => 10 * i,
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