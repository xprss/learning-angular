import { Injectable } from '@angular/core';
import { TaskDTO } from '../dto/TaskDTO';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  dbNextIndex: number = 7;
  readonly dbTasks: TaskDTO[] = [
    {
      id: 0,
      title: "Make laundry",
      weekday: "Monday",
      description: "It's boring, I know, but still to do...",
      tags: ["boringstuff"],
      done: false,
    },
    {
      id: 1,
      title: "Destroy JS",
      weekday: "Monday",
      description: "Yes, we can.",
      tags: ["ianhappymoment"],
      done: false,
    },
    {
      id: 2,
      title: "Love TS",
      weekday: "Friday",
      description: "Be my Valentine, pleaaase.",
      tags: ["feb14", "naughty"],
      done: false,
    },
    {
      id: 3,
      title: "Make new friends",
      weekday: "Tuesday",
      description: "Engineers do it too, huh?",
      tags: ["friends", "typescriptweloveyou"],
      done: false,
    },
    {
      id: 4,
      title: "Delivery myAgenda",
      weekday: "Wednesday",
      description: "Alright Tony.",
      tags: ["ioninduction"],
      done: false,
    },
    {
      id: 5,
      title: "Get a degree",
      weekday: "Sunday",
      description: "Just do it.",
      tags: ["graduationday"],
      done: true,
    },
    {
      id: 6,
      title: "Learn hiragana",
      weekday: "Monday",
      description: "Katakana can wait.",
      tags: [
        "kanjitoo",
        "konnichiwa",
        "nigiri",
        "onigiri",
        "sashimi",
        "ticketrestaurant",
        "hofamissima",
      ],
      done: true,
    },
  ]

  constructor() { }

  async getTasks(): Promise<TaskDTO[]> {
    let promise = new Promise<TaskDTO[]>((res, rej) => {
      setTimeout(() => {
        res(this.dbTasks)
      }, 2500);
    })
    return promise
  }

  addNewTask() {

  }

  duplicateTask(srcTask: TaskDTO) {
    const dstTask: TaskDTO = {id: -1, title: srcTask.title, weekday: srcTask.weekday, description: srcTask.description, tags: srcTask.tags, done: false}
    dstTask.id = this.dbNextIndex++;
    this.dbTasks.push(dstTask)
  }

  getTaskByID(id: number): TaskDTO | undefined {
    for (let task of this.dbTasks) {
      if (task.id === id) {
        return task
      }
    }
    return undefined
  }
}
