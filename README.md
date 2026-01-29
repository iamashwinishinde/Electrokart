<img width="1914" height="1028" alt="image" src="https://github.com/user-attachments/assets/0cabef37-62fa-4f2b-835d-222875a5acb3" /># Electrokart

Electrokart — a web app for browsing electronics (project repository).
Live demo: https://electro-kart-psi.vercel.app/

Important: This site is intended to be used on desktop only. It is not mobile friendly. See the "Desktop-only behavior" section below for a recommended snippet to show a clear message on mobile devices.

## Table of Contents
- About
- Live Demo
- Desktop-only behavior (IMPORTANT)
- Features
- Tech / Requirements
- Local setup (example)
- Deployment
- Contributing
- License
- Contact

## About
Electrokart is a web project for showcasing electronic products. This repository contains the code for the website and related resources. The live site is hosted at the Vercel link above.

## Live Demo
Open the site (desktop only): https://electro-kart-psi.vercel.app/

Please only open the link on a desktop or in a desktop browser window. Mobile devices are not supported and the site layout/behaviour may be broken on small screens.

## Desktop-only behavior (IMPORTANT)
This project intentionally targets desktop viewports. If you want to show a clear message to mobile visitors, add an overlay or redirect for small screens. Example snippet (place in your global HTML or main layout):

HTML + CSS example

<!-- Put this near the top of <body> -->
<div id="mobile-overlay" style="display:none; position:fixed; inset:0; background:#fff; z-index:9999; align-items:center; justify-content:center; text-align:center; padding:2rem;">
  <div style="max-width:600px; margin:auto;">
    <h2 style="margin-bottom:0.5rem;">Desktop only</h2>
    <p style="margin-top:0;">This website is intended for desktop browsers. Please open it on a laptop or desktop for the best experience.</p>
  </div>
</div>

<style>
  @media (max-width: 1024px) {
    #mobile-overlay { display:flex; }
    /* Optionally hide the rest of the site when overlay is visible */
    #site-root { filter: blur(2px); pointer-events: none; user-select: none; }
  }
</style>

JavaScript detection alternative

```js
if (window.innerWidth <= 1024) {
  document.getElementById('mobile-overlay').style.display = 'flex';
}
window.addEventListener('resize', () => {
  document.getElementById('mobile-overlay').style.display = (window.innerWidth <= 1024) ? 'flex' : 'none';
});
```

Adjust the breakpoint (1024px) to your preferred desktop cutoff.

## Features
- Product listing and browsing (UI)
- Product detail pages
- Search and filtering (if implemented)
- Responsive design intentionally optimized for desktop
- Deployed to Vercel (live link provided)

(If any of these items do not apply, remove or update them to reflect your project's actual features.)

## Tech / Requirements
Update this section to match your stack. Example:
- Node.js >= 16
- npm or yarn
- React / Next.js / Vue / plain HTML/CSS/JS
- Any backend or environment variables your app needs

## Local setup (example for Node/React/Next)
1. Clone the repo:
   git clone https://github.com/iamashwinishinde/Electrokart.git
2. Enter the project folder:
   cd Electrokart
3. Install dependencies:
   npm install
   # or
   yarn
4. Start the dev server:
   npm run dev
   # or
   yarn dev
5. Open your browser on desktop at http://localhost:3000 (or the port your app uses)

Adjust commands to match your actual project scripts.

## Deployment
This project is hosted on Vercel: https://electro-kart-psi.vercel.app/
If you use Vercel for deployments, ensure your build settings, environment variables, and root directory are configured correctly in the Vercel dashboard.

## Contributing
- Please open issues for bugs or feature requests.
- Create pull requests against the main branch.
- Add clear descriptions and test steps for any change.

## Preview 

<img width="1914" height="1028" alt="image" src="https://github.com/user-attachments/assets/5caf3da7-7355-4b65-aeff-63c1a505f1e4" />


<img width="1919" height="978" alt="image" src="https://github.com/user-attachments/assets/3a6e1c80-8305-439b-88e6-182cd9c89ed0" />

<img width="1918" height="976" alt="image" src="https://github.com/user-attachments/assets/87f96459-3b19-47be-844f-da21a3831972" />

<img width="1919" height="978" alt="image" src="https://github.com/user-attachments/assets/5b3577e3-42ae-4b79-8e10-228f42ecaeec" />





<img width="1919" height="979" alt="image" src="https://github.com/user-attachments/assets/ecfa308f-5fa0-4375-8186-963d396033f5" />


<img width="1918" height="976" alt="image" src="https://github.com/user-attachments/assets/855327b2-e4d7-4bd2-8a91-d0122a47091e" />




## Contact
Repository owner: iamashwinishinde
