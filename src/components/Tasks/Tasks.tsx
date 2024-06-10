import { FC } from "react";
import { useAppSelector } from "../../Redux/hooks/useAppSelector";

const Tasks: FC = () => {
  const arrayOfTasks = useAppSelector(state => state.tasks.taskArray)
  console.log(arrayOfTasks)
  return (
    <section className="">
      <div className="max-w-7xl w-full mx-auto px-6">
        <div className="grid grid-cols-3 gap-5 mt-4">
          {arrayOfTasks.map((task, index) => (
            <div key={index} className={task.colour==='green' ? "border-2 border-green rounded-3xl p-3 h-40" : task.colour==='red' ? 'border-2 border-red rounded-3xl p-3 h-40' : 'border-2 border-orange rounded-3xl p-3 h-40'}>
              <h2 className="whitespace-nowrap text-ellipsis overflow-hidden">{task.title}</h2>
              <p className="max-h-[6.5rem] overflow-y-auto overflow-x-hidden">{task.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Tasks
