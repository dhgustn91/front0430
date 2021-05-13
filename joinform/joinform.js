function idcheck(){
    var id = document.getElementById('id').value;
    var idform =  /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/;
    var idresult = document.getElementById('idresult');
    if(id.length == 0){
        idresult.style.color = 'red';
        idresult.innerHTML = '필수 입력 정보입니다.';
    }else if(id.match(idform)){
        idresult.style.color = 'green';
        idresult.innerHTML = '유효한 형식입니다.';
    }else {
        idresult.style.color = 'red';
        idresult.innerHTML = '유효하지 않은 형식입니다.';
    }
}

function passwordcheck(){
    var password = document.getElementById('password').value;
    var passwordform = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$*])[a-zA-Z.;\d!#$*]{8,16}$/;
    var passwordresult = document.getElementById('passwordresult');
    if(password.length == 0){
        passwordresult.style.color = 'red';
        passwordresult.innerHTML = '필수 입력 정보입니다.';
    }else if(password.match(passwordform)){
        passwordresult.style.color = 'green';
        passwordresult.innerHTML = '유효한 형식입니다.';
    }else {
        passwordresult.style.color = 'red';
        passwordresult.innerHTML = '유효하지 않은 형식입니다.';
    }
}

function confirmcheck(){
    var confirm = document.getElementById('confirm').value;
    var password = document.getElementById('password').value;
    var confirmresult = document.getElementById('confirmresult');
    if(password == confirm){
        confirmresult.style.color = 'green';
        confirmresult.innerHTML = '일치합니다.';
    }else {
        confirmresult.style.color = 'red';
        confirmresult.innerHTML = '일치하지 않습니다.';
    }
}

function namecheck(){
    var name = document.getElementById('name').value;
    var nameresult = document.getElementById('nameresult');
    if(name.length == 0){
        nameresult.style.color = 'red';
        nameresult.innerHTML = '필수 입력 정보입니다.';
    }else {
        nameresult.style.color = 'green';
        nameresult.innerHTML = '입력 되었습니다.';
    }
}

function emailcheck(value){
    document.getElementById('domain').value = value;
}

function phonecheck(){
    var phone = document.getElementById('phone').value;
    var phoneform = /^\d{3}-\d{4}-\d{4}$/;
    var phoneresult = document.getElementById('phoneresult');
    if(phone.length == 0){
        phoneresult.style.color = 'red';
        phoneresult.innerHTML = '필수 입력 정보입니다.';
    }else if(phone.match(phoneform)){
        phoneresult.style.color = 'green';
        phoneresult.innerHTML = '유효한 형식입니다.';
    }else {
        phoneresult.style.color = 'red';
        phoneresult.innerHTML = '유효하지 않은 형식입니다.';
    }
}