const db = firebase.firestore();

const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1);

const storyRef = db.collection('stories').doc('hello-world');

storyRef.update({ count: increment});

