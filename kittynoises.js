/*
*highly* derivative of:
https://nomnomnami.com/games/random-oc
thank you for being smarter than me </3
*/

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

const meow1 = ["meow!", "meooow...", ":3", ">_<", "mrreoow", "mrrap", "mrmfmrrr :3", "nnamsajmsahjasm", "mfrmmrmrmfph", "rreeoow", "owo", "meeow", "mrmrmrfmr", "nya", "mrrrp", "mrmrmrr", "nyaaaaa", "rawwwwranyaayawm", "bweh >w<", "uwu", "ouo", ">///<", "awawa", "awa...", "mrawrmwarm", "meooowwwe", "meowewre", "nyan!", "nyanyanyan~", "kehehe :3", "uwaa ><", "wawa!", "awuuuwa.."];

let meow2 = ["meow!", "meooow...", ":3", ">_<", "mrreoow", "mrrap", "mrmfmrrr :3", "nnamsajmsahjasm", "mfrmmrmrmfph", "rreeoow", "owo", "meeow", "mrmrmrfmr", "nya", "mrrrp", "mrmrmrr", "nyaaaaa", "rawwwwranyaayawm", "bweh >w<", "uwu", "ouo", ">///<", "awawa", "awa...", "mrawrmwarm", "meooowwwe", "meowewre", "nyan!", "nyanyanyan~", "kehehe :3", "uwaa ><", "wawa!", "awuuuwa.."];

let meow3 = ["meow!", "meooow...", ":3", ">_<", "mrreoow", "mrrap", "mrmfmrrr :3", "nnamsajmsahjasm", "mfrmmrmrmfph", "rreeoow", "owo", "meeow", "mrmrmrfmr", "nya", "mrrrp", "mrmrmrr", "nyaaaaa", "rawwwwranyaayawm", "bweh >w<", "uwu", "ouo", ">///<", "awawa", "awa...", "mrawrmwarm", "meooowwwe", "meowewre", "nyan!", "nyanyanyan~", "kehehe :3", "uwaa ><", "wawa!", "awuuuwa.."];

let meow4 = ["meow!", "meooow...", ":3", ">_<", "mrreoow", "mrrap", "mrmfmrrr :3", "nnamsajmsahjasm", "mfrmmrmrmfph", "rreeoow", "owo", "meeow", "mrmrmrfmr", "nya", "mrrrp", "mrmrmrr", "nyaaaaa", "rawwwwranyaayawm", "bweh >w<", "uwu", "ouo", ">///<", "awawa", "awa...", "mrawrmwarm", "meooowwwe", "meowewre", "nyan!", "nyanyanyan~", "kehehe :3", "uwaa ><", "wawa!", "awuuuwa.."];

let meow5 = ["meow!", "meooow...", ":3", ">_<", "mrreoow", "mrrap", "mrmfmrrr :3", "nnamsajmsahjasm", "mfrmmrmrmfph", "rreeoow", "owo", "meeow", "mrmrmrfmr", "nya", "mrrrp", "mrmrmrr", "nyaaaaa", "rawwwwranyaayawm", "bweh >w<", "uwu", "ouo", ">///<", "awawa", "awa...", "mrawrmwarm", "meooowwwe", "meowewre", "nyan!", "nyanyanyan~", "kehehe :3", "uwaa ><", "wawa!", "awuuuwa.."];

let meow6 = ["meow!", "meooow...", ":3", ">_<", "mrreoow", "mrrap", "mrmfmrrr :3", "nnamsajmsahjasm", "mfrmmrmrmfph", "rreeoow", "owo", "meeow", "mrmrmrfmr", "nya", "mrrrp", "mrmrmrr", "nyaaaaa", "rawwwwranyaayawm", "bweh >w<", "uwu", "ouo", ">///<", "awawa", "awa...", "mrawrmwarm", "meooowwwe", "meowewre", "nyan!", "nyanyanyan~", "kehehe :3", "uwaa ><", "wawa!", "awuuuwa.."];

let meow7 = ["meow!", "meooow...", ":3", ">_<", "mrreoow", "mrrap", "mrmfmrrr :3", "nnamsajmsahjasm", "mfrmmrmrmfph", "rreeoow", "owo", "meeow", "mrmrmrfmr", "nya", "mrrrp", "mrmrmrr", "nyaaaaa", "rawwwwranyaayawm", "bweh >w<", "uwu", "ouo", ">///<", "awawa", "awa...", "mrawrmwarm", "meooowwwe", "meowewre", "nyan!", "nyanyanyan~", "kehehe :3", "uwaa ><", "wawa!", "awuuuwa.."];

generateStory();

function newMeow1(){
    let meowspeak1 = meow1[getRandomInt(0, meow1.length)];
    
    document.getElementById("meowspeak1").innerHTML = ` ${meowspeak1}`;   
}
function newMeow2(){
    let meowspeak2 = meow2[getRandomInt(0, meow2.length)];
    
    document.getElementById("meowspeak2").innerHTML = ` ${meowspeak2}`;   
}
function newMeow3(){
    let meowspeak3 = meow3[getRandomInt(0, meow3.length)];
    
    document.getElementById("meowspeak3").innerHTML = ` ${meowspeak3}`;   
}
function newMeow4(){
    let meowspeak4 = meow4[getRandomInt(0, meow4.length)];
    
    document.getElementById("meowspeak4").innerHTML = ` ${meowspeak4}`;   
}
function newMeow5(){
    let meowspeak5 = meow5[getRandomInt(0, meow5.length)];
    
    document.getElementById("meowspeak5").innerHTML = ` ${meowspeak5}`;   
}
function newMeow6(){
    let meowspeak5 = meow6[getRandomInt(0, meow6.length)];
    
    document.getElementById("meowspeak6").innerHTML = ` ${meowspeak5}`;   
}
function newMeow7(){
    let meowspeak5 = meow7[getRandomInt(0, meow7.length)];
    
    document.getElementById("meowspeak7").innerHTML = ` ${meowspeak5}`;   
}


function generateStory(){
    newMeow2();
    newMeow1();
    newMeow3();
    newMeow4();
    newMeow5();
    newMeow5();
    newMeow6();
    newMeow7();
}


