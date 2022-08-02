import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "rkkjb34o",
  dataset: "production",
  apiVersion: "2022-07-30",
  useCdn: true,
  token:
    "skRbwLIuCVsPSx6UIJJTPRUFA4eP5isIBbvuJIX70HydF3S2n85ni445pmf0eiYU11TXG4h8jxFDnzNniACtrZh3e3Qd1WZvArGbk2iVTKY7REdlFDsIMS9EjoxJcwOB6e7kNCPbAtA2eLnENGRK8qarNPg76q3EbqfKX7CoAVpsL6Tsik8o",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
