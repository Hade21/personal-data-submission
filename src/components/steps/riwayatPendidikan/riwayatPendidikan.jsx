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
      <form onSubmit={handleSubmit}>
        <div className="data">
          {riwayatPendidikan.map((item, index) => {
            return (
              <div key={index} className="wrapper">
                <div className="flex flex-col">
                  <label htmlFor="namaSekolah">Nama Sekolah</label>
                  <input
                    type="text"
                    name="namaSekolah"
                    id="namaSekolah"
                    value={item.namaSekolah}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="jurusan">Jurusan</label>
                  <input
                    type="text"
                    name="jurusan"
                    id="jurusan"
                    value={item.jurusan}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="tahunMasuk">Tahun Masuk</label>
                  <input
                    type="date"
                    name="tahunMasuk"
                    id="tahunMasuk"
                    value={item.tahunMasuk}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="tahunLulus">Tahun Lulus</label>
                  <input
                    type="date"
                    name="tahunLulus"
                    id="tahunLulus"
                    value={item.tahunLulus}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="kota">Kota</label>
                  <input
                    type="text"
                    name="kota"
                    id="kota"
                    value={item.kota}
                    onChange={(e) => handleChange(e, index)}
                    required
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="addMore">
          <button type="button" className="" onClick={handleMore}>
            Tambah Riwayat Pendidikan
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
              <span className="btn">Selanjutnya</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
