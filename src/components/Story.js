import React from 'react';

export default function Story(props) {
  return(
    <div className="is-12-mobile is-6-tablet is-3-desktop">
      <div className="card is-shadowless is-slightly-rounded">
        <div className="card-content">
          <p className="title">
            {props.story.storyTitle}
          </p>
          <p className="subtitle">
            {props.story.description}
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            Footer!
          </p>
        </footer>
      </div>
    </div>
  );
}