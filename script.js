const projects = [
  { title: "Student Portfolio Website", cat: "web", desc: "Built with plain HTML, CSS, JS for this subject.", role: "I designed and coded the whole site." },
  { title: "School Landing Page", cat: "school", desc: "Responsive landing page activity for class.", role: "I made the Figma design and converted to code." },
  { title: "To-Do List App", cat: "web", desc: "Simple JS practice that saves tasks.", role: "I wrote the JavaScript logic." }
];

const grid = document.getElementById('projectGrid');
function render(filter='all'){
  grid.innerHTML = '';
  projects.filter(p => filter==='all' || p.cat===filter).forEach(p=>{
    grid.innerHTML += `
      <div class="card">
        <span>${p.cat}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <p><strong>Role:</strong> ${p.role}</p>
      </div>
    `;
  });
}
render();
document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.filter);
  });
});
// Dark / Light theme
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  themeBtn.textContent = document.documentElement.classList.contains('dark') ? 'Light' : 'Dark';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Form handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks! Message sent. Connect to Charlette Comita or connect to her email: charlettecomita@gmail.com.');
  e.target.reset();
});

