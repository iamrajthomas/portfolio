(this["webpackJsonpiamrajthomas-portfolio"]=this["webpackJsonpiamrajthomas-portfolio"]||[]).push([[30],{1416:function(e,t,a){"use strict";var l=a(22),n=a(0),o=a.n(n),i=a(1378),r=a(1417),c=a(1491),s=a(1308),m=Object(i.compose)(Object(i.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:o.a.createElement("div",{className:"h-full"}),containerElement:o.a.createElement("div",{className:"h-400"}),mapElement:o.a.createElement("div",{className:"h-full"})}),r.withScriptjs,r.withGoogleMap)((function(e){var t=e.defaultCenter,a=e.position,l=e.displayText,n=e.onMarkerClick;return o.a.createElement(r.GoogleMap,{defaultZoom:8,defaultCenter:{lat:(null===t||void 0===t?void 0:t.lat)||-34.397,lng:(null===t||void 0===t?void 0:t.lng)||150.644}},o.a.createElement(r.Marker,{isMarkerShown:!1,position:{lat:(null===a||void 0===a?void 0:a.lat)||-34.397,lng:(null===a||void 0===a?void 0:a.lng)||150.644},onClick:n},o.a.createElement(c.InfoBox,{options:{closeBoxURL:"",enableEventPropagation:!0}},o.a.createElement(s.a,{className:"p-4"},o.a.createElement("p",{className:"whitespace-pre m-0"},l||"Hello World")))))}));t.a=function(e){var t=Object(n.useRef)(null),a=Object(n.useState)(!1),i=Object(l.a)(a,2),r=i[0],c=i[1],s=Object(n.useCallback)((function(){t.current=setTimeout((function(){c(!0)}),3e3)}),[]);return Object(n.useEffect)((function(){return s(),function(){t.current&&clearTimeout(t.current)}}),[s]),o.a.createElement(m,Object.assign({isMarkerShown:r,onMarkerClick:function(){c(!1),s()}},e))}},1975:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(1307),i=a(1416),r=a(48);t.default=function(){var e=r.a.geolocation,t=e.filter((function(t){return t.id===e[0].displayLocId}))[0];return n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"analytics m-sm-30 mt-6"},n.a.createElement("h4",{className:"card-title text-muted mb-4"},"Geo Location"),n.a.createElement(o.a,{container:!0,spacing:0},n.a.createElement(o.a,{item:!0,lg:12,md:12,sm:12,xs:12},n.a.createElement(i.a,{defaultCenter:{lat:null===t||void 0===t?void 0:t.lat,lng:null===t||void 0===t?void 0:t.lng},position:{lat:null===t||void 0===t?void 0:t.lat,lng:null===t||void 0===t?void 0:t.lng},displayText:null===t||void 0===t?void 0:t.loc})))))}}}]);
//# sourceMappingURL=30.c572e763.chunk.js.map