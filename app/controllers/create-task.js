import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CreateTaskController extends Controller {
  @service store;
  @action
  async createTask(taskData) {
    try {
      const task = this.store.createRecord('task', {
        name: taskData.name,
        description: taskData.description,
        due_date: taskData.due_date,
        priority: taskData.priority,
        completed: taskData.completed,
      });
      await task.save();
    } catch (error) {
      console.error('Error creating task: ', error);
    }
  }
}
