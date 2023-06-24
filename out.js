first_block
	if (depth === 0 || gameOver(node)) {
		return {value: heuristic(), state: node};
	}
 

if_block
	if (maximizingPlayer) {
	} else {
	}

maximizing_block
		let value = -Infinity;
		let state = null;
		for (const child of moves(node)) {
			const {value: newValue, state: newState} = minimax(child, depth - 1, false);
			state = value > newValue ? state : newState
			value = Math.max(value, newValue)
		}
		return {value, state};

minimizing_block
		let value = -Infinity;
		let state = null;
		for (const child of moves(node)) {
			const {value: newValue, state: newState} = minimax(child, depth - 1, false);
			state = value > newValue ? state : newState
			value = Math.max(value, newValue)
		}
		return {value, state};

function fragmentFromString(strHTML) {
	return document.createRange().createContextualFragment(strHTML);
}

const first_block = ["<div class=\"line\"><span style=\"color: #D4D4D4\">\t</span><span style=\"color: #C586C0\">if</span><span style=\"color: #D4D4D4\"> (</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>parameter</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>depth</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>number</span></span></code></pre>\">depth</data-lsp></span><span style=\"color: #D4D4D4\"> === </span><span style=\"color: #B5CEA8\">0</span><span style=\"color: #D4D4D4\"> || </span><span style=\"color: #DCDCAA\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>function</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #DCDCAA&quot;>gameOver</span><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>node</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;>): </span><span style=&quot;color: #4EC9B0&quot;>boolean</span></span></code></pre>\">gameOver</data-lsp></span><span style=\"color: #D4D4D4\">(</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>parameter</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>node</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>Node</span></span></code></pre>\">node</data-lsp></span><span style=\"color: #D4D4D4\">)) {</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t</span><span style=\"color: #C586C0\">return</span><span style=\"color: #D4D4D4\"> {</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>property</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>number</span></span></code></pre>\">value</data-lsp>:</span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #DCDCAA\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>function</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #DCDCAA&quot;>heuristic</span><span style=&quot;color: #D4D4D4&quot;>(): </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">heuristic</data-lsp></span><span style=\"color: #D4D4D4\">(), </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>property</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>state</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;> | </span><span style=&quot;color: #569CD6&quot;>null</span></span></code></pre>\">state</data-lsp>:</span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>parameter</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>node</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>Node</span></span></code></pre>\">node</data-lsp></span><span style=\"color: #D4D4D4\">};</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t}</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\"> </span></div>"]

const if_block = ["<div class=\"line\"><span style=\"color: #D4D4D4\">\t</span><span style=\"color: #C586C0\">if</span><span style=\"color: #D4D4D4\"> (</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>parameter</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>maximizingPlayer</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>boolean</span></span></code></pre>\">maximizingPlayer</data-lsp></span><span style=\"color: #D4D4D4\">) {</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t} </span><span style=\"color: #C586C0\">else</span><span style=\"color: #D4D4D4\"> {</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t}</span></div>"]

