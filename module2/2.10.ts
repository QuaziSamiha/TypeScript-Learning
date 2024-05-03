{
  // interface - generic
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T; // setting type dynamically
  }

  type EmailableWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmailableWatch> = {
    name: "samiha",
    computer: {
      brand: "HP",
      model: "X-25UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  
  const richDeveloper: Developer<AppleWatch> = {
    name: "samiha",
    computer: {
      brand: "ASUS",
      model: "X-25SUR",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple",
      model: "something",
      heartTrack: true,
      sleepTrack: true,
    },
  };
}
