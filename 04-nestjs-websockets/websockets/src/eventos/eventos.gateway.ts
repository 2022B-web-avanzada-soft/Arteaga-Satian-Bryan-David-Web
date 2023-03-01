//Aquí va a vivir nuestra lógica de negocio.
//Es un singleton, por lo que no hay que preocuparse por instanciarlo.

import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Server, Socket} from "socket.io";

@WebSocketGateway(
    8080, //Puerto donde está escuchando el servidor de websockets.
    {
        cors: {
            origin: '*', //Habilita la conexión desde cualquier origen (IP).
        }
    }
)
export class EventosGateway {
    @SubscribeMessage('Holaa') //Nombre del metodo para recibir eventos.
    devolverHola(
        @MessageBody() message: { mensaje: string },
        @ConnectedSocket() socket: Socket
    ) {
        console.log('Mensaje recibido', message);
        socket.broadcast //broadcast => TODOS LOS CLIENTES CONECTADOS Y QUE ESTÉN ESCUCHANDO EL EVENTO "escucharEventoHola" les llegue el mensaje
            .emit(
                'escucharEventoHola', //nombre evento que vamos a enviar a los clientes conectados
                { //OBJETO A ENVIAR.
                    mensaje: 'Bienvenido a NestJS' + message.mensaje
                }
            );

        return {mensaje: 'ok'} //Callback del metodo Holaa.
    }


    @SubscribeMessage('unirseSala') //Nombre metodo
    unirseSala(
        @MessageBody() message: { salaId: string, nombre: string },
        @ConnectedSocket() socket: Socket
    ) {
        socket.join(message.salaId); //socket.join agrupa a los clientes de websockets.
        //según un identificacodr. Al unirse a una sala podemos escuchar
        //Los mensajes de esa sala.
        const mensajeDeBienvenidaSala = {
            mensaje: 'Bienvenido ' + message.nombre + '. Te unes a la sala ' + message.salaId
        };
        socket.broadcast.to(message.salaId).emit(
            'escucharEventoUnirseSala',
            mensajeDeBienvenidaSala
        );

        return {mensaje: 'ok'}
    }

    @SubscribeMessage('enviarMensajeSala') //Nombre metodo
    enviarMensajeSala(
        @MessageBody() message: { salaId: string, nombre: string, mensaje: string },
        @ConnectedSocket() socket: Socket
    ) {
        //backend
        const mensajeSala = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        };

        socket.broadcast.to(message.salaId).emit(
            'escucharEventoEnviarMensajeSala',
            mensajeSala
        );

        return {mensaje: 'ok'}
    }
}