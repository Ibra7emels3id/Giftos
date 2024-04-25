// register user 

let username = document.getElementById(`username`),
    password = document.getElementById(`password`),
    name     = document.getElementById(`name`),
    email    = document.getElementById(`email`),
    submit   = document.getElementById(`submit`);



    submit.addEventListener(`click` , (e)=>{
        e.preventDefault();
        if(username.value == `` || password.value == `` || name.value == `` || email.value == `` ){
            alert(`please enter Date`)
        }else{
            localStorage.setItem(`username` , username.value)
            localStorage.setItem(`password` , password.value)
            localStorage.setItem(`name` , name.value)
            localStorage.setItem(`email` , email.value)
            
            setTimeout(()=>{
                window.location = "login.html" ;
            } ,1000)
        }
    })

