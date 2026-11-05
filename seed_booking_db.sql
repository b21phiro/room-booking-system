DROP TABLE IF EXISTS Room;

CREATE TABLE Room (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(90) NOT NULL UNIQUE,
  capacity INT NOT NULL
);

DROP TABLE IF EXISTS Booking;

CREATE TABLE Booking (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  room INTEGER NOT NULL,
  from_date TEXT NOT NULL,
  to_date TEXT NOT NULL,
  firstname VARCHAR(90) NOT NULL,
  surname VARCHAR(90) NOT NULL,
  FOREIGN KEY(room) REFERENCES Room(id),
  UNIQUE (room, from_date, to_date)
);

INSERT INTO Room (name, capacity) VALUES
  ('Margret', 4),
  ('Steve', 6),
  ('Ada', 10),
  ('Edmund', 10),
  ('Grace', 20);
