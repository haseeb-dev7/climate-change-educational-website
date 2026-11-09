document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll("#tgNav .nav-link");
    var navMenu = document.getElementById("tgNav");

    if (!navMenu) {
        return;
    }

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navMenu.classList.contains("show")) {
                var bsCollapse = bootstrap.Collapse.getInstance(navMenu);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
});
