(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();/**
 * @license
 * Copyright 2021 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */const a=deck.GoogleMapsOverlay,c=deck.TripsLayer,l="https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json",d=1800,p=[[255,0,0],[0,0,255]];function u(){const i=new google.maps.Map(document.getElementById("map"),{center:{lat:40.72,lng:-74},mapId:"fae05836df2dc8bb",tilt:45,zoom:15});let r=0;const s={id:"trips",data:l,getPath:e=>e.path,getTimestamps:e=>e.timestamps,getColor:e=>p[e.vendor],opacity:1,widthMinPixels:2,trailLength:180,currentTime:r,shadowEnabled:!1},o=new a({}),t=()=>{r=(r+1)%d;const e=new c({...s,currentTime:r});o.setProps({layers:[e]}),window.requestAnimationFrame(t)};window.requestAnimationFrame(t),o.setMap(i)}window.initMap=u;