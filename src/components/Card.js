import { Link } from 'react-router-dom';

function Card({ post }) {
  return (
    <div className="card">
      <Link className="link" to={`post/${post.id}`}>
        <span className="title">{post.title}</span>
        <img className="img" src={post.img} alt={post.title} />
        <p className="desc">{post.desc}</p>
        <button className="card-btn">Read more</button>
      </Link>
    </div>
  );
}

export default Card;
