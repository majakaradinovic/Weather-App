
function init() {
    let clear = document.getElementById("clear");
    clear.addEventListener("click", function clearDisplay() {
    clear.querySelectorAll('*').forEach(c => c.remove());
    });
}
