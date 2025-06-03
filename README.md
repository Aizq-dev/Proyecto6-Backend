Descripción en español:

Proyecto desplegado en Vercel con base de datos MongoDB Atlas. Para conectarse a la base de datos es necesario configurar la URL en una variable de entorno (.env), la cual no se comparte por seguridad.

Esta API permite la gestión de vehículos y marcas a través de operaciones CRUD completas, con relaciones entre ambas entidades.

Endpoints principales:
GET /api/autos
Devuelve todos los coches de la colección Auto.

GET /api/marca
Devuelve todas las marcas de la colección Marca.

CRUD completo (GET, POST, PUT, DELETE) disponible para ambas colecciones.

En las respuestas de tipo GET, los objetos Auto incluyen la marca a la que pertenecen y las Marca incluyen los modelos asociados.

Funcionalidades adicionales:
PUT /api/marca/:idMarca
Permite actualizar una marca añadiendo múltiples IDs de coches a través del cuerpo de la petición.

PUT /api/marca/:idMarca/:idAuto
Si el coche no está vinculado a la marca, se añade. Si ya está vinculado, se elimina.

PUT /api/autos/:idAuto/marca/:idMarca
Permite modificar o eliminar la relación de un coche con una marca directamente por params.

Description in English:

Project deployed on Vercel with MongoDB Atlas as the database. To connect to the database, a connection string must be provided via .env (not shared for security reasons).

This API allows full CRUD operations for cars and brands, with relational behavior between both entities.

Main endpoints:
GET /api/autos
Returns all vehicles in the Auto collection.

GET /api/marca
Returns all brands in the Marca collection.

Full CRUD support (GET, POST, PUT, DELETE) is available for both collections.

GET responses are relational: Auto includes its associated brand, and each Marca lists the models linked to it.

Extra features:
PUT /api/marca/:idMarca
Adds multiple car IDs to a brand via the request body.

PUT /api/marca/:idMarca/:idAuto
If the car is not linked to the brand, it is added. If it is linked, it is removed.

PUT /api/autos/:idAuto/marca/:idMarca
Modifies or removes the relationship between a car and a brand using parameters


[DEMO VERCEL](https://proyecto6-backend-psg7odcpb-ragnarks-projects.vercel.app/api/autos)
