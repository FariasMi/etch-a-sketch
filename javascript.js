function createGrid(gridLen){
    let container = document.getElementById('container');
    container.style.setProperty('--grid-length', gridLen);
    
    for(var i=0;i<(gridLen * gridLen);i++){
        const gridElement = document.createElement('div');
        gridElement.setAttribute('class','divGrid');
        container.appendChild(gridElement);
        gridElement.addEventListener('mouseover',colorGen);       
        
    }
    
  
}

  
function removeGrid(){
    const removeGridElements = document.getElementsByClassName('divGrid');
      while (removeGridElements[0]) {
        removeGridElements[0].parentNode.removeChild(removeGridElements[0]);
    }
}

function clear(){
    const gridElements = document.getElementsByClassName('divGrid');
    gridElements
    //if()

}

function colorGen(e) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  

function setGrid(e){   
   let gridLength= e.target.value;
   removeGrid();
   createGrid(gridLength);
   
}

     createGrid(50);
     document.getElementById('range-grid').addEventListener('change',setGrid);
     //document.getElementById('clear').addEventListener('click';