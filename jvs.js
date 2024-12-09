let name_people=document.getElementById("name_input");
let comment =document.getElementById("comment_txt");
const submit =document.getElementById("submit");
let name_result;
let chonena;
let secondcomment;
let namecheck;


submit.onclick=function(){
    name_people=document.getElementById("name_input").value;
    comment =document.getElementById("comment_txt").value;
    document.getElementById("name_result").textContent=name_people;
    document.getElementById("chonena").textContent=comment;
    secondcomment=document.getElementById("comment_txt").value;
    secondcomment=Boolean(secondcomment);
    name_people=Boolean(name_people);
    console.log(name_people);
   
    if(name_people==false){
        document.getElementById("name_result").textContent="ANONYMUS";
    }
    else{
        
    }

    if(secondcomment == true){
   submit.onclick=function(){
    name_people=document.getElementById("name_input").value;
    comment =document.getElementById("comment_txt").value;
    document.getElementById("name_result2").textContent=name_people;
    document.getElementById("chonena2").textContent=comment;
    secondcomment=document.getElementById("comment_txt").value;
    secondcomment=Boolean(secondcomment);
    name_people=Boolean(name_people);
    console.log(name_people);
    if(name_people==false){
        document.getElementById("name_result2").textContent="ANONYMUS";
    }   
   }
}
}