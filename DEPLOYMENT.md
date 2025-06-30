# 📦 Candy AI Deployment

## 🚀 Vercel Deployment (empfohlen)

1. Gehe zu https://vercel.com
2. Neues Projekt → GitHub Repository verbinden oder manuell hochladen
3. In den Project Settings → Environment Variables eintragen:
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy klicken – fertig!

## 🐳 Docker Deployment (optional)

### Voraussetzungen:
- Docker & Docker Compose installiert

### Starten:

```bash
docker-compose up --build
```

### Dann erreichbar unter:
http://localhost:3000

