
// selamla("Amaç");
// selamla("Sevgi");


// function selamla(name) {

//     console.log("merhaba "+ name);
//     alert('merhaba '+ name);
//     document.getElementById("mesaj").innerText = "merhaba "+ name;
// }

// selamla("Amaç");

// function getNameSurname() {
//     let name=document.getElementById("name").value;
//     let surname=document.getElementById("surname").value;
//     let nameSurname= name+ " " + surname;
//     return nameSurname;
// }

// function selamla() {
//     let result=getNameSurname();
//     console.log("merhaba "+ result);
//     alert('merhaba '+ result);
//     document.getElementById("mesaj").innerText = "merhaba "+ result;
// }


// <!-- ödev -->

function gizle(){
var contents=document.getElementsByClassName("faq-content");
for (var i = 0; i< contents.length; i++) {
    contents [i].style.display="none";
    
}

}

function goster(id){
    let content=document.getElementById(id);
    gizle();
    content.style.display="block";
}
    

// <!-- ödev -->