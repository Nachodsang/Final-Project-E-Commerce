const dateRandomGenerator = (year) => {
  const month = Math.floor(Math.random() * 12) + 1;
  let limit;
  switch (month) {
    case 2:
      limit = 28;
      break;
    case 4:
      limit = 30;
      break;
    case 6:
      limit = 30;
      break;
    case 9:
      limit = 30;
      break;
    case 11:
      limit = 30;
      break;
    default:
      limit = 31;
  }

  const day = Math.floor(Math.random() * limit) + 1;

  const result = `${day}.${month}.${year}`;

  return result;
};

export const activities = {
  list: [
    {
      title: "Trekking",
      name: "Terry",
      date: dateRandomGenerator(2023),
      image:
        "https://images.unsplash.com/photo-1598524589996-78edc8ddba2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    },
    {
      title: "Disney",
      name: "Douglas",
      date: dateRandomGenerator(2023),
      image:
        "https://images.unsplash.com/photo-1542839764-7cbd13228589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      title: "Cafe Hopping",
      name: "Amber",
      date: dateRandomGenerator(2023),
      image:
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      title: "Beach Day",
      name: "Jones",
      date: dateRandomGenerator(2023),
      image:
        "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    },
    {
      title: "Skateboarding",
      name: "Tim",
      date: dateRandomGenerator(2023),
      image:
        "https://images.unsplash.com/photo-1503417680882-163c1609fd2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "New Car",
      name: "Kate",
      date: dateRandomGenerator(2023),
      image:
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    },
    {
      title: "9 to 5",
      name: "Matt",
      date: dateRandomGenerator(2023),
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Italian Dinner",
      name: "Liu",
      date: dateRandomGenerator(2023),
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      title: "Tarentino's night",
      name: "Macy",
      date: dateRandomGenerator(2023),
      image:
        "https://images.unsplash.com/photo-1641549058491-8a3442385da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "Cheat Day",
      name: "Sheldon",
      date: dateRandomGenerator(2023),
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    },
  ],
};
