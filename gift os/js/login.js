
let username = document.getElementById(`username`),
    password = document.getElementById(`password`),
    name     = document.getElementById(`name`),
    email    = document.getElementById(`email`),
    SunBtn   = document.querySelector(`.submit`)

// login user 
let getUsername =  localStorage.getItem("username"),
    getpassword =  localStorage.getItem("password");
            
            

SunBtn.addEventListener(`click` , (e)=>{
    e.preventDefault();
    if(username.value == `` || password.value == ``){
        alert(`please enter Date`)

    }else{
        if(getUsername && getUsername.trim() == username.value.trim() && getpassword && getpassword == password.value){

            setTimeout(()=>{
                window.location = "index.html" ;
            } ,1000)

        }else{
            alert(`erorr`)
        }
        
    }
})