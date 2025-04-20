import React from "react";
import { Model, Param } from "./types";
import { ParamEditor } from "./components/ParamModel";

const App: React.FC = () => {
  const params: Param[] = [
    { id: 1, name: "Назначение", type: "string" },
    { id: 2, name: "Длина", type: "string" },
  ];

  const model: Model = {
    paramValues: [
      { paramId: 1, value: "повседневное" },
      { paramId: 2, value: "макси" },
    ],
    colors: [],
  };

  return (
    <div>
      <h1>Редактор параметров</h1>
      <ParamEditor params={params} model={model} />
    </div>
  );
};

export default App;
