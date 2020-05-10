import React from 'react';
import StoryCard from './StoryCard';

export default function AllStories() {
  const fakeData = [
    {
      storyTitle: "Story #1",
      description: "This is a story about a different planet far away",
    },
    {
      storyTitle: "Story #2",
      description: "This is a story about the fastest bird in the world",
    },
    {
      storyTitle: "Story #3",
      description: "This is a story a person who could talk to animals",
    },
    {
      storyTitle: "Story #4",
      description: "This is a story about the number 18",
    },
    {
      storyTitle: "Story #5",
      description: "This is a story about lion who liked to dance",
    },
    {
      storyTitle: "Story #6",
      description: "This is a story about lion who liked to dance",
    },
    {
      storyTitle: "Story #7",
      description: "This is a story about lion who liked to dance",
    },
    {
      storyTitle: "Story #8",
      description: "This is a story about lion who liked to dance",
    },
    {
      storyTitle: "Story #9",
      description: "This is a story about lion who liked to dance",
    },
    {
      storyTitle: "Story #10",
      description: "This is a story about lion who liked to dance",
    },
  ];

  return(
    <>
      <section class="section">
        <div class="container">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>

      <div className="columns is-multiline">
        {fakeData.map(story =>
            <StoryCard story={story} />
          )
        }
      </div>
    </>
  )
}
