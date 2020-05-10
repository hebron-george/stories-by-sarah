import React from 'react';

export default function StoryCard(props) {
  return(
    <div className="column is-one-third">
      <div className="card is-slightly-rounded">
        <div className="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder">
            </img>
          </figure>
        </div>
        <div className="card-content">
          <div className="title has-text-centered has-text-primary">
            {props.story.storyTitle}
          </div>
          <p className="subtitle">
            {props.story.description}
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <div class="buttons">
              <button class="button is-primary">READ NOW</button>
            </div>
          </p>
        </footer>
      </div>
    </div>
  );
}