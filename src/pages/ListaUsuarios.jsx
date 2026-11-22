

export default function ListaUsuarios() {
    return (
        <section>
            <h1 className="titulo">Usuarios registrados</h1>
            <p className="subtitulo">Estos son los usuarios guardados en localStorage.</p>

            {/* TODO 8: Si la lista está vacía, muestra este bloque en lugar del grid */}
            <div className="vacio">
                <span className="emoji">📭</span>
                <p>Todavía no hay usuarios registrados.</p>
                
                <a href="/" className="btn btn-primario link-boton">Registrar el primero</a>
            </div>


            <div className="grid-usuarios">
                <article className="tarjeta">
                    <div className="tarjeta-encabezado">
                        <span className="avatar">A</span>
                        <h3>Ana López</h3>
                    </div>
                    <p className="dato">📧 ana@correo.com</p>
                    <p className="dato">📱 7777-7777</p>
                    
                    <button className="btn btn-eliminar">Eliminar</button>
                </article>
            </div>
        </section>
    );
}
