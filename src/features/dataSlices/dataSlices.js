import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataDiri: {
    nama: "",
    ttl: "",
    gender: "",
    agama: "",
    alamat: "",
    noHp: "",
    email: "",
    kewarganegaraan: "",
  },
  pendidikan: [
    {
      namaSekolah: "",
      jurusan: "",
      tahunMasuk: "",
      tahunLulus: "",
      kota: "",
    },
  ],
  pekerjaan: [
    {
      namaPerusahaan: "",
      jabatan: "",
      alamat: "",
      mulaiBekerja: "",
      selesaiBekerja: "",
      alasanBerhenti: "",
    },
  ],
  keahlian: [
    {
      namaKeahlian: "",
      tingkatKeahlian: "",
    },
  ],
};

export const dataSlices = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataDiri: (state, action) => {
      state.dataDiri = action.payload;
    },
    setPendidikan: (state, action) => {
      state.pendidikan = action.payload;
    },
    setPekerjaan: (state, action) => {
      state.pekerjaan = action.payload;
    },
    setKeahlian: (state, action) => {
      state.keahlian = action.payload;
    },
    setReset: (state) => {
      state.dataDiri = initialState.dataDiri;
      state.pendidikan = initialState.pendidikan;
      state.pekerjaan = initialState.pekerjaan;
      state.keahlian = initialState.keahlian;
    },
  },
});

export const {
  setDataDiri,
  setPendidikan,
  setPekerjaan,
  setKeahlian,
  setReset,
} = dataSlices.actions;

export default dataSlices.reducer;
