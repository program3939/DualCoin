// Firebase-Konfiguration (ersetze mit deinen eigenen Werten)
const firebaseConfig = {
    // ...
};
firebase.initializeApp(firebaseConfig);

// Funktion zum Einloggen in das Admin-Panel
function login() {
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    const loginMessage = document.getElementById('loginMessage');
    const adminPanel = document.getElementById('adminPanel');

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Benutzer erfolgreich angemeldet
            adminPanel.style.display = 'block';
            loginMessage.style.display = 'none';
        })
        .catch((error) => {
            // Fehler bei der Anmeldung
            loginMessage.style.display = 'block';
            loginMessage.innerText = 'Ungültige Anmeldedaten: ' + error.message;
        });
}

// Funktion zum Ausloggen
function logout() {
    firebase.auth().signOut()
        .then(() => {
            // Benutzer erfolgreich abgemeldet
            adminPanel.style.display = 'none';
        })
        .catch((error) => {
            // Fehler beim Ausloggen
            console.error('Fehler beim Ausloggen:', error);
        });
}
