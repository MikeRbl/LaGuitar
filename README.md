# GuitarLA - Carrito de Compras (React)

Este proyecto es una aplicación de comercio electrónico para una tienda de guitarras, desarrollada con **React**. Permite a los usuarios explorar una colección de productos, gestionar un carrito de compras y mantener sus datos persistentes de forma local.

## Funcionalidades Integradas

### 1. Visualización de Catálogo y Lógica Ternaria
* **Carga de Datos**: Los productos se renderizan dinámicamente desde una base de datos local.
* **Renderización Condicional**: Se integró el uso de **operadores ternarios** para gestionar la interfaz de forma eficiente. Esto permite mostrar mensajes específicos (como "El carrito está vacío") o elementos de la interfaz solo cuando se cumple una condición determinada.
* **Componentes Modulares**: Arquitectura basada en componentes reutilizables como `Header`, `Footer` y `Card`.

### 2. Gestión Interactiva del Carrito
Se han incorporado controles completos para la manipulación de productos:
* **Botones de Control**: Cada item en el carrito cuenta con botones para incrementar o decrementar la cantidad de productos directamente.
* **Agregar Productos**: Interacción desde las tarjetas para sumar nuevas guitarras al estado global.
* **Vaciar Carrito**: Opción para eliminar todos los elementos del carrito de un solo clic, limpiando el estado de la aplicación.
* **Eliminar Items**: Botones específicos para remover un producto individual del listado.

### 3. Persistencia de Datos (LocalStorage)
* **Sincronización Automática**: Uso de `useEffect` para guardar el estado del carrito en el `localStorage` ante cualquier cambio.
* **Recuperación de Datos**: Al iniciar la aplicación, se verifica la existencia de datos previos para restaurar la sesión del usuario automáticamente.

## Tecnologías Utilizadas
* **React**: Biblioteca principal para la UI (Hooks: `useState`, `useEffect`).
* **Vite**: Entorno de desarrollo rápido.
* **Bootstrap / CSS**: Framework para diseño responsivo y estilos personalizados.
* **JavaScript (ES6+)**: Uso de métodos de arreglos y lógica de operadores ternarios.

## Instalación y Ejecución

1. **Instalar dependencias**:
   ```bash
   npm install