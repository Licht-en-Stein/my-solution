import React, { Component } from 'react';
import { Header, Grid } from "semantic-ui-react";


class Dashboard extends Component {

  // Ich war mal so frei und hab das Objekt in den state gepackt.
  state = {
      user: {
        "documents": [{
          "fileKey": "1528447500347_S14GfpPe7_2018_FB1_ab2016.pdf",
          "fileName": "1528447500347_S14GfpPe7_2018_FB1_ab2016.pdf",
          "publicUrl": "/s3/uploads/xxx.pdf",
          "documentType": "contract",
          "createdAt": {
            "$date": "2018-06-08T08:45:01.535Z"
          },
          "isValidated": false,
          "template": "2018_FB1_ab2016.pdf",
          "_id": {
            "$oid": "5b1a420d5ff28f00148007e6"
          }
        },
           {
             "fileKey": "1528447500347_S14GfpPe7_2018_FB1_ab2016.pdf",
             "fileName": "1528447500347_S14GfpPe7_2018_FB1_ab2016.pdf",
             "publicUrl": "/s3/uploads/xxx.pdf",
             "documentType": "none",
             "createdAt": {
               "$date": "2018-06-08T08:45:01.535Z"
             },
             "isValidated": false,
             "template": "2018_FB1_ab2016.pdf",
             "_id": {
               "$oid": "5b1a420d5ff28f00148007e6"
             }
           },  
  
        ],
      }
  
    }

  
  
  
  renderContract = () => {
  }


  render() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (
      <div className="contracts-container">
        <div className="content">
          <Header as="h1">Deine Verträge</Header>
          <p>
            Schau dir die Verträge ganz in Ruhe an und wenn du all Punkte
            verstanden hast, dann fehlt nur noch deine Unterschrift
            darunter.
        </p>
          <Grid doubling columns={3} relaxed>
            {this.state.user.documents.filter(doc => {
            {/* Hier wird gefiltert */}
              if (doc.documentType === 'contract') {
                {/* Existiert unter documentType 'contract' wird die Funktion ausggeführt */ }
                this.renderContract()
              }
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Dashboard;

// zeitlich hab ich die reduce method etc. nicht geschafft, da ich einige Zeit mit mobx zugange war.
