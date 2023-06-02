function showErrorMsg(msg: string): never {
  throw new Error(msg);
}

// Aparece no console do navegador (F12)
showErrorMsg("Infelizmente algo deu errado!");
