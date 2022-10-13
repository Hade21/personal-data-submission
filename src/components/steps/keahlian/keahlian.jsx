import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKeahlian, setReset } from "../../../features/dataSlices/dataSlices";
import { decrement } from "../../../features/pageSlices/pageSlices";
import { saveData } from "../../../utilities/utilities";

export default function Keahlian() {
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
    if (id) {
      dispatch(setReset());
    }
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
      <form onSubmit={handleSubmit}>
        <div className="data">
          {listKeahlian.map((item, index) => {
            return (
              <div key={index} className="wrapper">
                <div className="flex flex-col">
                  <label htmlFor="namaKeahlian">Skill</label>
                  <input
                    type="text"
                    name="namaKeahlian"
                    id="namaKeahlian"
                    value={item.namaKeahlian}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="tingkatKeahlian">Tingkat Kemahiran</label>
                  <select
                    name="tingkatKeahlian"
                    id="tingkatKEahlian"
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
          <button type="button" onClick={handleMore}>
            Tambah Keahlian
          </button>
        </div>
        <div className="buttons flex items-center justify-between gap-40">
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
