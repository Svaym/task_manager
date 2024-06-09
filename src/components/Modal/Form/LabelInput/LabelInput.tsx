import { FC } from "react";

interface LabelInputProp {
  label: string;
  htmlFor: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string
}
const LabelInput: FC<LabelInputProp> = ({ label, htmlFor, id, onChange, value }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <label htmlFor={htmlFor}>
        { label }
      </label>
      <input onChange={onChange} value={value} type="text" className="rounded-lg border-2 border-gray-400 px-4 py-2" id={id} />
    </div>
  )
}
export default LabelInput
