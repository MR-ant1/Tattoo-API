# API TATTOO WEB

### OBJETIVO
Este proyecto tiene como fin recrear el backend de una API con varias tablas de registros y relaciones de uno a muchos y viceversa entre ellas.

### TABLE OF CONTENTS :open_file_folder: 
- [API TATTOO WEB](#api-tattoo-web)
    - [OBJETIVO](#objetivo)
    - [TABLE OF CONTENTS :open\_file\_folder:](#table-of-contents-open_file_folder)
    - [STACK :wrench:](#stack-wrench)
    - [SOBRE LA API](#sobre-la-api)
    - [DIAGRAMA BD](#diagrama-bd)
    - [HOW TO TRY AND VISUALIZE IT :mag:](#how-to-try-and-visualize-it-mag)
    - [DISEÑO DE LA BASE DE DATOS :computer:](#diseño-de-la-base-de-datos-computer)
    - [AUTHOR :pencil2:](#author-pencil2)
    - [POTENTIAL IMPROVEMENTS :heavy\_check\_mark:](#potential-improvements-heavy_check_mark)
    - [ACKNOWLEDGMENTS :raised\_hands:](#acknowledgments-raised_hands)

### STACK :wrench:
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="HTML5" /><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="CSS" /><img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="CSS"/><img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="CSS" />
<img src="https://img.shields.io/badge/DOCKER-2020BF?style=for-the-badge&logo=docker&logoColor=white" alt="CSS" />

### SOBRE LA API

Esta API permite crear un usuario con el que reservar citas para tatuajes o compra de productos del mundo del tattoo. Las posibilidades que brinda a los usuarios son:

-Registro de un nuevo usuario y login previo a la realización de cualquier acción con la web.
-Consulta sin necesidad de cuenta de los servicios que ésta ofrece
-Modificación de datos del usuario.
-Creación de citas para la asistencia al negocio además de la especificación del fin de la misma de entre los 5 servicios ofrecidos
-Consulta de citas pendientes del usuario o de citas concretas mediante su ID.
-Modificación de citas creadas previamente a fin de elegir una nueva fecha o servicio determinados.
-Consulta de servicios ofrecidos
-Consulta de todas las citas de los usuarios (super_admin)
-Creacion y consulta de roles para los usuarios (super_admin)
-Creación de nuevos servicios para la web (super_admin)

### DIAGRAMA BD
![alt text](img/db_migrations.png)
### HOW TO TRY AND VISUALIZE IT :mag: 

Aquí se encuentra enlace al repositorio del proyecto:
https://github.com/MR-ant1/Tattoo-API.git

Seguir los pasos descritos a continuación para preparar todo el entorno de la API:

-1. Clonar repositorio con el comando "git clone https://github.com/MR-ant1/Tattoo-API.git"
-2. Abrir terminal y ejecutar el comando npm install.
-3. Crear archivo ".env". Usar el sample incluido con las referencias necesarias para establecer un servidor y conectar con la base de datos.
-4. Crear base de datos con el nombre igual al establecido en el archivo ".env"
-5 Ejecutar migraciones mediante el comando abreviado en el package json "npm run migrations-run"
-6. Ejecutamos los seeders mediante el comando guardado "npm run seed"
-7. Levantamos servidor mediante el comando "npm run dev"
-8. Dirigirnos a nuestro client (thunderClient, insomnia, postman...) e importar el archivo de colecciones que incluye esta repositorio.
-9. Ya puedes probar las diferentes funciones del proyecto! mas abajo encontrarás toda la info sobre su funcionamiento.



### DISEÑO DE LA BASE DE DATOS :computer:



### AUTHOR :pencil2:
- Antonio Rodrigo - Full Stack Developer student

- <a href="https://github.com/MR-ant1">GitHub - <a>Linkedin</a>

### POTENTIAL IMPROVEMENTS :heavy_check_mark: 



### ACKNOWLEDGMENTS :raised_hands:

Big shout out to GeeksHubs for giving me the chance to learn about all this amazing world of developing
More and better proyects are coming nearly thanks to them!
Sorry for many possible mistakes in English but I'm training my writing skills and trying to learn technicalities from the area! :D

[def]: #Acknowledgments-

:arrow_up: [Table-of-contents](#table-of-contents-open_file_folder)