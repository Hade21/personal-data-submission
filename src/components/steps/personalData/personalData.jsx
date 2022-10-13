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
      <form onSubmit={handleSubmit} className="text-base">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="nama" className="text-sm">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
              onChange={handleChange}
              value={dataDiri.nama}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="ttl" className="text-sm sm:text-base">
              Tempat, Tanggal Lahir
            </label>
            <input
              type="text"
              name="ttl"
              id="ttl"
              className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
              value={dataDiri.ttl}
              onChange={handleChange}
              //required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="text-sm sm:text-base">
              Jenis Kelamin
            </label>
            <select
              name="gender"
              id="gender"
              className="rounded border-2 border-slate-300 bg-white px-4 py-2 focus:border-blue-300 focus:outline-none"
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
            <label htmlFor="kewarganegaraan" className="text-sm sm:text-base">
              Kewarganegaraan
            </label>
            <select
              name="kewarganegaraan"
              id="kewarganegaraan"
              className="rounded border-2 border-slate-300 bg-white px-4 py-2 focus:border-blue-300 focus:outline-none"
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
            <label htmlFor="agama" className="text-sm sm:text-base">
              Agama
            </label>
            <select
              name="agama"
              id="agama"
              className="rounded border-2 border-slate-300 bg-white px-4 py-2 focus:border-blue-300 focus:outline-none"
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
            <label htmlFor="alamat" className="text-sm sm:text-base">
              Alamat
            </label>
            <textarea
              name="alamat"
              id="alamat"
              cols="30"
              rows="3"
              className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
              value={dataDiri.alamat}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
              value={dataDiri.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="noHp" className="text-sm sm:text-base">
              No. HP
            </label>
            <input
              type="tel"
              pattern="[0-9]{12}"
              name="noHp"
              id="noHp"
              className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
              value={dataDiri.noHp}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button mt-16 self-center">
            <button type="submit" disabled={false}>
              <span className="btn">Selanjutnya</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
