import { FC } from "react";

interface buttonProp {
  onClick: () => void
}
const Button: FC<buttonProp> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="px-4 pt-1 pb-2 bg-blue-700 text-white rounded-full transition-colors duration-300 ease-linear hover:bg-blue-900">
        Добавить задачу
      </button>
    </>
  )
}
export default Button