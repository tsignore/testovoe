import React, { useState } from "react";
import { Model, Param, ParamValue } from "../types";

interface Props {
  params: Param[];
  model: Model;
}

export const ParamEditor: React.FC<Props> = ({ params, model }) => {
  const initialValues = model.paramValues.reduce<Record<number, string>>(
    (acc, { paramId, value }) => {
      acc[paramId] = value;
      return acc;
    },
    {}
  );

  const [paramValues, setParamValues] =
    useState<Record<number, string>>(initialValues);

  const handleParamChange = (paramId: number, value: string) => {
    setParamValues((prev) => ({
      ...prev,
      [paramId]: value,
    }));
  };

  const getModel = (): Model => {
    const currentParamValues: ParamValue[] = Object.entries(paramValues).map(
      ([paramId, value]) => ({
        paramId: Number(paramId),
        value,
      })
    );

    return {
      paramValues: currentParamValues,
      colors: model.colors,
    };
  };

  const handleShowModel = () => {
    const currentModel = getModel();
    console.log("Current model:", currentModel);
    alert(JSON.stringify(currentModel, null, 2));
  };

  return (
    <div className="param-editor">
      <table>
        <tbody>
          {params.map((param) => (
            <tr key={param.id}>
              <td>{param.name}</td>
              <td>
                <input
                  type="text"
                  value={paramValues[param.id] || ""}
                  onChange={(e) => handleParamChange(param.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleShowModel}>Показать модель</button>
    </div>
  );
};
