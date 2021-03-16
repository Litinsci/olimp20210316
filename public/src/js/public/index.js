document.querySelectorAll(".kredit").forEach(form => {
    // console.log(loginForm.cred.value);

    form.querySelector(".btn").onclick = () => {
        let formData = {
            cred: form.cred.value,
            sroc: form.sroc.value,
            aim: form.vidKredit.value,
            email:form.email.value,
            zp:form.zp.value,
        };

        fetch("/index/calc", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(res => {
            if (JSON.stringify(res.status) == 200) {
                alert(`ваш ежемесечный платёж будет = ${JSON.stringify(res.plat)} р`);
                // document.location.href = '/index/user';
                fetch("/index/user", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        email:form.email.value,
                        aim: form.vidKredit.value,
                        sroc: form.sroc.value,
                        cred: form.cred.value
                    }),
                })
                .then(response => response.json())
                .then(res => {
                    document.location.href = `/index/user${form.email.value}`;
                })
                // document.location.reload();

            } else {
                alert("Что-то пошло не так");
                document.location.reload();
            }
        });
        // console.log(formData);
    }
    // console.log(formData);

});