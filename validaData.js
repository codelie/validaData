class util {

    static validaData(dataRecebida){
        var dataAux = dataRecebida.split("/");
        var ano = parseInt(dataAux[2]);
        var mes = parseInt(dataAux[1]);
        var dia = parseInt(dataAux[0]);

        if ( this.eNumero(ano) && this.eNumero(mes) && this.eNumero(dia) ){
        
            if ( (mes<=0) || (mes>12) ){
                console.log('Número mês menor que 1 ou maior que 12 inválido!');
                return false;
            }

            if ( (dia>31) || (dia <=0) ){
                console.log('Número dia maior que 31 ou menor que 1 inválido!');
                return false;
            }
            
            if ( (dia>=30) && (mes==2) ){
                console.log('Número dia 30 ou maior para fevereiro inválido!');
                return false;
            }

            if ( (dia==29) && (mes==2) && ( (ano % 4) != 0 ) ){
                console.log('Número dia 29 para fevereiro não bissexto inválido!');
                return false;
            }

            if ( (dia==31) && ( (mes==2) || (mes==4) || (mes==6) || (mes==9) || (mes==11)  ) ){
                console.log('Número dia 31 para mês inválido!');
                return false;
            }

            if ( (1<=mes<=12) && (1<=dia<=31) ){
                console.log('Data Validada!');
                return true;
            }
        }
        else{ 
            console.log('Dados não numéricos. Invalidado!');
            return false;
        }        
        return false;

    } // fim validaData

    static eNumero(valor){
        return typeof valor === "number"
    }   

} //fim classe util

//var objUtil = new util;
if (util.validaData('31/03/2002') ){
    console.log('VALIDADO');
    document.write('VALIDADO');
}
else{
    console.log('NÃO VALIDADO!');
    document.write('NÃO VALIDADO!');    
}


//document.getElementById("conteudo").innerHTML = textoIdade;