import { v4 as uuidV4 } from 'uuid';
import { observable, action, makeAutoObservable, runInAction } from 'mobx';

interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface IToastContext {
  addToast: (message: Omit<IToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

interface IToastProvider {
  children: React.ReactNode;
}

class ToastStore {
  @observable messages: IToastMessage[] = []

  constructor() {
    makeAutoObservable(this);
  }

  @action
  addToast = async ({type, title, description}: Omit<IToastMessage, 'id'>) => {
    const id = uuidV4();
    const toast = {
      id,
      type,
      title,
      description,
    };
    runInAction(() => {
      this.messages = [...this.messages, toast];
    });
  };

  @action
  removeToast = async (id: string) => {
    runInAction(() => {
      this.messages = this.messages.filter(message => message.id !== id)
    })
  };
}

export default ToastStore;
