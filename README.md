# אתר TKB — The Kesher Boys (tkb-pro.com)

אתר סטטי פשוט (HTML/CSS/JS רגילים, בלי build) שמתארח ב-GitHub Pages ומציג את כל האפליקציות של הסטודיו.

## מבנה

```
index.html            דף הבית (הירו, "Our apps", אודות, יצירת קשר)
apps.json             מקור הנתונים היחיד לרשימת האפליקציות
zen-room/index.html   עמוד האפליקציה Zen Room
zen-room/privacy/     מדיניות הפרטיות (EN + HE) - הכתובת שנכנסת ל-Google Play Console
assets/site.css       העיצוב של כל האתר
assets/apps.js        מצייר את כרטיסי האפליקציות וקישורי הפרטיות בפוטר מתוך apps.json
assets/brand/         לוגו, favicon, apple-touch-icon
assets/zen-room/      אייקון, feature graphic, צילומי מסך
404.html, robots.txt, sitemap.xml, CNAME (tkb-pro.com), .nojekyll
```

## הוספת אפליקציה חדשה

1. העתיקו את התיקייה `zen-room/` לשם חדש, למשל `my-game/`, ועדכנו בתוכה את `index.html` ואת `privacy/index.html`
   (כותרות, תיאור, canonical, og:url, טקסטים, שם האפליקציה במדיניות).
2. צרו `assets/my-game/` עם `icon-192.webp`, `feature-graphic.png` (גם `.webp`) ותיקיית `screens/`. מומלץ webp ורוחב 540px לצילומי מסך.
3. הוסיפו אובייקט ל-`apps.json`:
   ```json
   {
     "slug": "my-game", "name": "My Game", "pitch": "משפט אחד.",
     "icon": "/assets/my-game/icon-192.webp", "platforms": ["Android"],
     "status": "coming-soon",
     "playUrl": "", "appStoreUrl": "",
     "page": "/my-game/", "privacy": "/my-game/privacy/", "accent": "#335C5E"
   }
   ```
   בזמן בדיקה ב-Google Play: `status` = `"testing"` ו-`testUrl` עם קישור ההצטרפות לבדיקה (הכרטיס יציג "In testing on Google Play"),
   ובעמוד האפליקציה הכפתור הוא `<a class="play-soon" href="קישור הבדיקה">` עם הטקסט "Join the test on".
   כשהאפליקציה עולה לאוויר: שנו `status` ל-`"live"` (הכרטיס יציג "Available now"), מלאו `playUrl`/`appStoreUrl`,
   ובעמוד האפליקציה החליפו את תג ה-"Coming soon" (`.play-soon`) בקישור `<a class="play-soon" href="...">`.
4. הוסיפו את הכתובות החדשות ל-`sitemap.xml`.
5. בדקו שאין קישורים שבורים (פתחו את האתר מקומית, ראו למטה).

הערה: בלי JavaScript מוצג בדף הבית כרטיס/קישור גיבוי של Zen Room בלבד (בתוך `<noscript>`), לכן אם רוצים שגם הוא יכלול אפליקציה חדשה, הוסיפו אותה גם שם.

## הרצה מקומית

```
python3 -m http.server 8000
```
ואז http://localhost:8000 (הנתיבים מוחלטים מ-"/", לכן יש להריץ משורש התיקייה ולא לפתוח את הקבצים ישירות).

## פריסה (GitHub Pages)

1. צרו מאגר ב-GitHub, והעלו אליו את כל תוכן התיקייה (שורש המאגר = שורש האתר).
2. Settings, Pages: Source = Deploy from a branch, Branch = `main`, Folder = `/ (root)`.
3. קובץ `CNAME` כבר מכיל `tkb-pro.com`. ברשם הדומיין הגדירו רשומות A ל-185.199.108.153 / .109.153 / .110.153 / .111.153
   (ואופציונלית CNAME של `www` ל-`<user>.github.io`), ובהגדרות Pages סמנו Enforce HTTPS.
4. אחרי שהאתר עלה, בדקו ש-https://tkb-pro.com/zen-room/privacy/ נפתח בלי התחברות, והדביקו אותו ב-Play Console.
