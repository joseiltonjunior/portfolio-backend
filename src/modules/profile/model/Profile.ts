class LinkModel {
  name: string;
  url: string;
  icon: string;
}

class ProfileModel {
  office: string;
  name: string;
  pic: string;
  links: LinkModel[];
}

export { ProfileModel };
