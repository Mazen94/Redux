import React from 'react';
import { connect } from 'react-redux'

function Badge(props) {
  return (
    <button type="button" class="btn btn-info">
      Shopping card <span class="badge badge-light">{props.articlesToBuy.length}</span>
    </button>
  )
}

function mapStateToProps(state) {
  return {

    articlesToBuy: state.gallery.articlesToBuy

  }
}

export default connect(mapStateToProps, null)(Badge);

