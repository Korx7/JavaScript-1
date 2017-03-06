function nechislo(t) {
    var result;
    do {
        result = String(prompt(t))
    } while (!isNaN(result))
    return result;
}
function netext(t) {
    var result;
    do {
        result = Number(prompt(t))
    } while (isNaN(result) || result < 0)
    return result;

}


var secondName =  nechislo("Введите фамилию");
var firstName =  nechislo("Введите имя");
var patronymic = nechislo("Введите отчество");
var ageYear = netext("Ваш возраст в годах");

var pol,polM,polJ, ageDays, ageLaterFive, pensiya;

ageDays = ageYear * 365;
ageLaterFive = ageYear + 5;

confirm("Ваш пол - мужской?")?pol= "мужской":pol="женский";
((pol=="мужской")&&(ageYear >= 63 ))?pensiya = "да":pensiya = "нет";
((pol=="женский")&&(ageYear >= 58 ))?pensiya = "да":pensiya = "нет";
/*if (confirm("Ваш пол - мужской?")) {
    pol = "мужской";
    if ( ageYear >= 63 ) {
        pensiya = "да";
    }
    else {
        pensiya = "нет";
    }
}
else {
    pol = "женский";
    if (ageYear >= 58) {
        pensiya = "да";
    }
    else {
        pensiya = "нет";
    }
}*/
alert(`ваша ФИО: ${secondName} ${firstName} ${patronymic}
ваш возраст в годах: ${ageYear}
ваш возраст в днях: ${ageDays}
через 5 лет вам будет: ${ageLaterFive}
ваш пол: ${pol}
вы на пенсии: ${pensiya}`);
