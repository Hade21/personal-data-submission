import { useState } from "react";
// import { TiTick } from "react-icons/ti";

export default function Multistep() {
  const [currStep, setCurrStep] = useState(3);
  const [completed, setCompleted] = useState(false);
  const steps = [
    "Personal Data",
    "Riwayat Pendidikan",
    "Pengalaman Kerja",
    "Keahlian",
  ];

  const handleNext = () => {
    if (currStep < steps.length) {
      setCurrStep(currStep + 1);
    } else {
      setCompleted(true);
    }
  };
  const handlePrev = () => {
    if (currStep > 1) {
      setCurrStep(currStep - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-8 items-center w-full">
        <div className="wrapper flex justify-between">
          {steps.map((step, index) => {
            return (
              <div
                className={`step-item ${currStep == index + 1 && "active"} ${
                  (index + 1 < currStep || completed) && "completed"
                }`}
                key={index + 1}
              >
                <div className="step">
                  {/* {index + 1 < currStep || completed ? <TiTick /> : index + 1} */}
                  {index + 1}
                </div>
                <p className="text-slate-700">{step}</p>
              </div>
            );
          })}
        </div>
        <div className="buttons flex items-center justify-between gap-40">
          <div className="prev">
            <button type="button" disabled={false} onClick={handlePrev}>
              <span className="btn">Sebelumnya</span>
            </button>
          </div>
          <div className="next">
            <button type="button" disabled={false} onClick={handleNext}>
              <span className="btn">
                {currStep === steps.length ? "Simpan" : "Selanjutnya"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
