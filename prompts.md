# AI Image Generation — Master Prompt File
Store: Leather & Puffer Jacket Brand (update with real brand name before generating)

---

## 0. HOW TO USE THIS FILE

- Generate images in the SAME AI tool/model for all 105 images (Midjourney, Ideogram, or similar) — switching tools mid-way changes lighting/skin-tone/rendering style and breaks visual consistency across your site.
- Use the **same seed image or style reference** across a product's 5 shots where your tool supports it (e.g. Midjourney `--sref`, or "image reference" upload) — this keeps the same model, same background tone, same lighting rig across all 5 images of one product.
- Do NOT mix AI-generated hero/banner images with AI-generated product images from a different tool/style — inconsistency here is the #1 thing that makes a store look "assembled" instead of "shot."
- Every prompt ends with the same negative constraints — do not skip these, they prevent common AI mistakes (extra fingers, warped logos, text artifacts).
- **Universal negative prompt (append to every generation):**
```
no text, no logos, no watermark, no extra fingers, no distorted hands, 
no blurry face, no deformed garment, no visible seams errors, 
no unrealistic proportions, no plastic-looking skin, photorealistic, 
high detail, 8k quality
```

---

## 1. BRAND LOGO PROMPT

Since you need a logo for the site (nav bar, footer, packaging mockups, watermark), generate this separately from product shots — logos need a vector/flat-design tool ideally (Illustrator, or AI tools built for logos like Looka), but if generating via image AI as a starting concept:

```
Minimalist modern logo design for a premium leather and streetwear 
fashion brand, clean bold wordmark, sans-serif condensed typography, 
monochrome black on transparent/white background, subtle luxury feel, 
suitable for embossing on leather, flat vector style, no gradients, 
no 3D effects, simple and timeless, high contrast, centered composition
```

**Important:** AI image tools are unreliable for final logo text (letters often render wrong/garbled). Best practice:
1. Use the AI output only as a **mood/style reference** for a designer, OR
2. Generate the icon/symbol only (no text) via AI, then add your brand name as real vector text in Illustrator/Canva/Figma
3. Once you have a final logo file (SVG/PNG), that's what actually goes into the Next.js site — never ship an AI-generated logo with AI-generated text directly

---

## 2. UNIVERSAL STYLE GUIDE (applies to every product image below)

