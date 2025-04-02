import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { service } from '@ember/service';

export default class TaskAdapter extends JSONAPIAdapter {
  @service ApiAuth;
  namespace = 'api/v1';
  host = 'http://localhost:8000';
  headers = {
    'Content-Type': 'application/json',
    Accept: '*/*',
    Connection: 'keep-alive',
    Authorization: `Bearer ${this.ApiAuth.accessToken}`,
  };

  urlForFindAll(modelName, snapshot) {
    return `${this.buildURL(modelName)}/`;
  }
  urlForCreateRecord(modelName, snapshot) {
    return `${this.buildURL(modelName)}/`;
  }
  urlForFindRecord(id, modelName, snapshot){
    return `${this.buildURL(modelName)}/${id}/`;
  }
  urlForRequest(params){
    debugger
  }
  urlForUpdateRecord(id, modelName, snapshot){
    return `${this.buildURL(modelName)}/${id}/`;
  }

}
