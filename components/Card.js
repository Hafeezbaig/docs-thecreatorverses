// components/Card.js

export default function Card({ title, url }) {
    return (
      <div className="card">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <span>{title}</span>
        )}
      </div>
    );
  }
  