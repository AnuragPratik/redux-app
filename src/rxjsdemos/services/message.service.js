import { Subject } from "rxjs";

const subject = new Subject();

export const messageService = {
  sendMessage: (message) => subject.next({ text: message }), //P
  clearMessages: () => subject.next(), //P
  getMessage: () => subject.asObservable(), //C
};
