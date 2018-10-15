import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Form, Button, Message, Checkbox } from "semantic-ui-react";
import stores from './FatherInfoStore';

const FatherInfo = inject("stores")(
  observer(
    class FatherInfo extends Component {
      constructor(props) {
        super(props);
        this.user = this.props.stores.user;
        this.state = {
          gotContribution = this.user.profile.gotContribution,
          
        }
			}

      handleSubmit(e) {
        e.preventDefault();
			

        this.props.goToNextSegment();
      }

      render() {
        return (
          <Form
            onSubmit={() => this.handleSubmit()}
            id="wizard-segment"
            error={this.state.hasValidationErrors}
          >
            <div class='ui checkbox'>
              <input type='checkbox' class='hidden' readonly='' tabindex='0' />
              <label>Vermögenswirksame Leistungen erhalten</label>
            </div>
          </Form>
        )
      }
    }
  )
)

export default FatherInfo;

// Mit state managemant hab ich bis jetzt noch keine Erahrung. Ich bin nicht wirklich weiter gekommen. Nach meinem Verständnis sind state management frameworks da um Komponenten von ihrer erschwerenden Logik zu entlasten und eine einhaltliche state Koordinierung durch den store zuschaffen. Nach dem Prinzip des MVC wird die Logik extrahiert und steht für sich alleine, genauso wie Model und View. Sehr sinnvoll da es von Hause aus nicht in React existiert und es dadurch schnell unübersichtlich und gerade in Bezug auf den state zu vermehrten Fehlerquellen kommen kann.

/*
Observer: 
Store: hält den echten state, Logik wie z.B beim MVC model, wichtige Elemente die über mehrere Komponenten verteilt werden können.
inject("stores") teilt dem Fatherinfo component den store zu.

*/