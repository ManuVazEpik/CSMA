/*function LlenarMatriz(matriz, callback)
{
    var ac = 0;
    while (10 !== ac++) {
        matriz.push(ac);
        callback("Llenando", ac);
    }
    callback("Ok");
}

LlenarMatriz([], function(evento, valor) { 
    if ("Ok" === evento) {
        console.log("[Info] Se ha terminado de llenar la matriz");
    } else {
        console.log("[Info] Se ha agregado el elemento " + valor);
    }
})
console.log("Esto se ejecuta después");*/

function mensaje(caso){
    //1.Escuchar si esta libre 
    //2.Transmitir  dato
    //3.Reconocimiento por el receptor
    eliminarT();
    //console.log(caso);
    var pce, pcr;
    switch(caso){
        case 1:
            //PC1 envia a PC2
            pce="PC1";
            pcr="PC2";
            //Tabla de la PC1
            tablaE(1);
            //Tabla de la PC2
            tablaR(2);            
            //Tabla de la PC3
            tablaN(3);
            break;
        case 2:
            //PC1 envia a PC3
            pce="PC1";
            pcr="PC3";
            //Tabla de la PC1
            tablaE(1);
            //Tabla de la PC2
            tablaN(2);
            //Tabla de la PC3
            tablaR(3);
            break;
        case 3:
            //PC2 envia a PC1
            pce="PC2";
            pcr="PC1";
            //Tabla de la PC1
            tablaR(1);
            //Tabla de la PC2
            tablaE(2);
            //Tabla de la PC3
            tablaN(3);
            break;
        case 4:
            //PC2 envia a PC3
            pce="PC2";
            pcr="PC3";
            //Tabla de la PC1
            tablaN(1);
            //Tabla de la PC2
            tablaE(2);
            //Tabla de la PC3
            tablaR(3);
            break;
        case 5:
            //PC3 envia a PC1
            pce="PC3";
            pcr="PC1";
            //Tabla de la PC1
            tablaR(1);
            //Tabla de la PC2
            tablaN(2);
            //Tabla de la PC3
            tablaE(3);
            break;
        case 6:
            //PC3 envia a PC2
            pce="PC3";
            pcr="PC1";
            //Tabla de la PC1
            tablaN(1);
            //Tabla de la PC2
            tablaR(2);
            //Tabla de la PC3
            tablaE(3);
            break;
    }
    console.log("caso: "+caso);
    console.log(pce);
    console.log(pcr);
    
}

function holi(){
    alert("Ya te esperas?");
}

function eliminarT(){
    //Eliminar cada una de las 3 tablas que se generan
    for(let i=1; i<4; i++){
        let tabla = document.getElementById("t"+i+"");
        if(!tabla){

        }else{
            let padre=tabla.parentNode;
            padre.removeChild(tabla);
        }
    }    
}

function tablaE(divt){
    let t1 = document.createElement("table");
    t1.setAttribute("id", "t1");
    let tr, tr2, tr3, td, td2, td3;
    //Creamos los elementos
    tr = document.createElement("tr");
    tr2 = document.createElement("tr");
    tr3 = document.createElement("tr");
    td = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    //Agregamos los textos
    td.appendChild(document.createTextNode("Request to Send (RTS): Enviado"));
    td2.appendChild(document.createTextNode("Clear to Send (CTS): Recibido"));
    td3.appendChild(document.createTextNode("Transferencia de Datos: Enviando..."));
    tr.appendChild(td);
    tr2.appendChild(td2);
    tr3.appendChild(td3);
    t1.appendChild(tr);
    t1.appendChild(tr2);
    t1.appendChild(tr3);
    document.getElementById(""+divt+"").appendChild(t1);
}

function tablaR(divt){
    let t1 = document.createElement("table");
    t1.setAttribute("id", "t2");
    let tr, tr2, tr3, td, td2, td3;
    //Creamos los elementos
    tr = document.createElement("tr");
    tr2 = document.createElement("tr");
    tr3 = document.createElement("tr");
    td = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    //Agregamos los textos
    td.appendChild(document.createTextNode("Request to Send (RTS): Recibido"));
    td2.appendChild(document.createTextNode("Clear to Send (CTS): Enviado"));
    td3.appendChild(document.createTextNode("Transferencia de Datos: Recibiendo..."));
    tr.appendChild(td);
    tr2.appendChild(td2);
    tr3.appendChild(td3);
    t1.appendChild(tr);
    t1.appendChild(tr2);
    t1.appendChild(tr3);
    document.getElementById(""+divt+"").appendChild(t1);
}

function tablaN(divt){
    let t1 = document.createElement("table");
    t1.setAttribute("id", "t3");
    let tr, tr2, tr3, td, td2, td3;
    //Creamos los elementos
    tr = document.createElement("tr");
    tr2 = document.createElement("tr");
    tr3 = document.createElement("tr");
    td = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    //Agregamos los textos
    
    td2.appendChild(document.createTextNode("Clear to Send (CTS): Recibido"));
    
    
    tr2.appendChild(td2);
    
    
    t1.appendChild(tr2);
    
    document.getElementById(""+divt+"").appendChild(t1);
}