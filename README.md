🔐 Strong Password

Aplicación web diseñada para garantizar estándares de seguridad durante el proceso de registro, validando la complejidad de las contraseñas en tiempo real mediante lógica personalizada.

🚀 Características principales

- Validación Multi-criterio: Comprobación instantánea de reglas de seguridad.
- Heurística de Seguridad: Prevención del uso de datos predecibles (como nombres de usuario).
- Filtro Anti-Diccionario: Cruce de datos con un listado de palabras comunes para evitar claves débiles.
- Feedback Dinámico: Interfaz diseñada para guiar al usuario mientras escribe su contraseña.

🛠️ Reglas de Validación

Para asegurar una cuenta robusta, el sistema aplica los siguientes requisitos:

- 🔠 Sensibilidad a mayúsculas: Obligatorio combinar mayúsculas y minúsculas.
- 🔢 Requisito numérico: Debe incluir al menos un número.
- ✨ Caracteres especiales: Inclusión de símbolos de seguridad (ej: @, #, +, \_).
- 📏 Longitud mínima: Umbral obligatorio de al menos 8 caracteres.
- 🚫 Sin datos personales: El sistema detecta y bloquea si la clave contiene el nombre del usuario.
- 📋 Filtro de palabras comunes: Validación contra un array de términos prohibidos o frecuentes.

💻 Tecnologías utilizadas

- JavaScript / Typescript: Lógica central de validación.
- RegEx: Expresiones regulares para el reconocimiento eficiente de patrones.
- Vite: Herramienta de construcción y entorno de desarrollo rápido.
