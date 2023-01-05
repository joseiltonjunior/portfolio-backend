import { v4 as uuidV4 } from 'uuid';

class EducationModel {
  name: string;
  course: string;
  description: string;
  time: Date;
  id?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { EducationModel };
