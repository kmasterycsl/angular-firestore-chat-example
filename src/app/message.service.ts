import { Injectable } from '@angular/core';
import { IMessage } from 'src/entities/MessageEntity';
import { AngularFirestore } from '@angular/fire/firestore';
import { MESSAGE_COLLECTION_NAME } from 'src/const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private afs: AngularFirestore) {}

  public getMessages(): Observable<IMessage[]> {
    return this.afs.collection<IMessage>(MESSAGE_COLLECTION_NAME, ref => ref.orderBy('date', 'desc')).valueChanges()
  }

  public sendMessage(message: IMessage) : Promise<any> {
    return this.afs.collection(MESSAGE_COLLECTION_NAME).add(message)
  }
}
