import React, { Component } from 'react';


//class AssetRegistration extends Component {
const hashFnv32a = function (str, asString, seed) {
    /*jshint bitwise:false */
    var i, l,
        hval = (seed === undefined) ? 0x811c9dc5 : seed;

    for (i = 0, l = str.length; i < l; i++) {
      hval ^= str.charCodeAt(i);
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }

    if (asString) {
      // Convert to 8 digit hex string
      return ('0000000' + (hval >>> 0).toString(16)).substr(-8);
    }

    return hval >>> 0;
    {this.props.hval;}
  };

export default hashFnv32a;
