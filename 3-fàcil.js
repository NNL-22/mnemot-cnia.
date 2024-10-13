//creo una variable per referir-me a totes les paraules que poden aparèixer a l'exercici:
let llistaDeParaulesFàcils = ["alè", "elf", "faç", "fam", "gag", "gla", "hom", "lax", "mag", "maó", "mig", "mim", 
    "món", "nan", "neó", "oci", "ozó", "pam", "pèl", "peó", "pom", "pua", "raó", "rar", "rec", "sec", "tió", "veí",

    "abús", "ahir", "ànec", "àpat", "baix", "bava", "bebè", "bena", "basc", "boia", "boxa", "bufó", "buit", "cafè", 
    "calb", "coet", "coïa", "cuit", "dejú", "ençà", "envà", "èpic", "esma", "essa", "èter", "ètic", "euga", "èxit", 
    "fada", "faig", "falç", "fals", "fava", "feix", "felí", "fofo", "glaç", "gnom", "goig", "hule", "iaia", "ídol", 
    "iglú", "insà", "jove", "kiwi", "laic", "lava", "linx", "liró", "llaç", "llar", "luxe", "març", "matí", "milè", 
    "miol", "mite", "mixt", "molí", "nadó", "neci", "neta", "nexe", "obès", "obús", "obvi", "ocàs", "oïda", "onzè", 
    "orfe", "orni", "ovni", "país", "paté", "peça", "però", "peüc", "piló", "pres", "proa", "puça", "puré", "rabí", 
    "raça", "raïm", "rave", "roba", "rodó", "savi", "sens", "sofà", "suau", "suís", "tabú", "taüt", "teló", "tirà", 
    "traç", "udol", "únic", "urbà", "útil", "vagó", "vidu", "zoom", 

    "abans", "abast", "absis", "àlies", "anhel", "aplec", "aquós", "arnès", "arròs", "atroç", "atzar", "avall", "avanç", 
    "brega", "cabàs", "càlid", "cançó", "canvi", "capsa", "cartó", "coala", "conte", "còpia", "cogut", "crisi", "cursi", 
    "dansa", "dèbil", "desig", "digne", "digna", "dinou", "doncs", "dotze", "dutxa", "eixut", "embut", "encès", "enllà", 
    "enmig", "entès", "enuig", "eòlic", "època", "eriçó", "esbós", "escàs", "escut", "espòs", "estès", "excés", "exili", 
    "fàcil", "faisà", "falca", "falcó", "faraó", "faula", "fauna", "feliç", "fèmur", "femta", "fesol", "festí", "fibló", 
    "físic", "fitxa", "fleca", "fòbia", "fondo", "força", "gàbia", "ganxo", "garsa", "glaçó", "hàbil", "herba", "hiena", 
    "himne", "honor", "humus", "ictus", "imant", "incís", "innat", "íntim", "io-io", "larva", "làser", "lèxic", "límit", 
    "línia", "llama", "llamp", "llatí", "llaüt", "llavi", "lleig", "llenç", "lliçó", "lloba", "llumí", "lúcid", "lúdic", 
    "màfia", "màgia", "magma", "malbé", "mànec", "manya", "marrà", "màxim", "mèdic", "mercè", "mèrit", "mímic", "minyó", 
    "mític", "mòbil", "mosso", "músic", "mutis", "nadiu", "nàpia", "nebot", "nimfa", "nítid", "núvol", "obeir", "obtús", 
    "òndia", "òptic", "òrgan", "ouera", "pànic", "patge", "pedaç", "pedal", "penós", "perdó", "pèsol", "pètal", "pífia", 
    "pitet", "plaça", "plaer", "plagi", "pinça", "platí", "ploma", "poema", "polir", "polze", "pompó", "pòmul", "ponxo", 
    "profà", "prova", "quasi", "quota", "ràbia", "ràdio", "raïms", "ràpid", "ratxa", "rauxa", "règim", "regne", "reïna", 
    "remei", "renec", "repàs", "repòs", "rètol", "reüll", "rival", "ronyó", "rugbi", "ruïna", "símil", "sípia", "sòlid", 
    "talar", "també", "tàpia", "tapís", "témer", "tenaç", "tímid", "típic", "títol", "torxa", "treva", "túnel", "últim", 
    "veïna", "veloç", "vídeo", "vòmit", "vostè", "xafar", "xàfec", "xampú", "xifra", "xoriç"]

//creo una variable per referir-me a tots els colors que poden aparèixer a la paraula:
let llistaDeColors1 = ["#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000"]
let llistaDeColors2 = ["#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f"]
let llistaDeColors3 = ["#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff"]
let llistaDeColors4 = ["#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff", "#ffed00"]
let llistaDeColors5 = ["#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff", "#ffed00", "#87ff00"]

