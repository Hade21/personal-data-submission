import { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { setCompleted } from "../../features/pageSlices/pageSlices";

export default function StepProgress({ steps, currStep }) {
  const dispatch = useDispatch();
  const completed = useSelector((state) => state.page.completed);
  const personal = useSelector((state) => state.data.dataDiri);
  const pendidikan = useSelector((state) => state.data.pendidikan);
  const pekerjaan = useSelector((state) => state.data.pekerjaan);
  const keahlian = useSelector((state) => state.data.keahlian);

  useEffect(() => {
    let completedData = {
      personal: false,
      pendidikan: false,
      pekerjaan: false,
      keahlian: false,
    };
    for (const item in personal) {
      if (personal[item] === "") {
        completedData.personal = false;
        console.log("personal false");
        break;
      } else {
        completedData.personal = true;
        console.log("personal true", personal);
      }
    }
    for (const item in pendidikan) {
      for (const i in pendidikan[item]) {
        if (pendidikan[item][i] === "") {
          completedData.pendidikan = false;
          console.log("pendidikan false");
          break;
        } else {
          completedData.pendidikan = true;
          console.log("pendidikan true", pendidikan);
        }
      }
    }
    for (const item in pekerjaan) {
      for (const i in pekerjaan[item]) {
        if (pekerjaan[item][i] === "") {
          completedData.pekerjaan = false;
          console.log("pekerjaan false");
          break;
        } else {
          completedData.pekerjaan = true;
          console.log("pekerjaan true", pekerjaan);
        }
      }
    }
    for (const item in keahlian) {
      for (const i in keahlian[item]) {
        if (keahlian[item][i] === "") {
          completedData.keahlian = false;
          console.log("keahlian false");
          break;
        } else {
          completedData.keahlian = true;
          console.log("keahlian true", keahlian);
        }
      }
    }
    if (
      completedData.personal === true &&
      completedData.pendidikan === true &&
      completedData.pekerjaan === true &&
      completedData.keahlian === true
    ) {
      dispatch(setCompleted(true));
    } else {
      dispatch(setCompleted(false));
    }
  }, [personal, pendidikan, pekerjaan, keahlian]);
  return (
    <>
      <div className="flex flex-col justify-between items-center w-full">
        <div className="wrapper flex justify-between w-full">
          {steps.map((step, index) => {
            return (
              <div
                className={`step-item ${currStep == index + 1 && "active"} ${
                  (index + 1 < currStep || completed) && "completed"
                }`}
                key={index + 1}
              >
                <div className="step">
                  {index + 1 < currStep || completed ? <TiTick /> : index + 1}
                </div>
                <p className="text-slate-700">{step}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
