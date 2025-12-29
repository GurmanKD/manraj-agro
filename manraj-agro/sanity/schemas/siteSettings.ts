import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      type: "string",
      initialValue: "Manraj Agro Industries",
    }),
    defineField({ name: "gst", type: "string" }),
    defineField({ name: "primaryPhone", type: "string" }),
    defineField({ name: "primaryWhatsapp", type: "string" }),
    defineField({ name: "primaryEmail", type: "string" }),
  ],
});
