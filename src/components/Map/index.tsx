import React from 'react'
import GoogleMapReact from 'google-map-react'

import pin from '../../assets/pin.svg'
import { Container, Title } from './styles'

const location = {
    address: 'R. Silva Jardim, 644 - centro, Viçosa do Ceará - CE, 62300-000',
    center: {
        lat: -3.5635905847410134,
        lng: -41.09023348098478
    }
}

export const Map = () => (
  <Container>
    <Title>
      Acesso à pousada
    </Title>
    <div style={{ height: '390px', width: '541px', marginTop: '12px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBKObdVgdAYJzPqw8nM5ZFzBBp0TTxaeZU" }}
        defaultCenter={location.center}
        defaultZoom={18}
        >
        <div>
          <img src={pin} alt="marker" />
        </div>
      </GoogleMapReact>
    </div>
  </Container>
)