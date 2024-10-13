//creo una variable per referir-me a totes les paraules que poden aparèixer a l'exercici:
let llistaDeParaulesAvançades = ["abaixar", "abdicar", "abdomen", "abrupte", "acidesa", "acoblar", "acordió", "adhesiu", 
    "adreçar", "afaitar", "afartat", "aigüera", "aïllant", "almenys", "almívar", "alvocat", "amnèsia", "amoïnar", "angúnia", 
    "annexar", "àrbitre", "arribar", "assassí", "astúcia", "atapeït", "axil·la", "balança", "baldufa", "barroer", "berruga", 
    "bàsquet", "bastant", "becaina", "beisbol", "bèl·lic", "benzina", "bravada", "cacatua", "cacauet", "cadascú", "cafeïna", 
    "calabós", "calvari", "capellà", "capítol", "capritx", "cervesa", "cigonya", "circuit", "civisme", "cloïssa", "cohesió", 
    "colònia", "cònjuge", "context", "contigu", "continu", "coratge", "corbata", "cortina", "creença", "créixer", "cruïlla", 
    "dàlmata", "decisió", "dempeus", "darrere", "descens", "descuit", "despatx", "destral", "devoció", "dièresi", "disseny", 
    "eclipsi", "eixerit", "eixugar", "elefant", "emissor", "engruna", "enguany", "entelar", "enyorar", "esbarjo", "escopir", 
    "esprint", "espurna", "estàtua", "estella", "estómac", "estúpid", "esverat", "etzibar", "exàmens", "excepte", "exhalar", 
    "exhibir", "família", "fanàtic", "femella", "figuera", "filòsof", "flabiol", "flairar", "flamenc", "formiga", "fórmula", 
    "fortuït", "futbolí", "galàxia", "gamarús", "ganàpia", "ganyota", "gimcana", "gratuït", "gravats", "guepard", "hàbitat", 
    "heretar", "heroïna", "hexàgon", "higiene", "horitzó", "idèntic", "importú", "inèrcia", "inhalar", "interès", "intriga", 
    "juvenil", "làmpada", "lasanya", "liberal", "lloança", "marquès", "màscara", "massapà", "medalló", "megàfon", "memòria", 
    "miratge", "mosquit", "mossega", "nàufrag", "nàusees", "navalla", "nenúfar", "nerviüt", "notícia", "olfacte", "olímpic", 
    "omnívor", "pangolí", "paparra", "passeig", "patètic", "patufet", "patxoca", "pavelló", "penyora", "perenne", "peresós", 
    "pèrgola", "període", "perruca", "petxina", "pigment", "pinzell", "pirueta", "piscina", "plàstic", "plàtans", "polígon", 
    "pòlissa", "polític", "politja", "pol·len", "pólvora", "popurri", "porquet", "preciós", "presagi", "préssec", "pressió", 
    "préstec", "propina", "pròsper", "pròtesi", "proveït", "pubilla", "quadern", "queixal", "qüestió", "quinqué", "rampell", 
    "raspall", "ravioli", "rebaixa", "recança", "reialme", "rèplica", "resolut", "ressopó", "retòric", "revisió", "revolta", 
    "ridícul", "rosassa", "rovelló", "rúbrica", "sanglot", "següent", "sexenni", "senzill", "síndria", "síntesi", "sivella", 
    "sospita", "sufocar", "suïcida", "supòsit", "tarannà", "tobogan", "tómbola", "topònim", "tracció", "traïdor", "treball", 
    "turmell", "ungüent", "vàlvula", "vassall", "vehicle", "vianant", "vicenni", "víctima", "vivípar", 
    
    "abadessa", "abaratir", "abducció", "abraçada", "abscissa", "absorció", "acaparar", "aclamava", "acomplir", "acumular", 
    "addicció", "adherent", "adulteri", "aeroport", "afluixar", "aixafada", "al·legar", "androide", "anul·lar", "apòstrof", 
    "armament", "arracada", "bajanada", "ballesta", "bestiesa", "cabdells", "canyella", "cavaller", "cèl·lula", "cicatriu", 
    "col·lega", "col·legi", "commoure", "còmplice", "condemna", "conduïen", "conèixer", "connexió", "contusió", "corranda", 
    "corretja", "crispeta", "croqueta", "custòdia", "defensar", "defunció", "degotava", "deixalla", "demència", "demoníac", 
    "densitat", "desastre", "desitjar", "desossar", "devaluar", "diabetis", "diàmetre", "disbarat", "dissabte", "diversió", 
    "eficàcia", "el·lipse", "empatxat", "endavant", "endossar", "ennuegat", "enraonen", "entremig", "enxampar", "enxaneta", 
    "esbarzer", "escàndol", "escapçar", "escarpat", "escèptic", "escurçat", "espàrrec", "esquirol", "estiueig", "excursió", 
    "faldilla", "fanfarró", "fangueig", "farmàcia", "fascinar", "fatxenda", "feixisme", "filferro", "gira-sol", "glossari", 
    "goril·la", "herbívor", "hipòtesi", "ignorant", "il·legal", "il·lícit", "il·lògic", "il·lusió", "immediat", "imminent", 
    "impremta", "indígena", "innocent", "intuïció", "javelina", "joventut", "juràssic", "justícia", "laboriós", "lentilla", 
    "leucèmia", "llagostí", "llàgrima", "lleganya", "llengües", "majordom", "majúscul", "malaltís", "malentès", "marrameu", 
    "medul·la", "merèixer", "metàfora", "meteorit", "minúscul", "mofar-se", "molècula", "mol·lusc", "mostatxo", "motxilla", 
    "muntanya", "necesser", "novel·la", "obsessió", "oscil·la", "pallasso", "pal·liar", "pallissa", "palpable", "pàncrees", 
    "paràbola", "paràgraf", "paranoia", "para-sol", "passadís", "patinada", "pèl-roig", "pessebre", "piràmide", "pissarra", 
    "pistatxo", "playback", "pòl·lens", "portàtil", "precedir", "primícia", "prohibir", "pròrroga", "pròstata", "proteïna", 
    "pupil·la", "qualitat", "quaresma", "quocient", "rebregat", "recíproc", "recòndit", "redreçar", "reescrit", "referent", 
    "relaxant", "relíquia", "remissió", "renúncia", "retrocés", "revetlla", "revòlver", "rotllana", "sacarina", "sacerdot", 
    "sacsejar", "salvatge", "sandàlia", "sandvitx", "sarcasme", "sarcòfag", "servitud", "síl·laba", "símptoma", "solstici", 
    "subhasta", "tanqueta", "tornavís", "trapella", "vagància", "versàtil", "xarbotar"]

