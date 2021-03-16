document.querySelectorAll(".kredit").forEach(form => {
    // console.log(loginForm.cred.value);

    form.querySelector(".btn").onclick = () => {
        let formData = {
            cred: form.cred.value,
            sroc: form.sroc.value,
            aim: form.vidKredit.value
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
                // document.location.href = '/index'

            } else {
                alert("Что-то пошло не так");
                // document.location.reload();
            }
        });
        // console.log(formData);
    }
    // console.log(formData);

});