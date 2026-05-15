# Checklist de Migración de Dominio
**De:** `drpaola.vercel.app`
**A:** `odontologapaolamarin.com`

---

## 1. Código (yo lo hago — 5 minutos)

Reemplazar todas las ocurrencias de `drpaola.vercel.app` por `odontologapaolamarin.com` en estos archivos y hacer push:

- [ ] `index.html`
- [ ] `blanqueamiento-dental-pereira.html`
- [ ] `diseno-de-sonrisa-pereira.html`
- [ ] `protesis-dental-pereira.html`
- [ ] `resinas-esteticas-pereira.html`
- [ ] `tratamiento-conductos-pereira.html`
- [ ] `higiene-dental-pereira.html`
- [ ] `sitemap.xml`
- [ ] `robots.txt`

---

## 2. Vercel (tú lo haces — 10 minutos)

- [ ] En el dashboard de Vercel, ir al proyecto `drpaola`
- [ ] Sección **Domains** → agregar `odontologapaolamarin.com`
- [ ] Configurar los DNS en el proveedor del dominio según indique Vercel (generalmente un registro `A` o `CNAME`)
- [ ] Esperar propagación DNS (puede tardar hasta 24–48 horas)
- [ ] Verificar que Vercel emita el certificado SSL automáticamente

---

## 3. Google Search Console (tú lo haces — 15 minutos)

- [ ] Ir a [Google Search Console](https://search.google.com/search-console)
- [ ] Agregar nueva propiedad con el dominio `odontologapaolamarin.com`
- [ ] Verificar propiedad (método recomendado: registro DNS TXT)
- [ ] Enviar el sitemap: `https://odontologapaolamarin.com/sitemap.xml`
- [ ] Solicitar indexación manual de la URL principal

---

## 4. Google My Business (tú lo haces — 5 minutos)

- [ ] Actualizar la URL del sitio web en el perfil GBP a `https://odontologapaolamarin.com/`

---

## 5. Verificación post-migración

- [ ] Comprobar que `https://odontologapaolamarin.com/` carga correctamente
- [ ] Verificar que todas las páginas de servicio cargan (añadir `/blanqueamiento-dental-pereira.html`, etc.)
- [ ] Validar schema en [validator.schema.org](https://validator.schema.org)
- [ ] Confirmar que `https://odontologapaolamarin.com/sitemap.xml` es accesible
- [ ] Confirmar que `https://odontologapaolamarin.com/robots.txt` es accesible
- [ ] Verificar que el certificado SSL está activo (candado verde en el navegador)

---

> **Nota:** Avisar cuando el dominio esté listo para hacer el reemplazo de URLs en el código.

---

## 6. Pendientes externos — Google My Business (requiere acceso al perfil GBP)

Estas tareas no se pueden hacer desde el código. Requieren acceso directo al perfil de Google My Business de la Dra. Paola Marín.

### Prioridad Alta
- [ ] **Subir mínimo 7 fotos nuevas** al perfil GBP
  - Fachada del consultorio
  - Recepción / sala de espera
  - Sala de tratamiento
  - Equipo odontológico
  - Fotos de antes/después (mínimo 2)
- [ ] **Agregar categorías secundarias** en GBP:
  - "Cosmetic dentist"
  - "Dental clinic"
  - "Teeth whitening service"
- [ ] **Poblar Q&A** — crear estas 6 preguntas propias antes de que el público responda incorrectamente:
  1. ¿Cómo puedo agendar una cita?
  2. ¿Atienden los sábados?
  3. ¿Cuánto dura la valoración inicial?
  4. ¿Realizan blanqueamiento en una sola sesión?
  5. ¿Trabajan con EPS o seguros?
  6. ¿Dónde están ubicados exactamente?
- [ ] **Responder las 28 reseñas actuales** (y todas las futuras en menos de 48h)
- [ ] **Activar Google Posts** — publicar 1 post semanal con foto y CTA a WhatsApp
- [ ] **Configurar Place Action Link** — enlace directo a `wa.me/573202614733` desde el perfil de Maps

### Prioridad Media
- [ ] **Crear un favicon.ico** (inicial "P" en color verde `#10B981`) y colocarlo en la raíz del proyecto — el link ya está en el HTML, solo falta el archivo
- [ ] **Registrar en Doctoralia Colombia** con el NAP exacto:
  - Nombre: `Dra. Paola Marín`
  - Dirección: `Cl. 75 #44-60 Local 4, Hacienda Cuba, Pereira, Risaralda`
  - Teléfono: `+573202614733`
- [ ] **Registrar en Páginas Amarillas Colombia** con el mismo NAP exacto

### Prioridad Baja (Largo Plazo)
- [ ] **Flujo de solicitud de reseñas post-consulta** — mensaje de WhatsApp automático con link directo a dejar reseña en Google. Meta: llegar a 50 reseñas en 90 días
- [ ] **Contactar al Colegio Odontológico Colombiano** para solicitar un backlink institucional desde su directorio de profesionales
