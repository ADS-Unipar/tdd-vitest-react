type CardProps = {
  title: string;
  text?: string;
  imageUrl?: string;
  onAction1?: () => void;
  onAction2?: () => void;
  button1Text?: string;
  button2Text?: string;
}

function Card({
  title,
  text,
  imageUrl,
  onAction1,
  onAction2,
  button1Text,
  button2Text
}: CardProps) {
  return (<div>
    <h3>{title}</h3>
    {text && <p data-testid="text">{text}</p>}
    {imageUrl && <img src={imageUrl} alt={title} />}
    <br />
    {button1Text && onAction1 && <button onClick={() => onAction1()}>{button1Text}</button>}
    <button onClick={() => onAction2()}>{button2Text}</button>
  </div>)
}

export default Card;