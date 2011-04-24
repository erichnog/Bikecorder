// Value of the line-height CSS property for the textarea.
var TEXTAREA_LINE_HEIGHT = 13;

function grow(event) {
    var textarea = event.target;
    var newHeight = textarea.scrollHeight;
    var currentHeight = textarea.clientHeight;

    if (newHeight > currentHeight) {
        textarea.style.height = newHeight + 5 * TEXTAREA_LINE_HEIGHT + 'px';
    }
}
