

function back(){
  al = document.querySelector('#all');
  array = ['https://img.freepik.com/vetores-gratis/wallpaper-de-paisagem-em-design-plano_74890-34.jpg?w=2000',
  'https://www.10wallpaper.com/wallpaper/1366x768/1610/Canada_Harrison_Lake_Beautiful_Landscape_Wallpaper_13_1366x768.jpg',
  'https://images7.alphacoders.com/423/423348.jpg'];
  x = parseInt(Math.random()*3)
  al.style.background = "url('"+array[x]+"')";
  }
  
  
  


  
  
  
  window.onload = function(){
  back();
  
  };
  
havard={};
havard['cloe mille']=1;
console.log("Com:"+havard['cloe mille']);
console.log("Sem:"+havard.cloe mille);

  