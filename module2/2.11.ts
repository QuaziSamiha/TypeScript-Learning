{
  // interface - generic
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T; // setting type dynamically
    bike?: X; // dynamic type
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
  //   const poorDeveloper: Developer<EmailableWatch, null> = {
  //     name: "samiha",
  //     computer: {
  //       brand: "HP",
  //       model: "X-25UR",
  //       releaseYear: 2013,
  //     },
  //     smartWatch: {
  //       brand: "Emilab",
  //       model: "kw66",
  //       display: "OLED",
  //     },
  //   };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface BikeDetails {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, BikeDetails> = {
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
    bike: {
      model: "Yamaha ",
      engineCapacity: "high",
    },
  };
}
