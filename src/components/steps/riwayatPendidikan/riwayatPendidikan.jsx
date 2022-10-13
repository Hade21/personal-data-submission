import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPendidikan } from "../../../features/dataSlices/dataSlices";
import { decrement, increment } from "../../../features/pageSlices/pageSlices";

export default function RiwayatPendidikan() {
  const dispatch = useDispatch();
  const pendidikan = useSelector((state) => state.data.pendidikan);
  const [riwayatPendidikan, setRiwayatPendidikan] = useState(pendidikan);

  const handleMore = () => {
    setRiwayatPendidikan([
      ...riwayatPendidikan,
      {
        namaSekolah: "",
        jurusan: "",
        tahunMasuk: "",
        tahunLulus: "",
        kota: "",
      },
    ]);
  };
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    let list = [...riwayatPendidikan];
    list[index] = { ...list[index], [name]: value };
    setRiwayatPendidikan(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let completed = true;
    for (const item in pendidikan) {
      for (const i in pendidikan[item]) {
        if (pendidikan[item][i] === "") {
          completed = false;
        }
      }
    }
    completed && dispatch(increment());
  };

  useEffect(() => {
    dispatch(setPendidikan(riwayatPendidikan));
  }, [riwayatPendidikan]);
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="data flex flex-col gap-14 text-base">
          {riwayatPendidikan.map((item, index) => {
            return (
              <div
                key={index}
                className="wrapper flex flex-col gap-3 rounded bg-white p-4"
              >
                <div className="flex flex-col">
                  <label htmlFor="namaSekolah">Nama Sekolah</label>
                  <input
                    type="text"
                    name="namaSekolah"
                    id="namaSekolah"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.namaSekolah}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="jurusan" className="text-sm sm:text-base">
                    Jurusan
                  </label>
                  <input
                    type="text"
                    name="jurusan"
                    id="jurusan"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.jurusan}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="tahunMasuk" className="text-sm sm:text-base">
                    Tahun Masuk
                  </label>
                  <input
                    type="date"
                    name="tahunMasuk"
                    id="tahunMasuk"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.tahunMasuk}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="tahunLulus" className="text-sm sm:text-base">
                    Tahun Lulus
                  </label>
                  <input
                    type="date"
                    name="tahunLulus"
                    id="tahunLulus"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.tahunLulus}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="kota" className="text-sm sm:text-base">
                    Kota
                  </label>
                  <input
                    type="text"
                    name="kota"
                    id="kota"
                    className="rounded border-2 border-slate-300 px-4 py-2 focus:border-blue-300 focus:outline-none"
                    value={item.kota}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="addMore self-end">
          <button
            type="button"
            className="rounded bg-blue-500 px-4 py-2 font-medium text-white"
            onClick={handleMore}
          >
            Tambah Riwayat Pendidikan
          </button>
        </div>
        <div className="buttons mt-8 flex flex-col items-center justify-between gap-8 sm:flex-row">
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
              <span className="btn">Selanjutnya</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
