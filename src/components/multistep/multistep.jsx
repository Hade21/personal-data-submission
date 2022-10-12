import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";

export default function Multistep() {
  return (
    <StepProgressBar
      startingStep={0}
      steps={[
        {
          label: "Personal Data",
          name: "Personal Data",
          content: <h1>Personal Data</h1>,
        },
        {
          label: "Riwayat Pendidikan",
          name: "Riwayat Pendidikan",
          content: <h1>Riwayat Pendidikan</h1>,
        },
        {
          label: "Riwayat Pekerjaan",
          name: "Riwayat Pekerjaan",
          content: <h1>Riwayat Pekerjaan</h1>,
        },
        { label: "Keahlian", name: "Keahlian", content: <h1>Keahlian</h1> },
      ]}
    />
  );
}