const maximizing_block = ["<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t</span><span style=\"color: #569CD6\">let</span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\"> = -</span><span style=\"color: #569CD6\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>var</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>Infinity</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">Infinity</data-lsp></span><span style=\"color: #D4D4D4\">;</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t</span><span style=\"color: #569CD6\">let</span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>state</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>any</span></span></code></pre>\">state</data-lsp></span><span style=\"color: #D4D4D4\"> = </span><span style=\"color: #569CD6\">null</span><span style=\"color: #D4D4D4\">;</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t</span><span style=\"color: #C586C0\">for</span><span style=\"color: #D4D4D4\"> (</span><span style=\"color: #569CD6\">const</span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #4FC1FF\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>child</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span></span></code></pre>\">child</data-lsp></span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #569CD6\">of</span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #DCDCAA\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>function</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #DCDCAA&quot;>moves</span><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>node</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;>): </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;>[]</span></span></code></pre>\">moves</data-lsp></span><span style=\"color: #D4D4D4\">(</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>parameter</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>node</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>Node</span></span></code></pre>\">node</data-lsp></span><span style=\"color: #D4D4D4\">)) {</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t\t</span><span style=\"color: #569CD6\">const</span><span style=\"color: #D4D4D4\"> {</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>property</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\">: </span><span style=\"color: #4FC1FF\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>newValue</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">newValue</data-lsp></span><span style=\"color: #D4D4D4\">, </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>property</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>state</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;> | </span><span style=&quot;color: #569CD6&quot;>null</span></span></code></pre>\">state</data-lsp></span><span style=\"color: #D4D4D4\">: </span><span style=\"color: #4FC1FF\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>newState</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;> | </span><span style=&quot;color: #4EC9B0&quot;>null</span></span></code></pre>\">newState</data-lsp></span><span style=\"color: #D4D4D4\">} = </span><span style=\"color: #DCDCAA\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>function</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #DCDCAA&quot;>minimax</span><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>node</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;>, </span><span style=&quot;color: #9CDCFE&quot;>depth</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span><span style=&quot;color: #D4D4D4&quot;>, </span><span style=&quot;color: #9CDCFE&quot;>maximizingPlayer</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>boolean</span><span style=&quot;color: #D4D4D4&quot;>): </span><span style=&quot;color: #4EC9B0&quot;>IdealMove</span></span></code></pre>\">minimax</data-lsp></span><span style=\"color: #D4D4D4\">(</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>child</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span></span></code></pre>\">child</data-lsp></span><span style=\"color: #D4D4D4\">, </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>parameter</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>depth</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>number</span></span></code></pre>\">depth</data-lsp></span><span style=\"color: #D4D4D4\"> - </span><span style=\"color: #B5CEA8\">1</span><span style=\"color: #D4D4D4\">, </span><span style=\"color: #569CD6\">false</span><span style=\"color: #D4D4D4\">);</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t\t</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>state</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>any</span></span></code></pre>\">state</data-lsp></span><span style=\"color: #D4D4D4\"> = </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\"> &gt; </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>newValue</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">newValue</data-lsp></span><span style=\"color: #D4D4D4\"> ? </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>state</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;> | </span><span style=&quot;color: #4EC9B0&quot;>null</span></span></code></pre>\">state</data-lsp></span><span style=\"color: #D4D4D4\"> : </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>newState</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;> | </span><span style=&quot;color: #4EC9B0&quot;>null</span></span></code></pre>\">newState</data-lsp></span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t\t</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\"> = </span><span style=\"color: #4EC9B0\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>var</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>Math</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Math</span></span></code></pre>\">Math</data-lsp></span><span style=\"color: #D4D4D4\">.</span><span style=\"color: #DCDCAA\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>method</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #4EC9B0&quot;>Math</span><span style=&quot;color: #D4D4D4&quot;>.</span><span style=&quot;color: #DCDCAA&quot;>max</span><span style=&quot;color: #D4D4D4&quot;>(...</span><span style=&quot;color: #9CDCFE&quot;>values</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>number</span><span style=&quot;color: #D4D4D4&quot;>[]): </span><span style=&quot;color: #9CDCFE&quot;>number</span></span></code></pre>\">max</data-lsp></span><span style=\"color: #D4D4D4\">(</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\">, </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>newValue</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">newValue</data-lsp></span><span style=\"color: #D4D4D4\">)</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t}</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t</span><span style=\"color: #C586C0\">return</span><span style=\"color: #D4D4D4\"> {</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>property</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\">, </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>property</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>state</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;> | </span><span style=&quot;color: #569CD6&quot;>null</span></span></code></pre>\">state</data-lsp></span><span style=\"color: #D4D4D4\">};</span></div>"]

