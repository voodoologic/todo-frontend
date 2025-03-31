import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class TaskSerializer extends JSONAPISerializer {
  attr = {
    dueDate: 'due-date'
  }
  serialize(snapshot, options){
    let json = super.serialize(...arguments)
    console.log('json.data', json.data)
    let newJson = {
      name: json.data.attributes.name,
      description: json.data.attributes.description,
      priority: json.data.attributes.priority, // TODO make dynamic
      due_date: json.data.attributes['due-date'],
      completed: json.data.attributes.completed,
      user: { //TODO dynamic
        id: 1,
        type: "User"
      }
    }
    return newJson
  }
}
