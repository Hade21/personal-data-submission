import Keahlian from "../steps/keahlian/keahlian";
import PersonalData from "../steps/personalData/personalData";
import RiwayatPekerjaan from "../steps/riwayatPekerjaan/riwayatPekerjaan";
import RiwayatPendidikan from "../steps/riwayatPendidikan/riwayatPendidikan";

export default function ContentSelector({ currStep }) {
  switch (currStep) {
    case 1:
      return <PersonalData />;
    case 2:
      return <RiwayatPendidikan />;
    case 3:
      return <RiwayatPekerjaan />;
    case 4:
      return <Keahlian />;
    default:
      return <h1>Step 1</h1>;
  }
}
