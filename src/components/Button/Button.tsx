import { FC } from "react";

interface buttonProp {
  onClick: () => void
}
const Button: FC<buttonProp> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="px-4 pt-1 font-bold pb-2 bg-blue-700 text-white rounded-full transition-colors duration-300 ease-linear hover:bg-blue-900 sm\px-3 sm:pb-[5px] sm:pt-[2.5px] sm:text-sm">
        Добавить задачу
      </button>
    </>
  )
}
export default Button
