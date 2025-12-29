import { groq } from "next-sanity";

export const qAllCategories = groq`
*[_type=="category"] | order(order asc){
  _id,
  title,
  "slug": slug.current,
  description
}
`;
