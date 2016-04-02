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
    top                        : "20%",
    left                       : "0",
    right                      : "0",
    border                     : "none",
    width                      : "325px",
    height                     : "600px",
    margin                     : "auto",
    background                 : 'transparent',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    padding                    : '20px'
  }
};



module.exports = ModalStyle;
