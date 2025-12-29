import { groq } from "next-sanity";

export const qFeaturedProducts = groq`
*[_type=="product" && featured==true] | order(_createdAt desc)[0..7]{
  _id, title, "slug": slug.current, brand, priceType, price,
  "category": category->{"title": title, "slug": slug.current},
  images[0]
}
`;

export const qAllCategories = groq`
*[_type=="category"] | order(order asc, title asc){
  _id, title, "slug": slug.current, description
}
`;

export const qProductsByCategorySlug = groq`
*[_type=="product" && category->slug.current == $cat]
| order(featured desc, title asc){
  _id, title, "slug": slug.current, brand, priceType, price,
  "category": category->{"title": title, "slug": slug.current},
  images[0], highlights
}
`;

export const qProductBySlug = groq`
*[_type=="product" && slug.current == $slug][0]{
  _id, title, brand, priceType, price,
  "slug": slug.current,
  "category": category->{"title": title, "slug": slug.current},
  images, highlights, specs, seoTitle, seoDescription
}
`;

export const qLocations = groq`
*[_type=="location"] | order(name asc){
  _id, name, address, phone, whatsapp, mapLink, businessHours
}
`;
