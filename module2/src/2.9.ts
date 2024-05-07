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

  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
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
  
  const richDeveloper: Developer<{
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }> = {
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
