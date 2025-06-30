# Candy AI

Ein KI-Charakter-Chat mit Bildgenerierung, Login & NSFW-Modus.

## Features
- GPT-4 Textchat
- DALL·E Bildgenerierung
- Benutzer-Login mit Supabase
- Charakterwahl & Eigene Charaktere
- NSFW-Modus

## Setup
1. `.env` Datei erstellen mit Supabase- und OpenAI-Keys
2. `npm install`
3. `npm run dev`

## .env Beispiel
```
NEXT_PUBLIC_SUPABASE_URL=https://dein.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xyz
OPENAI_API_KEY=sk-xyz
```