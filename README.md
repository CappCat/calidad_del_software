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

1. Abre Katalon Studio.
2. Importa el proyecto ubicado en la carpeta `katalon/`.
3. Ejecuta los casos de prueba desde la interfaz de Katalon.

## Notas
- Asegúrate de tener Node.js instalado para ejecutar Cypress.
- Los resultados de las pruebas pueden generar archivos en las carpetas `cypress/videos/` y `cypress/downloads/`.
- Consulta los archivos de cada herramienta para más detalles sobre los casos de prueba implementados.

---

**Autor:** Abiud Vera y Andrés Peralta
