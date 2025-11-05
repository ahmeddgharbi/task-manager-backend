import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  create(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: randomUUID(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      isCompleted: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    Object.assign(task, updateTaskDto);
    return task;
  }

  remove(id: string): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  assign(id: string, userIds: string[]): Task {
    const task = this.findOne(id);
    task.assignedTo = userIds;
    return task;
  }
}
