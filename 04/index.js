

function back(){
  al = document.querySelector('#all');
  array = ['https://img.freepik.com/vetores-gratis/wallpaper-de-paisagem-em-design-plano_74890-34.jpg?w=2000',
  'https://www.10wallpaper.com/wallpaper/1366x768/1610/Canada_Harrison_Lake_Beautiful_Landscape_Wallpaper_13_1366x768.jpg',
  'https://images7.alphacoders.com/423/423348.jpg'];
  x = parseInt(Math.random()*3)
  al.style.background = "url('"+array[x]+"')";
  }
  
  
  
function converter(){
    texto = document.querySelector('#texto').value;
    resultado = document.querySelector('p');
    try {
      if(JSON.parse(texto));
    }
    catch(err) {
      return alert(err);
    }
    resultado.innerHTML = 'Parsable JSON string!';
    console.log(JSON.parse(texto));
  }
  
  
  
  window.onload = function(){
  back();
  
  };
  
  
  