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
  function eraseGridColors(){    
    const divGrids = document.querySelectorAll('div.divGrid');
    for(i=0;i<divGrids.length;i++){   
      let divGrid = divGrids[i];
      divGrids[i].addEventListener('mouseover',() =>{
      divGrid.style.backgroundColor = backgroundColor='rgba(0, 0, 0, 0)';

      });
        
     }
    }

function colorGen(e) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }

  function watchColorPicker(e){
    let color = e.target.value;
    const divGrids = document.querySelectorAll('div.divGrid');
    for(i=0;i<divGrids.length;i++){   
      let divGrid = divGrids[i];
      divGrids[i].addEventListener('mouseover',() =>{
      divGrid.style.backgroundColor = color;

      });
        
     }
    }

    function randomColorGen() {
      var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

      const divGrids = document.querySelectorAll('div.divGrid');
      for(i=0;i<divGrids.length;i++){   
        let divGrid = divGrids[i];
       divGrid.addEventListener('mouseover',() =>{
        divGrid.style.backgroundColor = randomColor;

       });
      }
        
    
    }


function setGrid(e){   
  let gridLength= e.target.value;
  const para =document.querySelector('p');
  const rangeValue = document.getElementById('rangeValue');
  rangeValue.textContent = gridLength;
  para.textContent = 'Size: '+gridLength+' x '+gridLength;
   
   removeGridElements();
   createGrid(gridLength);   
   
}
     createGrid(50);
     document.getElementById('range-grid').addEventListener('change',setGrid);
     document.getElementById('color').addEventListener('change',watchColorPicker);
     document.getElementById('clear').addEventListener('click',clearGridColors);
     document.getElementById('erase').addEventListener('click',eraseGridColors);
     document.getElementById('random').addEventListener('click',randomColorGen);