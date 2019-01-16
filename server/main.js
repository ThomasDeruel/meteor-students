import { Meteor } from 'meteor/meteor';
import Students from '../imports/api/students.js';

function insertLink(firstName, lastName,github, status) {
    Students.insert({ firstName, lastName, github, status });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Students.find().count() === 0) {
    insertLink(
      'admin.firstname',
      'admin.lastname',
      'admin.github',
      'admin'
    );
  }
});

Meteor.methods({
  'subscriber': function(){
    return 'ceci est un test';
  }
});
