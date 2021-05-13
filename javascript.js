function createDivs(gridLen){
    const container = document.getElementById('container');
    container.style.setProperty('--grid-length', gridLen);

    for(var i=0;i<(gridLen * gridLen);i++){
        const div = document.createElement('div');
        div.setAttribute('class','divGrid');
        container.appendChild(div);
    }
}

createDivs(100);
var randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
const divGrid = document.querySelectorAll('.divGrid').forEach((divGrid) => {

	divGrid.addEventListener('mouseover',() =>{
		divGrid.style.backgroundColor = randomColor;
	});

});