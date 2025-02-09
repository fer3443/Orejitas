interface User {
  id?: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  role: "ADMIN" | "USER";
  createAt: Date;
  updateAt: Date;
}


export const initialData = {
  user: [
    {
      email: "fer3443@gmail.com",
      password: "1234Luna",
      name: "Fernando Arroyo",
      phone: "1234567890",
      role: "ADMIN"
    }
  ],
  pets: [
    {
      id: "1",
      name: "Max",
      specie: "dog",
      gender: "M",
      slug:"max-friendly-and-energetic-labrador-retriever",
      status: "adopción",
      description: "Friendly and energetic Labrador Retriever.",
      location: "New York, NY",
      petImage: ["/animal-0.jpg"]
    },
    {
      id: "2",
      name: "Luna",
      specie: "cat",
      gender: "F",
      slug:"luna-small-gray-tabby-cat-with-green-eyes",
      status: "perdido",
      description: "Small, gray tabby cat with green eyes.",
      location: "Los Angeles, CA",
      petImage: ["/cat-1.jpg"]
    },
    {
      id: "3",
      name: "Rocky",
      specie: "dog",
      gender: "M",
      slug:"rocky-golden-retriever-found-near-central-park",
      status: "encontrado",
      description: "Golden Retriever found near Central Park.",
      location: "New York, NY",
      petImage: ["/cat-2.jpg", "/cat-3.jpg"]
    },
    {
      id: "4",
      name: "Milo",
      specie: "cat",
      gender: "M",
      slug:"milo-playful-kitten-looking-for-a-loving-home",
      status: "adopción",
      description: "Playful kitten looking for a loving home.",
      location: "Chicago, IL",
      petImage: ["/cat-4.jpg"]
    },
    {
      id: "5",
      name: "Bella",
      specie: "dog",
      gender: "F",
      slug:"bella-poodle-mix-perdido-near-main-street",
      status: "perdido",
      description: "Poodle mix perdido near Main Street.",
      location: "Houston, TX",
      petImage: ["/dog-1.jpg"]
    },
    {
      id: "6",
      name: "Simba",
      specie: "cat",
      gender: "M",
      slug:"simba-orange-tabby-cat-found-in-downtown-area",
      status: "encontrado",
      description: "Orange tabby cat found in downtown area.",
      location: "San Francisco, CA",
      petImage: ["/dog-2.jpg"]
    },
    {
      id: "7",
      name: "Daisy",
      specie: "dog",
      gender: "F",
      slug:"daisy-sweet-beagle-in-need-of-a-new-home",
      status: "adopción",
      description: "Sweet beagle in need of a new home.",
      location: "Miami, FL",
      petImage: ["/dog-3.jpg"]
    },
    {
      id: "8",
      name: "Oscar",
      specie: "cat",
      gender: "M",
      slug:"oscar-black-and-white-cat-missing-since-monday",
      status: "perdido",
      description: "Black and white cat missing since Monday.",
      location: "Seattle, WA",
      petImage: ["/dog-4.jpg"]
    },
    {
      id: "9",
      name: "Charlie",
      specie: "dog",
      gender: "M",
      slug:"charlie-bulldog-found-in-the-park",
      status: "encontrado",
      description: "Bulldog found in the park.",
      location: "Boston, MA",
      petImage: ["/hamster-1.jpg"]
    },
    {
      id: "10",
      name: "Mochi",
      specie: "cat",
      gender: "F",
      slug:"mochi-fluffy-persian-cat-looking-for-a-new-home",
      status: "adopción",
      description: "Fluffy Persian cat looking for a new home.",
      location: "Las Vegas, NV",
      petImage: ["/cat-4.jpg"]
    },
    // 10 más para completar el array de 20 mascotas...
  ]
}

