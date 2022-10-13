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
    <>
      <StepProgress steps={steps} currStep={currStep} />
      <div className="contents">
        <ContentSelector currStep={currStep} />
      </div>
    </>
  );
}
