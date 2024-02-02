import { Placeholder } from "react-select/animated";

export const dataForm = [
  {
    title: "Nama Lengkap Siswa",
    type: "text",
    placeholder: "Masukan Nama Lengkap Kamu",
    isDisable: false,
    fieldApi: "pendaftarNama",
  },
  {
    title: "No. Handphone",
    type: "number",
    placeholder: "Masukan No. Hp Kamu",
    isDisable: false,
    fieldApi: "pendaftarTelepon",
    icon: "+62",
  },
  {
    title: "E-mail (Pastikan E-mail kamu aktif dan benar)",
    type: "email",
    placeholder: "Masukan E-mail Kamu",
    isDisable: false,
    fieldApi: "pendaftarEmail",
  },
  {
    title: "Outlet",
    type: "string",
    placeholder: "Masukan Asal Sekolah Kamu",
    isDisable: false,
    fieldApi: "pendaftarAsalSekolah",
  },
  {
    title: "Kota",
    type: "string",
    placeholder: "",
    default: "Pekanbaru",
    isDisable: true,
    fieldApi: "",
  },
  {
    title: "Provinsi",
    type: "string",
    default: "Riau",
    placeholder: "",
    isDisable: true,
    fieldApi: "provinsiBimbel",
  },
];

export const dataSekolah = [
  {
    label: "Provinsi Sekolah",
  },
  {
    label: "Kota/Kabupaten Sekolah",
  },
  {
    label: "Jenjang Sekolah",
  },
  {
    label: "Sekolah",
  },
  {
    label: "Tingkat Kelas",
  },
  {
    label: "Kurikulum",
  },
];

export const dataAlamat = [
  {
    label: "Provinsi",
  },
  {
    label: "Kota/Kab",
  },
  {
    label: "Kecamatan",
  },
  {
    label: "Kelurahan",
  },
];
