import { Meteor } from 'meteor/meteor';
import Students from '../imports/api/students';

function insertStudent(name, pw) {
  Students.insert({ name, pw, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Students.find().count() === 0) {
    insertStudent(
      'Admin',
      'Admin'
    );
  }
});