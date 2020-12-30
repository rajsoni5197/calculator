let displayCurrent = document.querySelector('.current');
let displayLast = document.querySelector('.last');
let bodyButtons = document.getElementById('body-buttons')



let calFunction = {//object to hold all function of the calculator.
    
    current: displayCurrent,
    last: displayLast,

    //function to calculate result
    calculate(equation){
       console.log( typeof eval(equation))
       if(eval(equation)%1==0) return eval(equation);
       return eval(equation).toFixed(3);
    },

    //function to add no. to display
    addToCurrent(num) {
        if(this.current.innerHTML=='0'&&num!='.')  return this.current.innerHTML=num
        this.current.append(num)
    },

    //function to update last area
    addToLast() {
        this.last.innerHTML = this.current.innerHTML;
        this.last.append('=');
        this.last.classList.add('big')
        setTimeout(() => {
            this.last.classList.remove('big')
        }, 100);
        return;
    },
    //function to clear all content of the display.
    clearDisplay() {
        this.current.innerHTML = '0';
        this.last.innerHTML = '';
        return
    },

    //function to delete one by one
    clear() {
        if (this.current.lastChild) {
            console.log(this.current.lastChild)
            this.current.removeChild(this.current.lastChild)
        }
        return
    },

    //function to check type of button clicked;
    checkButtonType(event) {
        if (event.target == this) return;

        console.log(event.target.className, event.target.innerHTML);
        let content = event.target.className;
        switch (content) {
            case 'buttons operator ac':
                calFunction.clearDisplay();
                break;
            case 'buttons operator ce':
                calFunction.clear();
                break;
            case 'buttons numbers':
                calFunction.addToCurrent(event.target.innerHTML);
                break;
            case 'buttons operator':
                calFunction.addToCurrent(event.target.innerHTML);
                break;
            case 'buttons operator equal':
                calFunction.addToLast(event.target);
                calFunction.current.innerHTML=calFunction.calculate(calFunction.current.innerHTML)
                break;
        }
        return
    }
}

bodyButtons.addEventListener('click', calFunction.checkButtonType)//added eventListener for click.
bodyButtons.addEventListener('touch', calFunction.checkButtonType)//added eventListener for touch.

