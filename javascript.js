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

  
function removeGridElements(){
    const gridElements = document.getElementsByClassName('divGrid');
      while (gridElements[0]) {
        gridElements[0].parentNode.removeChild(gridElements[0]);
    }
}

function clearGridColors(){
  const divGrids = document.querySelectorAll('div.divGrid');
  for(i=0;i<divGrids.length;i++){
    divGrids[i].style.backgroundColor='rgba(0, 0, 0, 0)';
    }
  
  }
 

function colorGen(e) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  

function setGrid(e){   
   let gridLength= e.target.value;
   removeGridElements();
   createGrid(gridLength);
   
}

     createGrid(50);
     document.getElementById('range-grid').addEventListener('change',setGrid);
     document.getElementById('clear').addEventListener('click',clearGridColors);
    