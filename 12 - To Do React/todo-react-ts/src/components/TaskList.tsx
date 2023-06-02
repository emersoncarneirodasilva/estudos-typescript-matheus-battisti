import styles from "./TaskList.module.css";
import { ITask } from "../interfaces/Task";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

export default function TaskList({
  taskList,
  handleDelete,
  handleEdit,
}: Props) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <div key={index} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <em
                className="bi bi-pencil"
                onClick={() => handleEdit(task)}
              ></em>
              <em
                className="bi bi-trash"
                onClick={() => {
                  handleDelete(task.id);
                }}
              ></em>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastrada</p>
      )}
    </>
  );
}
