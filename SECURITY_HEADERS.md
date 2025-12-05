# Security headers recomendados (Nginx)

Coloca estos `add_header` dentro del bloque `server` de tu configuración Nginx en producción.
Empieza por probar CSP en modo `Report-Only` para no romper la app inmediatamente.

Ejemplo (pegar en /etc/nginx/sites-available/tu-site):

```
# Seguridad básica
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=()" always;
add_header X-XSS-Protection "1; mode=block" always;

# CSP en modo report-only: ajusta proveedores antes de pasar a enforcement
add_header Content-Security-Policy-Report-Only "default-src 'self' https:; img-src 'self' data: https:; script-src 'self' https://apps.rokt.com 'unsafe-inline'; style-src 'self' 'unsafe-inline' https:;" always;
```

Notas y pasos QA:
- CSP: revisa la consola de errores y el endpoint de reportes si lo configuras. Sustituye `https://apps.rokt.com` por los dominios de terceros que uses.
- Prueba los headers con `curl -I https://tu-dominio` y con https://securityheaders.com/
- No uses `unsafe-inline`/`unsafe-eval` en `script-src` en producción si no es estrictamente necesario. Usa `report-only` hasta que confirmes que no rompes funcionalidades.

Comprobaciones post-deploy:
- `curl -I https://cubaeasytours.com` → verificar presence de `X-Frame-Options`, `Content-Security-Policy-Report-Only`, `Referrer-Policy`, `X-Content-Type-Options`.
- Ejecutar https://securityheaders.com/ y recibir A/B según configuración.

Si quieres, puedo preparar un snippet `systemd`/`certbot` + `nginx` ejemplo para desplegar.
