var js_calcado ;
var js_anonasc ;
var js_calcadomult ;
var js_subtraiano
var js_final;

function calcular() {
  
  //Variáveis
  js_calcado = document.FormCalculadora.f_numcalcado.value;
  js_anonasc = document.FormCalculadora.f_anonasc.value;
  
  //Processamento
  js_calcadomult = js_calcado * 100
  js_subtraiano = js_calcadomult - js_anonasc
  js_final = js_subtraiano + 2021
  
  //Saída de dados
  document.FormCalculadora.f_resultado.value = js_final
  
}
