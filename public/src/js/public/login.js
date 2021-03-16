document.querySelectorAll(".autorez").forEach(form => {

    form.querySelectorAll(".login").forEach(login => {
        login.querySelector(".btnEnterOne").onclick = event => {
            event.preventDefault();
            form.querySelector(".enter").classList.toggle("enter_active");
            form.querySelector(".login").classList.toggle("login_active");
        }
        login.querySelector(".btnLogin").onclick = event => {
            event.preventDefault();
            login.querySelectorAll(".login-form").forEach(loginForm => {
                let pas;
                if (loginForm.password.value == loginForm.repassword.value) {
                    pas = loginForm.password.value;

                    let formData = {
                        mail: loginForm.login.value,
                        lastName: loginForm.lastName.value,
                        firstName: loginForm.firstName.value,
                        patronymic: loginForm.patronymic.value,
                        password: pas,
                        telephone: loginForm.telephone.value,
                        series:loginForm.series.value,
                        number:loginForm.number.value
                    };
                    fetch("/regis", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(formData),
                    }).then(res => {
                        if (res.status == 200) {
                            alert("Операция завершина успешно");
                            document.location.href = '/index'

                        } else {
                            alert("Что-то пошло не так");
                            document.location.reload();
                        }
                    });
                } else {
                    alert("пароли не совподают!");
                    location.reload();
                    return;
                }
            })
        }
    })
    form.querySelectorAll(".enter").forEach(login => {
        login.querySelector(".btnLoginOne").onclick = event => {
            event.preventDefault();
            form.querySelector(".enter").classList.toggle("enter_active");
            form.querySelector(".login").classList.toggle("login_active");
        }

        login.querySelector(".btnEnter").onclick = event => {
            event.preventDefault();
            // alert(1);
            login.querySelectorAll(".enter-form").forEach(enterForm => {
                let formData = {
                    mail: enterForm.login.value,
                    password: enterForm.password.value
                }
                fetch("/login", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(formData),
                }).then(res => {
                    if (res.status == 200) {
                        alert("Операция завершина успешно");
                        document.location.href = '/index'

                    } else {
                        alert("Что-то пошло не так");
                        document.location.reload();
                    }
                });
            })
        }

    })
});