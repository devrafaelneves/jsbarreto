//function
function idade (anos){
    if (anos>17){
        alert("maior de idade")
    }
    else{
        alert("menor de idade ")
    }
}



//parseInt = antes do code ele converte o que for em inteiro, só aparece.


//switch é pra quando tem varias opcoes, mas e tipo V ou F - - numero ou string
//primeiro
// let cor = prompt("Escolha cor");
// switch (cor)
// {
//     case "azul":
//     document.write("Blue");
//     break
//     case "rosa":
//     document.write("flor");
//     break
//     case "vermelho":
//     document.write("batom");
//     break
//     case "preto":
//     document.write("racis");
//     break
//     default:
//     document.write("ta hard")
// }

//do while

//primeiro
// let x = 0;
// do{
//     document.write("number é: " + x)
//     document.write("<br>");
//     x++
// }
// while(i<=5);




//while é quando nao sabe a qiamtodade de voltas que o laço vai executar; semelhante ao for
//while (condição){
    //o code que vai ser repetido
//}
//terceiro
// let i = 2;

// while(i<=2048){
//     document.write(i+"<br>")
//     i *= 2;
// }

//segundo
//enquanto qualquer resposta diferente de 25 ele vai continuar
// let x = 5 * 5;
// x = prompt("quanto é 5x5");
// while(x != 25){
//     alert("Errada");
//     x = prompt("blablabla",0)
// }
// document.write("acertou, resposta é " + x)

//primeiro
// let meuContador = 0;
// let quebraDeLinha = "<br/>";
// document.write("começa")
// document.write(quebraDeLinha);

// while(meuContador<10){
//     document.write("Contador vale = "+meuContador);
//     document.write(quebraDeLinha);
//     meuContador++;
// }
// document.write("aqui terminou")



// DA PROVA ESSAS DUAS ULTIMAS 
// let idade = prompt("aa")
// if (idade=16){
//     alert("pode, mas nao obrigado")
// }
// else if(idade>18){
//         alert("obrigado a votar ")
//     }
//     else{
//         alert("nao pode votar")
//     }



// let n1 = prompt("Digite n1")
// let n2 = prompt("Digite n1")
// let n3 = prompt("Digite n1")
// let res = parseInt(n1+n2+n3)/3

// if (res<3){
//     alert("reprovado")
// }
// else{
//     if (res>6){
//         alert("aprovado")
//     }
//     else{
//         alert("está em exame")
//     }
// }



//Sétimo Exemplo
// var c = prompt ("Coloca em °C para transformar em F")
// eval(c)
//     var f = ((c*9)/5)+32
//     document.write("Você colocou em °C: " + c + ", que em F fica: " + f);
    




//Sexto Exemplo
// for (i=1;i<=6;i++){
//     document.write("<H" + i + ">Cabeçalho de nível " + i + "<H" + i + ">Acho que não")
// }







//Quinto Exemplo
    // for (i=0;i<10;i=i+1){
    //     document.write("<p>Linha"+i)
    // }

    // var i;
    // for (i=0;i<10;i=i+1){
    //     alert("A variavel i agora vale: " + i)
    // }
    // (
    //     alert("A variável i terminou a repeticao valendo " + i )
    // )
        











//Quarto Exemplo

// n1 = prompt("Digite as suas três notas");
// n1= eval (n1);

//     if (n1==1)
//         alert("Mais 1");
//     else if
//         (n1==2) 
//         alert("Mais 2")
//     else if 
//         (n1==3) 
//         alert("Mais 3")
//     else if 
//         (n1==4) 
//         alert("Mais 4")    
//     else if 
//         (n1==5)
//         alert("Número Certo");
//     else if 
//         (n1==6)
//         alert("Menos 1");
//     else if 
//         (n1==7) 
//         alert("Menos 2")
//     else if 
//         (n1==8)
//         alert("Menos 3")
//     else if 
//         (n1==9)
//         alert("Menos 4")
//     else if
//         (n1==10)
//         alert("Menos 5")
                        
                    













//Terceiro Exemplo
// var media, n1, n2, n3;

// n1 = prompt("Digite as suas três notas");
// n1= eval (n1) ;

// n2 = prompt("Segunda");
// n2= eval (n2) ;

// n3 = prompt("Terceira");
// n3= eval (n3) ;

//     media = (n1 + n2 + n3)/3;

//     if (media > 7){
//     alert("Está acima da média do semestre");
// }
//     else{
//         if(media==7){
//         alert("Está na média do semestre");

//     }
//         else{
//         alert("Você é ruim");
//     }
// }










//Segundo Exemplo
// var hora = new Date().getHours();
//     if (hora < 12)
//         alert("Bom Dia");
//     if (hora >=  12 && hora < 18)
//         alert("Boa Tarde");
//     if (hora >= 18)
//         alert("Boa Noite");











// window.alert('alow')

//Primeiro Exemplo
// n1 = prompt("Digite um número", "")
// n2 = prompt("Digite outro número", "")

//     if (n1>n2){
//         alert("O primeiro número é maior que o segundo")
//     }
//     else {
//         alert ("O primeiro número é maior que o segundo")
//     }
    

//     alert("FIM")
    
