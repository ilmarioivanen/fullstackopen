const Header = ({ course }) => <h2>{course}</h2>;

const Content = ({ parts }) => (
  <div>
    {parts.map((part, i) => (
      <Part key={i} part={part} />
    ))}
  </div>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ parts }) => (
  <b>total of {parts.reduce((s, p) => s + p.exercises, 0)} exercises</b>
);

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
