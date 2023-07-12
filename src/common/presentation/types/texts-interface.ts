export interface TextsInterface {
  helloWorld: {
    title: string;
    description: {
      first: string;
      second: string;
    };
  };

  about: {
    first: string;
    second: string;
    third: string;
  };

  experience: {
    present: string;
    first: {
      title: string;
      description: string;
      stack: string;
    };
    second: {
      title: string;
      description: string;
      stack: string;
    };
    third: {
      title: string;
      description: string;
      stack: string;
    };
  };

  commandsDescriptions: {
    helloWorld: string;
    about: string;
    find: string;
    experience: string;
    commands: string;
    help: string;
    theme: string;
    language: string;
    clear: string;
  };
}
