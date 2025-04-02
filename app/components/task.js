import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class Task extends Component {
  @action
  deleteTask() {
    this.args.task.destroyRecord();
  }
  @action
  completeTask(){
    this.args.task.complete = true
    this.args.task.save()
  }
}
