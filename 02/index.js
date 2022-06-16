

function back(){
  al = document.querySelector('#all');
  array = ['https://img.freepik.com/vetores-gratis/wallpaper-de-paisagem-em-design-plano_74890-34.jpg?w=2000',
  'https://www.10wallpaper.com/wallpaper/1366x768/1610/Canada_Harrison_Lake_Beautiful_Landscape_Wallpaper_13_1366x768.jpg',
  'https://images7.alphacoders.com/423/423348.jpg'];
  x = parseInt(Math.random()*3)
  al.style.background = "url('"+array[x]+"')";
  }
  
  
  
  function formulario(){
    nome = document.querySelector('#name').value;
    aniversario = document.querySelector('#birthdate').value;
    peso = parseFloat(document.querySelector('#weight').value);
    altura = parseInt(document.querySelector('#height').value);
    genero = document.querySelector('#gender').value;
    
    atual=new Date();
    aniversario = new Date(aniversario);
    try {
      if(nome == "" || nome.length<5) throw "'name'";
      if(aniversario.getTime()>atual.getTime()) throw "'birthDate'";
      if(isNaN(peso)) throw "'weight'";
      if(isNaN(altura) || altura/1==0) throw "'height'";
      if(genero!=='Homem' && genero!=='Mulher') throw "'gender'";
    }
  
    catch(err) {
      return alert('Field '+err+' is invalid!');
    }
  
    let user={
      'name':nome,
      'birthdate':aniversario,
      'weight':peso,
      'height':altura,
      'gender':genero
    };
    console.log(user);
  }
  
  
  
  window.onload = function(){
  back();
  niver = document.querySelector('#birthdate');
  date=new Date();
  month='';
  if(date.getMonth()<10){
    month='0'+date.getMonth();
  }else{
    month=date.getMonth();
  }
  date_time = date.getFullYear()+'-'+month+'-'+date.getDate();
  niver.setAttribute('max',date_time);
  };
  
  
  