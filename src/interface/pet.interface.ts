export interface Pet {
  // id: string;
  name: string;
  specie: string; // 'dog' or 'cat'
  gender: string; // 'M', 'F', 'O'
  slug:string;
  status: string; // 'adoption', 'lost', 'found'
  description: string;
  location: string;
  // userId: string;
  // createdAt: Date;
  // updatedAt: Date;
  petImage: string[];
}

export type Species = "dog" | "cat";
export type Gender = "M" | "F" | "O";