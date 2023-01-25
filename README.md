# Lista de Endpoints

- (POST) /login = Endpoint para registrar un usuario y que pueda hacer reservas y guardarlas en un tabla relacionada a la tabla de usuario.

- (POST) /bookings = Endpoint que guarda la reserva con el id del usuario, cuando todavía el pago está pendiente.

- (PUT) /bookings/:id = Endpoint en el que se actuliza el estado de pago, junto con el numero de comprobante.

- (DELETE) /bookings/:id = Endpoint en el que se actuliza el estado de la reserva a 'eliminado' pero no se borra de la base de datos.

- (GET) /bookings = Endpoint que trae todas las reservas de el usuario solicitado.


### El usuario se registra, luego elige la habitacion, selecciona los días y ya hace su reserva, luego con el id de usuario y el de la reserva puede pagar la reserva y ahí se actualizan el estado y método de pago, luego puede borrar la reserva, que sólo cambia el estado a 'eliminado'. Tambien puede traer todas las reservas hechas con su id.

## Para iniciar el proyecto abrir una terminal en esta ruta y escribir: 

## docker-compose build // Para generar el proyecto

## docker-compose up  //Para iniciar los contenedores y listo a Postman!