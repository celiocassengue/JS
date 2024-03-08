function carregar(){
  var msg=document.getElementById("msg")
  var img=document.getElementById("img")
  var manha=document.getElementById("imagem")
  var data=new Date
  var hora=data.getHours()
  var minuto=data.getMinutes()
  msg.innerHTML="Agora são: "+hora+"h"+":"+minuto+"min"

if(hora>=0 && hora <12){
  //BOM DIA
  manha.src="fotomanha.png"
  document.body.style.background="#8eb1d6"
}
else if(hora >=12 && hora <18){
  //BOA TARDE
  manha.src="fototarde.png"
  document.body.style.background="#ce6767"
}
else{//BOA NOITE
  manha.src="fotonoite.png"
  document.body.style.background="#11252b"
}
}
carregar()