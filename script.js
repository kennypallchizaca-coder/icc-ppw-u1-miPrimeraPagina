document.getElementById('btn').onclick = () => {
  const h1 = document.querySelector('h1');
  const colores = ['#1e88e5','#43a047','#e53935','#8e24aa'];
  h1.style.color = colores[Math.floor(Math.random()*colores.length)];
};
