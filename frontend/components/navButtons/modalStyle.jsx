var Modal = require('react-modal');
var React = require('react');
var PropTypes = React.PropTypes;

var ModalStyle = {
  overlay : {
    position          : 'fixed',
    backgroundColor   : 'rgba(255, 255, 255, 0.95)'
  },
  content : {
    display                    : "inline-block",
    position                   : 'absolute',
    top                        : "-5%",
    left                       : "0",
    right                      : "0",
    border                     : "1px solid red",
    // width                      : "300px",
    height                     : "400px",
    margin                     : "auto",
    background                 : 'transparent',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    padding                    : '20px'
  }
};



module.exports = ModalStyle;
