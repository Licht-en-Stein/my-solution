import React, { Component } from 'react';
const dateFormat = require('dateformat');


class Export extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // für das Beispiel hab ich ein inital state erstellt
    }
  }

  handleChange = e => {
    // wenn eine Eingabe im Input Feld getätigt wird, wird erst der vorläufige state gesetzt.
    this.setState({
      date: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // hier passiert die Abfrage: Existiert ein state? Wird der vorhandene vorläufige state mit der dateFormat method angepasst.
    if(this.state.date) {
      this.setState({date: dateFormat(this.state.date, 'd/m/yyyy')})
    } else {  // Existiert kein vorläufiger state, wird keiner gesetzt oder modifiziert.
      return null
    }
  }

  render() {
    return (
      <form className="Export" onSubmit={this.handleSubmit}>
        <label>Birthday</label>
        <input type="date" value={this.state.date} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Export;



// den code snippet hab ich hier abgelegt, da ich erstmal nach meiner methode zu einem Ergebnis kommen wollte.
 /*let formData = {
	  'Formular1[0].Formblatt1_Seite1[0].Geburtsdatum_Eingabe[0]':
			user.profile.birthDate,
	...
}
// Output: Sat Mar 19 1988 00:00:00 GMT
*/