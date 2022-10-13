import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPekerjaan } from "../../../features/dataSlices/dataSlices";
import { increment, decrement } from "../../../features/pageSlices/pageSlices";

export default function RiwayatPekerjaan() {
  const dispatch = useDispatch();
  const pekerjaan = useSelector((state) => state.data.pekerjaan);
  const [riwayatPekerjaan, setRiwayatPekerjaan] = useState(pekerjaan);

  const handleMore = () => {
    setRiwayatPekerjaan([
      ...riwayatPekerjaan,
      {
        namaPerusahaan: "",
        jabatan: "",
        alamat: "",
        mulaiBekerja: "",
        selesaiBekerja: "",
        alasanBerhenti: "",
      },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let completed = true;
    for (const item in pekerjaan) {
      for (const i in pekerjaan[item]) {
        if (pekerjaan[item][i] === "") {
          completed = false;
        }
      }
    }
    completed && dispatch(increment());
  };
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    let list = [...riwayatPekerjaan];
    list[index] = { ...list[index], [name]: value };
    setRiwayatPekerjaan(list);
  };

  useEffect(() => {
    dispatch(setPekerjaan(riwayatPekerjaan));
  }, [riwayatPekerjaan]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="data">
          {riwayatPekerjaan.map((item, index) => {
            return (
              <div key={index} className="wrapper">
                <div className="flex flex-col">
                  <label htmlFor="namaPerusahaan">Nama Perusahaan</label>
                  <input
                    type="text"
                    name="namaPerusahaan"
                    id="namaPerusahaan"
                    value={item.namaPerusahaan}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="jabatan">Jabatan</label>
                  <input
                    type="text"
                    name="jabatan"
                    id="jabatan"
                    value={item.jabatan}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="alamat">Alamat</label>
                  <input
                    type="text"
                    name="alamat"
                    id="alamat"
                    value={item.alamat}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="mulaiBekerja">Mulai Bekerja</label>
                  <input
                    type="date"
                    name="mulaiBekerja"
                    id="mulaiBekerja"
                    value={item.mulaiBekerja}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="selesaiBekerja">Selesai Bekerja</label>
                  <input
                    type="date"
                    name="selesaiBekerja"
                    id="selesaiBekerja"
                    value={item.selesaiBekerja}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="alasanBerhenti">Alasan Berhenti</label>
                  <input
                    type="text"
                    name="alasanBerhenti"
                    id="alasanBerhenti"
                    value={item.alasanBerhenti}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="add">
          <button type="button" onClick={handleMore}>
            Tambah Riwayat Pekerjaan
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
            <button type="submit">
              <span className="btn">Selanjutnya</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
