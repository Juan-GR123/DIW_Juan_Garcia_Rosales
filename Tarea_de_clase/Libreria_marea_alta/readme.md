## Pruebas de Accesibilidad
En este apartado, el objetivo es garantizar que la página web cumpla con los criterios de accesibilidad del nivel AA de las *Pautas de Accesibilidad para el Contenido Web* (**WCAG**). Para ello, vamos a utilizar distintas herramientas de validación, tanto en línea como locales, para identificar los problemas y solucionarlos.

### 1. Netlify

Para usar estas herramientas es necesario subir el proyecto web a un dominio, para ello he usado Netlify. Los pasos que he seguido son los siguientes:

- Iniciar sesión con mi cuenta de GitHub.
- Asociar este repositorio como nuevo sitio.
- Indicar que al iniciar el lanzamiento del repositorio, ejecute el comando:

```bash
npm run build
```

 - La configuración que he puesto en netlify para que todo funcione correctamente es la siguiente: 

![Configuración Netlify](fuente/img/vite%20en%20netlify.JPG)<br>


- Por último, tendremos que esperar a que se inicie el despliegue:

![Web Netlify](fuente/img/web2.JPG)<br> 

### 2. Herramientas

 - Accesibility Checker:
    - Herramienta en línea que otorga una puntuación de accesibilidad y muestra los problemas de la web.

 - Skynet Technologies:
    - Herramienta en línea que analiza la web, proporciona un porcentaje de accesibilidad y una lista de errores.


### 3. Resultados Iniciales
Para comprobar la accesibilidad de mi web, deberemos seguir el proceso comentado anteriormente para que las 2 herramientas analicen la web y muestren los resultados.

#### 3.1. Resultados

- Resultados Accesibility Checker:
 ![Accesibility](fuente/img/accessibility.JPG)<br><br>

- Resultados Skynet Technologies: 
 ![Skynet](fuente/img/skynet.JPG)<br><br>

#### 3.2. Errores Encontrados

- Errores Accesibility Checker:
 ![Accesibility Errores](fuente/img/erroes_accesibilidad.JPG)<br><br>

- Errores Skynet Technologies: 
 ![Skynet Errores](fuente/img/errores_skynet.JPG)<br><br>

### 4. Análisis de Fallos y Solución


### 5. Comprobación de las Soluciones


#### 5.1. Resultados + Soluciones Errores
