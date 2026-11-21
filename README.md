# karinamodel.com – Portfolio-Website

Die Portfolio-Website des Models **Karina Ryplinger** (Карина Рыплингер), Almaty und Astana.
Es ist eine einfache, statische Website: reines HTML, CSS und ein kleines JavaScript.
Sie braucht keine Datenbank, keinen Server und keine Programme. Veröffentlicht wird sie kostenlos über **GitHub Pages**.

Die Website gibt es in drei Sprachen. Russisch ist die Standardsprache. Oben rechts kann man über die kleine Flagge die Sprache wechseln:

| Sprache | Adresse | Datei |
|---|---|---|
| Russisch (Standard) | karinamodel.com/ | `index.html` |
| Englisch | karinamodel.com/en/ | `en/index.html` |
| Kasachisch | karinamodel.com/kk/ | `kk/index.html` |

Sie ist zuerst für das Handy gebaut und passt sich auf größeren Bildschirmen automatisch an.

## Ordnerstruktur

```
index.html            Die Website auf Russisch: alle Texte, Links und Bilder-Verweise
en/index.html         Dieselbe Seite auf Englisch
kk/index.html         Dieselbe Seite auf Kasachisch
css/style.css         Aussehen: Farben, Schriften, Abstände
js/viewer.js          Foto-Ansicht (Foto antippen → groß, Vor/Zurück, Wischen)
js/lang.js            Sprachauswahl oben rechts (schließt bei Tippen daneben)
js/strips.js          Pfeil-Knöpfe für die Fotostreifen am Computer
fonts/                Schriften Golos Text und Unbounded im WOFF2-Format (+ Lizenz OFL.txt)
img/photo/            Fotos, jeweils zwei Größen:
                        name.webp      groß (lange Kante max. 1600 px)
                        name-800.webp  klein (lange Kante max. 800 px, fürs Handy)
img/video/            Titelbilder der Videos
video/                Videos, die direkt auf der Seite abspielen (MP4, fürs Web verkleinert)
img/flags/            Flaggen für die Sprachauswahl
img/og-image.jpg      Vorschaubild, wenn der Link in WhatsApp/Telegram geteilt wird
favicon.svg, favicon-32.png, apple-touch-icon.png   Symbol im Browser-Tab
.nojekyll             Leere Datei – sagt GitHub, die Seite unverändert auszuliefern
```

Die Fotos heißen nach ihrer Herkunft im Portfolio-PDF: `pdf-07-01` = PDF-Seite 7, erstes Foto von links.

## Texte ändern (Schritt für Schritt)

**Wichtig:** Jeder Text steht dreimal, in jeder Sprache einmal. Änderst du z. B. die Telefonnummer, dann bitte in allen drei Dateien: `index.html`, `en/index.html` und `kk/index.html`.

1. Auf GitHub im Repository die Datei **`index.html`** anklicken (bzw. erst den Ordner `en` oder `kk` und darin `index.html`).
2. Oben rechts auf das **Stift-Symbol** („Edit this file“) klicken.
3. Mit **Strg + F** (Mac: **Cmd + F**) den Text suchen, den du ändern willst, zum Beispiel `175`.
4. Nur den sichtbaren Text ändern. Zeichen wie `<p>` oder `</dd>` bitte nicht anrühren.
5. Oben rechts auf **„Commit changes…“** und dann noch einmal auf **„Commit changes“** klicken.
6. Nach 1–2 Minuten ist die Änderung online. Falls nicht, im Browser neu laden.

Wo was steht:
- Maße: nach `175` suchen.
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
5. Hat das neue Foto ein anderes Seitenverhältnis (z. B. quer statt hoch), bitte in allen drei `index.html`-Dateien bei diesem Foto die Zahlen `width="…"` und `height="…"` anpassen. Das sind die Pixelmaße der kleinen Datei.

Die Bildbeschreibung (`alt="…"`) gleich hinter dem Foto bitte passend zum neuen Motiv ändern, in jeder Sprache. Sie ist für Suchmaschinen und blinde Nutzer wichtig.

## Videos

Die meisten Video-Kacheln führen noch zum Instagram-Profil. Sobald es das Video als Datei gibt, kann die Kachel es direkt abspielen.
Bisher ist das bei 17 Videos unter „Работы в видео“ (Nr. 1, 2, 4, 5, 6, 8, 9, 10, 11, 13, 15, 16, 17, 18, 19, 21, 22) bei 10 UGC-Videos (Nr. 1–5, 8–12) sowie beim Snaps-Video der Fall (Ordner `video/`, z. B. `video/portfolio-video-01.mp4`).
Das Video wird erst geladen, wenn jemand auf Play tippt. Die Seite bleibt also schnell.

Neue Videos bitte nicht in Originalgröße hochladen. Handy-Videos sind oft 30 MB und mehr. Am einfachsten gibst du die Datei Claude:
Claude verkleinert sie (meist auf unter 5 MB), ordnet sie dem passenden Titelbild zu und baut sie in alle drei Sprachversionen ein.

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

## Hinweis zur Schrift auf Kasachisch

Die Überschriften-Schrift **Unbounded** enthält keine kasachischen Sonderbuchstaben (Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ).
Deshalb wurden die kasachischen Überschriften so formuliert, dass sie ohne diese Buchstaben auskommen.
Wer eine Überschrift auf Kasachisch ändert, sollte das beachten. Sonst erscheint der Buchstabe in einer anderen Schrift.
Fließtext und Buttons sind nicht betroffen.

## Lizenzen

Die Schriften **Golos Text** und **Unbounded** stehen unter der SIL Open Font License 1.1 (siehe `fonts/OFL.txt`).
Alle Fotos und Videos: © Karina Ryplinger. Sie dürfen nicht ohne Erlaubnis weiterverwendet werden.
