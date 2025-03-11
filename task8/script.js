document.addEventListener("DOMContentLoaded", function () {
    const resultInput = document.getElementById("result");
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = this.innerText;

            if (value === "C") {
                resultInput.value = "";
            } else if (value === "←") {
                resultInput.value = resultInput.value.slice(0, -1);
            } else if (value === "=") {
                try {
                    resultInput.value = eval(resultInput.value);
                } catch {
                    alert("Invalid Expression");
                    resultInput.value = "";
                }
            } else {
                resultInput.value += value;
            }
        });
    });

    document.addEventListener("keydown", function (event) {
        const key = event.key;

        if (/[\d+\-*/.%]/.test(key)) {
            resultInput.value += key;
        } else if (key === "Enter") {
            try {
                resultInput.value = eval(resultInput.value);
            } catch {
                alert("Invalid Expression");
                resultInput.value = "";
            }
        } else if (key === "Backspace") {
            resultInput.value = resultInput.value.slice(0, -1);
        } else {
            alert("Only numbers are allowed");
            event.preventDefault();
        }
    });
});
