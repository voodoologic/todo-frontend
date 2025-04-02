import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class Task extends Component {
  @action
  deleteTask() {
    this.args.task.destroyRecord();
  }
  @action
  completeTask(){
    this.args.task.completed = true
    this.args.task.save()
  }
}
