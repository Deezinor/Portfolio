import { readdirSync } from "fs";
import { join } from "path";

export async function handler() {
  try {
    const imageDir = join(__dirname, "../../public/images");
    const files = readdirSync(imageDir);

    const images = files.map((file) => {
      return `/images/${file}`;
    }); // Generate full image paths

    return {
      statusCode: 200,
      body: JSON.stringify({ images }),
    };
  } catch (error) {
    console.error("Error reading image directory:", error); // Log for debugging
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to retrieve images." }),
    };
  }
}
