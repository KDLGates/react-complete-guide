import './Card.css';

export default function Card(props) {
  // N.B.: className isn't inherently supported
  // All component props are added to custom wrapper components...
  const classes = 'card ' + props.className;

  // ... except maybe children >.<
  return (
    <div className={classes}>{props.children}</div>
  );
}