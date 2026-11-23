import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export default function Registro({listaUsuarios, setListaUsuarios}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const agregarUsuario = (data) => {
        console.log(data)
        const nuevoUsuario = { id: crypto.randomUUID(), ...data };

        const nuevaLista = [...listaUsuarios, nuevoUsuario];
        setListaUsuarios(nuevaLista);                                 // para la pantalla
        localStorage.setItem("usuarios", JSON.stringify(nuevaLista)); // para localStorage
        
        reset();
        navigate("/usuarios");
        
    }

    return (
        <section>
            <h1 className="titulo">Registro de usuario</h1>
            <p className="subtitulo">Completa los datos para agregar un nuevo usuario.</p>

            
            <form className="formulario" onSubmit={handleSubmit(agregarUsuario)} noValidate>
                <div className="campo">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" type="text" placeholder="Ej. Ana López" className={errors.nombre ? "input-error" : ""}
                        {...register("nombre", {
                        required: "El nombre es obligatorio",
                        minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
                        })} />
                    {errors.nombre && <p className="error">{errors.nombre.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="correo">Correo</label>
                    <input id="correo" type="email" placeholder="ana@correo.com" className={errors.correo ? "input-error" : ""}
                        {...register("correo", {
                        required: "El correo es obligatorio",
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Ingresa un correo válido",
                        },
                        })} />
                        {errors.correo && <p className="error">{errors.correo.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="telefono">Teléfono</label>
                    <input id="telefono" type="tel" placeholder="7777-7777" className={errors.telefono ? "input-error" : ""}
                        {...register("telefono", {
                        required: "El teléfono es obligatorio",
                        pattern: {
                            // 8 dígitos, empieza con 2, 6 o 7, guion opcional
                            value: /^[267]\d{3}-?\d{4}$/,
                            message: "Formato válido: 7777-7777",
                        },
                        })} />
                </div>

                <button type="submit" className="btn btn-primario">Registrar usuario</button>
            </form>
        </section>
    );
}
