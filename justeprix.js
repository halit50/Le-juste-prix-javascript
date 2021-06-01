// Récupérer nos éléments
let input = document.getElementById('prix');
let error = document.querySelector('small');
let formulaire = document.getElementById('formulaire');

// Cacher l'erreur
error.style.display = 'none';

// Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

// Créer la fonction à vérifier
function verifier(nombre) {
    let instruction = document.createElement('div')

    if (nombre < nombreAleatoire) {
        // C'est plus
        instruction.textContent = '#' + coups + ' ( ' + nombre + ' ) c\'est plus !';
        instruction.className = 'instruction plus';

    } else if (nombre > nombreAleatoire) {
        // C'est moins
        instruction.textContent = '#' + coups + ' ( ' + nombre + ' ) c\'est moins !';
        instruction.className = 'instruction moins';

    } else {
        // c'est le juste prix
        instruction.textContent = '#' + coups + ' ( ' + nombre + ' ) Félicitations, c\'est le juste prix !';
        instruction.className = 'instruction fini';
        input.disabled = true;
    }

    // Ajouter l'élément devant les autres
    document.querySelector('#instructions').prepend(instruction);
    
}

// Vérifier que l'utilisateur donne bien un nombnre
input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = 'inline';
    } else {
        error.style.display = 'none';
    }
})

// Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNaN(input.value) || input.value == '') {
        input.style.borderColor = 'red';
    } else {
        coups++;
        input.style.borderColor = 'silver';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
})


