function getHole(index) {
    return document.getElementById(`hole${index}`);
}

const deadScore = document.getElementById("dead");
const lostScore = document.getElementById("lost");

for (let i = 1; i < 10; i ++) {
    getHole(i).onclick = () => {
        if (getHole(i).className.includes('hole_has-mole')) 
            deadScore.textContent ++;
        else
            lostScore.textContent ++;
        
        if (deadScore.textContent == '10') {
            alert('Вы выиграли!');
            deadScore.textContent = 0;
            lostScore.textContent = 0;
        }
        
        if (lostScore.textContent == '5') {
            alert('Вы проиграли!');
            deadScore.textContent = 0;
            lostScore.textContent = 0;
        }
    }
};

