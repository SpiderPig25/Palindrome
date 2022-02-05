// if you press enter key trigger
var input = document.getElementById("textBox");
        input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("btn").click();
            }
        });
        
// palindrome form and buttons
document.getElementById("btn").addEventListener("click",function(){
    let txt = document.getElementById("textBox").value;
    checkPalindrome(txt);
});

// palindrome functions and script para ma trigger ang code
function checkPalindrome(txt){
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = txt_new.length;
    let halfLen = Math.floor( len/2 );
    let result =document.getElementById("result");
    let i;

    // loop to check if palindrome is good or nah!
    for( i = 0; i < halfLen; i++){
        if( txt_new[i] !== txt_new[len-1-i]){
            result.textContent = "Nope! Not a palindrome";
            return;
        }
        result.textContent = "Yes! It's a palindrome"
    }
}
