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
  get completed(){
    return this.getTaskValue('completed')
  }
  set completed(value){
    debugger
    this.args.task.completed = value;
  }

  @action
  onSubmit(event) {
    event.preventDefault();
    this.args.task.save();
  }
  @action
  changeSelect(event){
    this.priority = event.target.value
  }
  getTaskValue(key) {
    return this.args.task[key];
  }
  @action
  toggleCompleted(event){
    this.args.task.completed = event.target.checked
  }
}
