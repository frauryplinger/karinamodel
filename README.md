# karinamodel.com – Portfolio-Website

Die Portfolio-Website des Models **Karina Ryplinger** (Карина Рыплингер), Almaty und Astana.
Es ist eine einfache, statische Website: reines HTML, CSS und ein kleines JavaScript.
Sie braucht keine Datenbank, keinen Server und keine Programme. Veröffentlicht wird sie kostenlos über **GitHub Pages**.

Die Website ist auf Russisch und zuerst für das Handy gebaut. Auf größeren Bildschirmen passt sie sich automatisch an.

## Ordnerstruktur

```
index.html            Die Website selbst: alle Texte, Links und Bilder-Verweise
css/style.css         Aussehen: Farben, Schriften, Abstände
js/viewer.js          Foto-Ansicht (Foto antippen → groß, Vor/Zurück)
fonts/                Schriften Golos Text und Unbounded (+ Lizenz OFL.txt)
img/photo/            Fotos, jeweils zwei Größen:
                        name.webp      groß (lange Kante max. 1600 px)
                        name-800.webp  klein (lange Kante max. 800 px, fürs Handy)
img/video/            Titelbilder der Videos
img/og-image.jpg      Vorschaubild, wenn der Link in WhatsApp/Telegram geteilt wird
favicon.svg, favicon-32.png, apple-touch-icon.png   Symbol im Browser-Tab
.nojekyll             Leere Datei – sagt GitHub, die Seite unverändert auszuliefern
```

Die Fotos heißen nach ihrer Herkunft im Portfolio-PDF: `pdf-07-01` = PDF-Seite 7, erstes Foto von links.

## Texte ändern (Schritt für Schritt)

1. Auf GitHub im Repository die Datei **`index.html`** anklicken.
2. Oben rechts auf das **Stift-Symbol** („Edit this file“) klicken.
3. Mit **Strg + F** (Mac: **Cmd + F**) den Text suchen, den du ändern willst, zum Beispiel `175`.
4. Nur den sichtbaren Text ändern. Zeichen wie `<p>` oder `</dd>` bitte nicht anrühren.
5. Oben rechts auf **„Commit changes…“** und dann noch einmal auf **„Commit changes“** klicken.
6. Nach 1–2 Minuten ist die Änderung online. Falls nicht, im Browser neu laden.

Wo was steht:
- Maße: nach `Рост` suchen.
- Telefonnummer: nach `+7 708` suchen. Achtung, sie steht **zweimal** drin: einmal als Text, einmal im Link `tel:+77089433714`.
- WhatsApp-Links: nach `wa.me` suchen (mehrere Stellen).

## Ein Foto austauschen (Schritt für Schritt)

Am einfachsten ersetzt du ein Foto durch eine neue Datei **mit genau demselben Namen**.

1. Das neue Foto in zwei Größen als **WebP** speichern. Das geht zum Beispiel kostenlos auf squoosh.app:
   - groß: lange Kante 1600 px, Qualität ca. 80, Name z. B. `pdf-06-01.webp`
   - klein: lange Kante 800 px, Name z. B. `pdf-06-01-800.webp`
2. Auf GitHub in den Ordner **`img/photo`** gehen.
3. Oben rechts **„Add file“ → „Upload files“** wählen und beide Dateien hineinziehen. Gleichnamige Dateien werden ersetzt.
4. Unten auf **„Commit changes“** klicken.
5. Hat das neue Foto ein anderes Seitenverhältnis (z. B. quer statt hoch), bitte in `index.html` bei diesem Foto die Zahlen `width="…"` und `height="…"` anpassen. Das sind die Pixelmaße der kleinen Datei.

Die Bildbeschreibung (`alt="…"`) gleich hinter dem Foto bitte passend zum neuen Motiv ändern. Sie ist für Suchmaschinen und blinde Nutzer wichtig.

## Veröffentlichen mit GitHub Pages

1. Im Repository auf **Settings → Pages** gehen.
2. Unter „Build and deployment“ bei **Source** „Deploy from a branch“ wählen.
3. Als Branch **`main`** und Ordner **`/ (root)`** wählen, dann **Save** klicken.
4. Nach ein paar Minuten ist die Seite unter `https://<kontoname>.github.io/<repository-name>/` erreichbar. Dort zuerst testen.

### Eigene Domain karinamodel.com (erst ganz am Ende)

1. In GitHub unter **Settings → Pages → Custom domain** `karinamodel.com` eintragen und speichern. Dabei legt GitHub die Datei `CNAME` selbst an.
2. Beim Domain-Anbieter die DNS-Einträge setzen, wie in der GitHub-Anleitung „Managing a custom domain for your GitHub Pages site“ beschrieben:
   - 4 × A-Eintrag für `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME-Eintrag `www` → `<kontoname>.github.io`
3. Bis zu 24 Stunden warten. Danach in GitHub unter Pages **„Enforce HTTPS“** einschalten.

## Lizenzen

Die Schriften **Golos Text** und **Unbounded** stehen unter der SIL Open Font License 1.1 (siehe `fonts/OFL.txt`).
Alle Fotos und Videos: © Karina Ryplinger. Sie dürfen nicht ohne Erlaubnis weiterverwendet werden.
