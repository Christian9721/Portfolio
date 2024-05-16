/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_fa887e8b.mjs';
import { $ as $$Base, c as config } from './404_57705144.mjs';
import { d as getEntryBySlug, $ as $$PageHeader } from './_category__bae937cd.mjs';
import 'clsx';
import 'html-escaper';
import 'github-slugger';
import 'marked';
import 'react/jsx-runtime';
import 'react';
import 'react-icons/fa6/index.js';
import 'react-icons/io5/index.js';
import '@material-tailwind/react';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_5113d99a.mjs';
import 'probe-image-size';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';
import 'react-icons/fa/index.js';
/* empty css                               */
const $$Astro = createAstro("https://astroplate.netlify.app");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const contact = await getEntryBySlug("contact", "-index");
  const { contact_form_action } = config.params;
  const { title, description, meta_title, image } = contact.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title })}${maybeRenderHead()}<section class="section-sm"><div class="container"><div class="row"><div class="mx-auto md:col-10 lg:col-6"><form${addAttribute(contact_form_action, "action")} method="POST"><div class="mb-6"><label for="name" class="form-label">
Full Name <span class="text-red-500">*</span></label><input id="name" name="name" class="form-input" placeholder="John Doe" type="text"></div><div class="mb-6"><label for="email" class="form-label">
Working Mail <span class="text-red-500">*</span></label><input id="email" name="email" class="form-input" placeholder="john.doe@email.com" type="email"></div><div class="mb-6"><label for="message" class="form-label">
Anything else? <span class="text-red-500">*</span></label><textarea id="message" name="message" class="form-input" placeholder="Message goes here..." rows="8"></textarea></div><button type="submit" class="btn btn-primary">Submit</button></form></div></div></div></section>` })}`;
}, "D:/Github/portafolio_cv/src/pages/contact.astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/contact.astro";
const $$url = "/contact.html";

export { $$Contact as default, $$file as file, $$url as url };
