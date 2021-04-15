## Notes - JS and CSS Clock

This one went quick - I remember doing something similar in my Grace Hopper interview! It was a great reminder to take stock on how much I've learned in the past few months. I tried this challenge mostly on my own, with hints from the video on how to manipulate the CSS. Takeaways were using `transform` to animate a rotating object in CSS, and thinking through how to calculate the correct position on the clock face using `Date.now()`.

**JS**

- Used `Date.now()` and `.getHours/Minutes/Seconds()` to grab the current time and calculate each hand's position on the clock.

- Also set an interval to update every second!

**CSS**

- Saw `transition` again, this time by playing around with cubic-bezier to adjust the 'feel' of the clock ticking. I actually preferred the smooth tranistions, so I just specified the timing function as `ease`. 😊

Nice to see how much we can actually do with plain CSS! I've spent so much time looking at animating libraries and this was refreshing.
