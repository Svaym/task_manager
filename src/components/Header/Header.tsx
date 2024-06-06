import { FC } from "react";
import Button from "./Button/Button";

const Header: FC = () => {
  interface modalProp {
    onClick: () => void
  }
  function modalOpen() {
    console.log(12123)
  }
  return (
    <>
      <header>
        <div className="max-w-7xl w-full mx-auto px-6">
          <div className="flex items-center justify-between py-5">
            <h1 className="text-3xl font-bold">
              Менеджер задач
            </h1>
            <Button onClick={modalOpen} />
          </div>
          <hr className="bg-gray-400 h-[3px] rounded-full" />
        </div>
      </header>
    </>
  )
}
export default Header