const minimizing_block = ["<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t</span><span style=\"color: #569CD6\">let</span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\"> = -</span><span style=\"color: #569CD6\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>var</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>Infinity</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">Infinity</data-lsp></span><span style=\"color: #D4D4D4\">;</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t</span><span style=\"color: #569CD6\">let</span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>state</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>any</span></span></code></pre>\">state</data-lsp></span><span style=\"color: #D4D4D4\"> = </span><span style=\"color: #569CD6\">null</span><span style=\"color: #D4D4D4\">;</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t</span><span style=\"color: #C586C0\">for</span><span style=\"color: #D4D4D4\"> (</span><span style=\"color: #569CD6\">const</span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #4FC1FF\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>child</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span></span></code></pre>\">child</data-lsp></span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #569CD6\">of</span><span style=\"color: #D4D4D4\"> </span><span style=\"color: #DCDCAA\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>function</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #DCDCAA&quot;>moves</span><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>node</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;>): </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;>[]</span></span></code></pre>\">moves</data-lsp></span><span style=\"color: #D4D4D4\">(</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>parameter</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>node</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>Node</span></span></code></pre>\">node</data-lsp></span><span style=\"color: #D4D4D4\">)) {</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t\t</span><span style=\"color: #569CD6\">const</span><span style=\"color: #D4D4D4\"> {</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>property</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\">: </span><span style=\"color: #4FC1FF\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>newValue</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">newValue</data-lsp></span><span style=\"color: #D4D4D4\">, </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>property</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>state</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;> | </span><span style=&quot;color: #569CD6&quot;>null</span></span></code></pre>\">state</data-lsp></span><span style=\"color: #D4D4D4\">: </span><span style=\"color: #4FC1FF\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>newState</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;> | </span><span style=&quot;color: #4EC9B0&quot;>null</span></span></code></pre>\">newState</data-lsp></span><span style=\"color: #D4D4D4\">} = </span><span style=\"color: #DCDCAA\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>function</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #DCDCAA&quot;>minimax</span><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>node</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;>, </span><span style=&quot;color: #9CDCFE&quot;>depth</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span><span style=&quot;color: #D4D4D4&quot;>, </span><span style=&quot;color: #9CDCFE&quot;>maximizingPlayer</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>boolean</span><span style=&quot;color: #D4D4D4&quot;>): </span><span style=&quot;color: #4EC9B0&quot;>IdealMove</span></span></code></pre>\">minimax</data-lsp></span><span style=\"color: #D4D4D4\">(</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>child</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span></span></code></pre>\">child</data-lsp></span><span style=\"color: #D4D4D4\">, </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>parameter</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>depth</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>number</span></span></code></pre>\">depth</data-lsp></span><span style=\"color: #D4D4D4\"> - </span><span style=\"color: #B5CEA8\">1</span><span style=\"color: #D4D4D4\">, </span><span style=\"color: #569CD6\">false</span><span style=\"color: #D4D4D4\">);</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t\t</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>state</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>any</span></span></code></pre>\">state</data-lsp></span><span style=\"color: #D4D4D4\"> = </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\"> &gt; </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>newValue</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">newValue</data-lsp></span><span style=\"color: #D4D4D4\"> ? </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>state</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;> | </span><span style=&quot;color: #4EC9B0&quot;>null</span></span></code></pre>\">state</data-lsp></span><span style=\"color: #D4D4D4\"> : </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>newState</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;> | </span><span style=&quot;color: #4EC9B0&quot;>null</span></span></code></pre>\">newState</data-lsp></span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t\t</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\"> = </span><span style=\"color: #4EC9B0\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>var</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>Math</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>Math</span></span></code></pre>\">Math</data-lsp></span><span style=\"color: #D4D4D4\">.</span><span style=\"color: #DCDCAA\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>method</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #4EC9B0&quot;>Math</span><span style=&quot;color: #D4D4D4&quot;>.</span><span style=&quot;color: #DCDCAA&quot;>max</span><span style=&quot;color: #D4D4D4&quot;>(...</span><span style=&quot;color: #9CDCFE&quot;>values</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>number</span><span style=&quot;color: #D4D4D4&quot;>[]): </span><span style=&quot;color: #9CDCFE&quot;>number</span></span></code></pre>\">max</data-lsp></span><span style=\"color: #D4D4D4\">(</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>let</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #9CDCFE&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\">, </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #569CD6&quot;>const</span><span style=&quot;color: #D4D4D4&quot;> </span><span style=&quot;color: #4FC1FF&quot;>newValue</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #4EC9B0&quot;>number</span></span></code></pre>\">newValue</data-lsp></span><span style=\"color: #D4D4D4\">)</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t}</span></div>","<div class=\"line\"><span style=\"color: #D4D4D4\">\t\t</span><span style=\"color: #C586C0\">return</span><span style=\"color: #D4D4D4\"> {</span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>property</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>value</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>number</span></span></code></pre>\">value</data-lsp></span><span style=\"color: #D4D4D4\">, </span><span style=\"color: #9CDCFE\"><data-lsp lsp=\"<pre class=&quot;shiki&quot; style=&quot;background-color: #1E1E1E&quot;><code><span class=&quot;line&quot;><span style=&quot;color: #D4D4D4&quot;>(</span><span style=&quot;color: #9CDCFE&quot;>property</span><span style=&quot;color: #D4D4D4&quot;>) </span><span style=&quot;color: #C8C8C8&quot;>state</span><span style=&quot;color: #D4D4D4&quot;>: </span><span style=&quot;color: #9CDCFE&quot;>Node</span><span style=&quot;color: #D4D4D4&quot;> | </span><span style=&quot;color: #569CD6&quot;>null</span></span></code></pre>\">state</data-lsp></span><span style=\"color: #D4D4D4\">};</span></div>"].map(fragmentFromString);

const steps = [
{
		forward: async () => {
			await push(1, first_block)
			focusLine(2); focusToken(2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
		},
		backward: async () => {
			remove(2, 3, 4, 5)
			defocus()
		}
	},
{
		forward: async () => {
			defocus()
			focusLine(3)
		},
		backward: async () => {
			focus*(2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
		}
	},
{
		forward: async () => {
			defocus()
			await push(5, if_block)
		},
		backward: async () => {
			remove(6, 7, 8)
			focus(3)
		}
	},
{
		forward: async () => {
			focusLine(1); focusToken(1, 13, 14, 15)
			focusLine(6); focusToken(6, 4)
		},
		backward: async () => {
			defocus()
		}
	},
{
		forward: async () => {
			await push(6, maximizing_block)
		},
		backward: async () => {
			remove(7, 8, 9, 10, 11, 12, 13, 14)
			focus*(1, 13, 14, 15)
			focus*(6, 4)
		}
	},
{
		forward: async () => {
			await push(15, maximizing_block)
		},
		backward: async () => {
			remove(16, 17, 18, 19, 20, 21, 22, 23)
		}
	},

]