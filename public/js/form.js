var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var feedback = document.getElementById("feedback-form");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                status.innerHTML = "Terima kasih atas kiriman Anda!";
                feedback.classList.remove("hidden");
                feedback.classList.add("flex");
                form.reset();
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                        status.innerHTML = data["errors"]
                            .map((error) => error["message"])
                            .join(", ");
                        feedback.classList.remove("hidden");
                        feedback.classList.add("flex");
                    } else {
                        status.innerHTML =
                            "Sepertinya ada kesalahan pada mengirim form anda";
                        feedback.classList.remove("hidden");
                        feedback.classList.add("flex");
                    }
                });
            }
        })
        .catch((error) => {
            status.innerHTML =
                "Sepertinya ada kesalahan pada mengirim form anda";
            feedback.classList.remove("hidden");
            feedback.classList.add("flex");
        });
}
form.addEventListener("submit", handleSubmit);
