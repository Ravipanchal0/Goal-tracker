import React from "react";

interface HintProps {
  mode: "hint";
  children: React.ReactNode;
}

interface WarningProps {
  mode: "warning";
  severity: 200 | 400 | 600;
  children: React.ReactNode;
}
type InfoBoxProps = HintProps | WarningProps;

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;

  if (mode == "hint") {
    return (
      <div className="text-sky-300 p-4 border text-sm font-mono flex-center col-span-2">
        {children}
      </div>
    );
  }

  const { severity } = props;

  return (
    <div
      className={`text-red-${severity} p-4 border font-mono flex-center flex-col col-span-2`}
    >
      <h1 className="text-3xl font-bold">Warning!</h1>
      {children}
    </div>
  );
};

export default InfoBox;
