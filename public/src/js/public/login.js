document.querySelectorAll(".autorez").forEach(form =>{

    form.querySelectorAll(".login").forEach(login=>{
        login.querySelector(".btnEnterOne").onclick = event=>{
                event.preventDefault();
                form.querySelector(".enter").classList.toggle("enter_active");
                form.querySelector(".login").classList.toggle("login_active");
        }
        login.querySelector(".btnLogin").onclick = event=>{
            event.preventDefault();
            // let sendData = {
            //     login:login.
            // };
            // console.log(formData);
            // fetch("/login", {
            //     method: "POST",
            //     body: formData,
            // }).then(res => {
            //     if (res.status == 200) {
            //         alert("Операция завершина успешно");
            //         document.location.reload();
            //     } else {
            //         alert("Что-то пошло не так");
            //         document.location.reload();
            //     }
            // });
            login.querySelectorAll(".login-form").forEach(loginForm=>{
                var formData = {
                    mail:loginForm.login.value
                };
                console.log(formData);
            })
    }
    })
    form.querySelectorAll(".enter").forEach(login=>{
        login.querySelector(".btnLoginOne").onclick = event=>{
                event.preventDefault();
                form.querySelector(".enter").classList.toggle("enter_active");
                form.querySelector(".login").classList.toggle("login_active");
        }

        login.querySelector(".btnEnter").onclick = event=>{
            event.preventDefault();
            alert(1);
    }
   
    })
});