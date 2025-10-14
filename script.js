//cambia color titulo al hacer click en el botón
document.getElementById('btn1').onclick = () => {
  const h1 = document.querySelector('h1');
  const colores = ['#1e88e5','#43a047','#e53935','#8e24aa'];
  h1.style.color = colores[Math.floor(Math.random()*colores.length)];
};




//agrega dinámicamente una fila a la tabla
document.getElementById('btn').addEventListener('click', () => {
  const tbody = document.querySelector('#tabla tbody');
  const tr = document.createElement('tr');
  tr.innerHTML = '<td>&lt;footer&gt;</td><td>Pie de página</td>';
  tbody.appendChild(tr);
  alert('Fila agregada'); // ejemplo de mensaje
});

//  cambia color del <h1> al pasar el cursor
const titulo = document.getElementById('titulo');
const colores = ['#1e88e5','#43a047','#e53935','#8e24aa','#ff6f00'];

let colorOriginal;
titulo.addEventListener('mouseenter', () => {
  colorOriginal = getComputedStyle(titulo).color;
  titulo.style.color = colores[Math.floor(Math.random()*colores.length)];
});
titulo.addEventListener('mouseleave', () => {
  titulo.style.color = colorOriginal;
});
