import z from 'zod';

const tourSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
});
const tourSchemas = z.array(tourSchema);
const url = 'https://www.course-api.com/react-tours-project';

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = tourSchemas.safeParse(data);

    if (result.success) {
      return result.data;
    } else {
      throw new Error(`Invalid data: ${result.error}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function main() {
  const tours = await fetchData(url);
  console.log(tours);
}

main();