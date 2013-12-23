class SnippetConsole {
    recentMessage : string;
    constructor() {
        console.log("constructor");
    }
    log(public message : string) {
    	console.log(message);
    	recentMessage = message;
    	
    	console.log(3);
    }
}

var snippet = new SnippetConsole();
snippet.log("hello world.");