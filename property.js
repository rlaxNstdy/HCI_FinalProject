

const /** {NodeList} */ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    });
});