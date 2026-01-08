const whatsappNumber = "50432591982";

document.querySelectorAll(".comprar-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const producto = btn.dataset.producto;
    const precio = btn.dataset.precio;

    const mensaje = `Hola, estoy interesado en el servicio:
Servicio: ${producto}
Precio base: $${precio}

¿Me brindas más información?`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
});

emailjs.init("h3e3NT2fQ40g5v81R");

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor completa todos los campos");
    return;
  }

  const formData = {
    name: nombre,
    time: new Date().toLocaleString(),
    from_name: nombre,
    reply_to: email,
    message: mensaje
  };

  console.log("Datos a enviar:", formData);

  emailjs.send(
    "service_vsfj9qb",
    "template_9bq2bq4",
    formData
  )
  .then(() => {
    alert("Mensaje enviado correctamente ");
    this.reset();
  })
  .catch((error) => {
    alert("Error al enviar el mensaje ");
    console.error("Error EmailJS:", error);
  });
});

const faders = document.querySelectorAll(".fade-up");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.style.animationPlayState = "running";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.animationPlayState = "paused";
  appearOnScroll.observe(fader);
});
