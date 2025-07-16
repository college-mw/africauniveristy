/**
 * Opens the side navigation menu.
 */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/**
 * Closes the side navigation menu.
 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/**
 * Adds an event listener to the mobile login/logout button to trigger the desktop button.
 */
document.addEventListener('DOMContentLoaded', () => {
    const loginLogoutMobile = document.getElementById('login-logout-mobile');
    if (loginLogoutMobile) {
        loginLogoutMobile.addEventListener('click', (e) => {
            e.preventDefault();
            const loginLogoutDesktop = document.getElementById('login-logout');
            if (loginLogoutDesktop) {
                loginLogoutDesktop.click();
            }
        });
    }
});
