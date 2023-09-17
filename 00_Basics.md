# What si JavaScript
> popular programing/Scripting language // [Note-05]
- client side scripting // [Note-01]
- Interpreted language  // [Note-02]
- Object-Oriented language
- can be executed on server side using Node.js


# Were is JavaScript used
- Web/Mobile application
- Real-time Networking 
- Command line tools
- Game 
- etc.

# Where does JavaScript code runs
- browser
- >  JavaScript Engine
- >  FireFox: SpiderMonkey
- >  Chrome: v8
- >  Node: v8


# JavaScript vs ECMAScript?
ECMAScript      JavaScript
Specification   Programming Language 

- JavaScript build on the basis of ECMAScript
- ECMA is an organization


# js example
```JavaScript
const x = 'world';
console.log("hello " + x);
```

# where to add JavaScript 

> The placement and loading strategy of JavaScript files can significantly impact the Critical Rendering Path (CRP) and the perceived performance of your web page. // [Note-03]

> can be added in three ways
> - within the < head>
> - within the < body>
> - link external js files.

## in Head
- when you need to include inline scripts that run as soon as they are encountered during the HTML parsing process.
- This is suitable for small scripts or scripts that initialize variables or functions used later in the document.
- It's important to note that scripts in the < head> can potentially block the rendering of the page until they are loaded and executed. To mitigate this, you can use the **async** or **defer** attributes.

## in Body
- end of the body ; so that it execute after loding the page
- This is suitable for scripts that manipulate the DOM or require access to elements defined in the HTML.
- 

## external js
- For larger and reusable scripts, it's a best practice to place the code in external JavaScript files
- External files can be cached by the browser, resulting in faster loading for subsequent visits to your site.
- Use the async or defer attributes when including scripts in the < head> to control how they are loaded and executed.
- add that to html ; most of the case at the end of body
- 
```html
<html>
<head> <head>
<body>
<h1>This is html file</h1>

<script>
    console.log("Hello");
</script>
<script src="jsfile.js"></script>
<body>
<html>
```
### Best practice

- Wrap your code in event listeners like DOMContentLoaded or use modern techniques like async/await to ensure scripts run at the right time

> Difference between async and defer; (both are *Non-Blocking*)
> 1. **Defer attribute :** it tells the browser to download the script in the background while parsing the HTML content.
> - script execution is deferred until after the HTML parsing is complete but before the DOMContentLoaded event is fired.
> -  Use defer when you want to ensure that your script is executed in the order it appears in the document, and you want it to run after the HTML has been parsed but before the DOMContentLoaded event. // [Note-04]
> 
> 2. **Async Attribute :** it tells the browser to download the script in the background while parsing the HTML content,
> - Scripts with the async attribute are executed as soon as they are downloaded and ready, which means they may not run in the order they appear in the document.

> **Delay Loading (Lazy Loading) (Non-Blocking):
> - You can delay the loading of JavaScript files until they are explicitly needed by the user. This is known as lazy loading.
> - use techniques like dynamically creating script elements or using the import() function (for ES6 modules) to load scripts on-demand.

<br/><br/><br/>
<hr/>
<hr/>
<br/><br/><br/>

### Notes

[Note-01]: 
- *Scripting Language:* A scripting language is a programming language that is designed for scripting. Unlike compiled languages, where code is translated into machine code before execution, scripts are typically interpreted at runtime. JavaScript, Python, Perl, and Ruby are examples of scripting languages.
  

[Note-02]:
- JavaScript is primarily an interpreted language. When you write JavaScript code, it is executed by a JavaScript engine in a web browser or a server-side environment like Node.js. The JavaScript engine reads the code line by line and executes it without a separate compilation step.
- However, modern JavaScript engines often use **Just-In-Time (JIT)** compilation techniques to optimize and speed up the execution of JavaScript code. This means that the JavaScript code is compiled into machine code just before it is executed,

> How does JIT Works
> - In a purely interpreted language, like traditional JavaScript, the code is executed line by line by an interpreter. This can be relatively **slow because the interpreter has to analyze and execute each line of code** as it encounters it.
> - With JIT compilation, the code is initially interpreted but is also analyzed by the JIT compiler. The JIT compiler identifies portions of the code that are frequently executed or **"hot" code paths**.
> - JIT compiler **optimizes these hot code paths.** It may perform various optimizations like inlining functions, eliminating redundant code, and reordering instructions to make the code more efficient.
> - **generates machine code for the optimized hot code paths.** This machine code can be executed directly by the CPU, which is much **faster than interpreting** it
> - To further speed up execution, the generated machine code is often cached.

[Note-03]: 
- CRP stands for Critical Rendering Path, which is a concept in web performance optimization that refers to the sequence of steps the browser takes to convert an HTML document into a fully rendered page on the user's screen. 
- By optimizing the CRP, web developers can ensure that the most important content is displayed quickly, providing a better user experience and improving the overall performance of their websites.



[Note-04]: 
> **DOMContentLoaded event:**
- The DOMContentLoaded event is an important event in web development that is fired by a web browser when the HTML document has been completely loaded and parsed.
- external resources such as stylesheets and images may not have finished downloading and rendering.
- This event is part of the Document Object Model (DOM) API and is often used in JavaScript to execute code once the HTML document's structure is ready to be manipulated.

```javascript
document.addEventListener('DOMContentLoaded', function () {
  // Your code to manipulate the DOM or perform other actions
});
```

[Note-05]:
> JavaScript is programing as well as scripting languages

### Programing language vs Scripting language

> Programing language
> - use for development work
> - code get **compiled** into binary or machine code.
> - it can be used to create complex, large-scale applications. It supports features like variables, data types, functions, loops, and objects, which are characteristic of programming languages. 

> Scripting language
> - use for Automatiopn work
> - code is executed line by line by an **interpreter**.
> - used for scripting tasks. In this context, it is used to make web pages interactive by manipulating the Document Object Model (DOM), handling events, and responding to user actions.
> - Scripting tasks generally refer to smaller-scale, specific actions or processes that are automated or controlled using scripts.


[Note]: Python is typically classified as a high-level scripting language