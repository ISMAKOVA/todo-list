
import './App.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {useState} from "react";
import {ListItem} from "@/components/ListItem.tsx";
import {generateGUID} from "@/utils.ts";
import {WarningDialog} from "@/components/AlertDialog.tsx";
import {useDialog} from "@/hooks/useDialog.ts";
import {useStore} from "@/hooks/useStore.ts";
import {ITask} from "@/types.ts";
import {EditTaskDialog} from "@/components/EditTaskDialog.tsx";
import {Sparkles} from "lucide-react";

function App() {
    const [currentTaskText, setCurrentTaskText] = useState<string>("");
    const { tasks, createTask, deleteTask } = useStore();
    const { data, isOpen, type, onOpen, onClose, setData } = useDialog();

    const handleAdd = () => {
        const newTask : ITask = {
            id: generateGUID(),
            text: currentTaskText
        }
        createTask(newTask)
        setCurrentTaskText("");
    }

    const handleEdit = (id: string) => {
        const task = tasks.find((task) => task.id === id);
        if (task) {
            setData(task);
            onOpen("edit", task);
        }
    };


    const handleDelete = (id: string) => {
        const task = tasks.find((task) => task.id === id);
        if (task) {
            setData(task);
            onOpen("delete", task);
        }
    };

    const handleConfirmDelete = () => {
        if (data) {
            deleteTask(data.id);
            onClose();
        }
    };

  return (
      <div className="w-dvw h-dvh dark text-white">
          <div className="container mx-auto bg-gray-950 w-full h-full flex flex-col justify-start items-center">
              <h1 className="inline-flex mt-8 text-xl">Todo лист <Sparkles className="ml-2 text-yellow-200" /></h1>

              <div className="flex w-full max-w-sm items-start space-x-2 mt-8 mb-4">
                  <Input
                      type="text"
                      value={currentTaskText}
                      onChange={(e) => setCurrentTaskText(e.target.value)}
                      placeholder="Например: подстричься"
                  />
                  <Button type="submit" onClick={handleAdd}>Добавть</Button>
              </div>

              {tasks.map((t, i) => {
                  return <ListItem
                      id={t.id}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      key={i}>
                      {t.text}
                  </ListItem>
              })}
          </div>

          {isOpen && type === "delete" &&  <WarningDialog
              onConfirm={handleConfirmDelete}
              message="Вы точно хотите удалить запись?"
              description="После удалелния задачи ее невозможно будет восстановить."
          />}

          {isOpen && type === "edit" && <EditTaskDialog task={data}/>}
      </div>
  )
}

export default App;
