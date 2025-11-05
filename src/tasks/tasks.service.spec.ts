import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
  });

  it('should create a task', () => {
    const task = service.create({ title: 'Test task' });
    expect(task).toHaveProperty('id');
    expect(service.findAll().length).toBe(1);
  });
});
