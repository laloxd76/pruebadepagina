const tienda = document.getElementById("contenedor-tienda");
const vistaDetalle = document.getElementById("pantalla-detalle");

// el filtro
function filtrarPorGenero(generoRecibido) {
    const filtrados = listadeperfumes.filter(p => p.genero === generoRecibido);
    dibujarTienda(filtrados);
}

// lista
function dibujarTienda(lista) {
    tienda.innerHTML = ""; 
    tienda.style.display = "flex";
    vistaDetalle.style.display = "none";

    lista.forEach(p => {
        const card = document.createElement("div");
        card.className = "tarjeta-perfume"; 
        card.onclick = () => mostrarDetalle(p);
        
        card.style.backgroundColor = p.color || "#385696";
        card.style.width = "250px";
        card.style.padding = "15px";
        card.style.borderRadius = "10px";
        card.style.color = "white";
        card.style.textAlign = "center";
        card.style.cursor = "pointer";

        card.innerHTML = `
            <h2>${p.nombre}</h2>
            <img src="${p.imagen}" style="width:100%; height:200px; object-fit:cover; border-radius:5px;">
            <p>${p.precio}</p>
        `;
        tienda.appendChild(card);
    });
}

function mostrarDetalle(p) {
    tienda.style.display = "none";
    vistaDetalle.style.display = "block";
    vistaDetalle.innerHTML = `
        <div style="background: rgba(0,0,0,0.8); padding: 40px; color:white; text-align:center; margin-top:100px;">
            <h1>${p.nombre}</h1>
            <img src="${p.imagen}" style="width:300px;">
            <p>${p.descripcion}</p>
            <button onclick="dibujarTienda(listadeperfumes)">Volver</button>
        </div>
    `;
}

dibujarTienda(listadeperfumes);