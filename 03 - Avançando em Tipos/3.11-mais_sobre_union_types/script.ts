function showUserRole(role: string | boolean) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado";
  }

  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));
console.log(showUserRole("Editor"));
