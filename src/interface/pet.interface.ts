export interface Pet {
  id?: string;
  name: string;
  age:string;
  specie: Species; // 'dog' or 'cat'
  gender: Gender; // 'M', 'F', 'O'
  slug:string;
  status: string; // 'adoption', 'lost', 'found'
  description: string;
  location: string;
  // userId: string;
  // createdAt: Date;
  // updatedAt: Date;
  petImage: string[];
}

export type Species = "dog" | "cat" | "other";
export type Gender = "M" | "F" | "O";