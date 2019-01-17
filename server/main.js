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
  },
  'checkStatus'(){
    const data = Students.findOne(this.userId);
    if(!data && data.status !== "admin") {
      return false;
    } else {
      return true;
    }
  },
  'connection'(firstName,lastName,github){
    if(Students.find({firstName,lastName,github}).count() === 0){
      throw new Meteor.Error("not-found","compte introuvable, veuillez recommencer");
    } else {
      const data = Students.findOne({firstName,lastName,github});
      this.setUserId(data._id);
      if(data.status === 'admin'){
        return '/admin';
      } else {
        return `/account/${data._id}`;
      }
    }
  }
});
