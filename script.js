function toggleTheme(){
  
  // pegando o elemento do HTML
  const html = document.documentElement
  html.classList.toggle("light-theme");
  
 // pegar a tag img 
 const img = document.querySelector(".profile img"); 

  if (html.classList.contains("light-theme")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png"); 
    img.setAttribute("alt", "Imagem light mode"); 
  } else {
    // substituir a imagem
    img.setAttribute("src", "./assets/avatar.png"); 
    img.setAttribute("alt", "Imagem dark mode");
  }

 // se tiver sem light mode, manter a imagem normal
}