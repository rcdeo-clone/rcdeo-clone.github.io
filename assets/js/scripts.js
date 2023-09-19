const btnIamFeelingLuck = document.querySelector("form [type=\"button\"]");
    btnIamFeelingLuck.addEventListener("click", () => {
        location.href = "https://www.google.com/doodles";
});

/**
 * SIDEBAR - EXPAND MENU
 * 
 * Click id: btn-mobile-menu
 * Search id: sidebar-mobile-container
 * Remove class: hide-on-sidebar
 */
const sidebarExpand = document.querySelector("#btn-mobile-menu");
sidebarExpand.addEventListener("click", () => {
    const sidebarExpandMenu = document.querySelector("#sidebar-mobile-container");
    sidebarExpandMenu.classList.remove("hide-on-sidebar");
});

/**
 * SIDEBAR - COLLAPSE MENU
 * 
 * Click id: sidebar-mobile-mask
 * Search id: sidebar-mobile-container
 * Add class: hide-on-sidebar
 */
const sidebarCollapse = document.querySelector("#sidebar-mobile-mask");
sidebarCollapse.addEventListener("click", () => {
    const sidebarCollapseMenu = document.querySelector("#sidebar-mobile-container");
    sidebarCollapseMenu.classList.add("hide-on-sidebar");
});