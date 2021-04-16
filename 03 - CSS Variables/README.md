## Notes - CSS Variables

This concept was entirely new to me! I was excited to learn about [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), it makes CSS seems much more dynamic than I originally thought CSS was capable of (which seems to be the trend for this series so far).

**CSS**

Essentially, the biggest takeaway is that you can set up your own 'variables' in CSS. It looks like this:

```CSS
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}
```

Then you can dynamically call them throughout your styling. For example, here `padding` is dependent on the `--spacing` variable that we set.

```CSS
img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
```

**JS**

To make the value change dynamically, you'll need the event listener and a function to set the root property according to the current value.

You DON'T need to call the property directly on the element like this:

```javascript
const image = document.querySelector('img');
const spacing = getComputedStyle(image).getPropertyValue('--spacing');
```

Instead, because it's a `:root` property, you can set the style on the [root element](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement) of the document itself:

```javascript
document.documentElement.style.setProperty('--spacing', `${this.value}px`);
```

I separated all of the functions handling input changes, thinking I would need space for each type of input. Soon after I realized how similar they are and could definitely be refactored into one function. The solution video on [JS30](https://courses.wesbos.com/account/access/6075ba1a75ff3a25a5c45309/view/194130480) confirms this if you want to see how that looks!
