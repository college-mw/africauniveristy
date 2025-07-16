import { auth, db } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

document.addEventListener('DOMContentLoaded', () => {
    const profilePictureEl = document.getElementById('profile-picture');
    const userNameEl = document.getElementById('user-name');
    const userEmailEl = document.getElementById('user-email');
    const logoutButton = document.getElementById('logout-button');

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userDbRef = ref(db, 'users/' + user.uid);
            get(userDbRef).then((snapshot) => {
                const userData = snapshot.val();
                if (userData) {
                    if (profilePictureEl) {
                        profilePictureEl.src = userData.profilePictureURL || '#';
                    }
                    if (userNameEl) {
                        userNameEl.textContent = userData.displayName || 'N/A';
                    }
                    if (userEmailEl) {
                        userEmailEl.textContent = userData.email || 'N/A';
                    }
                }
            });

            if (logoutButton) {
                logoutButton.addEventListener('click', () => {
                    signOut(auth).then(() => {
                        window.location.href = 'index.html';
                    }).catch((error) => {
                        console.error('Logout error:', error);
                    });
                });
            }
        } else {
            window.location.href = 'index.html';
        }
    });
});
