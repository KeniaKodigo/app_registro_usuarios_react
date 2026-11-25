

export default function ListaUsuarios({listaUsuarios}) {
    return (
        <section>
            <h1 className="titulo">Usuarios registrados</h1>
            <p className="subtitulo">Estos son los usuarios guardados en localStorage.</p>

            {
                listaUsuarios.length === 0 ? (
                    <div className="vacio">
                        <span className="emoji">📭</span>
                        <p>Todavía no hay usuarios registrados.</p>
                        
                        <a href="/" className="btn btn-primario link-boton">Registrar el primero</a>
                    </div>
                ) : (
                    <div className="grid-usuarios">
                        {
                            listaUsuarios.map((usuario) => (
                                <article className="tarjeta" key={usuario.id}>
                                    <div className="tarjeta-encabezado">
                                        <span className="avatar">{usuario.nombre[0].toUpperCase()}</span>
                                        <h3>{usuario.nombre}</h3>
                                    </div>
                                    <p className="dato">📧 {usuario.correo}</p>
                                    <p className="dato">📱 {usuario.telefono}</p>
                                    
                                    <button className="btn btn-eliminar">Eliminar</button>
                                </article>
                            ))
                        }
                        
                    </div>
        
                )}

        </section>
    );
}
