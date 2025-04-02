import Component from '@glimmer/component';
import { action, get, set } from '@ember/object';
import { service } from '@ember/service';

export default class CreateTask extends Component {
  @service store;
  get name() {
    return this.getTaskValue('name');
  }
  set name(name) {
    this.args.task.name = name;
  }
  get description() {
    return this.getTaskValue('description');
  }
  set description(desc) {
    this.args.task.description = desc;
  }
  get due_date() {
    return this.getTaskValue('dueDate');
  }
  set due_date(date) {
    this.args.task.dueDate = date;
  }
  get priority() {
    return this.getTaskValue('priority');
  }
  set priority(priority) {
    this.args.task.priority = priority;
  }

  @action
  onSubmit(event) {
    event.preventDefault();
    // let formData = new FormData(event.target);
    // this.args.task.set('name', formData.get('name'));
    // this.args.task.set('description', formData.get('description'));
    // this.args.task.set('dueDate', formData.get('due_date'));
    // this.args.task.set('priority', formData.get('priority'));
    // this.args.task.set('completed', false);
    // console.log(this.args.task);
    // console.log(this.args.task.dueDate);
    // debugger;
    this.args.task.save();
  }
  getTaskValue(key) {
    return this.args.task[key];
  }
}
