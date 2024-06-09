import { FC, useState } from "react";
import { close } from "../../../Redux/modalSlice";
import { useAppDispatch } from "../../../Redux/hooks";
import LabelInput from "./LabelInput/LabelInput";

const Form: FC = () => {
  // Значение инпута названия
  const [title, setTitle] = useState('')
  //  Значение инпута описания
  const [desc, setDesc] = useState('')
  const dispatch = useAppDispatch()
  function modalClose() {
    dispatch(close())
  }
  return (
    <>
      <section className="relative">
        <div onClick={modalClose} className="fixed inset-0 bg-gray-800 bg-opacity-75 z-10"></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-5 h-[30rem] rounded-md w-1/2 md:w-4/5 xs:w-[90%] xxs:w-[95%]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">
              Добавить новую задачу
            </h2>
            <button onClick={modalClose} className="text-3xl text-red transition duration-500 ease-linear hover:brightness-75">
              &#128473;
            </button>
          </div>
          <form className="mt-5 flex flex-col gap-y-3" action="">
            <LabelInput label="Название" value={title} htmlFor='title' id="title" onChange={(evt) => setTitle(evt.target.value)} />
            <LabelInput label="Описание" value={desc} htmlFor='description' id="description" onChange={(evt) => setDesc(evt.target.value)} />
              <select name="color" className="cursor-pointer font-bold py-3 pl-4">
                <option className="bg-green" value="green">Зеленый</option>
                <option className="bg-orange" value="orange">Оранжевый</option>
                <option className="bg-red" value="red">Красный</option>
              </select>
            <button disabled={title.trim()=== '' || desc.trim() === ''} className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 pt-1 font-bold pb-2 bg-blue-700 text-white rounded-full transition-colors duration-300 ease-linear hover:bg-blue-900">
              Добавить
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
export default Form
