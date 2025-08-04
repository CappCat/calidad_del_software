# Calidad del Software - Instrucciones para Ejecutar Pruebas

Este repositorio contiene ejemplos y proyectos de pruebas automatizadas utilizando Cypress, Katalon y Postman.

## Pruebas con Cypress

1. **Instalación de dependencias**
   - Abre una terminal en la carpeta `cypress`.
   - Ejecuta:
     ```bash
     npm install
     ```

2. **Ejecución de pruebas**
   - Para abrir la interfaz interactiva de Cypress:
     ```bash
     npx cypress open
     ```
   - Para ejecutar todas las pruebas en modo headless:
     ```bash
     npx cypress run
     ```

3. **Estructura de carpetas**
   - `cypress/e2e/`: Contiene los archivos de pruebas organizados por ejemplos y casos específicos.
   - `cypress/fixtures/`: Archivos de datos de prueba.
   - `cypress/support/`: Comandos y configuraciones personalizadas.

## Pruebas con Postman

1. Abre Postman y selecciona la opción para importar una colección.
2. Importa el archivo `postman/Proyecto Calidad del software.postman_collection.json`.
3. Ejecuta las pruebas desde la colección importada o utiliza el runner de Postman.


## Pruebas con Katalon

### Proyecto Estático
1. Abre Katalon Studio.
2. Importa el proyecto ubicado en la carpeta `katalon/`.
3. Ejecuta los casos de prueba estáticos desde la interfaz de Katalon.

### Proyecto Dinámico con CSV
1. Abre Katalon Studio.
2. Importa el proyecto ubicado en la carpeta `katalon/`.
3. En el panel de "Test Data", haz clic derecho y selecciona "Add > New Test Data".
4. Selecciona el tipo "CSV Data" y elige el archivo `usuarios.csv`.
5. Asocia el archivo de datos al caso de prueba de Iniciar Sesion usando la opción de "Data Binding".
6. Ejecuta los casos de prueba dinámicos para utilizar los datos del CSV.

## Notas
- Asegúrate de tener Node.js instalado para ejecutar Cypress.
- Los resultados de las pruebas pueden generar archivos en las carpetas `cypress/videos/` y `cypress/downloads/`.

---

**Autor:** Abiud Vera y Andrés Peralta
