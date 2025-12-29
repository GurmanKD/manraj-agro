import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (r) => r.required(),
    }),
    defineField({ name: "brand", type: "string" }),
    defineField({
      name: "priceType",
      type: "string",
      options: {
        list: [
          { title: "Get latest price", value: "latest" },
          { title: "Fixed price", value: "fixed" },
        ],
      },
      initialValue: "latest",
    }),
    defineField({
      name: "price",
      type: "number",
      hidden: ({ parent }) => parent?.priceType !== "fixed",
    }),
    defineField({
      name: "highlights",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.max(8),
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "specs",
      title: "Specs (key-value)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "k", title: "Key", type: "string" }),
            defineField({ name: "v", title: "Value", type: "string" }),
          ],
        },
      ],
    }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "seoTitle", type: "string" }),
    defineField({ name: "seoDescription", type: "text" }),
  ],
});
