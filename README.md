# 👥 Registro de Usuarios — React: estado y rutas

Proyecto de práctica para aprender **useState**, **React Router** y **React Hook Form**.
El diseño (CSS) y la estructura de componentes ya están listos: tu trabajo es **hacerlo funcional**.

## 🚀 Cómo empezar

1. Crea tu copia con el botón **"Fork"**.
2. Clona **tu** repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/registro-usuarios.git
   cd registro-usuarios
   ```
3. Instala las dependencias base y levanta el proyecto:
   ```bash
   pnpm install
   pnpm dev
   ```
4. Instala las librerías que usaremos en clase:
   ```bash
   pnpm install react-router react-hook-form
   ```

## 📁 Estructura

```
src/
├── main.jsx                  → punto de entrada (BrowserRouter)
├── App.jsx                   → estado de usuarios + rutas
├── index.css                 → estilos (ya listos)
├── components/
│   └── Navbar.jsx            → menú de navegación
└── pages/
    ├── Registro.jsx          → formulario (react-hook-form)
    ├── ListaUsuarios.jsx     → lista de usuarios
    └── NotFound.jsx          → página 404
```

## ✅ TODOs (en orden)

Busca los comentarios `// TODO` en el código. Están numerados en el orden en que los haremos.

| # | Archivo | Qué hacer |
|---|---------|-----------|
| 1 | `main.jsx` | Envolver `<App />` con `<BrowserRouter>` |
| 2 | `App.jsx`, `Navbar.jsx`, `NotFound.jsx` | Crear las rutas con `<Routes>` y `<Route>`; cambiar `<a>` por `<NavLink>` / `<Link>` |
| 3 | `Navbar.jsx` | Mostrar el total de usuarios (prop `total`) |
| 4 | `App.jsx` | Crear el estado `usuarios` con `useState`, leyendo de localStorage |
| 5 | `App.jsx` | Función `agregarUsuario` (actualiza estado + localStorage) |
| 6 | `Registro.jsx` | Conectar el formulario con `useForm` y sus validaciones |
| 7 | `Registro.jsx` | Redirigir a `/usuarios` con `useNavigate` al registrar |
| 8 | `ListaUsuarios.jsx` | Mostrar la lista con `map()` o el mensaje de lista vacía |
| 9 | ⭐ Reto | Botón **Eliminar** usando `filter()` |

## 🧠 Conceptos clave

- **Estado (`useState`)**: cuando cambia, React vuelve a pintar el componente.
  Una variable normal (`let`) cambia, pero la pantalla no se entera.
- **Inmutabilidad**: nunca modifiques el estado directamente (`usuarios.push(...)` ❌).
  Crea un arreglo nuevo: `[...usuarios, nuevo]` ✅.
- **Levantar el estado**: la lista vive en `App.jsx` porque la usan dos páginas
  (y el Navbar). Los hijos la reciben por **props**.
- **localStorage** solo guarda texto: usa `JSON.stringify` para guardar y `JSON.parse` para leer.

## ⭐ Retos extra

- No permitir dos usuarios con el mismo correo (pista: regla `validate` de react-hook-form).
- Agregar un buscador por nombre en la lista (pista: otro `useState`).

