import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "lrkun2mu",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skVoeLyekO8ufG9rLfLV9hvIxhkDHfiDyUxw0nBA8zoLNMRnxbpr9VYBh461JCsgaa576PLB7rBVyLKdMUtTPLrErV5W0qjJ2ItIbbBx6PDYlCxGBK4XagaYH8FCM9L0sZZvn64vrXiXYS1iGKJ66eazhZe4LBDeUvlooJL5NFmnrrjAjwEx"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) =>{ return  builder.image(source) };
