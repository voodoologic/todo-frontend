import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CreateTask extends Component {
  @service store;
  name = 'Pay Rent';
  description = 'a description';
  due_date = "2025-04-01";
  priority = 'high';
  @action
  onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    this.args.task.set('name', formData.get('name'));
    this.args.task.set('description', formData.get('description'));
    this.args.task.set('dueDate', formData.get('due_date'));
    this.args.task.set('priority', formData.get('priority'));
    this.args.task.set('completed', false);
    console.log(this.args.task);
    console.log(this.args.task.dueDate);
    debugger
    this.args.task.save();
  }
}
