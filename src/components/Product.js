// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component{
  render(){
    return(
      <div className="product-stuff">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}


  var weight_range = [];
  for(var i = 80; i <= 300; i++){
    weight_range.push(i);
  }



Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired
}
