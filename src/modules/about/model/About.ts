import { v4 as uuidV4 } from 'uuid';

class AboutModel {
  description: string;
  id?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { AboutModel };
