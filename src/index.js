const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
      const scrollHeight = window.pageYOffset;
      const navHeight = navbar.getBoundingClientRect().height;

      if (scrollHeight > 500) {
            topLink.classList.add("show-link");
      } else {
            topLink.classList.remove("show-link");
      }
});

const form = document.getElementById('form')
const table = document.getElementById('table')

form.addEventListener('submit', (e) => e.preventDefault())

function submitForm(nome, email, nascimento, telefone) {


      let spanNome = document.getElementById('spanNome')
      let spanEmail = document.getElementById('spanEmail')
      let spanTelefone = document.getElementById('spanTelefone')

      let qtdLinhas = table.rows.length
      let linha = table.insertRow(qtdLinhas)

      let cellCodigo = linha.insertCell(0)
      let cellNome = linha.insertCell(1)
      let cellEmail = linha.insertCell(2)
      let cellNascimento = linha.insertCell(3)
      let cellTelefone = linha.insertCell(4)



      cellCodigo.outerHTML = `<th>${qtdLinhas}</th>`
      cellNome.innerHTML = nome
      cellEmail.innerHTML = email
      cellNascimento.innerHTML = nascimento
      cellTelefone.innerHTML = telefone

      spanNome.innerHTML = nome
      spanEmail.innerHTML = email
      spanTelefone.innerHTML = telefone


}
const navToggle = document.getElementById('navToggle')
const linksContainer = document.getElementById('links-container')
const links = document.getElementById('links')

navToggle.addEventListener('click', function () {
      const containerHeight = linksContainer.getBoundingClientRect().height;
      const linksHeight = links.getBoundingClientRect().height;
      if (links.style.display == 'none') {
            links.style.display = 'block';
      } else {
            links.style.display = 'none';
      }
})

// function openTable(evt, id) {
//       let i, tabcontent, tablinks;
//       tabcontent = document.getElementsByClassName("tabcontent");
//       for (i = 0; i < tabcontent.length; i++) {
//             tabcontent[i].style.display = "none";
//       }
//       tablinks = document.getElementsByClassName("tablinks");
//       for (i = 0; i < tablinks.length; i++) {
//             tablinks[i].className = tablinks[i].className.replace(" active", "");
//       }
//       document.getElementById(cityName).style.display = "block";
//       evt.currentTarget.className += " active";
// }