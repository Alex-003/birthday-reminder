import React from "react";

const List = ({people}) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, img } = person;
        return (
          <article key={id} className="person">
            <img src={img} alt={name} />
            <div>
              <h4>{name}</h4>
              <p> {age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;


/*This code is a functional component in React.js called "List" that takes in a prop called "people"
and maps over it to display information about each person.

It returns a JSX template that renders an "article" element for each person in the "people" prop,
where each article includes an image, a heading with the person's name, and a paragraph with their age.

The key for each article is set to the person's id, and the className is set to "person".
It's using JS destructuring assignment to extract properties from the person object (id, name, age, img)

The code is using JSX, which is a syntax extension for JavaScript that allows you to write
HTML-like elements in your JavaScript code. It is compiled into JavaScript by transpilers like Babel.

Also the <> </> is a short syntax for React.Fragment which allows to return multiple elements without adding any extra node to the DOM.

*/