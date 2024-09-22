buttonDark = document.getElementById("mode-dark");
buttonDark.addEventListener("click", (event) => {
  document.body.classList.toggle("dark");
});

let timeout;
notification = document.getElementById("notification");

const products = [
  {
    nombre: "Electrolit Suero Hidratante Maracuyá Frasco X 625 Ml",
    precio: 8400,
    url_imagen: "images/electrolit.png",
  },
  {
    nombre: "Dolex Gripa X 12 Tabletas",
    precio: 14025,
    url_imagen: "images/dolex_gripa.png",
  },
  {
    nombre: "Benet Calcio + Vitamina D3 X 30 Cápsulas",
    precio: 19880,
    url_imagen: "images/calcio_vitamina.png",
  },
  {
    nombre: "Stikers Faciales Cettua Dual Control Granitos",
    precio: 16950,
    url_imagen: "images/control_granitos.png",
  },
  {
    nombre: "Base Compacta Lumed Tono Claro Hidrisage X 11 Gr",
    precio: 115960,
    url_imagen: "images/base_lumed.png",
  },
  {
    nombre: "Polvo Compacto Asepxia Tono Beige X 10 Gr",
    precio: 27965,
    url_imagen: "images/asepxia_polvo.png",
  },
  {
    nombre: "Dulce En Polvo Quipitos Bolsa 48 Gr X 5 Und",
    precio: 3550,
    url_imagen: "images/quipitos.png",
  },
  {
    nombre: "Pañales Winny Sensitive Etapa 1 X 50 Und",
    precio: 46950,
    url_imagen: "images/panales_winny.png",
  },
  {
    nombre: "Encrespador Essence Lash X 1 Und",
    precio: 16500,
    url_imagen: "images/encrepador.png",
  },
];

function agregarProductoAlCarrito(btn) {
  btn.addEventListener("click", (event) => {
    notification.classList.remove("close");
    notification.classList.remove("closed");
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      notification.classList.add("close");
    }, 3000);
  });
}

function cargarProductos(list) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Limpiamos el contenido previo

  list.forEach((producto) => {
    // Crear el contenedor del producto
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Crear la imagen del producto
    const img = document.createElement("img");
    img.src = producto.url_imagen;
    img.alt = `Imagen del producto ${producto.nombre}`;

    // Crear el contenedor de información del producto
    const productBody = document.createElement("div");
    productBody.classList.add("product-body");

    // Crear el nombre del producto
    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    // Crear el precio del producto
    const precio = document.createElement("p");
    precio.innerHTML = `<strong>$${producto.precio.toLocaleString()}</strong>`;

    // Crear el botón de agregar al carrito
    const boton = document.createElement("button");
    boton.classList.add("btn-buy");
    boton.textContent = "Agregar al carrito";
    agregarProductoAlCarrito(boton);

    // Agregar los elementos al contenedor del producto
    productBody.appendChild(nombre);
    productBody.appendChild(precio);
    productBody.appendChild(boton);
    productDiv.appendChild(img);
    productDiv.appendChild(productBody);

    // Agregar el producto a la lista de productos
    productList.appendChild(productDiv);
  });
}

inputSearch = document.getElementById("search");
function buscarProducto() {
  const value = inputSearch.value.toLowerCase();
  const result = products.filter((product) =>
    product.nombre.toLowerCase().includes(value)
  );
  cargarProductos(result);
}

inputSearch.addEventListener("keyup", (event) => {
  buscarProducto();
});
window.onload = cargarProductos(products);
