const c=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};c();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let a;function l(){a=new google.maps.Map(document.getElementById("map"),{zoom:2,center:new google.maps.LatLng(2.8,-187.3),mapTypeId:"terrain"});const n=document.createElement("script");n.src="https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js",document.getElementsByTagName("head")[0].appendChild(n)}const d=function(n){for(let o=0;o<n.features.length;o++){const r=n.features[o].geometry.coordinates,i=new google.maps.LatLng(r[1],r[0]);new google.maps.Marker({position:i,map:a})}};window.initMap=l;window.eqfeed_callback=d;