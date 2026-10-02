# Promociones Nutresa · Octubre 2026 · Distrileco Caucasia

App (PWA) para que los tenderos vean las promociones Nutresa de octubre, calculen cuánto les sale de regalo y le manden el pedido a su vendedor por WhatsApp.

**Sitio:** https://haroldco45.github.io/nutresa-promos/

## Promociones (1 al 31 de octubre de 2026)

| Producto | Promoción |
|---|---|
| Salchicha Zenú en lata | Docena de 13 (pague 12, lleve 13) |
| Galleta Saltín Pentataco | Pague 24, lleve 25 |
| Galleta Saltín Taco Día | Pague 48, lleve 52 |

Sin precios. Cobertura total: Bajo Cauca, Córdoba, Nordeste, Urabá y Sucre.

## Archivos

```
index.html        App completa
manifest.json     Instalación como app
sw.js             Funciona sin señal después de la primera visita
icon-192.png      Ícono
icon-512.png      Ícono
og.png            Imagen al compartir por WhatsApp (1200×630)
img/
  salchicha-zenu.jpg
  saltin-pentataco.jpg
  saltin-taco-dia.jpg
  logo-distrileco.jpg
  logo-nutresa.jpg
```

Las fotos deben llamarse exactamente así. Si una falta, la app muestra el nombre del producto en su lugar.

## Publicar en GitHub Pages

1. Crear el repo `nutresa-promos` en la cuenta haroldco45.
2. Subir todos los archivos a la raíz, con la carpeta `img`.
3. Settings → Pages → rama `main`, carpeta `/ (root)`.

## Cambios frecuentes

- **Vendedores:** lista `VENDEDORES` dentro de `index.html` (nombre y celular sin +57).
- **Fechas:** constantes `INICIO` y `FIN` (hora de Colombia, `-05:00`).
- **Promociones:** lista `PROMOS` (paga, lleva, foto).
- Al cambiar fotos o archivos, subir la versión en `sw.js` (`nutresa-oct26-v2`) para que los celulares tomen lo nuevo.

## Datos personales

La página no tiene servidor. El nombre de la tienda y el vendedor escogido se guardan solo en el celular del tendero, y el pedido sale por su propio WhatsApp. Ley 1581 de 2012.

---
Desarrollada por **Vibras Positivas HM** — Derechos de Autor Reservados
