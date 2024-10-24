import React from "react";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";


const TaskList = ({ emp }) => {
    return (
        <div className="h-[45%] w-full flex items-center justify-start flex-nowrap overflow-x-auto gap-8 py-8 mt-10 custom-scrollbar scroll ">
            {emp.tasks.map((e,idx)=>{
               
               if(e.active){
                return <AcceptTask key={idx} emp={e}/>
               }
               else if(e.completed){
                return <CompleteTask key={idx} emp={e}/>
               }
               else if(e.newTask){
                return <NewTask key={idx} emp={e}/>
               }
               else if(e.failed){
                return <FailedTask key={idx} emp={e}/>
               }
              
            })}
        </div>
    );
};

export default TaskList;
