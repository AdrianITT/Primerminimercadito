import '../App.css';

const Formulario = (props) => {
    return (
        <div className="Form">
            <form onSubmit={props.enviar}>
                <div className='from-margin'>
                    <label htmlFor="id">id</label>
                    <input
                        type="id"
                        placeholder="Ejm. 18211154"
                        onChange={props.guardarCambios}
                        value={props.fruts.id}
                        name="id"
                        //disabled={props.desactivado}
                    />
                </div>
                <div>
                    <label htmlFor="namefrut">name</label>
                    <input
                        type="text"
                        placeholder="pera"
                        onChange={props.guardarCambios}
                        value={props.fruts.name}
                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="cantidad">cantidad</label>
                    <input
                        type="cantidad"
                        placeholder="1"
                        onChange={props.guardarCambios}
                        value={props.fruts.cantidad}
                        name="cantidad"
                    />
                </div>
                <div>
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        placeholder="frutas jose"
                        onChange={props.guardarCambios}
                        value={props.fruts.company}
                        name="company"
                    />
                </div>
                <button>Enviar</button>
            </form>
        </div>
    );
}

export default Formulario;