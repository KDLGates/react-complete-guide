import './Card.css';

export default function Card(props) {
  // N.B.: className isn't inherently supported
  const classes = 'card ' + props.className;

  return (
    <div className={classes}>{props.children}</div>
  );
}