# TRENOvaCodes Website
Static frontend site: HTML5, CSS3, Bootstrap 5.3 (local), vanilla JavaScript.

## Setup
Open `index.html` in a browser, or run `python3 -m http.server`. Fonts (Sora, Inter) load from Google Fonts.

## Pages
index, about, services, service-details (`?service=restaurant-pos`), blog, blog-details (`?post=restaurant-pos-benefits`).

## Structure
- `assets/css/style.css`: custom theme (CSS variables at top)
- `assets/js/main.js`: shared header, footer and contact form, service and blog data, validation, back-to-top, scroll reveal
- Edit services and posts in the `SERVICES` and `POSTS` objects in `main.js`.

## Libraries
Bootstrap 5.3.3 (CSS and bundle JS). Icons are inline SVG. Replace the placeholder phone, email, address and social links.

## Code Map (kaunsa code kidhr hai)
Har file ke andar `SECTION n:` comments laga diye gaye hain. Dhoondne ke liye file mein "SECTION" search karein.
- HTML pages: head (SEO/fonts/css), header, har page ke sections, footer, scripts.
- `main.js`: 1 Icons, 2 Services data, 3 Blog data, 4 Helpers, 5 Header, 6 Footer+Contact form, 7 CTA, 8 Listings, 9 Detail pages, 10 Form validation, 11 Back-to-top, 12 Animations.
- `style.css`: 22 numbered sections (theme colors se lekar mobile styles tak).

## Our Team section (home page)
`TEAM` array in `main.js` (SECTION 3b) mein naam, role aur optional photo (`img`) badlein. Abhi `assets/img/team-1..3.svg` illustrated avatars lage hain; asli photos ke liye `img` ka path badal dein.

## Theme (dark / light)
Default dark. Navbar ke button se light/dark badalta hai aur choice browser mein yaad rehti hai. Light colors `style.css` section 1b mein, toggle code `main.js` SECTION 5b mein. Navbar sticky hai (`#site-header` in `style.css` section 5b).

## Pull-cord ribbon
Navbar ke neeche latakta ribbon (tablet/desktop). Kheench kar ya click karke theme badalta hai. Code: `main.js` SECTION 5c, style: `style.css` section 5c. Hatana ho to `#pullCord` wala `insertAdjacentHTML` block delete karein.

## Chatbot
Neeche right side mein floating chat. Rule-based hai (server nahi chahiye). Jawab `main.js` SECTION 13 ki `KB` list mein edit karein, style `style.css` section 25.

## Performance
Website halki rakhi gayi hai: normal mouse cursor, scroll/tilt handlers rAF se throttled, blur aur continuous animations band. Button ripple `main.js` SECTION 14, extra styles `style.css` section 26.

## Hero animations
Heading words reveal, 'Now building' badge (rotating), orbit icons, CTA shine, scroll hint. Sab halke (transform/opacity). Code: `main.js` SECTION 15, `style.css` section 27. Band karna ho to SECTION 15 delete karein.
