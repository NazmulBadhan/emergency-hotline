<!-- question 1 -->
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is - with getElementById we can get only one element with an id and it returns a single element object or null if no elements with the id is found, with getElementsByClassName we can get multiple elements with the same class and returns a live HTML collection of elements, with querySelector we can get the first element with a css selector and returns a single element object or null if no matching elements with the selector is found, with querySelectorAll we can get all the elements with a css selector and it returns and a static NodeList of elements.

<!-- question 2 -->
2.How do you create and insert a new element into the DOM?
Ans: By document.createElement() a new element is created and to insert the element appendChild() is used.

<!-- question 3 -->
3.What is Event Bubbling and how does it work?
Ans: Event bubbling is a mechanism of Javascript in web browsers where an event propagates upwards from the current or target element to its parent elements in the DOM. When an event occurs on an element it's event handler is triggered and the event bubbles up the DOM tree to parent elements and then the parent's parent elements and so on. It continues untill it reaches the root of the document. It allows parent elements to respond to the events that happened on their child elements.

<!-- question 4-->
4.What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is a pattern for handling events efficiently. Rather than adding an event listener for every similar element, we can add an event listener to the parent element and call an event on a specific target using (.target) property of the event object. It improves performance and scalability of the code by reducing the number of event listeners and memory usage and simplifies the code. Moreover, it automatically handles dynamically added or removed elements without new event listeners to be added for each new element.

<!-- question 5 -->
5.What is the difference between preventDefault() and stopPropagation() methods?
Ans: The difference is - preventDefault() prevents the default action the browser makes on an event and stopPropagation() prevents further propagation of the current event in the capturing and bubbling phases.