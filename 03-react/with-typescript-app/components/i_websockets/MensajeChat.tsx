//MensajeChat
export interface IMensajeChatProps {
    nombre: string,
    mensaje: string,
    posicion: 'D' | 'I'
}

export default function (props: IMensajeChatProps) {
    const {nombre, mensaje, posicion} = props;

    return (
        <>
            {
                props.posicion === 'D' ?
                    <div className="d-flex text-right mb-4">
                        {mensaje}<strong>: {nombre}</strong>
                    </div> :
                    <div className="d-flex text-left mb-4">
                        <strong>{nombre}: </strong>{mensaje}
                    </div>
            }
        </>
    )
}