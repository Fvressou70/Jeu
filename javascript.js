var Choix_U = '';
var Choix_R = '';
var Score_U = 0;
var Score_R = 0;
var Tours = 0;
function ChoixUser(Signe) {
    Tours++;
    if (Tours<4) {
        if (Signe == "Pierre") {
            document.getElementById('User').setAttribute('src', 'Pierre.png');
            Choix_U = 'Pierre';
        }
        else if (Signe == "Papier") {
            document.getElementById('User').setAttribute('src', 'Papier.png');
            Choix_U = 'Papier';
        }
        else if (Signe == "Ciseaux") {
            document.getElementById('User').setAttribute('src', 'Ciseaux.png');
            Choix_U = 'Ciseaux';
        }
        ChoixRobot();
        if (Choix_U == 'Papier' && Choix_R == 'Pierre' || Choix_U == 'Pierre' && Choix_R == 'Ciseaux' || Choix_U == 'Ciseaux' && Choix_R == 'Papier') {
            console.log('Victoire !');
            Score_U++;
        }
        else if (Choix_U == 'Papier' && Choix_R == 'Ciseaux' || Choix_U == 'Pierre' && Choix_R == 'Papier' || Choix_U == 'Ciseaux' && Choix_R == 'Pierre') {
            console.log('Perdu');
            Score_R++;
    
        }
        else if (Choix_U == Choix_R) {
            console.log('Égalité !');
        }
        document.getElementById('Robot_Score').innerText = Score_R;
        document.getElementById('User_Score').innerText = Score_U;
        document.getElementById('Tours_Score').innerText = Tours;
    }
    
    
    
}
function ChoixRobot() {
    var nombre = Math.floor(Math.random(1) * 3);
    if (nombre == 0) {
        document.getElementById('Robot').setAttribute('src', 'Pierre.png');
        Choix_R = 'Pierre';
    } else if (nombre == 1) {
        document.getElementById('Robot').setAttribute('src', 'Papier.png');
        Choix_R = 'Papier';

    }
    else if (nombre == 2) {
        document.getElementById('Robot').setAttribute('src', 'Ciseaux.png');
        Choix_R = 'Ciseaux';
    }

    console.log(nombre);

}
function reset() {
    Score_R=0;
    Score_U=0;
    Tours=0;
    document.getElementById('Robot_Score').innerText = Score_R;
        document.getElementById('User_Score').innerText = Score_U;
        document.getElementById('Tours_Score').innerText = Tours;
}