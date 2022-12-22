import { v4 as uuidV4 } from 'uuid'

class ExperienceModel {
  name: string;
  office: string;
  activities: string;
  technologies?: string;
  time: Date;
  id?: string

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { ExperienceModel }