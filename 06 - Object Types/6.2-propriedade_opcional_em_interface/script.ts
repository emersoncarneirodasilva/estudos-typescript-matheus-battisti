interface User {
  name: string;
  email: string;
  role?: string;
}

function showUserDetails(user: User): string {
  const { name, email, role } = user;

  if (role) {
    return `Dados do usuário: ${name}, ${email}, ${role}`;
  }

  return `Dados do usuário: ${name}, ${email}`;
}

const userDetail1: User = {
  name: "Emerson",
  email: "emerson@gmail.com",
  role: "Admin",
};
console.log(showUserDetails(userDetail1));

const userDetail2: User = {
  name: "Raiane",
  email: "raiane@gmail.com",
  role: "Chefe",
};
console.log(showUserDetails(userDetail2));

const userDetail3: User = {
  name: "Paulo",
  email: "paulo@gmail.com",
};
console.log(showUserDetails(userDetail3));
