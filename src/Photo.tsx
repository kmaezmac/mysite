import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Leaflet from 'leaflet';
import './App.css';

export const Photo: React.VFC = () => {
  let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
    popupAnchor: [0, -32],
  });
  Leaflet.Marker.prototype.options.icon = DefaultIcon;
  return (
    <div>
      <h1>Photos</h1>
      <MapContainer center={[48.20478508986402, 5.945932085741277]} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.3814275830493, 4.900583926574929]}>
          <Popup>
            <a href="https://photos.app.goo.gl/a3HGbPou9aBqNZCR6" target="_blank">Amsterdam</a>
          </Popup>
        </Marker>
        <Marker position={[45.48980346888918, 9.2056993937757]}>
          <Popup>
            <a href="https://photos.app.goo.gl/PqauaYQzMiv2xqee8" target="_blank">Milan</a>
          </Popup>
        </Marker>
        <Marker position={[45.444020523220274, 12.32224522454423]}>
          <Popup>
            <a href="https://photos.app.goo.gl/vK4fv8TF5dtkwWyV8" target="_blank">Venice</a>
          </Popup>
        </Marker>
        <Marker position={[43.77884880168604, 11.247624923458512]}>
          <Popup>
            <a href="https://photos.app.goo.gl/57VzyVM6ViBZSwy16" target="_blank">Florence</a>
          </Popup>
        </Marker>
        <Marker position={[41.903100704540954, 12.501517373174647]}>
          <Popup>
            <a href="https://photos.app.goo.gl/CJdGkHHyt7WKD2hc6" target="_blank">Rome</a>
          </Popup>
        </Marker>
        <Marker position={[40.40527197320427, -3.6883018726671737]}>
          <Popup>
            <a href="https://photos.app.goo.gl/6nghddeqsPWds6V3A" target="_blank">Madrid</a>
          </Popup>
        </Marker>
        <Marker position={[41.37919578985459, 2.1398861408420786]}>
          <Popup>
            <a href="https://photos.app.goo.gl/HJpH6HUcsXBGYhit8" target="_blank">Barcelona</a>
          </Popup>
        </Marker>
        <Marker position={[51.500703943242634, -0.1248108766742351]}>
          <Popup>
            <a href="https://photos.app.goo.gl/deptum9AaLGQgp427" target="_blank">London</a>
          </Popup>
        </Marker>
        <Marker position={[53.477640079833364, -2.231231073636875]}>
          <Popup>
            <a href="https://photos.app.goo.gl/11hxY36DUVwsy1ko9" target="_blank">Manchester</a>
          </Popup>
        </Marker>
        <Marker position={[43.30345878767967, 5.384335015730983]}>
          <Popup>
            <a href="https://photos.app.goo.gl/RvQBLDsrtaz5biBRA" target="_blank">Marseille</a>
          </Popup>
        </Marker>
        <Marker position={[48.63611831739449, -1.511129611110623]}>
          <Popup>
            <a href="https://photos.app.goo.gl/h4ozk5LuXP9HkBbb8" target="_blank">Rennes</a>
          </Popup>
        </Marker>
        <Marker position={[48.857887704867004, 2.2945053733340743]}>
          <Popup>
            <a href="https://photos.app.goo.gl/jiFwgPXdtrwaZRKp9" target="_blank">Paris</a>
          </Popup>
        </Marker>
        <Marker position={[50.926690206516625, 11.588368877250739]}>
          <Popup>
            <a href="https://photos.app.goo.gl/pgbZVERkynoEc9hL6" target="_blank">Jena</a>
          </Popup>
        </Marker>
        <Marker position={[48.145766764163696, 11.561321423888892]}>
          <Popup>
            <a href="https://photos.app.goo.gl/Lhy3hCUEY7bYt7mD8" target="_blank">Munich</a>
          </Popup>
        </Marker>
        <Marker position={[51.0470865080353, 13.730389121809985]}>
          <Popup>
            <a href="https://photos.app.goo.gl/46ZkBM5MZxEk53n36" target="_blank">Dresden</a>
          </Popup>
        </Marker>
        <Marker position={[51.52277278280875, 7.458728879087795]}>
          <Popup>
            <a href="https://photos.app.goo.gl/Ht3iLbWddqNRqd6bA" target="_blank">Dortmund</a>
          </Popup>
        </Marker>
        <Marker position={[50.108657514254574, 8.661383175167078]}>
          <Popup>
            <a href="https://photos.app.goo.gl/f8DnQFpSVCyfbGTz8" target="_blank">Frankfurt</a>
          </Popup>
        </Marker>
        <Marker position={[52.525253079816906, 13.36942808805847]}>
          <Popup>
            <a href="https://photos.app.goo.gl/n5zF9t1YxoUr1nJ66" target="_blank">Berlin</a>
          </Popup>
        </Marker>
        <Marker position={[50.00371141194965, 8.258862269140634]}>
          <Popup>
            <a href="https://photos.app.goo.gl/2muP33D2KXkrd4vN6" target="_blank">Mainz</a>
          </Popup>
        </Marker>
        <Marker position={[50.94341688317175, 6.958666071690769]}>
          <Popup>
            <a href="https://photos.app.goo.gl/D5k9PX1jwwntLw8U7" target="_blank">Cologne</a>
          </Popup>
        </Marker>
        <Marker position={[50.73886221601396, 7.096281512721377]}>
          <Popup>
            <a href="https://photos.app.goo.gl/UrRcXUjJvpBeKTK56" target="_blank">Bonn</a>
          </Popup>
        </Marker>
        <Marker position={[51.21994211665196, 6.794436183343602]}>
          <Popup>
            <a href="https://photos.app.goo.gl/uyk11zdZYh2hp9AX9" target="_blank">Dusseldorf</a>
          </Popup>
        </Marker>
        <Marker position={[50.76827708948651, 6.090714566147234]}>
          <Popup>
            <a href="https://photos.app.goo.gl/dwYyp2NFqDs9Z7Y6A" target="_blank">Aachen</a>
          </Popup>
        </Marker>
        <Marker position={[52.382620651999595, 9.739762946920571]}>
          <Popup>
            <a href="https://photos.app.goo.gl/X3Xx664V7sbxAQJs5" target="_blank">Hannover</a>
          </Popup>
        </Marker>
        <Marker position={[48.78594213492208, 9.18210454058045]}>
          <Popup>
            <a href="https://photos.app.goo.gl/YtSBWJZ6D95Mz6uFA" target="_blank">Stuttgart</a>
          </Popup>
        </Marker>
        <Marker position={[48.35970639682178, 8.968433072386066]}>
          <Popup>
            <a href="https://photos.app.goo.gl/aBsHqsRkAX4QiK4KA" target="_blank">Hechingen</a>
          </Popup>
        </Marker>
        <Marker position={[47.57163558460597, 10.696947435696574]}>
          <Popup>
            <a href="https://photos.app.goo.gl/8sAug5cDvFdcfRUH8" target="_blank">Fuessen</a>
          </Popup>
        </Marker>
        <Marker position={[51.95935110269398, 7.633916049541067]}>
          <Popup>
            <a href="https://photos.app.goo.gl/7MLPEN33vysPWLzV6" target="_blank">Muenster</a>
          </Popup>
        </Marker>
        <Marker position={[52.02912361753239, 8.533675681512621]}>
          <Popup>
            <a href="https://photos.app.goo.gl/ZS9pMNDHpNgYoLDZ6" target="_blank">Bielefeld</a>
          </Popup>
        </Marker>
        <Marker position={[50.972616196936734, 11.038228358196998]}>
          <Popup>
            <a href="https://photos.app.goo.gl/yqHzxdrHvxeRVY7SA" target="_blank">Erfurt</a>
          </Popup>
        </Marker>
        <Marker position={[50.99134089561123, 11.326486400526885]}>
          <Popup>
            <a href="https://photos.app.goo.gl/beWPhEr3sWy9Q14c6" target="_blank">Weimar</a>
          </Popup>
        </Marker>
        <Marker position={[47.996790983751964, 7.840374498195664]}>
          <Popup>
            <a href="https://photos.app.goo.gl/mk4Cq7Y9fmncwLMh9" target="_blank">Freiburg</a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
