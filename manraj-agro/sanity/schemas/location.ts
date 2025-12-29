import { defineField, defineType } from "sanity";

export default defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "address",
      type: "text",
      validation: (r) => r.required(),
    }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "whatsapp", type: "string" }),
    defineField({ name: "mapLink", type: "url" }),
    defineField({ name: "businessHours", type: "string" }),
  ],
});
