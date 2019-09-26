export interface IMessage {
  content: string;
  uid: string;
  date: firebase.firestore.Timestamp;
}
