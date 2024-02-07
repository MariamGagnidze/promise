//1)დავწეროთ Promise რომლის მიხედვითაც პირობითად მოგვდის სამი სერვერიდან დატა ანუ გვჭირდება
//  სამი ფუნქცია ფრომისით, და ერთერთი მაინც რომ reject იყოს არ უნდა მქონდეს საშუალება რომ
//  მივიღო response წარმატებულ შედეგად.

const user_1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "luka",
          isAdmin: false,
        },
      ]);
    }, 7000);
  });
};

const user_2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
      resolve([
        {
          id: 2,
          name: "giga",
          isAdmin: false,
        },
      ]);
    }, 4000);
  });
};

const user_3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 3,
          name: "giorgi",
          isAdmin: false,
        },
      ]);
    }, 5000);
  });
};

Promise.all([user_1(), user_2(), user_3()])
  .then((user) => {
    console.log(user);
  })
  .catch(console.log);

//2)დავწეროთ ასინქრონული ფუნქციები სადაც გვექნება Promise, რომლის მიხედვითაც პირობითად
// მოგვდის ოთხი სერვერიდან user data და ეს Promise უნდა აბრუნებდეს სხვასხვა დატას,
//  მაგალითად [{id: 1, name: 'luka', isAdmin: false}]
// რომელიც პირველი დაასწრებს შესრულებას ის დატა უნდა მივიღო კონსოლში.

const user1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "luka",
          isAdmin: false,
        },
      ]);
    }, 7000);
  });
};

const user2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 2,
          name: "giga",
          isAdmin: false,
        },
      ]);
    }, 4000);
  });
};

const user3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 3,
          name: "giorgi",
          isAdmin: false,
        },
      ]);
    }, 5000);
  });
};

const user4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 4,
          name: "mamuka",
          isAdmin: false,
        },
      ]);
    }, 9000);
  });
};

Promise.race([user1(), user2(), user3(), user4()])
  .then((user) => {
    console.log(user);
  })
  .catch(console.log);