//creo una variable per referir-me a tots els colors que poden aparèixer a la paraula:
let llistaDeColors1 = ["#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000"]
let llistaDeColors2 = ["#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f"]
let llistaDeColors3 = ["#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff"]
let llistaDeColors4 = ["#87ff00", "#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff", "#ffed00"]
let llistaDeColors5 = ["#00abff", "#ffab00", "#000000", "#ff009f", "#9600ff", "#ffed00", "#87ff00"]
let llistaDeColors6 = ["#ffab00", "#000000", "#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff"]
let llistaDeColors7 = ["#000000", "#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00"]
let llistaDeColors8 = ["#ff009f", "#9600ff", "#ffed00", "#87ff00", "#00abff", "#ffab00", "#000000"]

//l'equació per a obtenir aleatorietat és la següent, i es farà servir tant per la paraula com pels colors:
let paraula = llistaDeParaulesAvançades[Math.floor(Math.random() *llistaDeParaulesAvançades.length)].toUpperCase();  
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
let color6 = llistaDeColors6[Math.floor(Math.random() *llistaDeColors6.length)];  
console.log(color6);
let color7 = llistaDeColors7[Math.floor(Math.random() *llistaDeColors7.length)];  
console.log(color7);
let color8 = llistaDeColors8[Math.floor(Math.random() *llistaDeColors8.length)];  
console.log(color8);

