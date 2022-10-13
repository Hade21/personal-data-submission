import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataDiri } from "../../../features/dataSlices/dataSlices";
import { increment } from "../../../features/pageSlices/pageSlices";

export default function PersonalData() {
  const dispatch = useDispatch();
  const personalData = useSelector((state) => state.data.dataDiri);
  const [dataDiri, newDataDiri] = useState(personalData);
  const kewarganegaraan = ["WNI", "WNA"];
  const agama = ["Islam", "Kristen", "Katolik", "Hindu", "Budha", "Konghucu"];

  const handleChange = (e) => {
    let newData = { ...dataDiri };
    newData[e.target.name] = e.target.value;
    newDataDiri(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (let item in personalData) {
      if (personalData[item] === "") {
        return;
      }
    }
    dispatch(increment());
  };

  useEffect(() => {
    dispatch(setDataDiri(dataDiri));
  }, [dataDiri]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="nama">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              id="nama"
              onChange={handleChange}
              value={dataDiri.nama}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="ttl">Tempat, Tanggal Lahir</label>
            <input
              type="text"
              name="ttl"
              id="ttl"
              value={dataDiri.ttl}
              onChange={handleChange}
              //required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender">Jenis Kelamin</label>
            <select
              name="gender"
              id="gender"
              value={dataDiri.gender}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="kewarganegaraan">Kewarganegaraan</label>
            <select
              name="kewarganegaraan"
              id="kewarganegaraan"
              value={dataDiri.kewarganegaraan}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              {kewarganegaraan.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="agama">Agama</label>
            <select
              name="agama"
              id="agama"
              value={dataDiri.agama}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              {agama.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="alamat">Alamat</label>
            <textarea
              name="alamat"
              id="alamat"
              cols="30"
              rows="10"
              value={dataDiri.alamat}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={dataDiri.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="noHp">No. HP</label>
            <input
              type="tel"
              pattern="[0-9]{12}"
              name="noHp"
              id="noHp"
              value={dataDiri.noHp}
              onChange={handleChange}
              required
            />
          </div>
          <div className="buttons flex items-center justify-between gap-40">
            <button type="submit" disabled={false}>
              <span className="btn">Selanjutnya</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
