

function sendmail(){
    console.log("sendmail call");
    let name=document.getElementById("name").value;
    let subject=document.getElementById("subject").value;
    let email=document.getElementById("email").value;
    let msg=document.getElementById("msg").value;
    
    if(!name || !msg || !subject||!email){
      alert("Enter all valid Details.");
    }
    else{     
         Email.send({
           Host : "smtp.elasticemail.com",
           Username : "radadiyakrinish29@gmail.com",
           Password : "2FD125D722486A49CB300EF5BD82D9D99067",
           To : 'radadiyakrinish1999@gmail.com',
           From :"radadiyakrinish29@gmail.com",
           Subject : subject,
           Body : "Name : " + name +" Email : " + email +  " Message : "+msg 
       }).then(
         message => alert(message)
        
       );
        document.getElementById("name").value="";
        document.getElementById("subject").value="";
        document.getElementById("email").value="";
        document.getElementById("msg").value="";
       console.log("success");
       
      
    }
   
}