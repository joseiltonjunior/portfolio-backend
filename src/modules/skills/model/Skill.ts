import { v4 as uuidV4 } from 'uuid';

class SkillModel {
  name: string;
  url: string;
  id?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { SkillModel };
