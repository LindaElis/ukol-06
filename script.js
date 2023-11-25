function fillcut(str, len) {
    if (typeof str !== "string" || !Number.isInteger(len) || len <= 0) {
        return
        }

    if (str.length >= len) {
         return str.substring(str.length - len)
    }

    const dots = ".".repeat(len - str.length)
    return dots + str
}

document.body.innerHTML += fillcut('petr', 8) + '<br>'; 
document.body.innerHTML += fillcut('petr', 3) + '<br>'; 
document.body.innerHTML += fillcut('petr', 4) + '<br>'; 