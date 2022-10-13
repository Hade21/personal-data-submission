import { useParams } from "react-router-dom";
import { getDataById } from "../../utilities/utilities";

export const Detail = () => {
  const { id } = useParams();
  const data = getDataById(id);
  console.log(data, id);
  return (
    <main className="flex w-full flex-col gap-14 py-14">
      <h1 className="text-center text-2xl font-bold sm:text-4xl">
        Detail Member
      </h1>
      {data && (
        <div className="content mx-auto flex flex-col gap-14 px-4 sm:w-5/6">
          <div className="Biodata flex flex-col gap-3">
            <h3 className="text-xl font-semibold sm:text-2xl">Biodata</h3>
            <table id="data-diri">
              <tbody className="">
                <tr>
                  <th className="text-left text-sm font-medium sm:text-xl">
                    Nama
                  </th>
                  <td className="text-sm sm:text-xl">
                    : {data.personalData.nama}
                  </td>
                </tr>
                <tr>
                  <th className="text-left text-sm font-medium sm:text-xl">
                    Email
                  </th>
                  <td className="text-sm sm:text-xl">
                    : {data.personalData.email}
                  </td>
                </tr>
                <tr>
                  <th className="text-left text-sm font-medium sm:text-xl">
                    No. HP
                  </th>
                  <td className="text-sm sm:text-xl">
                    : {data.personalData.noHp}
                  </td>
                </tr>
                <tr>
                  <th className="text-left text-sm font-medium sm:text-xl">
                    Alamat
                  </th>
                  <td className="text-sm sm:text-xl">
                    : {data.personalData.alamat}
                  </td>
                </tr>
                <tr>
                  <th className="text-left text-sm font-medium sm:text-xl">
                    Tempat Lahir
                  </th>
                  <td className="text-sm sm:text-xl">
                    : {data.personalData.ttl.split("/")[0]}
                  </td>
                </tr>
                <tr>
                  <th className="text-left text-sm font-medium sm:text-xl">
                    Tanggal Lahir
                  </th>
                  <td className="text-sm sm:text-xl">
                    : {data.personalData.ttl.split("/")[1]}
                  </td>
                </tr>
                <tr>
                  <th className="text-left text-sm font-medium sm:text-xl">
                    Jenis Kelamin
                  </th>
                  <td className="text-sm sm:text-xl">
                    : {data.personalData.gender}
                  </td>
                </tr>
                <tr>
                  <th className="text-left text-sm font-medium sm:text-xl">
                    Agama
                  </th>
                  <td className="text-sm sm:text-xl">
                    : {data.personalData.agama}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pendidikan">
            <h3 className="text-xl font-semibold sm:text-2xl">Pendidikan</h3>
            <div className="mt-3 table">
              <table className="w-full overflow-x-scroll">
                <thead>
                  <tr className="bg-sky-200">
                    <th className="border-r border-l border-r-white border-l-sky-200 p-1 text-sm sm:text-xl">
                      No.
                    </th>
                    <th className="border-x border-white p-1 text-sm sm:text-xl">
                      Nama Sekolah
                    </th>
                    <th className="border-x border-white p-1 text-sm sm:text-xl">
                      Mulai
                    </th>
                    <th className="border-x border-white p-1 text-sm sm:text-xl">
                      Selesai
                    </th>
                    <th className="border-x border-white p-1 text-sm sm:text-xl">
                      Jurusan
                    </th>
                    <th className="border-l border-r border-r-sky-200 border-l-white p-1 text-sm sm:text-xl">
                      Kota
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.pendidikan.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="border border-sky-200 p-3 text-right text-sm sm:p-2 sm:text-xl">
                          {index + 1}
                        </td>
                        <td className="border border-sky-200 p-3 text-sm sm:p-2 sm:text-xl">
                          {item.namaSekolah}
                        </td>
                        <td className="border border-sky-200 p-3 text-sm sm:p-2 sm:text-xl">
                          {item.tahunMasuk}
                        </td>
                        <td className="border border-sky-200 p-3 text-sm sm:p-2 sm:text-xl">
                          {item.tahunLulus}
                        </td>
                        <td className="border border-sky-200 p-3 text-sm sm:p-2 sm:text-xl">
                          {item.jurusan}
                        </td>
                        <td className="border border-sky-200 p-3 text-sm sm:p-2 sm:text-xl">
                          {item.kota}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="pekerjaan">
            <h3 className="text-xl font-medium sm:text-2xl">Pekerjaan</h3>
            <div className="mt-3 table">
              {data.pekerjaan.map((item, index) => {
                return (
                  <table key={index}>
                    <tbody>
                      <tr>
                        <th className="p-1 text-left text-sm font-medium sm:text-xl">
                          Nama Perusahaan
                        </th>
                        <td className="text-sm sm:text-xl">
                          : {item.namaPerusahaan}
                        </td>
                      </tr>
                      <tr>
                        <th className="p-1 text-left text-sm font-medium sm:text-xl">
                          Posisi
                        </th>
                        <td className="text-sm sm:text-xl">: {item.jabatan}</td>
                      </tr>
                      <tr>
                        <th className="p-1 text-left text-sm font-medium sm:text-xl">
                          Mulai
                        </th>
                        <td className="text-sm sm:text-xl">
                          : {item.mulaiBekerja}
                        </td>
                      </tr>
                      <tr>
                        <th className="p-1 text-left text-sm font-medium sm:text-xl">
                          Sampai
                        </th>
                        <td className="text-sm sm:text-xl">
                          : {item.selesaiBekerja}
                        </td>
                      </tr>
                      <tr>
                        <th className="p-1 text-left text-sm font-medium sm:text-xl">
                          Alasan berhenti
                        </th>
                        <td className="text-sm sm:text-xl">
                          : {item.alasanBerhenti}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
            </div>
          </div>
          <div className="keahlian">
            <h3 className="text-xl font-medium sm:text-2xl">Keahlian</h3>
            <div className="mt-3 table">
              <table>
                <thead>
                  <tr className="bg-sky-200">
                    <th className="border- border-r border-r-white border-l-sky-200 p-2 text-sm sm:p-4 sm:text-xl">
                      No.
                    </th>
                    <th className="border-x border-x-white p-2 text-sm sm:p-4 sm:text-xl">
                      Nama Keahlian
                    </th>
                    <th className="border-l border-r border-l-white border-r-sky-200 p-2 text-sm sm:p-4 sm:text-xl">
                      Kemahiran
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.keahlian.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="border border-sky-200 p-2 text-right text-sm sm:p-4 sm:text-xl">
                          {index + 1}
                        </td>
                        <td className="border border-sky-200 p-2 text-sm sm:p-4 sm:text-xl">
                          {item.namaKeahlian}
                        </td>
                        <td className="border border-sky-200 p-2 text-sm sm:p-4 sm:text-xl">
                          {item.tingkatKeahlian}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {!data && (
        <div className="content text-center text-xl">
          <h3>Data tidak ditemukan</h3>
        </div>
      )}
    </main>
  );
};
