import React from 'react';

import { connect } from 'react-redux'
import { buy } from '../redux/actions'

function Card(props) {
  return (
    <div class="card mb-4" style={{ width: 300 }}>
      <div class="row no-gutters">
        <div class="col-md-12">
          <img style={{ width: 300, height: 200 }} src="https://micoedward.com/wp-content/uploads/2018/04/Love-your-product.png"></img>
        </div>
        <div class="col-md-12">
          <div class="card-body">
            <h5 class="card-title">{props.article.title}</h5>
            <p class="card-text">{props.article.body}.</p>
            {
              props.articlesToBuy.includes(props.article) ?
                <p>Already in cart</p>
                :
                <button onClick={() => props.buy(props.article)} type="button" class="btn btn-info">ADD TO CART</button>

            }
          </div>
        </div>
      </div>
    </div>

  )
}

function mapStateToProps(state) {
  return {

    articlesToBuy: state.gallery.articlesToBuy

  }
}

export default connect(mapStateToProps, { buy })(Card);