import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: "fmng2m4i",
  dataset:"production",
  apiVersion:   '2024-01-01',
  useCdn: false,
  token: "skopeAhxjLBADFl96a17ViX8nuqU1v2N6XVgEXBzZXLvMyo8LQF9w1TeotDvix4lYLjaVIZA4vqfxGmM22qNpc4mKelw8WaYZo1uCZsYXiw35HWDmma739z5nOlpvlfc0IrYfmy9mOyvgIu7wqHwbQljbWl0hCy4Lq7Hsu0r15y7gmETlxty"
});