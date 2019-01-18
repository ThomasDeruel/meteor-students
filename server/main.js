import { Meteor } from 'meteor/meteor';
import Students from '../imports/api/students.js';
import {FlowRouter} from 'meteor/kadira:flow-router';

function insertLink(firstName, lastName,github, status) {
    Students.insert({ firstName, lastName, github, status });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Students.find().count() === 0) {
    insertLink(
      'Admin',
      'Jean',
      'AdminGithub',
      'admin'
    );
  }
});

Meteor.methods({
  'subscriber': function(){
    return 'ceci est un test';
  },
  'addStudent'(firstName, lastName, github){
    Students.insert({firstName, lastName, github})
  },
  'checkLogin'(){
    if (this.userId === null) {
      return false;
    } else {
      return true;
    }
  }
});
