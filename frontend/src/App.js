import React from 'react';
import QRCodeGenerator from './QRCodeGenerator';
import qrValueProofRequestExample from './qrValueProofRequestExample.json'

const App = () => {
  return (
    <div>
      <QRCodeGenerator json={qrValueProofRequestExample} />
    </div>
  );
};

export default App;
