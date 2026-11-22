

export default function NotFound() {
    return (
        <section className="no-encontrado">
            <h1>404</h1>
            <p className="subtitulo">La página que buscas no existe.</p>
            <a href="/" className="btn btn-primario link-boton">
                Volver al inicio
            </a>
        </section>
    );
}