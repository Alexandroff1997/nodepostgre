CREATE TABLE person(
	id SERIAL PRIMARY KEY,
	name VARCHAR,
	surname VARCHAR
);

CREATE TABLE post(
	id SERIAL PRIMARY KEY,
	title VARCHAR,
	content VARCHAR,
	person_id INTEGER,
	FOREIGN KEY (person_id) REFERENCES person (id)
);