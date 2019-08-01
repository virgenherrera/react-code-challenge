This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## The Challenge
Using the `date`, `input`,`multiply` and `pow` components, implement the following behavior:

### `Input Component`
It will be in charge of capturing and validate user data then if data is valid or deleted issuing (Emit) data, and also must to fulfill the following behaviours:
* validate that only number is accepted in the input when the data entered is not a number
  *  Add `is-invalid` class to `[input]`.
  * show `div.error-message` element and add `invalid-feedback`class to it.
* the "Reset" button will be able to clean the input, and also clean validation error if any.

### `Multiply Component`
It will receive the value emitted by the `Input Component` and implement the following behaviors:
* If the value to be received is not a number, __do not draw__ this component in the DOM.
* multiply the value received by 2 (n*2) and display it in the component.


### `Pow Component`:
It will receive the value issued by the `Input Component` and implement the following behaviors:
* If the value to be received is not a number, __do not draw__ this component in the DOM.
* raise the value received by its same value (n ^ n) and display it in the component.v

### `Date Component`
It will receive the value issued by the `Input Component` and implement the following behaviors:
* If the value to be received is not a number, __do not draw__ this component in the DOM.
* convert the received value to a date in the format 'YYYY/MM/DD HH:MM' and display it in the component.
