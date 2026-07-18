// SZA album and single cover art sourced from iTunes/Apple Music artwork
// SZA portrait photos and avatar sourced from Tumblr
const ART = (path: string) => `https://is1-ssl.mzstatic.com/image/thumb/${path}/600x600bb.jpg`;

export const GalleryData = [
  // SOS album cover
  { name: "SOS", link: ART("Music122/v4/62/93/13/6293132e-20ff-67ab-3d1f-96bb6797a6ba/196589564955.jpg") },
  // Ctrl album cover
  { name: "Ctrl", link: ART("Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg") },
  // SOS Deluxe: LANA
  { name: "Lana", link: ART("Music221/v4/50/fa/17/50fa1760-8a36-5cef-93bf-aab5b5257b18/196871766913.jpg") },
  // Good Days single
  { name: "Good Days", link: ART("Music115/v4/0e/5c/6e/0e5c6e76-928a-bb8c-ec7d-b323f6079f67/886449007394.jpg") },
  // Hit Different single
  { name: "Hit Different", link: ART("Music124/v4/84/21/a6/8421a698-bfaa-62c5-3a21-eec3a7cb6a72/886448745631.jpg") },
  // Saturn single
  { name: "Saturn", link: ART("Music112/v4/0f/90/a8/0f90a856-0447-d846-fa7b-b9c937e72310/196871881180.jpg") },
  // The Weekend (Funk Wav Remix)
  { name: "The Weekend", link: ART("Music124/v4/75/73/39/75733929-5ce0-234e-6861-0e3932fa342a/886446852157.jpg") },
  // SZA portrait photos (Tumblr)
  {
    name: "Portrait I",
    link: "https://64.media.tumblr.com/7c1939b489b799791b5544212b38626a/c879481cb32517f5-5c/s1280x1920/632becaae8d26cc2f8f47413cb8fd8d4fc1f39b8.jpg",
  },
  {
    name: "Portrait II",
    link: "https://64.media.tumblr.com/88553d4d3c42aec1432314c7faa44096/c879481cb32517f5-24/s1280x1920/a13f8cedeb43033dfbbb63cfc0bf321ea53db4dc.jpg",
  },
  {
    name: "Portrait III",
    link: "https://64.media.tumblr.com/771f9a797666ae42d9b3cd74c446e87d/c879481cb32517f5-cf/s1280x1920/92e1a13de1d55f339941a0c658ef3e8bca5e284c.jpg",
  },
  // SZA photos (Pinterest)
  { name: "Mood I", link: "https://i.pinimg.com/1200x/3c/65/c6/3c65c6de5c673fd20ef15bdb48c0a08e.jpg" },
  { name: "Mood II", link: "https://i.pinimg.com/736x/a0/e1/81/a0e18173b72429090114044930127f7d.jpg" },
  { name: "Mood III", link: "https://i.pinimg.com/736x/b0/95/3c/b0953cba16ba29e3bfb7ff5f8b2ac9df.jpg" },
  { name: "Mood IV", link: "https://i.pinimg.com/736x/4a/39/5f/4a395fa91b855d1ee5a043bdca046be7.jpg" },
  { name: "Mood V", link: "https://i.pinimg.com/736x/97/75/38/97753882fce9628e29f1c12a9fc3cb48.jpg" },
  // Repeat covers to fill the gallery grid (33 items total)
  { name: "SOS", link: ART("Music122/v4/62/93/13/6293132e-20ff-67ab-3d1f-96bb6797a6ba/196589564955.jpg") },
  { name: "Ctrl", link: ART("Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg") },
  { name: "Lana", link: ART("Music221/v4/50/fa/17/50fa1760-8a36-5cef-93bf-aab5b5257b18/196871766913.jpg") },
  { name: "Good Days", link: ART("Music115/v4/0e/5c/6e/0e5c6e76-928a-bb8c-ec7d-b323f6079f67/886449007394.jpg") },
  { name: "Hit Different", link: ART("Music124/v4/84/21/a6/8421a698-bfaa-62c5-3a21-eec3a7cb6a72/886448745631.jpg") },
  { name: "Saturn", link: ART("Music112/v4/0f/90/a8/0f90a856-0447-d846-fa7b-b9c937e72310/196871881180.jpg") },
  { name: "The Weekend", link: ART("Music124/v4/75/73/39/75733929-5ce0-234e-6861-0e3932fa342a/886446852157.jpg") },
  {
    name: "Portrait I",
    link: "https://64.media.tumblr.com/7c1939b489b799791b5544212b38626a/c879481cb32517f5-5c/s1280x1920/632becaae8d26cc2f8f47413cb8fd8d4fc1f39b8.jpg",
  },
  {
    name: "Portrait II",
    link: "https://64.media.tumblr.com/88553d4d3c42aec1432314c7faa44096/c879481cb32517f5-24/s1280x1920/a13f8cedeb43033dfbbb63cfc0bf321ea53db4dc.jpg",
  },
  {
    name: "Portrait III",
    link: "https://64.media.tumblr.com/771f9a797666ae42d9b3cd74c446e87d/c879481cb32517f5-cf/s1280x1920/92e1a13de1d55f339941a0c658ef3e8bca5e284c.jpg",
  },
  { name: "SOS", link: ART("Music122/v4/62/93/13/6293132e-20ff-67ab-3d1f-96bb6797a6ba/196589564955.jpg") },
  { name: "Ctrl", link: ART("Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg") },
  { name: "Lana", link: ART("Music221/v4/50/fa/17/50fa1760-8a36-5cef-93bf-aab5b5257b18/196871766913.jpg") },
  { name: "Good Days", link: ART("Music115/v4/0e/5c/6e/0e5c6e76-928a-bb8c-ec7d-b323f6079f67/886449007394.jpg") },
  { name: "Hit Different", link: ART("Music124/v4/84/21/a6/8421a698-bfaa-62c5-3a21-eec3a7cb6a72/886448745631.jpg") },
  { name: "Saturn", link: ART("Music112/v4/0f/90/a8/0f90a856-0447-d846-fa7b-b9c937e72310/196871881180.jpg") },
  { name: "The Weekend", link: ART("Music124/v4/75/73/39/75733929-5ce0-234e-6861-0e3932fa342a/886446852157.jpg") },
  {
    name: "Portrait I",
    link: "https://64.media.tumblr.com/7c1939b489b799791b5544212b38626a/c879481cb32517f5-5c/s1280x1920/632becaae8d26cc2f8f47413cb8fd8d4fc1f39b8.jpg",
  },
  {
    name: "Portrait II",
    link: "https://64.media.tumblr.com/88553d4d3c42aec1432314c7faa44096/c879481cb32517f5-24/s1280x1920/a13f8cedeb43033dfbbb63cfc0bf321ea53db4dc.jpg",
  },
  {
    name: "Portrait III",
    link: "https://64.media.tumblr.com/771f9a797666ae42d9b3cd74c446e87d/c879481cb32517f5-cf/s1280x1920/92e1a13de1d55f339941a0c658ef3e8bca5e284c.jpg",
  },
  { name: "SOS", link: ART("Music122/v4/62/93/13/6293132e-20ff-67ab-3d1f-96bb6797a6ba/196589564955.jpg") },
  { name: "Ctrl", link: ART("Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg") },
  { name: "Lana", link: ART("Music221/v4/50/fa/17/50fa1760-8a36-5cef-93bf-aab5b5257b18/196871766913.jpg") },
  { name: "Good Days", link: ART("Music115/v4/0e/5c/6e/0e5c6e76-928a-bb8c-ec7d-b323f6079f67/886449007394.jpg") },
  { name: "Hit Different", link: ART("Music124/v4/84/21/a6/8421a698-bfaa-62c5-3a21-eec3a7cb6a72/886448745631.jpg") },
  { name: "Saturn", link: ART("Music112/v4/0f/90/a8/0f90a856-0447-d846-fa7b-b9c937e72310/196871881180.jpg") },
];
