
function onSubmit() {
    document.getElementById('submit').addEventListener('click', e => {
        if (this.validateNameField()) {
            alert("send form")
        } else {
            alert("NOT sent")
        }
        NodeIterator;
    })
}
onSubmit();
function validateNameField() {
    const nameField = document.getElementById('name');
    if (nameField.value.length < 3 || nameField.value.length > 50) {
        // nameField.classList.add('error');
        nameField.setCustomValidity('Please enter a value between 4 and 50 characters');
        return false
    }
    nameField.setCustomValidity("");
    return true;
}

// == get the value of the global variable scrolled
// let scrolled = false;

// function callingScroll() {
//     window.addEventListener('scroll', e => {
//         this.console.log('scrolling')
//         scrolled = true;
//         console.log(scrolled)
//     })
// }
// callingScroll()
// const vm = this;
// console.log(vm.scrolled)

// function getScrolledValue() {
//     console.log('getValue' + scrolled)
//     return scrolled;
// }
// getScrolledValue();

// exercise: create form with name email phone fields. name between 4 and 50 char. Phone only numbers. Email required. Color fields according if they're ok. change default messages for user friendly messages.
