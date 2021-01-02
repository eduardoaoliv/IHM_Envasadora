//acionamento manual da valuvla
    window.addEventListener("load",main);

    var btn_mordaca_direita;
    var btn_mordaca_superior;
    var btn_esteira;
    var btn_dosagem;
    var btn_maquina;
    var btn_mordaca_esquerda;
    var btn_mordaca_inferior;
    var btn_nivel;
    var btn_mexedor;
    var btn_reset;

    function main() {

        btn_mordaca_direita=document.getElementsByClassName("botao")[0];
        btn_mordaca_direita.value="0";
        btn_mordaca_superior=document.getElementsByClassName("botao")[1];
        btn_mordaca_superior.value="0";
        btn_esteira=document.getElementsByClassName("botao")[2];
        btn_esteira.value="0";
        btn_dosagem=document.getElementsByClassName("botao")[3];
        btn_dosagem.value="0";
        btn_maquina=document.getElementsByClassName("botao")[4];
        btn_maquina.value="0";
        btn_mordaca_esquerda=document.getElementsByClassName("botao")[5];
        btn_mordaca_esquerda.value="0";
        btn_mordaca_inferior=document.getElementsByClassName("botao")[6];
        btn_mordaca_inferior.value="0";
        btn_nivel=document.getElementsByClassName("botao")[7];
        btn_nivel.value="0";
        btn_mexedor=document.getElementsByClassName("botao")[8];
        btn_mexedor.value="0";
        btn_reset=document.getElementsByClassName("botao")[9];
        btn_reset.value="0";

        botao_estado();

    }
    function botao_estado(){

        btn_mordaca_direita.addEventListener("click",function(){
                if(btn_mordaca_direita.value=="0"){
                    btn_mordaca_direita.style.backgroundColor="green";
                    btn_mordaca_direita.innerHTML="MORDAÇA"+"<br>"+"DIREITA"+"<br>"+"ON";
                    btn_mordaca_direita.value="1";
                }
                else {
                    btn_mordaca_direita.style.backgroundColor="red";
                    btn_mordaca_direita.innerHTML="MORDAÇA"+"<br>"+"DIREITA"+"<br>"+"OFF";
                    btn_mordaca_direita.value="0";
                }                        
            });
        btn_mordaca_superior.addEventListener("click",function(){
                if(btn_mordaca_superior.value=="0"){
                    btn_mordaca_superior.style.backgroundColor="green";
                    btn_mordaca_superior.innerHTML="MORDAÇA"+"<br>"+"SUPERIOR"+"<br>"+"ON";
                    btn_mordaca_superior.value="1";
                }
                else {
                    btn_mordaca_superior.style.backgroundColor="red";
                    btn_mordaca_superior.innerHTML="MORDAÇA"+"<br>"+"SUPERIOR"+"<br>"+"OFF";
                    btn_mordaca_superior.value="0";
                }                        
            });
        btn_esteira.addEventListener("click",function(){
                if(btn_esteira.value=="0"){
                    btn_esteira.style.backgroundColor="green";
                    btn_esteira.innerHTML="ESTEIRA"+"<br>"+"ON";
                    btn_esteira.value="1";
                }
                else {
                    btn_esteira.style.backgroundColor="red";
                    btn_esteira.innerHTML="ESTEIRA"+"<br>"+"OFF";
                    btn_esteira.value="0";
                }                        
            });
        btn_dosagem.addEventListener("click",function(){
                if(btn_dosagem.value=="0"){
                    btn_dosagem.style.backgroundColor="green";
                    btn_dosagem.innerHTML="DOSAGEM"+"<br>"+"ON";
                    btn_dosagem.value="1";
                }
                else {
                    btn_dosagem.style.backgroundColor="red";
                    btn_dosagem.innerHTML="DOSAGEM"+"<br>"+"OFF";
                    btn_dosagem.value="0";
                }                        
            });
        btn_maquina.addEventListener("click",function(){
                if(btn_maquina.value=="0"){
                    btn_maquina.style.backgroundColor="green";
                    btn_maquina.innerHTML="MÁQUINA"+"<br>"+"ON";
                    btn_maquina.value="1";
                }
                else {
                    btn_maquina.style.backgroundColor="red";
                    btn_maquina.innerHTML="MÁQUINA"+"<br>"+"OFF";
                    btn_maquina.value="0";
                }                        
            });
        btn_mordaca_esquerda.addEventListener("click",function(){
                if(btn_mordaca_esquerda.value=="0"){
                    btn_mordaca_esquerda.style.backgroundColor="green";
                    btn_mordaca_esquerda.innerHTML="MORDAÇA"+"<br>"+"ESQUERDA"+"<br>"+"ON";
                    btn_mordaca_esquerda.value="1";
                }
                else {
                    btn_mordaca_esquerda.style.backgroundColor="red";
                    btn_mordaca_esquerda.innerHTML="MORDAÇA"+"<br>"+"ESQUERDA"+"<br>"+"OFF";
                    btn_mordaca_esquerda.value="0";
                }                        
            });
        btn_mordaca_inferior.addEventListener("click",function(){
                if(btn_mordaca_inferior.value=="0"){
                    btn_mordaca_inferior.style.backgroundColor="green";
                    btn_mordaca_inferior.innerHTML="MORDAÇA"+"<br>"+"INFERIOR"+"<br>"+"ON";
                    btn_mordaca_inferior.value="1";
                }
                else {
                    btn_mordaca_inferior.style.backgroundColor="red";
                    btn_mordaca_inferior.innerHTML="MORDAÇA"+"<br>"+"INFERIOR"+"<br>"+"OFF";
                    btn_mordaca_inferior.value="0";
                }                        
            });
        btn_nivel.addEventListener("click",function(){
                if(btn_nivel.value=="0"){
                    btn_nivel.style.backgroundColor="green";
                    btn_nivel.innerHTML="NÍVEL"+"<br>"+"AUTO";
                    btn_nivel.value="1";
                }
                else {
                    btn_nivel.style.backgroundColor="red";
                    btn_nivel.innerHTML="NÍVEL"+"<br>"+"MANUAL";
                    btn_nivel.value="0";
                }                        
            });
        btn_mexedor.addEventListener("click",function(){
                if(btn_mexedor.value=="0"){
                    btn_mexedor.style.backgroundColor="green";
                    btn_mexedor.innerHTML="MEXEDOR"+"<br>"+"AUTO";
                    btn_mexedor.value="1";
                }
                else {
                    btn_mexedor.style.backgroundColor="red";
                    btn_mexedor.innerHTML="MEXEDOR"+"<br>"+"MANUAL";
                    btn_mexedor.value="0";
                }                        
            });
        btn_reset.addEventListener("click",function(){
                if(btn_reset.value=="0"){
                    btn_reset.style.backgroundColor="green";
                    btn_reset.innerHTML="RESET"+"<br>"+"ON";
                    btn_reset.value="1";
                }
                else {
                    btn_reset.style.backgroundColor="red";
                    btn_reset.innerHTML="RESET"+"<br>"+"OFF";
                    btn_reset.value="0";
                }                        
            });

    }