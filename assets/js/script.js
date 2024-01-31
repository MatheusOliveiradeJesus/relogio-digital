/*Nas contantes abaixo vamos pegar os "valores" de cada elemento Id citado nas spans dentro da div que está no index.html. 
Ex: a Id horas esta com o valor de 00. Dessa forma atribuímos valores dentro de cada constante.*/

const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

/*Nesta etapa iremos usar a função setInterval (permite executar uma funçao repetidamente dentro de um espaço de tempo definido)
Usando o dateToday é como se zerássemos qlqr valor de hora e atualizássemos tudo com valores presente. Aí aplicamos um a um com dateToday.get 
e vamos pegando hora, minutos e segundos com valores reais.*/

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  /*Estes ifs são apenas para acrescentar um zero na frente do número caso ele seja menor que 10, dessa forma o relogio fica mais bonito.*/

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (s < 10) s = "0" + s;

  /*Agora com o .textContent (pra mudar o texo) é como se pegássemos os valores atualizados acima e colocassemos dentro de cada variavel (horas, minutos e segundos)*/

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
});
