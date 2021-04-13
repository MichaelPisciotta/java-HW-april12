let circle = document.querySelector('.circle');
let moveBy = 10;

window.addEventListener('load', () =>{
circle.style.position = 'absolute';
circle.style.left = 0;
circle.style.top = 0;

});

window.addEventListener('keyup', (e) =>{
  switch(e.key){
        case 'ArrowUp':
          circle.style.top = parseInt(circle.style.top) - (3 * moveBy) + 'px';
          break;
          case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;
  }
  
  });

  var color = ["yellow", "orange", "red", "blue"];

        document.querySelector("div").addEventListener(
          "mouseover", function () {
                
      document.querySelector("div").style.background 
          = color[Math.floor(Math.random() * color.length)];
  })
