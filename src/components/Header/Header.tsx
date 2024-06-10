import { FC } from "react";
import { useAppDispatch } from "../../Redux/hooks/useAppDispatch";
import { useAppSelector } from "../../Redux/hooks/useAppSelector";
import { open } from "../../Redux/modalSlice";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Header: FC = () => {
  const isModalOpen = useAppSelector(state => state.modal.value)
  const dispatch = useAppDispatch()
  function modalOpen() {
    dispatch(open())
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
          <hr className="bg-gray-400 h-[2px] rounded-full" />
        </div>
        {isModalOpen && <Modal />}
      </header>
    </>
  )
}
export default Header