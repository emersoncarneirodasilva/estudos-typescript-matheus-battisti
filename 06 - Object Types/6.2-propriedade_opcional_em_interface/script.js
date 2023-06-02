"use strict";
function showUserDetails(user) {
    const { name, email, role } = user;
    if (role) {
        return `Dados do usuário: ${name}, ${email}, ${role}`;
    }
    return `Dados do usuário: ${name}, ${email}`;
}
const userDetail1 = {
    name: "Emerson",
    email: "emerson@gmail.com",
    role: "Admin",
};
console.log(showUserDetails(userDetail1));
const userDetail2 = {
    name: "Raiane",
    email: "raiane@gmail.com",
    role: "Chefe",
};
console.log(showUserDetails(userDetail2));
const userDetail3 = {
    name: "Paulo",
    email: "paulo@gmail.com",
};
console.log(showUserDetails(userDetail3));
