import React from 'react';
import Story from './Story';

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
      <div className="columns is-multiline">
        {fakeData.map(story =>
            <Story story={story} />
          )
        }
      </div>
    </>
  )
}
