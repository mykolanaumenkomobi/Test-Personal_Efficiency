
function removeLastChild() {

    var body = document.getElementById("body"),
        buttonRej = body.lastChild;

	if (buttonRej != null) {
		body.removeChild(buttonRej);       // удаление выбранного элемета из DOM дерева.
	};

}
