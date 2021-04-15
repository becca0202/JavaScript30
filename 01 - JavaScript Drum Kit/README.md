## Notes - JavaScript Drum Kit

First time starting this challenge, so I followed along the videos just to get a sense of what's in the files and how much prompting the tutorials give. The main takeaways from today were key events, playing audio and transition end event listeners.

**HTML**

HTML allows you to create your own attributes by adding `data-*` in front of the new attribute name!

Apparently, the `event.keyCode` used in the original challenge is now [deprecated](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode). I refactored the `data-key` attributes to use `event.code` instead.

**JS**

You can trigger an audio file to play with plain JS by just selecting the audio element and calling `audio.play()`. Pretty simple and great review on how to manipulate DOM elements directly.

We set up an event listener for [transitionend](https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionend_event), which fires when the CSS animation has stopped. Here, the `event.propertyName` will track every property that has changed. Handy for when you want to 'clean up' an animation or manipulate the class further in any way.

Lastly, a small self-reminder that you cannot listen on an array of elements; you must explicitly loop through each element and attach an event listener.

**CSS**

Mainly worked wih the property `transition: all 0.07s ease` where `all` refers to the properties affected, `0.07s` refers to the time lapsed, and `ease` to the speed/pattern of the transition 😊
