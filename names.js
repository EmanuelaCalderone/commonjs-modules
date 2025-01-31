function fullName(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
    };
}

console.log(fullName("Emanuela", "Calderone"));

module.exports = fullName;