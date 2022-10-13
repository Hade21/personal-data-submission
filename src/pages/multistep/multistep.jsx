import { useEffect } from "react";
import { useSelector } from "react-redux";
import ContentSelector from "../../components/contentSelector/contentSelector";
import StepProgress from "../../components/stepProgress/stepProgress";

export default function Multistep() {
  const steps = useSelector((state) => state.page.steps);
  const currStep = useSelector((state) => state.page.currStep);

  useEffect(() => {
    console.log(currStep);
  }, [currStep]);

  return (
    <div className="h-ful mx-auto flex w-5/6 flex-col gap-14 py-14">
      <StepProgress steps={steps} currStep={currStep} />
      <div className="content rounded bg-slate-100 p-8">
        <ContentSelector currStep={currStep} />
      </div>
    </div>
  );
}
