export interface User {
    username: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    about: string;
    userSelections: Array<selection>;
  }

  export interface selection {
    type: string;
    answer: string;
  }