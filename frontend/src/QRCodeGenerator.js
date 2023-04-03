import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ json }) => {
  const qrData = JSON.stringify(json);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <QRCode value={qrData} size={512}/>
    </div>
  );
};

export default QRCodeGenerator;