//l'equació per a obtenir aleatorietat és la següent, i es farà servir tant per la paraula com pels colors:
let paraula = llistaDeParaulesFàcils[Math.floor(Math.random() *llistaDeParaulesFàcils.length)].toUpperCase();  
console.log(paraula); 

let color1 = llistaDeColors1[Math.floor(Math.random() *llistaDeColors1.length)];  
console.log(color1);
let color2 = llistaDeColors2[Math.floor(Math.random() *llistaDeColors2.length)];  
console.log(color2);
let color3 = llistaDeColors3[Math.floor(Math.random() *llistaDeColors3.length)];  
console.log(color3);
let color4 = llistaDeColors4[Math.floor(Math.random() *llistaDeColors4.length)];  
console.log(color4);
let color5 = llistaDeColors5[Math.floor(Math.random() *llistaDeColors5.length)];  
console.log(color5);

//aquesta serà la primera funció a realitzar-se, per tant, ha de mostrar la paraula aleatòria i amagar la resta de l'exercici:
window.onload = function() { //window.onload fa que la funció s'executi un cop carregada la pàgina  

    //allà on es troba id="paraula", hi apareixarà la paraula aleatòria 
    document.getElementById("primeraLletra").innerText = paraula.charAt(0); 
    document.getElementById("primeraLletra").style.color = color1;

    document.getElementById("segonaLletra").innerText = paraula.charAt(1); 
    document.getElementById("segonaLletra").style.color = color2;
    
    document.getElementById("terceraLletra").innerText = paraula.charAt(2); 
    document.getElementById("terceraLletra").style.color = color3;

    if (paraula.length >=4) {
    document.getElementById("quartaLletra").innerText = paraula.charAt(3); 
    document.getElementById("quartaLletra").style.color = color4;
    } else {
        document.getElementById("quartaLletra").style.display = "none";
    }
    if (paraula.length >=5) {
    document.getElementById("cinquenaLletra").innerText = paraula.charAt(4); 
    document.getElementById("cinquenaLletra").style.color = color5;
    } else {
        document.getElementById("cinquenaLletra").style.display = "none";
    }

//En aquest punt de l’exercici encara no pot aparèixer la resta del joc:
    let textColor = document.getElementById("colorsResposta");
        textColor.style.display = "none";

    let taula2 = document.getElementById("exercici");
        taula2.style.display = "none";

    let botóSegüent = document.getElementById("següent");
        botóSegüent.style.display = "none";
}

// En prèmer el botó "amaga-la", cal amagar la primera part de l'exercici (es fa el mateix que a la funció anterior):
function mostrarOcultarText() {
    let taula1 = document.getElementById("imatgeMental");
        taula1.style.display = "none"; //si es veu amaga-ho

    let botons = document.getElementById("botons");
        botons.style.display = "none";

    let textColor = document.getElementById("colorsResposta");
        textColor.style.display = "inline";
    
    let botóContinua = document.getElementById("continua");
        botóContinua.style.display = "none";

        if (paraula.length <= 3) {
            document.getElementById("quartColor").style.display = "none";
            document.getElementById("cinquèColor").style.display = "none";
        } else if (paraula.length <= 4) {
            document.getElementById("cinquèColor").style.display = "none";
        } else {
            document.getElementById("quartColor").style.display = "inline";
            document.getElementById("cinquèColor").style.display = "inline";
        }
}   