- Background: soft off-white / warm beige seamless studio backdrop (`#FAFAF8` family)
- Lighting: soft, even studio lighting with gentle directional shadow — premium catalog style, not harsh
- Camera: shot on medium format camera look, sharp focus, shallow depth of field only for close-ups (#4 shots)
- Model (where used): same model across a single product's on-model shots (#1, #2, #3) for consistency; can vary model between different products
- Mood: confident, minimal, editorial — never smiling/casual, never overly posed/stiff
- Realism: photorealistic, natural skin texture, natural fabric drape and weight, accurate garment physics (no floating/warped cloth)

---

## 3. PUFFER JACKETS (6 products × 5 images = 30 images)

### 3.1 Onyx Leather Puffer (Black)
**1 — Front, on-model**
```
Editorial fashion photograph, male model standing front-facing, 
wearing black full-grain leather puffer jacket with quilted panel 
detailing, structured popped collar, matte finish, zipped closed, 
soft off-white studio background, clean even studio lighting, 
sharp focus, photorealistic, high-end e-commerce catalog style
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model shown from back, wearing 
black full-grain leather puffer jacket, quilted back panel clearly 
visible, structured collar from behind, soft off-white studio 
background, clean even studio lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
black full-grain leather puffer jacket, one hand in jacket pocket, 
collar popped, natural relaxed confident pose, soft off-white 
studio background, soft directional lighting, sharp focus on 
leather sheen, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, black full-grain leather puffer 
jacket, focus on quilted panel stitching, zipper pull and collar 
hardware, visible leather grain texture and matte sheen, soft 
studio lighting, shallow depth of field, sharp focus on hardware 
and stitching, off-white blurred background, photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, black full-grain leather puffer 
jacket laid flat, full garment visible including quilted paneling 
and collar, true black color and matte texture, soft off-white 
studio background, soft even lighting, subtle shadow beneath 
garment, sharp focus, e-commerce catalog style, photorealistic
```

### 3.2 Cognac Leather Puffer
**1 — Front, on-model**
```
Editorial fashion photograph, male model standing front-facing, 
wearing rich cognac leather puffer jacket, high-density quilted 
insulation panels, structured collar, warm brown leather tone, 
soft off-white studio background, clean even studio lighting, 
sharp focus, photorealistic, high-end catalog style
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model shown from back, wearing 
cognac leather puffer jacket, quilted back panel visible, warm 
brown leather tone, soft off-white studio background, even studio 
lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
cognac leather puffer jacket, hand in pocket, confident relaxed 
pose, warm brown leather tone catching soft light, off-white studio 
background, photorealistic, sharp focus
```
**4 — Close-up detail**
```
Close-up product photography, cognac leather puffer jacket, focus 
on quilted stitching and zipper hardware, rich warm brown leather 
grain texture visible, shallow depth of field, soft studio lighting, 
off-white blurred background, photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, cognac leather puffer jacket laid 
flat, full garment and quilted paneling visible, true warm brown 
color, soft off-white studio background, even lighting, subtle 
shadow, sharp focus, photorealistic
```

### 3.3 High-Collar Thermal Puffer (Black)
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
black leather puffer jacket with engineered high collar covering 
lower face/neck, quilted body, structured silhouette, soft 
off-white studio background, even studio lighting, sharp focus, 
photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing black 
high-collar leather puffer jacket, tall collar and quilted back 
panel visible, off-white studio background, even lighting, sharp 
focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
black high-collar leather puffer jacket, collar raised, hand near 
collar adjusting it, off-white studio background, soft directional 
lighting, photorealistic, sharp focus
```
**4 — Close-up detail**
```
Close-up product photography, black leather puffer jacket, focus 
on tall structured collar construction, stitching and zipper detail, 
leather grain texture, shallow depth of field, off-white blurred 
background, photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, black high-collar leather puffer 
jacket laid flat, collar fully visible in raised position, quilted 
body, true black color, off-white studio background, even lighting, 
sharp focus, photorealistic
```

### 3.4 Slate Grey Leather Puffer
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
slate grey leather puffer jacket, quilted panels, minimal hardware, 
clean understated silhouette, off-white studio background, even 
lighting, sharp focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing slate 
grey leather puffer jacket, quilted back panel visible, off-white 
studio background, even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
slate grey leather puffer jacket, relaxed natural pose, hand at 
side, off-white studio background, soft directional lighting, 
photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, slate grey leather puffer jacket, 
focus on minimal hardware, zipper, and quilted stitching, leather 
texture visible, shallow depth of field, off-white blurred 
background, photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, slate grey leather puffer jacket laid 
flat, full quilted garment visible, true grey tone, off-white studio 
background, even lighting, sharp focus, photorealistic
```

### 3.5 Classic Black Moto Puffer
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
black leather puffer jacket with asymmetric moto-style zip, quilted 
body, off-white studio background, even studio lighting, sharp 
focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing black 
moto-style leather puffer jacket, quilted back panel, off-white 
studio background, even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
black moto-style leather puffer jacket, hand near asymmetric zip, 
confident pose, off-white studio background, soft directional 
lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, black leather puffer jacket, focus 
on asymmetric zipper hardware and quilted stitching, leather grain 
texture, shallow depth of field, off-white blurred background, 
photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, black moto-style leather puffer jacket 
laid flat, asymmetric zip and quilted paneling visible, true black 
color, off-white studio background, even lighting, sharp focus, 
photorealistic
```

### 3.6 Storm Blue Leather Puffer *(new 6th puffer — replace/rename as needed)*
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
deep storm blue leather puffer jacket, quilted panels, structured 
collar, off-white studio background, even studio lighting, sharp 
focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing storm 
blue leather puffer jacket, quilted back panel visible, off-white 
studio background, even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
storm blue leather puffer jacket, relaxed confident pose, off-white 
studio background, soft directional lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, storm blue leather puffer jacket, 
focus on stitching and zipper hardware, leather texture visible, 
shallow depth of field, off-white blurred background, photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, storm blue leather puffer jacket laid 
flat, full quilted garment visible, true deep blue tone, off-white 
studio background, even lighting, sharp focus, photorealistic
```

---

## 4. LEATHER JACKETS — non-puffer (6 products × 5 images = 30 images)

### 4.1 Leather Bomber (Black)
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
black smooth leather bomber jacket, ribbed collar cuffs and hem, 
front zip closed, no quilting, clean structured silhouette, 
off-white studio background, even studio lighting, sharp focus, 
photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing black 
leather bomber jacket, smooth back panel, ribbed hem visible, 
off-white studio background, even lighting, sharp focus, 
photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
black leather bomber jacket, hand in pocket, relaxed confident 
pose, off-white studio background, soft directional lighting, 
photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, black leather bomber jacket, focus 
on ribbed collar/cuff knit texture and zipper hardware, smooth 
leather grain visible, shallow depth of field, off-white blurred 
background, photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, black leather bomber jacket laid flat, 
ribbed collar and cuffs visible, smooth leather texture, true black 
color, off-white studio background, even lighting, sharp focus, 
photorealistic
```

### 4.2 Classic Biker Jacket (Black)
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
black leather biker jacket, asymmetric front zip, structured 
collar, smooth leather surface, no quilting, off-white studio 
background, even studio lighting, sharp focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing black 
leather biker jacket, clean back panel and belt detail if present, 
off-white studio background, even lighting, sharp focus, 
photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
black leather biker jacket, hand resting near zipper, confident 
pose, off-white studio background, soft directional lighting, 
photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, black leather biker jacket, focus 
on asymmetric zipper and collar hardware, smooth leather grain 
texture, shallow depth of field, off-white blurred background, 
photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, black leather biker jacket laid flat, 
asymmetric zip and structured collar visible, smooth leather 
texture, off-white studio background, even lighting, sharp focus, 
photorealistic
```

### 4.3 Cognac Leather Jacket (Minimal)
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
cognac smooth leather jacket, minimal clean silhouette, structured 
collar, front zip or button placket, off-white studio background, 
even studio lighting, sharp focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing cognac 
leather jacket, smooth back panel, off-white studio background, 
even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
cognac leather jacket, one hand in pocket, relaxed confident pose, 
warm leather tone catching light, off-white studio background, 
photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, cognac leather jacket, focus on 
collar and zipper/button hardware, smooth warm brown leather grain, 
shallow depth of field, off-white blurred background, photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, cognac leather jacket laid flat, clean 
minimal silhouette visible, true warm brown tone, off-white studio 
background, even lighting, sharp focus, photorealistic
```

### 4.4 Low-Angle Statement Leather Jacket (Black) — *"Leather Redefined" style piece*
**1 — Front, on-model**
```
Editorial fashion photograph, low camera angle looking up at male 
model, body slightly tilted, wearing open black leather jacket, 
structured popped collar, hand in pocket, dramatic single-direction 
studio lighting on leather sheen, off-white studio background with 
soft vignette, sharp focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing open 
black leather jacket, structured collar and back silhouette 
visible, off-white studio background, even lighting, sharp focus, 
photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
black leather jacket, head turned down toward camera, confident 
editorial stance, off-white studio background with soft vignette, 
dramatic directional lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, black leather jacket, focus on open 
zip, collar structure and leather sheen, shallow depth of field, 
dramatic soft lighting, off-white blurred background, photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, black leather jacket laid flat, open 
front and structured collar visible, true black tone and sheen, 
off-white studio background, even lighting, sharp focus, 
photorealistic
```

### 4.5 Charcoal Leather Jacket
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
charcoal grey smooth leather jacket, clean structured silhouette, 
off-white studio background, even studio lighting, sharp focus, 
photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing 
charcoal leather jacket, smooth back panel, off-white studio 
background, even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
charcoal leather jacket, relaxed natural pose, off-white studio 
background, soft directional lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, charcoal leather jacket, focus on 
collar and zipper hardware, smooth leather grain texture, shallow 
depth of field, off-white blurred background, photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, charcoal leather jacket laid flat, 
clean silhouette visible, true charcoal tone, off-white studio 
background, even lighting, sharp focus, photorealistic
```

### 4.6 Tan Leather Racer Jacket
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing tan 
smooth leather racer jacket, minimal collar, clean front zip, 
off-white studio background, even studio lighting, sharp focus, 
photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing tan 
leather racer jacket, smooth back panel, off-white studio 
background, even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing tan 
leather racer jacket, hand at side, relaxed confident pose, warm 
tan tone catching soft light, off-white studio background, 
photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, tan leather racer jacket, focus on 
zipper and collar hardware, smooth leather grain texture, shallow 
depth of field, off-white blurred background, photorealistic
```
**5 — Flat-lay / ghost mannequin**
```
Premium product photography, tan leather racer jacket laid flat, 
clean minimal silhouette, true tan color, off-white studio 
background, even lighting, sharp focus, photorealistic
```

---

## 5. POLO SHIRTS (3 products × 5 images = 15 images)

### 5.1 Classic Polo — Navy
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
navy blue pique cotton polo shirt, tailored fit, ribbed collar, 
two-button placket, off-white studio background, even studio 
lighting, sharp focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing navy 
polo shirt, clean back panel, off-white studio background, even 
lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
navy polo shirt, relaxed natural pose, off-white studio background, 
soft directional lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, navy pique cotton polo shirt, focus 
on ribbed collar, button placket and fabric weave texture, shallow 
depth of field, off-white blurred background, photorealistic
```
**5 — Flat-lay**
```
Premium product photography, navy polo shirt laid flat, collar and 
placket visible, true navy color, off-white studio background, 
even lighting, sharp focus, photorealistic
```

### 5.2 Classic Polo — Off-White
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
off-white pique cotton polo shirt, tailored fit, ribbed collar, 
tonal button placket, off-white studio background, even studio 
lighting, sharp focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing 
off-white polo shirt, clean back panel, off-white studio 
background, even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
off-white polo shirt, relaxed natural pose, soft directional 
lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, off-white pique cotton polo shirt, 
focus on ribbed collar and tonal stitching, fabric weave texture, 
shallow depth of field, off-white blurred background, photorealistic
```
**5 — Flat-lay**
```
Premium product photography, off-white polo shirt laid flat, collar 
and placket visible, true off-white tone, subtle contrast against 
studio background, even lighting, sharp focus, photorealistic
```

### 5.3 Classic Polo — Olive
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
olive green pique cotton polo shirt, tailored fit, structured 
collar, off-white studio background, even studio lighting, sharp 
focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing olive 
polo shirt, clean back panel, off-white studio background, even 
lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
olive polo shirt, relaxed natural pose, off-white studio 
background, soft directional lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, olive pique cotton polo shirt, focus 
on collar and button placket, fabric weave texture, shallow depth 
of field, off-white blurred background, photorealistic
```
**5 — Flat-lay**
```
Premium product photography, olive polo shirt laid flat, collar 
visible, true olive tone, off-white studio background, even 
lighting, sharp focus, photorealistic
```

---

## 6. HOODIES (3 products × 5 images = 15 images)

### 6.1 Urban Fleece Hoodie — Black
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
black heavyweight fleece hoodie, boxy oversized fit, drawstring 
hood, off-white studio background, even studio lighting, sharp 
focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing black 
fleece hoodie, hood down, back panel visible, off-white studio 
background, even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
black fleece hoodie, hands in front pocket, relaxed streetwear 
pose, off-white studio background, soft directional lighting, 
photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, black heavyweight fleece hoodie, 
focus on drawstring, ribbed cuff and fabric texture, shallow depth 
of field, off-white blurred background, photorealistic
```
**5 — Flat-lay**
```
Premium product photography, black fleece hoodie laid flat, hood 
and front pocket visible, true black color, off-white studio 
background, even lighting, sharp focus, photorealistic
```

### 6.2 Urban Fleece Hoodie — Grey
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
heather grey heavyweight fleece hoodie, dropped shoulder cut, 
off-white studio background, even studio lighting, sharp focus, 
photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing grey 
fleece hoodie, back panel and hood visible, off-white studio 
background, even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
grey fleece hoodie, relaxed streetwear pose, off-white studio 
background, soft directional lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, heather grey fleece hoodie, focus on 
ribbed cuff and hood drawstring, fabric texture visible, shallow 
depth of field, off-white blurred background, photorealistic
```
**5 — Flat-lay**
```
Premium product photography, grey fleece hoodie laid flat, hood 
and pocket visible, true heather grey tone, off-white studio 
background, even lighting, sharp focus, photorealistic
```

### 6.3 Urban Fleece Hoodie — Cream
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
cream heavyweight fleece hoodie, minimal branding, utility pocket, 
off-white studio background, even studio lighting, sharp focus, 
photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing cream 
fleece hoodie, back panel and hood visible, off-white studio 
background, even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
cream fleece hoodie, relaxed natural pose, off-white studio 
background, soft directional lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, cream fleece hoodie, focus on utility 
pocket stitching and fabric texture, shallow depth of field, 
off-white blurred background, photorealistic
```
**5 — Flat-lay**
```
Premium product photography, cream fleece hoodie laid flat, hood 
and pocket visible, true cream tone, off-white studio background, 
even lighting, sharp focus, photorealistic
```

---

## 7. TRACKSUITS (3 products × 5 images = 15 images)

### 7.1 Urban Tracksuit — Black
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
black technical tracksuit set (jacket and pants), tailored 
streetwear fit, off-white studio background, even studio lighting, 
sharp focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing black 
tracksuit set, back panel visible, off-white studio background, 
even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
black tracksuit set, relaxed athletic pose, off-white studio 
background, soft directional lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, black technical tracksuit fabric, 
focus on zipper, ribbed cuffs and fabric weave, shallow depth of 
field, off-white blurred background, photorealistic
```
**5 — Flat-lay**
```
Premium product photography, black tracksuit set laid flat, jacket 
and pants both visible, true black color, off-white studio 
background, even lighting, sharp focus, photorealistic
```

### 7.2 Urban Tracksuit — Charcoal
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
charcoal technical tracksuit set, tapered fit, off-white studio 
background, even studio lighting, sharp focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing 
charcoal tracksuit set, back panel visible, off-white studio 
background, even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
charcoal tracksuit set, relaxed athletic pose, off-white studio 
background, soft directional lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, charcoal tracksuit fabric, focus on 
zipper and ribbed cuff detail, fabric texture visible, shallow 
depth of field, off-white blurred background, photorealistic
```
**5 — Flat-lay**
```
Premium product photography, charcoal tracksuit set laid flat, 
jacket and pants visible, true charcoal tone, off-white studio 
background, even lighting, sharp focus, photorealistic
```

### 7.3 Urban Tracksuit — Stone
**1 — Front, on-model**
```
Editorial fashion photograph, male model front-facing, wearing 
stone-tone technical tracksuit set, minimal branding, everyday 
comfort fit, off-white studio background, even studio lighting, 
sharp focus, photorealistic
```
**2 — Back, on-model**
```
Editorial fashion photograph, male model from back, wearing stone 
tracksuit set, back panel visible, off-white studio background, 
even lighting, sharp focus, photorealistic
```
**3 — 3/4 angle, on-model**
```
Editorial fashion photograph, male model at 3/4 angle, wearing 
stone tracksuit set, relaxed natural pose, off-white studio 
background, soft directional lighting, photorealistic
```
**4 — Close-up detail**
```
Close-up product photography, stone-tone tracksuit fabric, focus 
on zipper and cuff stitching, fabric weave texture, shallow depth 
of field, off-white blurred background, photorealistic
```
**5 — Flat-lay**
```
Premium product photography, stone tracksuit set laid flat, jacket 
and pants visible, true stone tone, off-white studio background, 
even lighting, sharp focus, photorealistic
```

---

## 8. IMPORTANT NOTES FOR "SUPER REALISTIC" RESULTS

1. **Use the same model reference across a category at minimum** (ideally across the whole site) — most AI tools let you lock a face/body via image reference or seed. Random new faces per product = looks like a stock photo dump, not a brand.
2. **Generate at highest resolution your tool allows**, then upscale — product close-ups (#4) especially need real detail, not soft AI blur.
3. **Inspect hands and stitching lines closely** on every image before use — these are the two things AI most commonly gets wrong (extra/warped fingers, stitching that doesn't follow real garment construction).
4. **Colors will drift slightly between generations** even with the same prompt — do a final color-correction pass (Photoshop/Lightroom) on all 5 images of a product together, so they visually match as one product shoot.
5. **The logo should never be AI-generated as final art** — use AI only for concept/mood, then finalize in a vector tool. Do not attempt to bake the logo into product photos via AI prompt (e.g. "logo on jacket tag") — it will render as garbled text almost every time.