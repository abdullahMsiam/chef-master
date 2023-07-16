import React from 'react';

const Blog = () => {
    return (
        <div className='p-3'>
            <h5>1. Tell us the differences between uncontrolled and controlled components.</h5>
            <p>
                Uncontrolled components rely on the DOM for state management, while controlled components have their state managed by React.</p>
            <h5>2. How to validate React props using PropTypes</h5>
            <p>
                To validate React props using PropTypes, import the 'prop-types' library and define the expected type and optional constraints for each prop using the 'propTypes' object in the component</p>
            <h5>3. Tell us the difference between nodejs and express js.</h5>
            <p>Node.js is a runtime environment that allows executing JavaScript code outside the browser. Express.js is a web application framework built on top of Node.js, providing additional features and abstractions for building web servers and APIs more easily and efficiently.</p>
            <h5>4. What is a custom hook, and why will you create a custom hook?</h5>
            <p>A custom hook is a reusable function in React that allows you to extract component logic into a separate function. It helps in sharing stateful logic between components, promoting code reusability, and making the codebase more maintainable and modular.</p>
        </div>
    );
};

export default Blog;