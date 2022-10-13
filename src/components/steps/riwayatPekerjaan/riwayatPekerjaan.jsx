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
      <form onSubmit={handleSubmit} className="flex flex-col gap-14">
        <div className="data flex flex-col gap-12">
          {riwayatPekerjaan.map((item, index) => {
            return (
              <div
                key={index}
                className="wrapper flex w-full flex-col gap-3 rounded bg-white p-4"
              >
                <div className="flex flex-col">
                  <label
                    htmlFor="namaPerusahaan"
                    className="text-base sm:text-sm"
                  >
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    name="namaPerusahaan"
                    id="namaPerusahaan"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.namaPerusahaan}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="jabatan" className="text-base sm:text-sm">
                    Jabatan
                  </label>
                  <input
                    type="text"
                    name="jabatan"
                    id="jabatan"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.jabatan}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="alamat" className="text-base sm:text-sm">
                    Alamat
                  </label>
                  <input
                    type="text"
                    name="alamat"
                    id="alamat"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.alamat}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="mulaiBekerja"
                    className="text-base sm:text-sm"
                  >
                    Mulai Bekerja
                  </label>
                  <input
                    type="date"
                    name="mulaiBekerja"
                    id="mulaiBekerja"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.mulaiBekerja}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="selesaiBekerja"
                    className="text-base sm:text-sm"
                  >
                    Selesai Bekerja
                  </label>
                  <input
                    type="date"
                    name="selesaiBekerja"
                    id="selesaiBekerja"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.selesaiBekerja}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="alasanBerhenti"
                    className="text-base sm:text-sm"
                  >
                    Alasan Berhenti
                  </label>
                  <input
                    type="text"
                    name="alasanBerhenti"
                    id="alasanBerhenti"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.alasanBerhenti}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="add self-end">
          <button
            type="button"
            className="rounded bg-blue-500 px-4 py-2 font-medium text-white"
            onClick={handleMore}
          >
            Tambah Riwayat Pekerjaan
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
            <button type="submit">
              <span className="btn">Selanjutnya</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
