// i_webosckets.tsx
import io from "socket.io-client";
import {useEffect, useState} from "react";
import MensajeChat, {IMensajeChatProps} from "../components/i_websockets/MensajeChat";
import {useForm} from "react-hook-form";
import Layout from "../components/Layout";

const servidorWebSockets = "http://localhost:11202";
const socket = io(servidorWebSockets);
export default function () {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [mensajes, setMensajes] = useState([] as IMensajeChatProps[]);

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            salaId: '',
            nombre: '',
            mensaje: ''
        },
        mode: 'all'
    });


    useEffect(
        () => {
            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Conectado al servidor de WebSockets');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('Desconectado del servidor de WebSockets');
            });

            socket.on('escucharEventoHola', (data: { mensaje: string }) => {
                console.log('escucharEventoHola', data);
                const nuevoMensaje: IMensajeChatProps = {
                    nombre: 'Sistema',
                    mensaje: data.mensaje,
                    posicion: 'D'
                }
                setMensajes(mensajesAnteriores => [...mensajesAnteriores, nuevoMensaje]);
            });
            socket.on('escucharEventoUnirseSala', (data: { mensaje: string }) => {
                console.log('escucharEventoUnirseSala', data);
            });
            socket.on('escucharEventoEnviarMensajeSala', (data: { mensaje: string }) => {
                console.log('escucharEventoEnviarMensajeSala', data);
            });
        },
        []
    );

    const enviarEventoHola = () => {
        const nuevoMensaje: IMensajeChatProps = {
            nombre: 'Sistema',
            mensaje: 'Hola soy DAvid',
            posicion: 'I'
        };

        socket.emit(
            'Holaa',
            nuevoMensaje,
            (datosEventoHola) => {
                console.log('datosEventoHola', datosEventoHola); // {mensaje: 'ok'}
                setMensajes(mensajesAnteriores => [...mensajesAnteriores, nuevoMensaje]);
            }
        );
    }

    return (
        <>
            <Layout title={"Formulario websockets"}>
                <h1>WEbsockets</h1>
                <button className={"btn btn-success"} onClick={enviarEventoHola}>Enviar evento Hola</button>
                <div className="row">
                    <div className="col-sm-6">
                        Formulario
                    </div>
                    <div className="col-sm-6">
                        {mensajes.map(
                            (mensaje, i) =>
                                <MensajeChat
                                    key={i}
                                    mensaje={mensaje.mensaje}
                                    nombre={mensaje.nombre}
                                    posicion={mensaje.posicion}
                                />)
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}