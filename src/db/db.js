import { Dexie } from "dexie";

export const db = new Dexie("data-member");
db.version(1).stores({
  member: "++id, personalData, pendidikan, pekerjaan, keahlian",
});
