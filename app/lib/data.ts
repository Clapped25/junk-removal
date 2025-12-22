export type Barber = {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  nextAvailableInMin: number; // mock: minutes until available
  status: "available" | "busy" | "break";
};

export type Service = {
  id: string;
  name: string;
  durationMin: number;
  price: number;
  description: string;
};

export const SHOP = {
  name: "Fenfen’s Barbershop",
  address: "509 Main St, Malden, MA 02148",
  phoneDisplay: "(781) 480-3913",
  phoneTel: "17814803913",
};

export const SERVICES: Service[] = [
  { id: "cut", name: "Haircut", durationMin: 30, price: 30, description: "Clean cut, finished with lineup." },
  { id: "fade", name: "Fade + Lineup", durationMin: 40, price: 40, description: "Skin/low/mid/high fade with detail." },
  { id: "beard", name: "Beard Trim", durationMin: 20, price: 20, description: "Shape, trim, and clean edges." },
  { id: "combo", name: "Cut + Beard", durationMin: 55, price: 55, description: "Full service combo — most popular." },
  { id: "kids", name: "Kids Cut", durationMin: 25, price: 25, description: "Patient, clean cuts for kids." },
  { id: "shave", name: "Hot Towel Shave", durationMin: 30, price: 35, description: "Classic shave with hot towel." },
];

export const BARBERS: Barber[] = [
  { id: "fenfen", name: "Fenfen", title: "Master Barber", specialties: ["Fades", "Lineups", "Beards"], rating: 4.9, nextAvailableInMin: 10, status: "busy" },
  { id: "jay", name: "Jay", title: "Barber", specialties: ["Tapers", "Curls", "Kids"], rating: 4.7, nextAvailableInMin: 0, status: "available" },
  { id: "mike", name: "Mike", title: "Senior Barber", specialties: ["Scissor cuts", "Beards", "Hot towel"], rating: 4.8, nextAvailableInMin: 25, status: "busy" },
  { id: "sam", name: "Sam", title: "Barber", specialties: ["Fades", "Designs"], rating: 4.6, nextAvailableInMin: 45, status: "break" },
];
