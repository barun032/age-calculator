const ageInputbox = document.getElementById('inputAge');
ageInputbox.max = new Date().toISOString().split("T")[0]; // for not selection future date

const ageCalButton = document.getElementById('btnCalAge');
const ageShow = document.getElementById('showAge');

ageCalButton.addEventListener('click', calculateAge);

function calculateAge() {

    const birth = new Date(ageInputbox.value);
    const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }

    ageShow.innerHTML = `You are ${years} years, ${months} months and ${days} days old.`;
    
}
