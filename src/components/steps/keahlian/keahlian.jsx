import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setKeahlian, setReset } from "../../../features/dataSlices/dataSlices";
import { decrement } from "../../../features/pageSlices/pageSlices";
import { saveData } from "../../../utilities/utilities";

export default function Keahlian() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const keahlian = useSelector((state) => state.data.keahlian);
  const pendidikan = useSelector((state) => state.data.pendidikan);
  const pekerjaan = useSelector((state) => state.data.pekerjaan);
  const dataDiri = useSelector((state) => state.data.dataDiri);
  const [listKeahlian, setListKeahlian] = useState(keahlian);

  const handleMore = () => {
    setListKeahlian([
      ...keahlian,
      {
        namaKeahlian: "",
        tingkatKeahlian: "",
      },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { dataDiri, pendidikan, pekerjaan, keahlian };
    const id = saveData(data);
    dispatch(setReset());
    navigate("/");
  };
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    let list = [...keahlian];
    list[index] = { ...list[index], [name]: value };
    setListKeahlian(list);
    console.log(list);
  };

  useEffect(() => {
    dispatch(setKeahlian(listKeahlian));
  }, [listKeahlian]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-14">
        <div className="data flex flex-col gap-14">
          {listKeahlian.map((item, index) => {
            return (
              <div
                key={index}
                className="wrapper flex flex-col gap-2 rounded bg-white p-4 text-xl"
              >
                <div className="flex flex-col">
                  <label htmlFor="namaKeahlian" className="text-sm sm:text-xl">
                    Skill
                  </label>
                  <input
                    type="text"
                    name="namaKeahlian"
                    id="namaKeahlian"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.namaKeahlian}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="tingkatKeahlian"
                    className="text-sm sm:text-xl"
                  >
                    Tingkat Kemahiran
                  </label>
                  <select
                    name="tingkatKeahlian"
                    id="tingkatKEahlian"
                    className="rounded border-2 border-slate-300 bg-white px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.tingkatKeahlian}
                    onChange={(e) => handleChange(e, index)}
                    required
                  >
                    <option value=""></option>
                    <option value="Pemula">Pemula</option>
                    <option value="Menengah">Menengah</option>
                    <option value="Mahir">Mahir</option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white sm:text-xl"
            onClick={handleMore}
          >
            Tambah Keahlian
          </button>
        </div>
        <div className="buttons flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="prev">
            <button
              type="button"
              disabled={false}
              onClick={() => dispatch(decrement())}
            >
              <span className="btn">Sebelumnya</span>
            </button>
          </div>
          <div className="next">
            <button type="submit" disabled={false}>
              <span className="btn">Simpan</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