// En prèmer el botó envia:
function corregir() {
    //per assegurar-nos dels valors que comparem escrivim:
    let respostaColor1 = document.getElementById("primerColor").value;
    let respostaColor2 = document.getElementById("segonColor").value;
    let respostaColor3 = document.getElementById("tercerColor").value;
    let respostaColor4 = document.getElementById("quartColor").value;
    let respostaColor5 = document.getElementById("cinquèColor").value;
    
    console.log("resposta: " + respostaColor1 + " " + respostaColor2 + " " + respostaColor3 + " " + respostaColor4 + " " + respostaColor5)
    console.log("paraula correcta: " + color1 + " " + color2 + " " + color3 + " " + color4 + " " + color5)

    //si no s'ha respost, no s'ha de poder continuar: creem una variable:
    let botóContinua = document.getElementById("continua");

    let colors = {
        "#ff009f": "rosa", 
        "#9600ff": "lila", 
        "#ffed00": "groc", 
        "#87ff00": "verd", 
        "#00abff": "blau", 
        "#ffab00": "taronja", 
        "#000000": "negre",
    };

    //si algun camp no s'ha respost:
    if (respostaColor1 === "#ffffff" ||
        respostaColor2 === "#ffffff" ||
        respostaColor3 === "#ffffff" ||
        (paraula.length >= 4 && respostaColor4 === "#ffffff") ||
        (paraula.length >= 5 && respostaColor5 === "#ffffff")) {
        
        botóContinua.style.display = "none";
    } 

    //si tots els camps s'han respost el botó de continuar ha d'aparèixer i s'ha de mostrar la correcció:
    if (respostaColor1 != "#ffffff" &&
        respostaColor2 != "#ffffff" &&
        respostaColor3 != "#ffffff" &&
        (paraula.length < 4 || respostaColor4 != "#ffffff") &&
        (paraula.length < 5 || respostaColor5 != "#ffffff")) {

        botóContinua.style.display = "inline";

        if (respostaColor1 === color1 &&
            respostaColor2 === color2 &&
            respostaColor3 === color3 &&
            (paraula.length < 4 || (paraula.length >= 4 && respostaColor4 === color4)) &&
            (paraula.length < 5 || (paraula.length >= 5 && respostaColor5 === color5))) {
            
            //fem que aparegui una resposta de correcció diferent cada cop:
            let llistaDeRespostes = ["BONA FEINA!", "BEN FET!", "ENHORABONA!", "BÉ!", "SEGUEIX AIXÍ!"]
            let correcció = llistaDeRespostes[Math.floor(Math.random() *llistaDeRespostes.length)].toUpperCase();
            console.log(correcció);
            document.getElementById("sol·lució1").innerText = correcció;
            
        } else {
            if (paraula.length == 3) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", però encara pots continuar"; //escrivint (colors[colorx]) ens referim al mateix color que colorx, però apareixerà el seu nom i no el codi hexadecimal 
            } else if (paraula.length == 4) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", però encara pots continuar";
            } else if (paraula.length == 5) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", " + colors[color5] + ", però encara pots continuar";
            }
        }

        //un cop duta a terme a funció de correcció, es pot deshabilitar el camp de text per mitjà de:
        document.getElementById("primerColor").disabled = true;
        document.getElementById("segonColor").disabled = true;
        document.getElementById("tercerColor").disabled = true;
        if (paraula.length >= 4) {
        document.getElementById("quartColor").disabled = true;
        }
        if (paraula.length >= 5) {
        document.getElementById("cinquèColor").disabled = true;
        }

        //un cop duta a terme a funció de correcció, els botons de "refresca" i "envia" ja no son necessaris:
        document.getElementById("refresca2").style.display = "none";
        document.getElementById("envia1").style.display = "none";
    }
}

//En prémer el botó d’envia ha d’aparèixer el segon exercici:
function mostrarExercici() {
    let textColor = document.getElementById("colorsResposta");
        textColor.style.display = "none";

    let taula2 = document.getElementById("exercici");
        taula2.style.display = "inline";    
}

function refresca() {
    let refresca1 = document.getElementById("refresca1");
    refresca1.addEventListener('click', _ => {
        location.reload();
    })

    let refresca2 = document.getElementById("refresca2");
    refresca2.addEventListener('click', _ => {
        location.reload();
    })

    let refresca3 = document.getElementById("refresca3");
    refresca3.addEventListener('click', _ => {
        location.reload();
    })
}

function corregeixLaParaula() {
    //amb value el programa compara el que es troba escrit DINS l'espaiPerALaParaula i amb les funcions trim i toUpperCase, ens assegurem que no hi hagis espais en blanc de més i que tot estigui en majúscula:
    let resposta = document.getElementById("espaiPerALaParaula").value.trim().toUpperCase(); 
    //per assegurar-nos dels valors que comparem escrivim:
    console.log("resposta: " + resposta)
    console.log("paraula correcta: " + paraula) 

    //si no s'ha respost, no pot aparèixer el botó de següent
    if (resposta == "") {
        let botóSegüent = document.getElementById("següent");
        botóSegüent.style.display = "none";

    //si s'ha respost, corregeix:
    } else if (resposta != "") {
        if (resposta === paraula) { //amb tres = (===) la comparació es converteix en estricta
            let llistaDeRespostes = ["BONA FEINA!", "BEN FET!", "ENHORABONA!", "BÉ!", "SEGUEIX AIXÍ!"]
            let correcció = llistaDeRespostes[Math.floor(Math.random() *llistaDeRespostes.length)].toUpperCase();
            console.log(correcció);
            document.getElementById("sol·lució2").innerText = correcció;

        } else {
            document.getElementById("sol·lució2").innerText = "HAS RELLISCAT! La resposta és " + paraula;
        }
        //un cop acabat l'exercici ha d'aparèixer el botó de següent:
        let botóSegüent = document.getElementById("següent");
        if (botóSegüent.style.display === "none"){
            botóSegüent.style.display = "inline";
        }
        //un cop duta a terme a funció de correcció, es pot deshabilitar el camp de text per mitjà de:
        document.getElementById("espaiPerALaParaula").disabled = true;
    }
}