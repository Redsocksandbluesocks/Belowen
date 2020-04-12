var contacthide=true;
function clr(id){
    document.getElementById(id).innerHTML="";
}
function fill(id,str){
    document.getElementById(id).innerHTML=str;
}
function hide(id){
    if(contacthide==true){
        document.getElementById(id).innerHTML="9876543210";
        contacthide=false;
    }
    else{
        document.getElementById(id).innerHTML="";
        contacthide=true;
    }
        
}