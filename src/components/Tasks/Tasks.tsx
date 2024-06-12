import { FC, useState } from "react";
import { useAppSelector } from "../../Redux/hooks/useAppSelector";
import { useAppDispatch } from "../../Redux/hooks/useAppDispatch";
import { removeTask } from "../../Redux/taskSlice";

const Tasks: FC = () => {
  const dispatch = useAppDispatch()
  const arrayOfTasks = useAppSelector(state => state.tasks.taskArray);
  //  Выбор цвета
  const [choice, setChoice] = useState('')
  //  Сортировка по цвету
  function colorChoice(colour: string): void {
    setChoice(colour)
  }
  interface Task{
    title: string;
    desc: string;
    colour: string;
    // isClicked: boolean
  }
  //  Удаление задачи
  function deleteTask(task: Task): void {
    dispatch(removeTask({title: task.title}))
  }
  return (
    <section className="">
      <div className="max-w-7xl w-full mx-auto px-6">
        <div className="flex items-center gap-x-12 justify-center mt-6">
          <button onClick={() => colorChoice('')} className="py-6 px-20 bg-gray-400 rounded-xl transition-colors duration-300 ease-linear hover:bg-gray-700"></button>
          <button onClick={() => colorChoice('red')} className="py-6 px-20 bg-red rounded-xl transition-colors duration-300 ease-linear hover:bg-rose-700"></button>
          <button onClick={() => colorChoice('orange')} className="py-6 px-20 bg-orange rounded-xl transition-colors duration-300 ease-linear hover:bg-yellow-700"></button>
          <button onClick={() => colorChoice('green')} className="py-6 px-20 bg-green rounded-xl transition-colors duration-300 ease-linear hover:bg-lime-700"></button>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-4">
          {arrayOfTasks.filter(task => task.colour === choice || choice === '').map((task, index) => (
            <div key={index} className={task.colour === 'green' ? "border-2 border-green rounded-3xl p-3 h-40 animate-fade" : task.colour === 'red' ? ' border-2 border-red rounded-3xl p-3 h-40 animate-fade' : ' border-2 border-orange rounded-3xl p-3 h-40 animate-fade'}>
                <button className="ml-auto block" onClick={() => deleteTask(task)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-red transition-colors duration-300 ease-linear hover:stroke-rose-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg></button>
                <h2 className="whitespace-nowrap text-ellipsis font-bold text-lg overflow-hidden mt-1 text-left">{task.title}</h2>
              <p className="max-h-[4.5rem] overflow-y-auto overflow-x-hidden">{task.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Tasks
