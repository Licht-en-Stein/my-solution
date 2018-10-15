import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';


class PersonalInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validationErrors: '',
      toValidate: {}
    }
  }

  handleChange = (e, name, value) => {
    let toValidateNew = this.state.toValidate;
    toValidateNew[name] = value;
    //  hier wird die vorhandene value die im Input Feld getätigt wurde und im state gesetzt wurde, angepasst. Erster Buchstabe groß.
    toValidateNew[name] = toValidateNew[name].substr(0, 1).toUpperCase() + toValidateNew[name].substr(1);

    // Wird im Input Feld etwas anderes als Buchstaben eingegeben, poppt ein alert auf mit dem Hinweis nur Buchstaben zu verwenden. Sonderzeichen und Zahlen sind damit ausgeschlossen und werden nicht im state gesetzt. 
    if (!toValidateNew[name].match(/^[a-zA-Z]+$/)) {
      alert('Stopp, nur Buchstaben bitte!')
    }
    else {  // Ist die Eingabe korrekt wird der state gesetzt. Erster Buchstabe groß.
      this.setState({
        [name]: value,
        toValidate: toValidateNew
      });
    }
  };

  render() {
    return (
      <Form>
        <Input
          // da ich mich die error line etwas neu für mich war und mein code gebrochen hat, ist die line auskommentiert
        //error={"firstName" in this.state.validationErrors}
        fluid
        type="text"
        required
        name="firstName"
        value={this.state.firstName}
        label="Vorname"
        placeholder="Vorname"
        onChange={e =>
          this.handleChange(e, e.target.name, e.target.value)
        }
        />
        <Input
          //error={"firstName" in this.state.validationErrors}
          fluid
          type="text"
          required
          name="lastName"
          value={this.state.lastName}
          label="Nachname"
          placeholder="Nachname"
          onChange={e =>
            this.handleChange(e, e.target.name, e.target.value)
          }
        />
        </Form>
    );
  }
}

export default PersonalInfo;
