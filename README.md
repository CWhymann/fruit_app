# Fruit App

Kleine Demo-App: Django-Backend liefert Früchte als JSON, das Frontend zeigt sie als Liste.

## Backend starten

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Der Endpunkt ist dann unter http://127.0.0.1:8000/fruits/ erreichbar.

## Frontend starten

`frontend/index.html` im Browser öffnen oder mit Live Server (VS Code) starten.
Die Backend-URL steht oben in `frontend/script.js` (`API_URL`).

## Tests

```bash
cd backend
python manage.py test
```

## Konfiguration (Umgebungsvariablen)

| Variable               | Bedeutung                                                 | Standard      |
| ---------------------- | --------------------------------------------------------- | ------------- |
| `DJANGO_DEBUG`         | `False` für Produktion                                    | `True`        |
| `DJANGO_SECRET_KEY`    | Pflicht, wenn `DJANGO_DEBUG=False`                        | Dev-Schlüssel |
| `DJANGO_ALLOWED_HOSTS` | Kommagetrennte Hosts                                      | leer          |
| `DJANGO_CORS_ORIGINS`  | Kommagetrennte erlaubte Frontend-Origins (nur Produktion) | leer          |
