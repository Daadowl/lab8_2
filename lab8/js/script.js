function checkInput(id, errorId, regex, errorMessage) {
    let input = document.getElementById(id);
    let errorSpan = document.getElementById(errorId);
    let inputValue = input.value.trim();

    if (regex.test(inputValue)) {
        errorSpan.style.display = "none";
        input.style.boxShadow = "none";
        return true;
    } else {
        errorSpan.style.display = "block";
        input.style.border = "1px red"
        input.style.boxShadow = "0 0 5px red";
        errorSpan.textContent = errorMessage;
        return false;
    }
}

document.getElementById('productForm').addEventListener('submit', function(event) {
    let isValid = true;

    isValid &= checkInput('FIO', 'FIOError', /^[a-zA-Zа-яА-ЯёЁ\s]{2,15}\s[a-zA-Zа-яА-ЯёЁ\s]{2,15}\s[a-zA-Zа-яА-ЯёЁ\s]{2,15}$/, 'Введите корректное ФИО');
    isValid &= checkInput('CompanyName', 'CompanyNameError', /^[a-zA-Zа-яА-ЯёЁ\s]+$/u, 'Введите корректное название компании');
    isValid &= checkInput('email', 'emailError', /\S+@\S+\.\S+/, 'Введите корректный e-mail');
    isValid &= checkInput('phone', 'phoneError', /^\+?\d{11}$/, 'Введите корректный номер телефона');
   

    
    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault(); 
        document.getElementById('productForm').style.display = "none"; 
        document.getElementById('successMessage').style.display = "block"; 
    }
});