import { FC } from "react";
import { addTask } from "../../Redux/taskSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

const Tasks: FC = () => {
  const arrayOfTasks = useAppSelector(state => state.tasks.taskArray)
  const dispatch = useAppDispatch()
  function addNewTask() {
    dispatch(addTask('Новая задача'))
  }
  return (
    <section className="bg-red">
      <div className="max-w-7xl w-full mx-auto px-6">
        <ul>
          {arrayOfTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <button onClick={addNewTask}>Добавить задачу</button>
      </div>
    </section>
  )
}
export default Tasks
