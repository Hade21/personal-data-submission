import { db } from "../db/db";
import { useLiveQuery } from "dexie-react-hooks";

export function saveData(data) {
  if (data) {
    db.member
      .add({
        personalData: data.dataDiri,
        pendidikan: data.pendidikan,
        pekerjaan: data.pekerjaan,
        keahlian: data.keahlian,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
}

export function getData() {
  const data = useLiveQuery(() => db.member.toArray());
  return data;
}

export function getDataById(id) {
  const dataID = Number(id);
  const data = useLiveQuery(() => db.member.get(dataID));
  return data;
}
