import './App.css';
function GreetingElement() {
    const greeting = "Hello Function Component";
    return(
        <div class="App">
            <h1>
                {greeting} 
            </h1>
        </div>
    );
}

export default GreetingElement;