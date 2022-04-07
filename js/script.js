// Created by: Anita Kay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates the volume of an octahedron.
 */
function calculate () {
  // get the edge
  let edge = parseFloat(document.getElementById('edge').value)
  // calculate the volume of the octahedron
  const VOLUME = (Math.sqrt(2)/3)*(edge**3)
  const AREA = 2*Math.sqrt(3)*(edge**2)
  //display the volume of the octahedron
  document.getElementById('answers').innerHTML = 'The volume is ' + VOLUME.toFixed(2) + 'cm<sup>3</sup>, and the surface area is ' + AREA.toFixed(2) + "cm<sup>2</sup>.";
}