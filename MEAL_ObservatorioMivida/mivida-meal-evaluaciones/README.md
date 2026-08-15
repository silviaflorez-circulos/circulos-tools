# Evaluaciones MEAL — Estrategia Mi Vida

Herramienta para digitalizar, sin depender de Power Apps mientras se completa la
sistematización, las evaluaciones de los 4 Círculos de acompañamiento de la
Estrategia Mi Vida (Fundación Círculo de Estudios Culturales y Políticos —
Contrato nº 81088044, Embajada de Suiza 2026).

Esta carpeta vive dentro del repositorio compartido `circulos-tools`, junto a
las herramientas de otros proyectos.

## Qué contiene esta carpeta

```
mivida-meal-evaluaciones/
├── index.html              ← menú de inicio (los 4 círculos)
├── circulo1.html           ← LISTO: captura completa de Círculo 1
├── circulo2.html           ← LISTO: Círculo 2
├── circulo3.html           ← LISTO: Círculo 3
├── circulo4.html           ← LISTO: Círculo 4
├── assets/
│   ├── style.css           ← estilo compartido (calca la app Power Apps)
│   └── config.js           ← aquí pegas UNA VEZ la URL de tu Apps Script
├── apps-script/
│   └── Codigo.gs            ← backend que escribe en Google Sheets
└── plantilla/
    └── Evaluaciones_MEAL_MiVida.xlsx   ← plantilla con las 4 pestañas
```

## Cómo se publica (repositorio compartido `circulos-tools`)

Como este repositorio tiene varios proyectos, GitHub Pages se configura para
servir desde la **raíz** del repositorio (no desde `/docs`), y cada proyecto
—incluido este— vive en su propia carpeta al nivel raíz:

```
circulos-tools/                     ← raíz del repo (Pages sirve desde aquí)
├── .nojekyll                       ← evita que GitHub procese esto con Jekyll
├── mivida-meal-evaluaciones/       ← esta carpeta
│   └── ... (todo lo de arriba)
└── (tus otros proyectos, cada uno en su propia carpeta)
```

**Configuración de Pages (una sola vez para todo el repositorio):**
Settings → Pages → Branch: `main` → carpeta: **`/ (root)`** → Save.

**El archivo `.nojekyll`** va suelto en la raíz de `circulos-tools`
(al lado de esta carpeta, no adentro de ella) — le dice a GitHub que sirva
los archivos tal cual, sin intentar aplicar un tema Jekyll.

**URL final del sitio:**
```
https://silviaflorez-circulos.github.io/circulos-tools/mivida-meal-evaluaciones/
```

## Paso a paso — puesta en marcha

### 1. Google Sheets
1. Sube `plantilla/Evaluaciones_MEAL_MiVida.xlsx` a tu Google Drive.
2. Ábrelo con doble clic — Google lo convierte automáticamente a Google Sheets.

### 2. Google Apps Script (el backend)
1. En esa Google Sheet: **Extensiones > Apps Script**.
2. Borra el contenido de `Código.gs` y pega todo el contenido de
   `apps-script/Codigo.gs` de esta carpeta.
3. **Implementar > Nueva implementación** → tipo "Aplicación web".
   - Ejecutar como: tu cuenta
   - Quién tiene acceso: **Cualquier usuario**
4. Acepta los permisos ("app no verificada" — Avanzado > Ir a [proyecto] (no seguro)).
5. Copia la URL que termina en `/exec`.

### 3. Conectar el HTML con el Sheet
1. Abre `assets/config.js` (puedes editarlo directo en la web de GitHub,
   con el lápiz de editar, sin bajar nada).
2. Reemplaza `PEGA_AQUI_TU_URL_DE_APPS_SCRIPT_TERMINADA_EN_/exec` por tu URL.
3. Commit changes.

### 4. Subir esto al repositorio `circulos-tools`
1. En GitHub, entra a `circulos-tools` (la página principal, la raíz).
2. **Add file → Upload files**.
3. Arrastra el archivo suelto `.nojekyll` (si el repo no lo tiene ya) y la
   carpeta `mivida-meal-evaluaciones` completa, tal cual, sin abrirla.
4. Verifica en Settings → Pages que la carpeta configurada sea `/ (root)`.
5. Espera 1-2 minutos, revisa la pestaña **Actions** hasta ver el ✅ verde.
6. Abre `https://silviaflorez-circulos.github.io/circulos-tools/mivida-meal-evaluaciones/`

## Cómo se usa en campo

1. Abres esa URL en cualquier dispositivo.
2. Entras al círculo que corresponda.
3. Vas pasando los datos del escaneo/formato impreso, paso por paso — puedes
   saltar a cualquier paso con los números clicables debajo de la barra de
   progreso, no solo avanzar en orden.
4. Al final, "Guardar en Google Sheets" — la fila aparece en la pestaña
   correspondiente de tu Google Sheet.
5. "+ Registrar otra sesión" reinicia el formulario para la siguiente sesión
   sin recargar la página.

## Pendiente / próximos pasos

- Confirmar con capturas reales de Power Apps los colores exactos de
  termómetro de salida, caritas, votación y semáforo en `assets/style.css`
  (hoy están extrapolados del diseño de Círculo 1).