//aquesta serà la primera funció en realitzar-se, per tant ha de mostrar la paraula aleatòria i amagar la resta de l'exercici:
window.onload = function() { //window.onload fa que la funció s'executi un cop carregada la pàgina  

    //allà on es troba id="paraula", hi aparaixarà la paraula aleatòria 
    document.getElementById("primeraLletra").innerText = paraula.charAt(0); 
    document.getElementById("primeraLletra").style.color = color1;

    document.getElementById("segonaLletra").innerText = paraula.charAt(1); 
    document.getElementById("segonaLletra").style.color = color2;
    
    document.getElementById("terceraLletra").innerText = paraula.charAt(2); 
    document.getElementById("terceraLletra").style.color = color3;

    document.getElementById("quartaLletra").innerText = paraula.charAt(3); 
    document.getElementById("quartaLletra").style.color = color4;

    document.getElementById("cinquenaLletra").innerText = paraula.charAt(4); 
    document.getElementById("cinquenaLletra").style.color = color5;

    document.getElementById("sisenaLletra").innerText = paraula.charAt(5);
    document.getElementById("sisenaLletra").style.color = color6;

    document.getElementById("setenaLletra").innerText = paraula.charAt(6); 
    document.getElementById("setenaLletra").style.color = color7;

    if (paraula.length >=8) {
    document.getElementById("vuitenaLletra").innerText = paraula.charAt(7); 
    document.getElementById("vuitenaLletra").style.color = color8;
    } else {
        document.getElementById("vuitenaLletra").style.display = "none";
    }

    let textColor = document.getElementById("colorsResposta")
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

        if (paraula.length <= 7) {
            document.getElementById("vuitèColor").style.display = "none";
        } else {
            document.getElementById("vuitèColor").style.display = "inline";
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
    let respostaColor6 = document.getElementById("sisèColor").value;
    let respostaColor7 = document.getElementById("setèColor").value;
    let respostaColor8 = document.getElementById("vuitèColor").value;
    
    console.log("resposta: " + respostaColor1 + " " + respostaColor2 + " " + respostaColor3 + " " + respostaColor4 + " " + respostaColor5 + " " + respostaColor6 + " " + respostaColor7 + " " + respostaColor8)
    console.log("paraula correcta: " + color1 + " " + color2 + " " + color3 + " " + color4 + " " + color5 + " " + color6 + " " + color7 + " " + color8)

    //si no s'ha respost, no s'ha de poder continuar
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
        respostaColor4 === "#ffffff" ||
        respostaColor5 === "#ffffff" ||
        respostaColor6 === "#ffffff" ||
        respostaColor7 === "#ffffff" ||
        (paraula.length >= 8 && respostaColor8 === "#ffffff")) {
        
        botóContinua.style.display = "none";
    } 

    //si tots els camps s'han respost el botó de continuar ha d'aparèixer
    if (respostaColor1 != "#ffffff" &&
        respostaColor2 != "#ffffff" &&
        respostaColor3 != "#ffffff" &&
        respostaColor4 != "#ffffff" &&
        respostaColor5 != "#ffffff" &&
        respostaColor6 != "#ffffff" &&
        respostaColor7 != "#ffffff" &&
        (paraula.length < 8 || respostaColor8 != "#ffffff")) {

        botóContinua.style.display = "inline";

        if (respostaColor1 === color1 &&
            respostaColor2 === color2 &&
            respostaColor3 === color3 &&
            respostaColor4 === color4 &&
            respostaColor5 === color5 &&
            respostaColor6 === color6 &&
            respostaColor7 === color7 &&
            (paraula.length < 8 || (paraula.length >= 8 && respostaColor8 === color8))) {
            
            let llistaDeRespostes = ["BONA FEINA!", "BEN FET!", "ENHORABONA!", "BÉ!", "SEGUEIX AIXÍ!"]
            let correcció = llistaDeRespostes[Math.floor(Math.random() *llistaDeRespostes.length)].toUpperCase();
            console.log(correcció);
            document.getElementById("sol·lució1").innerText = correcció;

        } else {
            if (paraula.length == 7) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", " + colors[color5] + ", " + colors[color6] + ", " + colors[color7] + ", però encara pots continuar"; //escrivint (colors[colorx]) ens referim al mateix clolor que colorx, però aparaixerà el seu nom i no el codi hexadecimal 
            } else if (paraula.length == 8) {
                document.getElementById("sol·lució1").innerText = "HAS RELLISCAT! La resposta és: " + colors[color1] + ", " + colors[color2] + ", " + colors[color3] + ", " + colors[color4] + ", " + colors[color5] + ", " + colors[color6] + ", " + colors[color7] + ", " + colors[color8] + ", però encara pots continuar";
            }
        }

        //un cop duta a terme a funció de correcció, es pot deshabilitar el camp de text per mitjà de:
        document.getElementById("primerColor").disabled = true;
        document.getElementById("segonColor").disabled = true;
        document.getElementById("tercerColor").disabled = true;
        document.getElementById("quartColor").disabled = true;
        document.getElementById("cinquèColor").disabled = true;
        document.getElementById("sisèColor").disabled = true;
        document.getElementById("setèColor").disabled = true;
        if (paraula.length >= 8) {
        document.getElementById("vuitèColor").disabled = true;
        }

        //un cop duta a terme a funció de correcció, els botons de "refresca" i "envia" ja no son necessaris:
        document.getElementById("refresca2").style.display = "none";
        document.getElementById("envia1").style.display = "none";
    }
}

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
    let resposta = document.getElementById("espaiPerALaParaula").value.trim().toUpperCase(); //amb textContent el programa compara el que es troba escrit DINS l'espaiPerALaParaula i amb les funcions trim i toUpperCase, ens assegurem que no hi hagis espais en blanc de més i que tot estigui en majúscula
    //per assegurar-nos dels valors que comparem escrivim:
    console.log("resposta: " + resposta)
    console.log("paraula correcta: " + paraula) 

    //si no s'ha respost, no pot aparèixer el botó de següent
    if (resposta == "") {
        let botóSegüent = document.getElementById("següent");
        botóSegüent.style.display = "none";

    //si s'ha respost ( != vol dir diferent a ):
    } else if (resposta != "") {
        if (resposta === paraula) { //amb tres = (===) la comparació es converteix en estricta
            
            let llistaDeRespostes = ["BONA FEINA!", "BEN FET!", "ENHORABONA!", "BÉ!", "SEGUEIX AIXÍ!"]
            let correcció = llistaDeRespostes[Math.floor(Math.random() *llistaDeRespostes.length)].toUpperCase();
            console.log(correcció);
            document.getElementById("sol·lució2").innerText = correcció;

        } else {
            document.getElementById("sol·lució2").innerText = "HAS RELLISCAT! La resposta és " + paraula;
        }
        //un cop acabat l'exercici ha d'apareixer el botó de seguent:
        let botóSegüent = document.getElementById("següent");
        if (botóSegüent.style.display === "none"){
            botóSegüent.style.display = "inline";
        }
        //un cop duta a terme a funció de correcció, es pot deshabilitar el camp de text per mitjà de:
        document.getElementById("espaiPerALaParaula").disabled = true;
    }
}